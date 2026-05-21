import React, { useState, useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const LAYOUTS = [
  { id: "slim", label: "리플렛", desc: "Slim / 전단지", width: "750px" },
  { id: "compact", label: "B5 리플렛", desc: "Compact", width: "960px" },
  { id: "standard", label: "A4 브로슈어", desc: "Standard", width: "1260px" },
  { id: "poster", label: "A3 포스터", desc: "Poster", width: "1560px" },
  { id: "cinema", label: "시네마", desc: "Cinema / Wide", width: "1860px" },
];

export default function LayoutSettings() {
  const { siteConfig } = useDocusaurusContext();
  const defaultLayout = siteConfig.customFields?.defaultLayout || "standard";
  
  const [currentLayout, setCurrentLayout] = useState(defaultLayout);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkLayout = () => {
      const activeLayout = document.documentElement.getAttribute("data-layout") || defaultLayout;
      setCurrentLayout(activeLayout);
    };
    checkLayout();

    const observer = new MutationObserver(checkLayout);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-layout"] });
    return () => observer.disconnect();
  }, [defaultLayout]);

  const handleLayoutChange = (layoutId) => {
    setCurrentLayout(layoutId);
    document.documentElement.setAttribute("data-layout", layoutId);
    localStorage.setItem("brochure-layout", layoutId);
    setIsOpen(false);
  };

  return (
    <div style={{
      position: "fixed",
      bottom: "100px",
      right: "32px",
      zIndex: 1000,
      fontFamily: "var(--ifm-font-family-base)",
    }}>
      {/* Settings Panel */}
      {isOpen && (
        <div style={{
          position: "absolute",
          bottom: "60px",
          right: "0",
          width: "220px",
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          padding: "12px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
          border: "1px solid #e2e8f0",
          animation: "panelFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}>
          <div style={{ fontSize: "11px", fontWeight: "800", color: "#94a3b8", marginBottom: "8px", paddingLeft: "8px", letterSpacing: "0.05em" }}>
            규격 선택 (PRESET)
          </div>
          {LAYOUTS.map((layout) => (
            <button
              key={layout.id}
              onClick={() => handleLayoutChange(layout.id)}
              style={{
                width: "100%",
                padding: "10px 12px",
                border: "none",
                background: currentLayout === layout.id ? "rgba(26, 79, 160, 0.08)" : "transparent",
                borderRadius: "10px",
                textAlign: "left",
                cursor: "pointer",
                transition: "all 0.2s ease",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                marginBottom: "2px",
              }}
              onMouseEnter={(e) => {
                if (currentLayout !== layout.id) e.currentTarget.style.background = "#f1f5f9";
              }}
              onMouseLeave={(e) => {
                if (currentLayout !== layout.id) e.currentTarget.style.background = "transparent";
              }}
            >
              <div style={{ fontSize: "13px", fontWeight: "700", color: currentLayout === layout.id ? "#1a4fa0" : "#1e293b" }}>
                {layout.label}
              </div>
              <div style={{ fontSize: "10px", color: "#64748b" }}>{layout.desc} ({layout.width})</div>
            </button>
          ))}
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "48px",
          height: "48px",
          background: "white",
          border: "1px solid #e2e8f0",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          transition: "all 0.2s ease",
          color: isOpen ? "#1a4fa0" : "#64748b",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.borderColor = "#1a4fa0";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.borderColor = "#e2e8f0";
        }}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
        </svg>
      </button>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes panelFadeIn {
          from { opacity: 0; transform: translateY(10px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}} />
    </div>
  );
}
