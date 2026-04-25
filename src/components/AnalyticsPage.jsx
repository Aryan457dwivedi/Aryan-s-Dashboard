import React, { useEffect, useRef } from "react";
import { Panel, PanelTitle, PageHeader } from "./Panel";
import { projects, growthData, donutData } from "../data/projects";
import {
  Chart,
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  DoughnutController,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  DoughnutController,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const SHORT_NAMES = projects.map((p) =>
  p.name
    .replace(" Predictor", "")
    .replace(" System", "")
    .replace(" Analyzer", "")
    .replace(" Assistant", "")
    .replace(" Tracker", "")
);

const DONUT_COLORS = ["#1a1a1a", "#444441", "#888780", "#B4B2A9", "#D3D1C7", "#E8E6E0"];

export default function AnalyticsPage() {
  return (
    <div style={{ padding: "26px" }}>
      <PageHeader
        eyebrow="Analytics"
        heading="Growth & usage"
        sub="Per-project data. No aggregated totals."
      />

      <Panel style={{ marginBottom: "12px" }}>
        <PanelTitle>Users per project</PanelTitle>
        <div style={{ position: "relative", width: "100%", height: "190px" }}>
          <BarChart />
        </div>
      </Panel>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <Panel>
          <PanelTitle>User growth · Sep–Apr</PanelTitle>
          <div style={{ position: "relative", height: "150px" }}>
            <LineChart />
          </div>
        </Panel>

        <Panel>
          <PanelTitle>Share of usage</PanelTitle>
          <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
            <div style={{ position: "relative", width: "96px", height: "96px", flexShrink: 0 }}>
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
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (chartRef.current) chartRef.current.destroy();

    chartRef.current = new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: SHORT_NAMES,
        datasets: [
          {
            data: projects.map((p) => p.users),
            backgroundColor: "rgba(0,0,0,0.07)",
            borderColor: "rgba(0,0,0,0.2)",
            borderWidth: 0.5,
            borderRadius: 3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            ticks: { font: { size: 10 }, color: "#888780" },
            grid: { display: false },
          },
          y: {
            ticks: { font: { size: 10 }, color: "#888780" },
            grid: { color: "rgba(0,0,0,0.04)" },
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
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (chartRef.current) chartRef.current.destroy();

    chartRef.current = new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels: growthData.labels,
        datasets: [
          {
            data: growthData.values,
            borderColor: "#444441",
            borderWidth: 1.5,
            fill: false,
            tension: 0.35,
            pointRadius: 2,
            pointBackgroundColor: "#444441",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            ticks: { font: { size: 9 }, color: "#888780" },
            grid: { display: false },
          },
          y: {
            ticks: { font: { size: 9 }, color: "#888780" },
            grid: { color: "rgba(0,0,0,0.04)" },
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
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (chartRef.current) chartRef.current.destroy();

    chartRef.current = new Chart(canvasRef.current, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: donutData.values,
            backgroundColor: DONUT_COLORS,
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "68%",
        plugins: { legend: { display: false } },
      },
    });

    return () => chartRef.current?.destroy();
  }, []);

  return <canvas ref={canvasRef} />;
}

function DonutLegend() {
  return (
    <div style={{ fontSize: "11px", display: "flex", flexDirection: "column", gap: "5px" }}>
      {donutData.labels.map((label, i) => (
        <div key={label} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <div
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "2px",
              background: DONUT_COLORS[i],
              flexShrink: 0,
            }}
          />
          <span style={{ color: "var(--color-text-secondary)" }}>{label}</span>
          <span style={{ fontWeight: 500, color: "var(--color-text-primary)" }}>
            {donutData.values[i]}%
          </span>
        </div>
      ))}
    </div>
  );
}
