import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ThemeProvider, useTheme } from '@site/src/components/BrochureBlocks/ThemeContext';

const COLORS = [
  '#1565c0', '#1976d2', '#1e88e5', '#2196f3',
  '#1976d2', '#1565c0', '#1e88e5', '#2196f3',
  '#1565c0', '#1976d2',
];

function HomeResetTheme() {
  const { changeTheme } = useTheme();
  useEffect(() => {
    changeTheme('public-blue');
  }, []);
  return null;
}

export default function Home() {
  const adminUrl = useBaseUrl('/admin/');
  const { siteConfig } = useDocusaurusContext();
  const navItems = siteConfig.customFields?.navItems || [];
  const firstDocLink = siteConfig.customFields?.firstDocLink || (navItems[0]?.to ?? '/docs/');
  const CHAPTERS = navItems.map((item, i) => ({
    num: item.num || String(i + 1).padStart(2, '0'),
    label: item.label,
    path: item.to,
    desc: item.desc || '',
  }));

  return (
    <ThemeProvider initialTheme="public-blue">
      <HomeResetTheme />
      <Layout title="PNU AI·SW 중심대학 브로슈어" description="부산대학교 AI융합교육원 브로슈어 포털">
        <main style={{ background: '#f0f4f8', minHeight: '100vh' }}>

          {/* 히어로 */}
          <div style={{
            background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 40%, #1e88e5 70%, #1565c0 100%)',
            padding: '80px 10% 72px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* 데코 원 */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', width: '600px', height: '600px', top: '-200px', right: '-60px', borderRadius: '50%', background: '#90caf9', opacity: 0.18, filter: 'blur(90px)' }} />
              <div style={{ position: 'absolute', width: '400px', height: '400px', bottom: '-120px', left: '-40px', borderRadius: '50%', background: '#64b5f6', opacity: 0.15, filter: 'blur(80px)' }} />
            </div>

            <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontSize: '12px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.7)', padding: '5px 14px',
                border: '1px solid rgba(255,255,255,0.2)', borderRadius: '20px',
                background: 'rgba(255,255,255,0.08)', marginBottom: '24px',
              }}>
                부산대학교 AI융합교육원
              </div>
              <h1 style={{
                fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: '900', lineHeight: '1.15',
                letterSpacing: '-0.04em', color: '#ffffff', margin: '0 0 20px', wordBreak: 'keep-all',
              }}>
                AI·SW 중심대학<br />브로슈어 포털
              </h1>
              <p style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.35rem)', lineHeight: '1.7',
                color: 'rgba(255,255,255,0.8)', margin: '0 0 36px', wordBreak: 'keep-all',
                maxWidth: '640px',
              }}>
                부산대학교 SW중심대학 사업의 비전과 성과를 한눈에 확인하세요.<br />
                챕터별로 정리된 {CHAPTERS.length}개 분야를 탐색할 수 있습니다.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link to={firstDocLink} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#ffffff', color: '#1565c0',
                  fontWeight: '800', fontSize: '15px', padding: '13px 28px',
                  borderRadius: '9999px', textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}>
                  브로슈어 보기 →
                </Link>
                <a href={adminUrl} target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: 'rgba(255,255,255,0.12)', color: '#ffffff',
                  fontWeight: '700', fontSize: '14px', padding: '13px 24px',
                  borderRadius: '9999px', textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.28)',
                }}>
                  관리 페이지
                </a>
              </div>
            </div>
          </div>

          {/* 챕터 그리드 */}
          <div style={{ padding: '56px 10%' }}>
            <div style={{ marginBottom: '36px' }}>
              <div style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#5b8ad4', marginBottom: '6px' }}>
                Contents
              </div>
              <div style={{ fontSize: '28px', fontWeight: '900', color: '#1565c0', letterSpacing: '-0.02em' }}>
                {CHAPTERS.length}개 챕터 구성
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
            }}>
              {CHAPTERS.map((ch, i) => (
                <Link key={ch.num} to={ch.path} style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: '#ffffff',
                    border: '1px solid #dce8f8',
                    borderTop: `4px solid ${COLORS[i]}`,
                    borderRadius: '14px',
                    padding: '28px 24px',
                    boxShadow: '0 2px 12px rgba(21,101,192,0.07)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    height: '100%',
                    boxSizing: 'border-box',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(21,101,192,0.16)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 12px rgba(21,101,192,0.07)'; }}
                  >
                    <div style={{
                      fontSize: '11px', fontWeight: '900', letterSpacing: '0.12em',
                      color: COLORS[i], marginBottom: '10px', textTransform: 'uppercase',
                    }}>
                      CHAPTER {ch.num}
                    </div>
                    <div style={{
                      fontSize: '20px', fontWeight: '800', color: '#1a3a6e',
                      marginBottom: '10px', letterSpacing: '-0.01em',
                    }}>
                      {ch.label}
                    </div>
                    <div style={{
                      fontSize: '13px', color: '#5b7fa8', lineHeight: '1.6',
                    }}>
                      {ch.desc}
                    </div>
                    <div style={{
                      marginTop: '20px', fontSize: '13px', fontWeight: '700',
                      color: COLORS[i], display: 'flex', alignItems: 'center', gap: '4px',
                    }}>
                      자세히 보기 →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 하단 통계 배너 */}
          <div style={{
            margin: '0 10% 56px',
            background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 60%, #1e88e5 100%)',
            borderRadius: '20px',
            padding: '48px 56px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
              <div style={{ position: 'absolute', width: '400px', height: '400px', top: '-100px', right: '-60px', borderRadius: '50%', background: '#90caf9', opacity: 0.12, filter: 'blur(70px)' }} />
            </div>
            {[
              { value: '192명', label: 'SW학과 정원', sub: '2019년 대비 43% 증원' },
              { value: '8개', label: '전공 특화 트랙', sub: '클라우드·보안·IoT 등' },
              { value: '14개', label: 'SW-X 융합트랙', sub: '전 학문 분야 융합 운영' },
              { value: '21,302㎡', label: '전용 교육 시설', sub: 'IT관·경암공학관 신축' },
            ].map((stat, i) => (
              <div key={i} style={{
                textAlign: 'center', padding: '0 20px',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                position: 'relative', zIndex: 2,
              }}>
                <div style={{ fontSize: '36px', fontWeight: '900', color: '#fff', letterSpacing: '-0.02em', lineHeight: '1.1', marginBottom: '6px' }}>{stat.value}</div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.85)', marginBottom: '4px' }}>{stat.label}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>{stat.sub}</div>
              </div>
            ))}
          </div>

        </main>
      </Layout>
    </ThemeProvider>
  );
}
