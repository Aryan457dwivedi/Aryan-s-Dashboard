import React from "react";
import { Panel, PanelTitle, PageHeader } from "./Panel";
import { projects, performanceHighlights } from "../data/projects";

const maxUsers = Math.max(...projects.map((p) => p.users));

export default function OverviewPage() {
  return (
    <div style={{ padding: "26px" }}>
      <PageHeader
        eyebrow="Impact Dashboard"
        heading="What the work has built"
        sub="Each project here is a working system — built independently, deployed, and used by real people solving real problems."
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "18px" }}>
        <Panel style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div style={{ fontSize: "10px", color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: "0.07em", fontWeight: 500 }}>
            Span of work
          </div>
          <div style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "-0.01em", color: "var(--color-text-primary)", marginTop: "2px", lineHeight: 1.35 }}>
            6 projects across machine learning, computer vision, NLP, and full-stack development.
          </div>
          <div style={{ fontSize: "12px", color: "var(--color-text-secondary)", fontWeight: 300, marginTop: "4px", lineHeight: 1.6 }}>
            Built from scratch — no templates, no tutorials. Each one started with a problem statement and ended with a deployed solution.
          </div>
        </Panel>

        <Panel style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div style={{ fontSize: "10px", color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: "0.07em", fontWeight: 500 }}>
            Measured reach
          </div>
          <div style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "-0.01em", color: "var(--color-text-primary)", marginTop: "2px", lineHeight: 1.35 }}>
            Over 3,450 users across all active projects — without any promotion or marketing.
          </div>
          <div style={{ fontSize: "12px", color: "var(--color-text-secondary)", fontWeight: 300, marginTop: "4px", lineHeight: 1.6 }}>
            Usage is organic. People found these tools because they were useful — not because they were advertised.
          </div>
        </Panel>
      </div>

      <Panel style={{ marginBottom: "18px" }}>
        <PanelTitle>Usage distribution — individual projects</PanelTitle>
        {projects.map((p) => (
          <BarItem
            key={p.id}
            label={p.name}
            value={`${p.users.toLocaleString()} users`}
            pct={(p.users / maxUsers) * 100}
          />
        ))}
      </Panel>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
        <Panel>
          <PanelTitle>What this suggests</PanelTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.65, fontWeight: 300 }}>
              Aryan consistently picks problems that exist outside textbooks — healthcare, infrastructure, hiring — and builds working systems around them. The diversity of domains covered at this stage is unusual.
            </p>
            <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.65, fontWeight: 300 }}>
              The technical range — from low-level computer vision to API-driven LLM apps — signals someone who learns by building, not by following a curriculum.
            </p>
          </div>
        </Panel>

        <Panel>
          <PanelTitle>Performance highlights</PanelTitle>
          <div>
            {performanceHighlights.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  padding: "8px 0",
                  borderBottom: i < performanceHighlights.length - 1 ? "0.5px solid var(--color-border-tertiary)" : "none",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>{item.label}</span>
                <span style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-text-primary)" }}>{item.value}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}

function BarItem({ label, value, pct }) {
  return (
    <div style={{ marginBottom: "13px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "6px" }}>
        <span style={{ color: "var(--color-text-secondary)" }}>{label}</span>
        <span style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>{value}</span>
      </div>
      <div style={{ height: "3px", background: "var(--color-border-tertiary)", borderRadius: "2px", overflow: "hidden" }}>
        <div style={{ height: "100%", borderRadius: "2px", background: "var(--color-text-secondary)", width: `${pct}%` }} />
      </div>
    </div>
  );
}