import React from "react";
import PdfButton from "../components/PdfButton";
import LayoutSettings from "../components/LayoutSettings";
import { ThemeProvider } from "../components/BrochureBlocks/ThemeContext";

export default function Root({ children }) {
  return (
    <ThemeProvider initialTheme="startup-gradient">
      {children}
      <LayoutSettings />
      <PdfButton />
    </ThemeProvider>
  );
}
