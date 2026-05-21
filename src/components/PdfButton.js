import React from "react";

export default function PdfButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      style={{
        position: "fixed",

        bottom: "32px",

        right: "32px",

        background: "#111827",

        color: "white",

        border: "none",

        borderRadius: "999px",

        padding: "14px 24px",

        fontSize: "0.95rem",

        fontWeight: "700",

        cursor: "pointer",

        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",

        zIndex: 999,
      }}
    >
      PDF 저장
    </button>
  );
}
