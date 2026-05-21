import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ThemeProvider } from '@site/src/components/BrochureBlocks/ThemeContext';
import styles from './chapter.module.css';

const CHAPTERS = [
  { num: '01', label: '사업소개',  path: '/chapter/01' },
  { num: '02', label: '교육목표',  path: '/chapter/02' },
  { num: '03', label: '교육혁신',  path: '/chapter/03' },
  { num: '04', label: '환경개선',  path: '/chapter/04' },
  { num: '05', label: '전공교육',  path: '/chapter/05' },
  { num: '06', label: '융합교육',  path: '/chapter/06' },
  { num: '07', label: '성과확산',  path: '/chapter/07' },
  { num: '08', label: '일반현황',  path: '/chapter/08' },
];

export default function ChapterLayout({ chapterNum, title, description, theme = 'public-blue', children }) {
  const currentIdx = CHAPTERS.findIndex(c => c.num === chapterNum);
  const prev = currentIdx > 0 ? CHAPTERS[currentIdx - 1] : null;
  const next = currentIdx < CHAPTERS.length - 1 ? CHAPTERS[currentIdx + 1] : null;

  // children 배열에서 첫 번째(HeroSection)는 full-width, 나머지는 inner container에
  const childArray = React.Children.toArray(children);
  const heroChild = childArray[0];
  const restChildren = childArray.slice(1);

  return (
    <ThemeProvider initialTheme={theme}>
      <Layout title={`${chapterNum}. ${title}`} description={description}>
        <main className={styles.main}>
          {/* Hero — full width */}
          {heroChild}

          {/* 나머지 섹션 — max-width container */}
          <div className={styles.mainInner}>
            {restChildren}

            {/* 챕터 이전/다음 네비 */}
            <div className={styles.chapterNav}>
              <div className={styles.chapterNavInner}>
                {prev ? (
                  <Link to={prev.path} className={styles.navPrev}>
                    <span className={styles.navDir}>← 이전</span>
                    <span className={styles.navNum}>{prev.num}</span>
                    <span className={styles.navTitle}>{prev.label}</span>
                  </Link>
                ) : (
                  <div />
                )}
                {next ? (
                  <Link to={next.path} className={styles.navNext}>
                    <span className={styles.navDir}>다음 →</span>
                    <span className={styles.navNum}>{next.num}</span>
                    <span className={styles.navTitle}>{next.label}</span>
                  </Link>
                ) : (
                  <Link to="/" className={styles.navNext}>
                    <span className={styles.navDir}>처음으로 →</span>
                    <span className={styles.navNum}>00</span>
                    <span className={styles.navTitle}>사업소개로 돌아가기</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </ThemeProvider>
  );
}
