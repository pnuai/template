import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  // ── 1~2번 챕터: 공공 블루 (홈 히어로와 동일한 시원한 머티리얼 블루) ──
  'public-blue': {
    name: 'public-blue',
    label: '공공 블루 (챕터 1~2)',
    tokens: {
      primary: '#1565c0',
      primaryMid: '#1976d2',
      primaryLight: '#1e88e5',
      accent: '#e63312',
      accentSoft: '#ff5533',
      teal: '#6fcbae',
      background: '#f0f4f8',
      cardBg: '#ffffff',
      border: '#dce8f8',
      fontFamily: '"Pretendard", "Noto Sans KR", -apple-system, sans-serif',
      radius: '8px',
      radiusCard: '12px',
      shadow: '0 4px 20px rgba(21, 101, 192, 0.18)',
      shadowCard: '0 2px 14px rgba(21, 101, 192, 0.10)',
      gradientPrimary: 'linear-gradient(135deg, #1565c0 0%, #1976d2 50%, #1e88e5 100%)',
      gradientAccent: 'linear-gradient(160deg, #e63312 0%, #ff7a00 100%)',
      heroBg: 'linear-gradient(135deg, #1565c0 0%, #1976d2 40%, #1e88e5 70%, #1565c0 100%)',
    }
  },

  // ── 3번 챕터: 딥 포레스트 그린 ────────────────────────────────────────
  'teal-green': {
    name: 'teal-green',
    label: '딥 포레스트 (챕터 3)',
    tokens: {
      primary: '#154d30',
      primaryMid: '#256b4a',
      primaryLight: '#3dae72',
      accent: '#b45309',
      accentSoft: '#d97706',
      teal: '#1a8a60',
      background: '#f0f7f3',
      cardBg: '#ffffff',
      border: '#b8d9c6',
      fontFamily: '"Pretendard", "Noto Sans KR", -apple-system, sans-serif',
      radius: '10px',
      radiusCard: '14px',
      shadow: '0 4px 20px rgba(21, 77, 48, 0.12)',
      shadowCard: '0 2px 12px rgba(21, 77, 48, 0.08)',
      gradientPrimary: 'linear-gradient(160deg, #154d30 0%, #256b4a 100%)',
      gradientAccent: 'linear-gradient(160deg, #b45309 0%, #d97706 100%)',
      heroBg: 'linear-gradient(160deg, #154d30 0%, #256b4a 55%, #3dae72 100%)',
    }
  },

  // ── 5~6번 챕터: 로얄 퍼플 + 인디고 ──────────────────────────────────
  'royal-purple': {
    name: 'royal-purple',
    label: '로얄 퍼플 (챕터 5~6)',
    tokens: {
      primary: '#3b0764',
      primaryMid: '#7c3aed',
      primaryLight: '#a78bfa',
      accent: '#ec4899',
      accentSoft: '#f9a8d4',
      teal: '#818cf8',
      background: '#faf5ff',
      cardBg: '#ffffff',
      border: '#ddd6fe',
      fontFamily: '"GmarketSans", "Pretendard", -apple-system, sans-serif',
      radius: '12px',
      radiusCard: '16px',
      shadow: '0 4px 20px rgba(59, 7, 100, 0.12)',
      shadowCard: '0 2px 14px rgba(59, 7, 100, 0.08)',
      gradientPrimary: 'linear-gradient(160deg, #3b0764 0%, #7c3aed 100%)',
      gradientAccent: 'linear-gradient(160deg, #ec4899 0%, #f9a8d4 100%)',
      heroBg: 'linear-gradient(160deg, #3b0764 0%, #6d28d9 55%, #a78bfa 100%)',
    }
  },

  // ── 7~8번 챕터: 따뜻한 버건디 + 로즈골드 ─────────────────────────────
  'burgundy-gold': {
    name: 'burgundy-gold',
    label: '버건디 골드 (챕터 7~8)',
    tokens: {
      primary: '#4c0519',
      primaryMid: '#be123c',
      primaryLight: '#fb7185',
      accent: '#d97706',
      accentSoft: '#fbbf24',
      teal: '#f472b6',
      background: '#fff1f2',
      cardBg: '#ffffff',
      border: '#fecdd3',
      fontFamily: '"Pretendard", "Noto Sans KR", -apple-system, sans-serif',
      radius: '8px',
      radiusCard: '12px',
      shadow: '0 4px 20px rgba(76, 5, 25, 0.10)',
      shadowCard: '0 2px 12px rgba(76, 5, 25, 0.08)',
      gradientPrimary: 'linear-gradient(160deg, #4c0519 0%, #be123c 100%)',
      gradientAccent: 'linear-gradient(160deg, #d97706 0%, #fbbf24 100%)',
      heroBg: 'linear-gradient(160deg, #4c0519 0%, #be123c 55%, #fda4af 100%)',
    }
  },

  // ── 스타트업 / 다크 테마 ──────────────────────────────────────────────
  'startup-gradient': {
    name: 'startup-gradient',
    label: '스타트업 다크',
    tokens: {
      primary: '#6366f1',
      primaryMid: '#8b5cf6',
      primaryLight: '#a78bfa',
      accent: '#f43f5e',
      accentSoft: '#fb7185',
      teal: '#2dd4bf',
      background: '#09090b',
      cardBg: '#18181b',
      border: '#27272a',
      fontFamily: '"GmarketSans", "Pretendard", -apple-system, sans-serif',
      radius: '24px',
      radiusCard: '20px',
      shadow: '0 8px 30px rgba(99, 102, 241, 0.15)',
      shadowCard: '0 4px 20px rgba(0, 0, 0, 0.3)',
      gradientPrimary: 'linear-gradient(160deg, #6366f1 0%, #d946ef 100%)',
      gradientAccent: 'linear-gradient(160deg, #f43f5e 0%, #fb7185 100%)',
      heroBg: 'linear-gradient(160deg, #0f172a 0%, #1e1b4b 60%, #4c1d95 100%)',
    }
  },

  // ── 미니멀 라이트 ─────────────────────────────────────────────────────
  'minimal-light': {
    name: 'minimal-light',
    label: '미니멀 라이트',
    tokens: {
      primary: '#18181b',
      primaryMid: '#3f3f46',
      primaryLight: '#71717a',
      accent: '#f59e0b',
      accentSoft: '#fbbf24',
      teal: '#10b981',
      background: '#ffffff',
      cardBg: '#fafafa',
      border: '#e4e4e7',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      radius: '0px',
      radiusCard: '0px',
      shadow: 'none',
      shadowCard: 'none',
      borderCard: '1px solid #e4e4e7',
      gradientPrimary: 'linear-gradient(160deg, #27272a 0%, #71717a 100%)',
      gradientAccent: 'linear-gradient(160deg, #3f3f46 0%, #f59e0b 100%)',
      heroBg: 'linear-gradient(160deg, #fafafa 0%, #eaeaea 100%)',
    }
  },

  // ── 4번 챕터: 딥 스틸 블루 ──────────────────────────────────────────
  'ocean-cyan': {
    name: 'ocean-cyan',
    label: '딥 스틸 블루 (챕터 4)',
    tokens: {
      primary: '#153d63',
      primaryMid: '#2a6898',
      primaryLight: '#3d8ec4',
      accent: '#1b6ca8',
      accentSoft: '#3d8ec4',
      teal: '#2a7ab8',
      background: '#f0f4f9',
      cardBg: '#ffffff',
      border: '#c2d4e8',
      fontFamily: '"Pretendard", "Noto Sans KR", -apple-system, sans-serif',
      radius: '10px',
      radiusCard: '14px',
      shadow: '0 4px 20px rgba(21, 61, 99, 0.12)',
      shadowCard: '0 2px 12px rgba(21, 61, 99, 0.08)',
      gradientPrimary: 'linear-gradient(160deg, #153d63 0%, #2a6898 100%)',
      gradientAccent: 'linear-gradient(160deg, #1b6ca8 0%, #3d8ec4 100%)',
      heroBg: 'linear-gradient(160deg, #153d63 0%, #2a6898 55%, #3d8ec4 100%)',
    }
  },
};

