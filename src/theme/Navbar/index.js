import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useTheme } from '@site/src/components/BrochureBlocks/ThemeContext';
import styles from './navbar.module.css';

export default function Navbar() {
  const location = useLocation();
  const logoSrc = useBaseUrl('img/logo.png');
  const adminUrl = useBaseUrl('/admin/');
  const [menuOpen, setMenuOpen] = useState(false);
  const { siteConfig } = useDocusaurusContext();
  const navItems = siteConfig.customFields?.navItems || [];
  const { theme } = useTheme();

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const isActive = (to) => {
    const p = location.pathname.replace(/\/$/, '');
    const t = to.replace(/\/$/, '');
    return p === t || p.startsWith(t + '/');
  };

  const navStyle = {
    background: theme.tokens.gradientPrimary,
    boxShadow: `0 2px 16px ${theme.tokens.shadow || 'rgba(0,0,0,0.2)'}`,
  };

  const mobileMenuStyle = {
    background: theme.tokens.primary,
  };

  const actionBtnStyle = {
    color: theme.tokens.primaryMid,
  };

  return (
    <nav className={styles.navbar} style={navStyle}>
      <div className={styles.inner}>
        {/* 로고 */}
        <Link to="/" className={styles.logo}>
          <img src={logoSrc} alt="PNU Logo" className={styles.logoImg} />
        </Link>

        {/* 챕터 탭 — 데스크톱 */}
        <div className={styles.tabs}>
          {navItems.map(({ num, label, to }) => (
            <Link
              key={to}
              to={to}
              className={`${styles.tab} ${isActive(to) ? styles.tabActive : ''}`}
            >
              <span className={styles.tabNum}>{num}</span>
              <span className={styles.tabLabel}>{label}</span>
            </Link>
          ))}
        </div>

        {/* 구분선 */}
        <div className={styles.divider} />

        {/* 우측 링크 */}
        <div className={styles.actions}>
          <a href={adminUrl} className={styles.actionBtn} style={actionBtnStyle} target="_blank" rel="noopener noreferrer">
            관리
          </a>
          <a href="https://pnuai.github.io" className={styles.actionBtn} style={actionBtnStyle} target="_blank" rel="noopener noreferrer">
            허브 홈
          </a>
        </div>

        {/* 모바일 햄버거 */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="메뉴"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>

      {/* 모바일 드롭다운 */}
      {menuOpen && (
        <div className={styles.mobileMenu} style={mobileMenuStyle}>
          {navItems.map(({ num, label, to }) => (
            <Link
              key={to}
              to={to}
              className={`${styles.mobileTab} ${isActive(to) ? styles.mobileTabActive : ''}`}
            >
              <span className={styles.tabNum}>{num}</span> {label}
            </Link>
          ))}
          <div className={styles.mobileDivider} />
          <a href={adminUrl} className={styles.mobileAction} target="_blank" rel="noopener noreferrer">관리 페이지</a>
          <a href="https://pnuai.github.io" className={styles.mobileAction} target="_blank" rel="noopener noreferrer">허브 홈으로</a>
        </div>
      )}
    </nav>
  );
}
