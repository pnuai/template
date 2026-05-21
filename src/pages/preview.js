import React, { useState, useEffect, useMemo, useRef } from 'react';
import Layout from '@theme/Layout';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@theme/MDXComponents';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import remarkBrochureDirectives from '../theme/remarkBrochureDirectives';
import rehypeRaw from 'rehype-raw';
import Head from '@docusaurus/Head';
import { ThemeProvider } from '../components/BrochureBlocks/ThemeContext';

// MDX 전처리 함수: JSX style object를 표준 HTML style string으로 변환하고, style 태그 정화
function preprocessMDX(rawContent) {
  if (!rawContent) return { content: '', css: '' };

  let processed = rawContent;
  let customCSS = '';

  // 1. MDX 스타일 추출 및 제거: <style>{` ... `}</style> (줄 바꿈 수 보존)
  const mdxStyleRegex = /<style(?:\s+[^>]*)?>\s*\{\s*`([\s\S]*?)`\s*\}\s*<\/style>/gi;
  processed = processed.replace(mdxStyleRegex, (match, cssContent) => {
    customCSS += cssContent + '\n';
    const linesCount = match.split('\n').length;
    return '\n'.repeat(linesCount - 1);
  });

  // 2. 일반 스타일 추출 및 제거: <style> ... </style> (줄 바꿈 수 보존)
  const standardStyleRegex = /<style(?:\s+[^>]*)?>([\s\S]*?)<\/style>/gi;
  processed = processed.replace(standardStyleRegex, (match, cssContent) => {
    let styleText = cssContent.trim();
    // 혹시 {` `} 형태로 한 번 더 감싸져 있는지 확인
    if (styleText.startsWith('{`') && styleText.endsWith('`}')) {
      styleText = styleText.substring(2, styleText.length - 2).trim();
    }
    customCSS += styleText + '\n';
    const linesCount = match.split('\n').length;
    return '\n'.repeat(linesCount - 1);
  });

  // 3. React JSX style={{...}} 속성을 표준 HTML style="..."로 변환
  processed = processed.replace(/style=\{\{([^}]+)\}\}/g, (attrMatch, styleObjContent) => {
    try {
      const declarations = styleObjContent.split(',').map(decl => {
        const colonIdx = decl.indexOf(':');
        if (colonIdx === -1) return '';
        const key = decl.substring(0, colonIdx).trim();
        const val = decl.substring(colonIdx + 1).trim().replace(/^['"`]|['"`]$/g, '');
        
        // camelCase -> kebab-case (예: marginTop -> margin-top)
        const kebabKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        return `${kebabKey}: ${val}`;
      }).filter(Boolean).join('; ');
      
      return `style="${declarations}"`;
    } catch (e) {
      console.error('Failed to parse JSX style attribute:', styleObjContent, e);
      return attrMatch;
    }
  });

  // 4. React JSX className="..." 속성을 표준 HTML class="..."로 변환
  processed = processed.replace(/className=/g, 'class=');

  return {
    content: processed,
    css: customCSS
  };
}

// Custom HAST-level AST line number injection plugin
// rehype-raw가 빌드한 HTML AST 노드를 돌며 핵심 텍스트 블록에 data-source-line 속성을 주입
const rehypeInjectLines = () => {
  return (tree) => {
    const visit = (node) => {
      if (node.type === 'element') {
        const startLine = node.position?.start?.line;
        const endLine = node.position?.end?.line;
        
        // 시각적 편집 및 이동의 대상이 되는 핵심 텍스트 블록만 한정 매핑하여 레이아웃 깨짐을 완전히 차단
        const targetBlocks = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'blockquote'];
        if (startLine !== undefined && targetBlocks.includes(node.tagName)) {
          if (!node.properties) node.properties = {};
          node.properties['data-source-line'] = startLine;
          node.properties['data-source-line-end'] = endLine;
          node.properties['data-node-id'] = `node-${startLine}-${node.tagName}`;
          node.properties['data-editable'] = 'true';
        }
      }
      if (node.children) {
        node.children.forEach(visit);
      }
    };
    visit(tree);
  };
};

