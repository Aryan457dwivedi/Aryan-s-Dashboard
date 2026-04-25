import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import OverviewPage from "./components/OverviewPage";
import ProjectsPage from "./components/ProjectsPage";
import AnalyticsPage from "./components/AnalyticsPage";

const PAGES = {
  overview: OverviewPage,
  projects: ProjectsPage,
  analytics: AnalyticsPage,
};

export default function App() {
  const [activePage, setActivePage] = useState("overview");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  const PageComponent = PAGES[activePage];

  return (
    <div style={{
      display: "flex",
      background: "var(--color-background-tertiary)",
      borderRadius: "var(--border-radius-lg)",
      overflow: "hidden",
      width: "880px",
      minHeight: "600px",
      boxShadow: theme === "dark"
        ? "0 2px 40px rgba(0,0,0,0.5)"
        : "0 2px 32px rgba(0,0,0,0.11)",
      transition: "background 0.2s, box-shadow 0.2s",
    }}>
      <Sidebar
        activePage={activePage}
        onNav={setActivePage}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <div style={{ flex: 1, overflowY: "auto", minWidth: 0 }}>
        <PageComponent key={activePage} />
      </div>
    </div>
  );
}