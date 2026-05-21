import React from 'react';
import './blocks.css';

export default function ChapterHeaderSection({ chapter, label, title, subtitle }) {
  return (
    <div className="bb-chapter-header">
      <div className="bb-chapter-header-left">
        {chapter && (
          <span className="bb-chapter-header-badge">
            CHAPTER {String(chapter).padStart(2, '0')}
          </span>
        )}
        {label && <span className="bb-chapter-header-label">{label}</span>}
      </div>
      <div className="bb-chapter-header-divider" />
      <div className="bb-chapter-header-right">
        {title && <h2 className="bb-chapter-header-title">{title}</h2>}
        {subtitle && <p className="bb-chapter-header-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}
