// src/components/AnalyticsPage.jsx
import React, { useEffect, useRef } from "react";
import { Panel, PanelTitle, PageHeader } from "./Panel";
import { projects, growthData, donutData } from "../data/projects";
import {
  Chart,
  BarController, BarElement,
  LineController, LineElement, PointElement,
  DoughnutController, ArcElement,
  CategoryScale, LinearScale,
  Tooltip,
} from "chart.js";

Chart.register(
  BarController, BarElement,
  LineController, LineElement, PointElement,
  DoughnutController, ArcElement,
  CategoryScale, LinearScale,
  Tooltip
);

const SHORT_NAMES = projects.map((p) =>
  p.name
    .replace(" Predictor", "")
    .replace(" System", "")
    .replace(" Analyzer", "")
    .replace(" Tracker", "")
);

const DONUT_COLORS_DARK  = ["#e8e8e8","#aaaaaa","#6e6e6e","#484848","#2e2e2e","#1a1a1a"];
const DONUT_COLORS_LIGHT = ["#1a1a1a","#3a3a3a","#636363","#939393","#bcbcbc","#dedede"];

function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function getDonutColors() {
  return document.documentElement.getAttribute("data-theme") === "light"
    ? DONUT_COLORS_LIGHT
    : DONUT_COLORS_DARK;
}

export default function AnalyticsPage() {
  return (
    <div style={{ padding: "28px 32px" }}>
      <PageHeader
        eyebrow="Analytics"
        heading="Growth & usage"
        sub="Per-project figures. Each number is independent — no aggregated totals."
      />

      <Panel style={{ marginBottom: "14px" }}>
        <PanelTitle>Users per project</PanelTitle>
        <div style={{ position: "relative", width: "100%", height: "200px" }}>
          <BarChart />
        </div>
      </Panel>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
        <Panel>
          <PanelTitle>User growth · Sep – Apr</PanelTitle>
          <div style={{ position: "relative", height: "160px" }}>
            <LineChart />
          </div>
        </Panel>

        <Panel>
          <PanelTitle>Share of usage</PanelTitle>
          <div style={{ display: "flex", gap: "20px", alignItems: "center", paddingTop: "4px" }}>
            <div style={{ position: "relative", width: "100px", height: "100px", flexShrink: 0 }}>
              <DonutChart />
            </div>
            <DonutLegend />
          </div>
        </Panel>
      </div>
    </div>
  );
}

function BarChart() {
  const canvasRef = useRef(null);
  const chartRef  = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    chartRef.current?.destroy();
    chartRef.current = new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: SHORT_NAMES,
        datasets: [{
          data: projects.map((p) => p.users),
          backgroundColor: cssVar("--color-chart-bar"),
          borderColor:     cssVar("--color-chart-bar-border"),
          borderWidth: 0.5,
          borderRadius: 4,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: (ctx) => ` ${ctx.parsed.y.toLocaleString()} users` } },
        },
        scales: {
          x: {
            ticks: { font: { size: 10, family: "DM Sans" }, color: cssVar("--color-chart-tick") },
            grid: { display: false },
          },
          y: {
            ticks: { font: { size: 10, family: "DM Sans" }, color: cssVar("--color-chart-tick") },
            grid: { color: cssVar("--color-chart-grid") },
          },
        },
      },
    });
    return () => chartRef.current?.destroy();
  }, []);

  return <canvas ref={canvasRef} />;
}

function LineChart() {
  const canvasRef = useRef(null);
  const chartRef  = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    chartRef.current?.destroy();
    const lineColor = cssVar("--color-chart-line");
    chartRef.current = new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels: growthData.labels,
        datasets: [{
          data: growthData.values,
          borderColor: lineColor,
          borderWidth: 1.5,
          fill: false,
          tension: 0.35,
          pointRadius: 2.5,
          pointBackgroundColor: lineColor,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: (ctx) => ` ${ctx.parsed.y.toLocaleString()} users` } },
        },
        scales: {
          x: {
            ticks: { font: { size: 9, family: "DM Sans" }, color: cssVar("--color-chart-tick") },
            grid: { display: false },
          },
          y: {
            ticks: { font: { size: 9, family: "DM Sans" }, color: cssVar("--color-chart-tick") },
            grid: { color: cssVar("--color-chart-grid") },
          },
        },
      },
    });
    return () => chartRef.current?.destroy();
  }, []);

  return <canvas ref={canvasRef} />;
}

function DonutChart() {
  const canvasRef = useRef(null);
  const chartRef  = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    chartRef.current?.destroy();
    chartRef.current = new Chart(canvasRef.current, {
      type: "doughnut",
      data: {
        datasets: [{
          data: donutData.values,
          backgroundColor: getDonutColors(),
          borderWidth: 0,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "70%",
        plugins: { legend: { display: false } },
      },
    });
    return () => chartRef.current?.destroy();
  }, []);

  return <canvas ref={canvasRef} />;
}

function DonutLegend() {
  const colors = getDonutColors();
  return (
    <div style={{ fontSize: "11px", display: "flex", flexDirection: "column", gap: "6px" }}>
      {donutData.labels.map((label, i) => (
        <div key={label} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
          <div style={{
            width: "7px", height: "7px", borderRadius: "2px",
            background: colors[i], flexShrink: 0,
          }} />
          <span style={{ color: "var(--color-text-secondary)" }}>{label}</span>
          <span style={{ fontWeight: 500, color: "var(--color-text-primary)", marginLeft: "auto", paddingLeft: "8px" }}>
            {donutData.values[i]}%
          </span>
        </div>
      ))}
    </div>
  );
}
