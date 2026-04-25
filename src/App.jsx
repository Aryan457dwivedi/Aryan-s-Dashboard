// src/App.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import OverviewPage from "./components/OverviewPage";
import ProjectsPage from "./components/ProjectsPage";
import AnalyticsPage from "./components/AnalyticsPage";

export default function App() {
  const [activePage, setActivePage] = useState("overview");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const pages = {
    overview:  <OverviewPage />,
    projects:  <ProjectsPage />,
    analytics: <AnalyticsPage />,
  };

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
      background: "var(--color-background-tertiary)",
      transition: "background 0.2s",
    }}>
      <Sidebar
        activePage={activePage}
        onNav={setActivePage}
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      />
      <div style={{
        flex: 1,
        overflowY: "auto",
        minWidth: 0,
        background: "var(--color-background-tertiary)",
        transition: "background 0.2s",
      }}>
        {pages[activePage]}
      </div>
    </div>
  );
}