export const ThemeProvider = ({ children, initialTheme = 'public-blue' }) => {
  const [themeName, setThemeName] = useState(initialTheme);

  // 로컬스토리지나 URL 등을 통해 테마 동기화 가능
  useEffect(() => {
    const savedTheme = localStorage.getItem('brochure-theme');
    if (savedTheme && themes[savedTheme]) {
      setThemeName(savedTheme);
    }
  }, []);

  const changeTheme = (name) => {
    if (themes[name]) {
      setThemeName(name);
      localStorage.setItem('brochure-theme', name);
    }
  };

  const currentTheme = themes[themeName] || themes['public-blue'];

  // Global variables injection to support CSS integration
  useEffect(() => {
    const root = document.documentElement;
    const tokens = currentTheme.tokens;
    
    // Inject core CSS variables on :root dynamically
    Object.keys(tokens).forEach(key => {
      const cssKey = `--theme-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      root.style.setProperty(cssKey, tokens[key]);
    });
    
    root.setAttribute('data-brochure-theme', themeName);
  }, [themeName, currentTheme]);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    // Context가 없는 바깥 환경(예: Docusaurus 기본 페이지 중 context 미바인딩 영역)에서도 
    // 크래시 없이 기본 테마를 제공하도록 안전장치 마련
    return {
      theme: themes['public-blue'],
      changeTheme: () => {}
    };
  }
  return context;
};
