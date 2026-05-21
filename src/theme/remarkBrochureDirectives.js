const { visit } = require('unist-util-visit');

function remarkBrochureDirectives() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'containerDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'textDirective'
      ) {
        const targetBlocks = ['hero', 'stats', 'cards', 'timeline', 'quote', 'cta', 'chapters', 'roadmap', 'badges', 'chapter-header', 'chapterheader', 'kpi', 'strategy', 'alphagrid', 'panel', 'stepper', 'split', 'datatable'];
        if (!targetBlocks.includes(node.name)) return;

        const data = node.data || (node.data = {});
        const attributes = { ...node.attributes };

        // 1. MDast AST 노드군을 표준 마크다운 YAML 문자열로 완벽히 직렬화 복원
        const toMarkdownText = (n) => {
          if (!n) return '';
          if (n.type === 'text') return n.value;
          if (n.type === 'break') return '\n';  // softbreak → 실제 개행으로 복원
          if (n.type === 'code') return `\n\`\`\`\n${n.value}\n\`\`\`\n`;
          if (n.type === 'inlineCode') return `\`${n.value}\``;
          if (n.type === 'strong') return n.children ? `**${n.children.map(toMarkdownText).join('')}**` : '';
          if (n.type === 'emphasis') return n.children ? `_${n.children.map(toMarkdownText).join('')}_` : '';
          if (n.type === 'delete') return n.children ? `~~${n.children.map(toMarkdownText).join('')}~~` : '';

          if (n.type === 'paragraph') {
            return n.children ? n.children.map(toMarkdownText).join('') + '\n' : '';
          }
          
          if (n.type === 'listItem') {
            const content = n.children ? n.children.map(toMarkdownText).join('').trim() : '';
            const indented = content.split('\n').map((line, idx) => {
              if (idx === 0) return line;
              return '  ' + line; // YAML 목록의 자식 요소들에 2칸 들여쓰기 보정
            }).join('\n');
            return `- ${indented}\n`;
          }
          
          if (n.type === 'list') {
            return n.children ? n.children.map(toMarkdownText).join('') + '\n' : '';
          }
          
          if (n.children) {
            return n.children.map(toMarkdownText).join('');
          }
          return '';
        };

        const rawBody = (node.children ? node.children.map(toMarkdownText).join('') : '').replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim();

        // 2. 메타 속성부와 리스트 목록부를 분리하여 YAML 파싱 수행
        let parsedProps = {};
        let rawItemsList = null;

        // key: value 줄을 직접 파싱 — YAML 파서 없이 안전하게 처리
        const parseMetaLines = (lines) => {
          const props = {};
          for (const line of lines) {
            const m = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)/);
            if (m) props[m[1]] = m[2].trim();
          }
          return props;
        };

        // YAML list (- key: value) 직접 파싱 — js-yaml 없이 안전하게 처리
        const parseYamlList = (lines) => {
          const items = [];
          let current = null;
          for (const line of lines) {
            const listItemMatch = line.match(/^-\s+(.*)/);
            if (listItemMatch) {
              current = {};
              items.push(current);
              const rest = listItemMatch[1].trim();
              const kvMatch = rest.match(/^([a-zA-Z0-9_-]+):\s*(.*)/);
              if (kvMatch) current[kvMatch[1]] = kvMatch[2].trim();
            } else if (current !== null) {
              const indented = line.match(/^\s{2,}([a-zA-Z0-9_-]+):\s*(.*)/);
              if (indented) current[indented[1]] = indented[2].trim();
            }
          }
          return items;
        };

        const toBase64 = (arr) => {
          const jsonStr = JSON.stringify(arr);
          return typeof Buffer !== 'undefined'
            ? Buffer.from(jsonStr, 'utf8').toString('base64')
            : btoa(unescape(encodeURIComponent(jsonStr)));
        };

        if (rawBody) {
          const lines = rawBody.split('\n');

          if (node.name === 'datatable') {
            // datatable: 메타 줄(columns, align, note 등) + "- 셀1 | 셀2 | ..." 행 목록
            const metaLines = [];
            const listLines = [];
            let isListStarted = false;
            for (const line of lines) {
              if (line.trim().startsWith('-')) isListStarted = true;
              if (isListStarted) listLines.push(line);
              else metaLines.push(line);
            }
            parsedProps = parseMetaLines(metaLines);
            // 각 "- 셀1 | 셀2 | ..." 행을 { row: "셀1 | 셀2 | ..." } 객체로 저장
            const rowObjs = listLines
              .map(l => { const m = l.match(/^-\s+(.*)/); return m ? { row: m[1].trim() } : null; })
              .filter(Boolean);
            if (rowObjs.length > 0) parsedProps.items = toBase64(rowObjs);
          } else if (node.name === 'split') {
            // split: left: / right: 섹션 분리
            const metaLines = [];
            let leftLines = [], rightLines = [];
            let currentSection = null;

            for (const line of lines) {
              const trimmed = line.trim();
              if (trimmed === 'left:')  { currentSection = 'left';  continue; }
              if (trimmed === 'right:') { currentSection = 'right'; continue; }
              if (currentSection === 'left')       leftLines.push(line);
              else if (currentSection === 'right') rightLines.push(line);
              else                                 metaLines.push(line);
            }

            parsedProps = parseMetaLines(metaLines);

            if (leftLines.length) {
              const leftObj = parseYamlList(leftLines);
              if (leftObj.length > 0) parsedProps['left-items'] = toBase64(leftObj);
            }
            if (rightLines.length) {
              const rightObj = parseYamlList(rightLines);
              if (rightObj.length > 0) parsedProps['right-items'] = toBase64(rightObj);
            }
          } else {
            // 일반 디렉티브: 메타 줄 + 리스트 줄 분리
            const metaLines = [];
            const listLines = [];
            let isListStarted = false;

            for (const line of lines) {
              if (line.trim().startsWith('-')) isListStarted = true;
              if (isListStarted) listLines.push(line);
              else metaLines.push(line);
            }

            parsedProps = parseMetaLines(metaLines);

            if (listLines.length) {
              const listObj = parseYamlList(listLines);
              if (listObj.length > 0) rawItemsList = listObj;
            }
          }
        }

        // [Base64 안전 격리 전송 설계]
        // items 배열을 Base64 인코딩된 문자열로 치환하여 JSX 직렬화 문제 방지
        if (rawItemsList) {
          try {
            const jsonStr = JSON.stringify(rawItemsList);
            const base64Str = typeof Buffer !== 'undefined'
              ? Buffer.from(jsonStr, 'utf8').toString('base64')
              : btoa(unescape(encodeURIComponent(jsonStr)));
            parsedProps.items = base64Str;
          } catch (err) {
            console.error('[Brochure Directive Parser Base64 Error]:', err);
          }
        }

        // AST 노드의 attributes 자체와 hProperties 모두에 완전히 동일하게 치환 공급
        node.attributes = {
          ...attributes,
          ...parsedProps,
          'data-source-line': node.position?.start?.line
        };

        const nameMap = {
          chapterheader: 'ChapterHeader', 'chapter-header': 'ChapterHeader',
          kpi: 'kpi', strategy: 'strategy', alphagrid: 'alphagrid',
          panel: 'panel', stepper: 'stepper', split: 'split', datatable: 'datatable',
        };
        data.hName = nameMap[node.name] || node.name;
        data.hProperties = {
          ...node.attributes
        };

        // AST children을 props로 완전 위임하므로 노드 내부 children은 비워 중복 렌더링 방지
        node.children = [];
      }
    });
  };
}

module.exports = remarkBrochureDirectives;
