import React from "react";

export function Panel({ children, style = {} }) {
  return (
    <div style={{
      background: "var(--color-background-primary)",
      border: "0.5px solid var(--color-border-tertiary)",
      borderRadius: "var(--border-radius-lg)",
      padding: "16px 18px",
      transition: "background 0.2s, border-color 0.2s",
      ...style,
    }}>
      {children}
    </div>
  );
}

export function PanelTitle({ children }) {
  return (
    <div style={{
      fontSize: "11px",
      fontWeight: 500,
      color: "var(--color-text-tertiary)",
      marginBottom: "14px",
      textTransform: "uppercase",
      letterSpacing: "0.06em",
    }}>
      {children}
    </div>
  );
}

export function PageHeader({ eyebrow, heading, sub }) {
  return (
    <>
      <div style={{
        fontSize: "10px",
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "var(--color-text-tertiary)",
        marginBottom: "5px",
      }}>
        {eyebrow}
      </div>
      <div style={{
        fontSize: "20px",
        fontWeight: 600,
        color: "var(--color-text-primary)",
        marginBottom: "4px",
        lineHeight: 1.25,
        letterSpacing: "-0.02em",
      }}>
        {heading}
      </div>
      <div style={{
        fontSize: "12.5px",
        color: "var(--color-text-secondary)",
        marginBottom: "22px",
        fontWeight: 400,
        lineHeight: 1.55,
      }}>
        {sub}
      </div>
    </>
  );
}