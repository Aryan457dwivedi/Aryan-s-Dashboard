import React from "react";

const navItems = [
  {
    id: "overview",
    label: "Overview",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="1" width="6" height="6" rx="1" />
        <rect x="9" y="1" width="6" height="6" rx="1" />
        <rect x="1" y="9" width="6" height="6" rx="1" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
      </svg>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="1" width="14" height="10" rx="1.5" />
        <path d="M5 15h6M8 11v4" />
      </svg>
    ),
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="1,13 5,8 8,10 11,5 15,3" />
      </svg>
    ),
  },
];

function SunIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="8" r="3" />
      <line x1="8" y1="1" x2="8" y2="3" />
      <line x1="8" y1="13" x2="8" y2="15" />
      <line x1="1" y1="8" x2="3" y2="8" />
      <line x1="13" y1="8" x2="15" y2="8" />
      <line x1="3" y1="3" x2="4.5" y2="4.5" />
      <line x1="11.5" y1="11.5" x2="13" y2="13" />
      <line x1="13" y1="3" x2="11.5" y2="4.5" />
      <line x1="4.5" y1="11.5" x2="3" y2="13" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13.5 10A6 6 0 0 1 6 2.5a6 6 0 1 0 7.5 7.5z" />
    </svg>
  );
}

export default function Sidebar({ activePage, onNav, theme, onToggleTheme }) {
  return (
    <div style={{
      width: "196px",
      flexShrink: 0,
      background: "var(--color-background-primary)",
      borderRight: "0.5px solid var(--color-border-tertiary)",
      display: "flex",
      flexDirection: "column",
      padding: "20px 0",
      transition: "background 0.2s, border-color 0.2s",
    }}>
      {/* Brand */}
      <div style={{
        padding: "0 18px 18px",
        borderBottom: "0.5px solid var(--color-border-tertiary)",
        marginBottom: "6px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}>
        <div>
          <div style={{
            fontSize: "15px",
            fontWeight: 600,
            color: "var(--color-text-primary)",
            lineHeight: 1.2,
            marginBottom: "6px",
            letterSpacing: "-0.02em",
          }}>
            Aryan Dwivedi
          </div>
          <div style={{
            fontSize: "11px",
            color: "var(--color-text-secondary)",
            fontWeight: 300,
            lineHeight: 1.6,
          }}>
            Built to solve.<br />
            <span style={{ color: "var(--color-text-primary)", fontWeight: 400 }}>
              AI as a tool, not a shortcut.
            </span>
          </div>
        </div>

        {/* Theme toggle */}
        <button
          onClick={onToggleTheme}
          title={theme === "dark" ? "Switch to light" : "Switch to dark"}
          style={{
            background: "var(--color-background-secondary)",
            border: "0.5px solid var(--color-border-secondary)",
            borderRadius: "6px",
            width: "26px",
            height: "26px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "var(--color-text-secondary)",
            flexShrink: 0,
            marginTop: "1px",
            transition: "background 0.15s, color 0.15s",
          }}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>

      {/* Nav */}
      <div style={{
        flex: 1,
        padding: "8px 10px",
        display: "flex",
        flexDirection: "column",
        gap: "1px",
      }}>
        <div style={{
          fontSize: "10px",
          fontWeight: 500,
          color: "var(--color-text-tertiary)",
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          padding: "12px 18px 4px",
        }}>
          Workspace
        </div>
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            active={activePage === item.id}
            onClick={() => onNav(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

function NavItem({ item, active, onClick }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "9px",
        padding: "7px 10px",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "12.5px",
        color: active || hovered ? "var(--color-text-primary)" : "var(--color-text-secondary)",
        fontWeight: active ? 500 : 400,
        border: "none",
        background: active || hovered ? "var(--color-background-secondary)" : "none",
        width: "100%",
        textAlign: "left",
        transition: "background 0.12s, color 0.12s",
      }}
    >
      <span style={{
        width: "14px",
        height: "14px",
        flexShrink: 0,
        opacity: active || hovered ? 0.85 : 0.45,
        transition: "opacity 0.12s",
      }}>
        {item.icon}
      </span>
      {item.label}
    </button>
  );
}