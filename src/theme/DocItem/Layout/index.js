import React, { useEffect } from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import ContentVisibility from '@theme/ContentVisibility';
import { useTheme } from '@site/src/components/BrochureBlocks/ThemeContext';

function DocThemeSync() {
  const { frontMatter } = useDoc();
  const { changeTheme } = useTheme();

  useEffect(() => {
    changeTheme(frontMatter?.theme || 'public-blue');
  }, [frontMatter?.theme]);

  useEffect(() => {
    const savedLayout = localStorage.getItem("brochure-layout");
    const layout = frontMatter?.layout || savedLayout || 'cinema';
    document.documentElement.setAttribute("data-layout", layout);
  }, [frontMatter?.layout]);

  return null;
}

export default function DocItemLayout({ children }) {
  const { metadata } = useDoc();
  return (
    <>
      <DocThemeSync />
      <div style={{ width: '100%', maxWidth: '100%' }}>
        <ContentVisibility metadata={metadata} />
        <DocVersionBanner />
        <div style={{ width: '100%', maxWidth: '100%' }}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
    </>
  );
}