export default function PreviewPage() {
  const [rawContent, setRawContent] = useState('');
  const [theme, setTheme] = useState('blue');
  const [layout, setLayout] = useState('standard');
  
  const rawContentRef = useRef(rawContent);
  useEffect(() => {
    rawContentRef.current = rawContent;
  }, [rawContent]);

  // rehype-raw가 태그를 소문자로 변환할 것에 대비하여 컴포넌트 맵 보강 및 custom block wrapper 적용
  const componentMap = useMemo(() => {
    const base = { ...MDXComponents };
    const extended = {};
    
    const wrapWithLineInfo = (Component, componentName) => {
      if (typeof Component !== 'function') return Component;
      return (props) => {
        const sourceLine = props['data-source-line'] || props.dataSourceLine;
        return (
          <div 
            className={`bb-block-wrapper bb-block-wrapper-${componentName}`}
            data-source-line={sourceLine} 
            style={{ display: 'contents' }}
          >
            <Component {...props} />
          </div>
        );
      };
    };

    const brochureKeys = [
      'hero', 'stats', 'cards', 'timeline', 'quote', 'cta',
      'chapters', 'roadmap', 'badges', 'kpi', 'strategy',
      'alphagrid', 'panel', 'stepper', 'split', 'chapterheader',
      'herosection', 'statssection', 'cardssection', 'timelinesection',
      'quotesection', 'ctasection', 'chapterssection', 'roadmapsection',
      'badgessection', 'chapterheadersection', 'kpisection', 'strategysection',
      'alphagridsection', 'panelsection', 'steppersection', 'splitsection'
    ];

    Object.keys(base).forEach(key => {
      const lowerKey = key.toLowerCase();
      const comp = base[key];
      if (brochureKeys.includes(lowerKey)) {
        extended[lowerKey] = wrapWithLineInfo(comp, lowerKey);
        extended[key] = extended[lowerKey];
      } else {
        extended[lowerKey] = comp;
        extended[key] = comp;
      }
    });

    // Docusaurus의 커스텀 Heading 컴포넌트를 표준 HTML 태그로 덮어씌워
    // `.anchor` 클래스 생성을 방지하고 useTOCHighlight 재귀 호출 크래시를 원천 차단
    extended.h1 = 'h1';
    extended.h2 = 'h2';
    extended.h3 = 'h3';
    extended.h4 = 'h4';
    extended.h5 = 'h5';
    extended.h6 = 'h6';
    
    return extended;
  }, []);

  useEffect(() => {
    console.log("%c[PREVIEW] Iframe initialized. Loading page layout...", "color: #10b981; font-weight: bold;");

    // 초기 로컬 스토리지의 레이아웃 읽기 및 동기화
    const savedLayout = localStorage.getItem("brochure-layout") || "standard";
    setLayout(savedLayout);
    document.documentElement.setAttribute("data-layout", savedLayout);

    let isScrollingFromParent = false;
    let scrollTimeout = null;

    const handleMessage = (event) => {
      if (event.data && typeof event.data === 'object') {
        // [1] MDX 실시간 마크다운 데이터 업데이트 수신
        if (event.data.type === 'MDX_UPDATE') {
          console.log("%c[PREVIEW] Inbound message: MDX_UPDATE received. Length: " + event.data.content.length, "color: #3b82f6;");
          const pureMDX = event.data.content.replace(/^---[\s\S]*?---\s*/, '');
          setRawContent(pureMDX);
          if (event.data.theme) setTheme(event.data.theme);
          if (event.data.layout) {
            setLayout(event.data.layout);
            document.documentElement.setAttribute("data-layout", event.data.layout);
          }
        } 
        // [2] 현재 편집 중인 라인 하이라이트 지시 수신 (HIGHLIGHT_LINE)
        else if (event.data.type === 'HIGHLIGHT_LINE') {
          const line = event.data.line;
          console.log(`%c[PREVIEW] Inbound message: HIGHLIGHT_LINE -> target line: ${line}`, "color: #a855f7;");
          
          const elements = Array.from(document.querySelectorAll('[data-source-line]'));
          let bestMatch = null;
          let minDiff = Infinity;
          
          elements.forEach(el => {
            const elLine = parseInt(el.getAttribute('data-source-line'), 10);
            const diff = line - elLine;
            if (diff >= 0 && diff < minDiff) {
              minDiff = diff;
              bestMatch = el;
            }
          });
          
          // 기존 하이라이트 제거 후 타겟 요소 펄스 링 적용
          document.querySelectorAll('.active-block-highlight').forEach(el => {
            el.classList.remove('active-block-highlight');
          });
          
          if (bestMatch) {
            console.log(`%c[PREVIEW] Target element found: <${bestMatch.tagName.toLowerCase()}> on line ${bestMatch.getAttribute('data-source-line')}. Applying highlight & smooth centering scroll.`, "color: #a855f7; font-style: italic;");
            bestMatch.classList.add('active-block-highlight');
            
            bestMatch.scrollIntoView({
              behavior: 'smooth',
              block: 'center', // 뷰포트 정중앙으로 부드럽게 가져와 초점 집중
              inline: 'nearest'
            });
          } else {
            console.log("%c[PREVIEW] No matching element found for highlight.", "color: #ef4444;");
          }
        }
      }
    };

    window.addEventListener('message', handleMessage);

    let clickTimeout = null;

    // [3] 프리뷰 요소 클릭 시 소스 에디터의 해당 마크다운 위치로 순간 이동 (Capturing Phase)
    const handleGlobalClick = (e) => {
      // 자신 또는 부모 중 [data-source-line]이 있는 가장 가까운 요소를 탐색
      const target = e.target.closest('[data-source-line]');
      if (target) {
        if (target.getAttribute('contenteditable') === 'true' || document.querySelector('[contenteditable="true"]')) {
          return;
        }

        e.preventDefault();
        e.stopPropagation();
        
        const startLine = parseInt(target.getAttribute('data-source-line'), 10);
        let line = startLine;
        
        // 클릭된 실제 엘리먼트의 텍스트가 있다면, 더 정확한 행을 추적하기 위해 마크다운 검색 수행
        const clickedText = e.target.innerText ? e.target.innerText.trim() : '';
        const rawContentVal = rawContentRef.current;
        if (clickedText && rawContentVal) {
          const lines = rawContentVal.split('\n');
          // 시작 라인(startLine)부터 아래로 25줄 이내 검색
          for (let i = startLine - 1; i < Math.min(startLine + 25, lines.length); i++) {
            if (lines[i] && lines[i].includes(clickedText)) {
              line = i + 1;
              break;
            }
          }
        }
        
        // 더블클릭 시 포커스 빼앗김을 막기 위해 단일 클릭을 200ms 유예 디바운싱
        if (clickTimeout) clearTimeout(clickTimeout);
        clickTimeout = setTimeout(() => {
          console.log(`%c[PREVIEW] Click captured on <${e.target.tagName.toLowerCase()}> (Line ${line}) -> posting JUMP_TO_LINE`, "color: #eab308; font-weight: bold;");
          window.parent.postMessage({
            type: 'JUMP_TO_LINE',
            line: line
          }, '*');
          clickTimeout = null;
        }, 200);
      }
    };
    window.addEventListener('click', handleGlobalClick, true);

    // [4] 더블클릭 시 임시 Plain Text 편집 모드 활성화 (IME-Guarded, 누적 리스너 원천 차단)
    const handleGlobalDblClick = (e) => {
      // 자신 또는 부모 중 [data-source-line]이 있는 가장 가까운 요소를 탐색
      const sourceBlock = e.target.closest('[data-source-line]');
      if (sourceBlock) {
        // 이미 에디터 모드인 경우 통과
        if (e.target.getAttribute('contenteditable') === 'true') return;
        
        // 클릭된 타겟 텍스트가 비어있으면 통과
        const originalTextText = e.target.innerText ? e.target.innerText.trim() : '';
        if (!originalTextText) return;
        
        // 더블클릭 감지 시 대기 중인 클릭 이동 즉시 취소 (포커스 유실 방지)
        if (clickTimeout) {
          clearTimeout(clickTimeout);
          clickTimeout = null;
        }

        e.preventDefault();
        e.stopPropagation();
        
        const target = e.target; // 더블클릭된 바로 그 텍스트 엘리먼트!
        
        // line 번호 찾기
        const startLine = parseInt(sourceBlock.getAttribute('data-source-line'), 10);
        let line = startLine;
        
        const rawContentVal = rawContentRef.current;
        if (rawContentVal) {
          const lines = rawContentVal.split('\n');
          // 시작 라인(startLine)부터 아래로 25줄 이내 검색
          for (let i = startLine - 1; i < Math.min(startLine + 25, lines.length); i++) {
            if (lines[i] && lines[i].includes(originalTextText)) {
              line = i + 1;
              break;
            }
          }
        }
        
        target.setAttribute('contenteditable', 'true');
        target.focus();
        
        // 더블클릭해서 인라인 편집을 시작할 때도 소스 에디터가 해당 위치로 즉시 스무스 스크롤 정렬되도록 전송 (포커스는 스틸하지 않음)
        window.parent.postMessage({
          type: 'JUMP_TO_LINE',
          line: line,
          focusEditor: false
        }, '*');
        
        const originalText = target.innerText;
        console.log(`%c[PREVIEW] Double-click detected. Inline edit mode enabled on line ${line} for "${originalText}"`, "color: #3b82f6; font-weight: bold;");
        
        // 엔터키 및 ESC키 감지 바인딩
        const handleKeyDown = (keyEvent) => {
          if (keyEvent.key === 'Enter' && !keyEvent.shiftKey) {
            keyEvent.preventDefault();
            target.blur();
          } else if (keyEvent.key === 'Escape') {
            target.innerText = originalText;
            target.blur();
          }
        };

        // 텍스트 붙여넣기 시 HTML 서식 지우고 순수 텍스트만 주입 (보안 및 서식 유지)
        const handlePaste = (pasteEvent) => {
          pasteEvent.preventDefault();
          const text = pasteEvent.clipboardData.getData('text/plain');
          document.execCommand('insertText', false, text);
        };

        // 포커스 아웃 시 임시 편집 모드 릴리즈 및 갱신 전송 (사용 후 리스너 완벽 청소)
        const handleSave = () => {
          target.removeAttribute('contenteditable');
          target.removeEventListener('blur', handleSave);
          target.removeEventListener('keydown', handleKeyDown);
          target.removeEventListener('paste', handlePaste);
          
          const newText = target.innerText.trim();
          const cleanOriginal = originalText.trim();
          console.log(`%c[PREVIEW] handleSave called. original: "${cleanOriginal}", new: "${newText}"`, "color: #3b82f6;");
          
          if (newText && newText !== cleanOriginal) {
            console.log(`%c[PREVIEW] Save detected. Posting INLINE_TEXT_UPDATE to parent: "${newText}" on line ${line}`, "color: #3b82f6; font-weight: bold;");
            window.parent.postMessage({
              type: 'INLINE_TEXT_UPDATE',
              line: line,
              cleanOriginal: cleanOriginal,
              newText: newText
            }, '*');
          } else {
            // 미변경 혹은 비어있으면 원문 복구
            target.innerText = originalText;
          }
        };
        
        target.addEventListener('blur', handleSave);
        target.addEventListener('keydown', handleKeyDown);
        target.addEventListener('paste', handlePaste);
      }
    };
    window.addEventListener('dblclick', handleGlobalDblClick);

    if (window.parent !== window) {
      console.log("%c[PREVIEW] Dispatching PREVIEW_READY to parent window...", "color: #10b981; font-weight: bold;");
      window.parent.postMessage({ type: 'PREVIEW_READY' }, '*');
    }

    return () => {
      console.log("%c[PREVIEW] Cleaning up iframe event listeners.", "color: #ef4444;");
      window.removeEventListener('message', handleMessage);
      window.removeEventListener('click', handleGlobalClick, true);
      window.removeEventListener('dblclick', handleGlobalDblClick);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  // MDX 내용 전처리 적용 (인라인 스타일 변환 및 커스텀 스타일 추출)
  const { content, css: extractedCSS } = useMemo(() => preprocessMDX(rawContent), [rawContent]);

  return (
    <Layout noFooter noNavbar title="Live Studio Preview">
      <Head>
        {/* 외부 폰트 명시적 로드 */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;800&display=swap" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css" />
        
        <style>{`
          /* 지마켓 산스 강제 주입 */
          @font-face {
              font-family: 'GmarketSans';
              src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GmarketSansLight.woff') format('woff');
              font-weight: 300;
          }
          @font-face {
              font-family: 'GmarketSans';
              src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GmarketSansMedium.woff') format('woff');
              font-weight: 500;
          }
          @font-face {
              font-family: 'GmarketSans';
              src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GmarketSansBold.woff') format('woff');
              font-weight: 700;
          }

           /* Docusaurus 글로벌 테마 레이아웃 요소 강제 은닉 (사이드바, 네비바, 푸터 제거) */
          .navbar,
          .theme-doc-toc,
          .theme-doc-sidebar,
          .footer,
          aside,
          header {
            display: none !important;
          }

          /* 네비게이션바가 차지하던 상단 패딩 여백 회수 */
          .main-wrapper,
          #__docusaurus {
            padding-top: 0 !important;
            margin-top: 0 !important;
          }

          /* 어드민 스튜디오 전용 고품격 디자이너 워크벤치 캔버스 */
          body { 
            background-color: #cbd5e1 !important; 
            background-image: radial-gradient(#94a3b8 1.2px, transparent 1.2px) !important;
            background-size: 20px 20px !important;
            font-family: 'Pretendard', 'Noto Sans KR', sans-serif !important;
            margin: 0;
            padding: 0;
          }

          .live-preview-container {
            min-height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 40px 20px;
            box-sizing: border-box;
          }

          /* 실제 브로슈어의 Docusaurus 레이아웃 모사 */
          .preview-main-wrapper {
            display: flex;
            justify-content: center;
            width: 100%;
          }

          .preview-container {
            display: flex;
            justify-content: center;
            width: 100%;
            max-width: 100%;
          }

          .preview-main {
            display: flex;
            justify-content: center;
            width: 100%;
          }

          .theme-doc-markdown {
            font-family: 'Pretendard', 'Noto Sans KR', sans-serif !important;
            background: white !important;
            border: 1px solid #cbd5e1 !important;
            box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.15) !important;
            transition: max-width 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
            width: 100% !important;
            max-width: var(--content-max-width) !important; /* 기본 최댓값 강제 지정 */
            padding: 48px !important;
            box-sizing: border-box !important;
          }

          /* 현재 편집 영역 포커스 실시간 아웃라인 & 펄스 링 효과 */
          .active-block-highlight {
            outline: 2px solid #2563eb !important;
            outline-offset: 6px !important;
            border-radius: 6px !important;
            background: rgba(37, 99, 235, 0.05) !important;
            box-shadow: 0 0 0 6px rgba(37, 99, 235, 0.15) !important;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
            animation: highlight-pulse 2s infinite ease-in-out !important;
          }

          /* 시각적 인라인 편집기 가이드라인 및 호버 효과 */
          [data-source-line] h1,
          [data-source-line] h2,
          [data-source-line] h3,
          [data-source-line] h4,
          [data-source-line] h5,
          [data-source-line] h6,
          [data-source-line] p,
          [data-source-line] li,
          [data-source-line] blockquote,
          [data-source-line] span,
          [data-editable="true"] {
            position: relative;
            cursor: text;
            transition: background-color 0.2s, box-shadow 0.2s !important;
          }
          [data-source-line] h1:hover,
          [data-source-line] h2:hover,
          [data-source-line] h3:hover,
          [data-source-line] h4:hover,
          [data-source-line] h5:hover,
          [data-source-line] h6:hover,
          [data-source-line] p:hover,
          [data-source-line] li:hover,
          [data-source-line] blockquote:hover,
          [data-source-line] span:hover,
          [data-editable="true"]:hover {
            background-color: rgba(37, 99, 235, 0.03) !important;
            box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.05) !important;
            outline: 1px dashed rgba(37, 99, 235, 0.3) !important;
            border-radius: 4px;
          }
          [contenteditable="true"] {
            background-color: white !important;
            outline: 2px solid #2563eb !important;
            outline-offset: 4px !important;
            box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.1), 0 4px 6px -4px rgba(37, 99, 235, 0.1) !important;
            border-radius: 6px !important;
            padding: 4px 8px !important;
            z-index: 10;
          }

          @keyframes highlight-pulse {
            0% {
              box-shadow: 0 0 0 6px rgba(37, 99, 235, 0.15) !important;
            }
            50% {
              box-shadow: 0 0 0 12px rgba(37, 99, 235, 0.3) !important;
            }
            100% {
              box-shadow: 0 0 0 6px rgba(37, 99, 235, 0.15) !important;
            }
          }
        `}</style>
      </Head>

      {/* 추출된 마크다운 개별 커스텀 CSS 동적 주입 (Body 직접 주입으로 즉시 동기화 보장) */}
      {extractedCSS && (
        <style dangerouslySetInnerHTML={{ __html: extractedCSS }} />
      )}

      <div className="live-preview-container">
        <div className="preview-main-wrapper">
          <div className="preview-container">
            <main className="preview-main">
              <article className="theme-doc-markdown">
                <ThemeProvider initialTheme={theme}>
                  <MDXProvider components={componentMap}>
                    <ReactMarkdown 
                      key={content}
                      remarkPlugins={[remarkGfm, remarkDirective, remarkBrochureDirectives]}
                      rehypePlugins={[
                        [rehypeRaw, {
                          tagNames: [
                            'div', 'span', 'style', 'section', 'article',
                            'highlight', 'text', 'columns', 'col', 'column', 'callout', 'herobutton',
                            'hero', 'stats', 'cards', 'timeline', 'quote', 'cta',
                            'chapters', 'roadmap', 'badges',
                            'kpi', 'strategy', 'alphagrid', 'panel', 'stepper', 'split',
                            'chapterheader', 'ChapterHeader'
                          ]
                        }],
                        rehypeInjectLines
                      ]}
                      components={componentMap}
                    >
                      {content}
                    </ReactMarkdown>
                  </MDXProvider>
                </ThemeProvider>
              </article>
            </main>
          </div>
        </div>
      </div>
      
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: '#0f172a',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '30px',
        fontSize: '11px',
        fontWeight: 'bold',
        zIndex: 1000,
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%' }}></span>
        PNU STUDIO ENGINE v4
      </div>
    </Layout>
  );
}
