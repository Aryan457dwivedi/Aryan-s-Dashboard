// src/components/OverviewPage.jsx

import React from "react";
import { Panel, PanelTitle, PageHeader } from "./Panel";
import { projects, performanceHighlights } from "../data/projects";

const maxUsers = Math.max(...projects.map((p) => p.users));

export default function OverviewPage() {
  return (
    <div style={{ padding: "28px 32px" }}>
      <PageHeader
        eyebrow="Impact Dashboard"
        heading="What the work has built"
        sub="Four independent systems — each conceived around a real problem, engineered without scaffolding, and deployed to users who rely on them."
      />

      {/* Top context panels */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
        <Panel>
          <ContextLabel>Scope</ContextLabel>
          <ContextHeading>
            Four production systems spanning ML, computer vision, full-stack, and NLP.
          </ContextHeading>
          <ContextBody>
            No starter templates. No guided tutorials. Each project began as a problem statement and was taken
            through to a deployed, user-facing product — independently.
          </ContextBody>
        </Panel>

        <Panel>
          <ContextLabel>Reach</ContextLabel>
          <ContextHeading>
            3,040 users across active projects — acquired entirely through utility, not distribution.
          </ContextHeading>
          <ContextBody>
            No marketing. No promotion. Adoption is a direct function of how well these tools
            solve the problems they were built for.
          </ContextBody>
        </Panel>
      </div>

      {/* Usage bars */}
      <Panel style={{ marginBottom: "16px" }}>
        <PanelTitle>Usage — per project</PanelTitle>
        {projects.map((p) => (
          <BarItem
            key={p.id}
            label={p.name}
            value={`${p.users.toLocaleString()} users`}
            pct={(p.users / maxUsers) * 100}
          />
        ))}
      </Panel>

      {/* Bottom row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <Panel>
          <PanelTitle>Signal</PanelTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <BodyText>
              The choice of problem domains — haematology diagnostics, automotive infrastructure, hiring pipelines —
              reflects deliberate judgment rather than academic convenience. These are not CRUD applications or
              tutorial recreations.
            </BodyText>
            <BodyText>
              The technical breadth — CV pipelines, supervised ML, Supabase-backed multi-role platforms, NLP scoring
              engines — was acquired through execution, not coursework. Each stack was adopted because the problem
              demanded it.
            </BodyText>
          </div>
        </Panel>

        <Panel>
          <PanelTitle>Performance</PanelTitle>
          <div>
            {performanceHighlights.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  padding: "9px 0",
                  borderBottom:
                    i < performanceHighlights.length - 1
                      ? "0.5px solid var(--color-border-tertiary)"
                      : "none",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>{item.label}</span>
                <span style={{ fontSize: "12.5px", fontWeight: 500, color: "var(--color-text-primary)" }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}

function ContextLabel({ children }) {
  return (
    <div style={{
      fontSize: "10px", fontWeight: 500, color: "var(--color-text-tertiary)",
      textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "6px",
    }}>
      {children}
    </div>
  );
}

function ContextHeading({ children }) {
  return (
    <div style={{
      fontSize: "13px", fontWeight: 500, letterSpacing: "-0.01em",
      color: "var(--color-text-primary)", marginBottom: "6px", lineHeight: 1.4,
    }}>
      {children}
    </div>
  );
}

function ContextBody({ children }) {
  return (
    <div style={{
      fontSize: "12px", color: "var(--color-text-secondary)",
      fontWeight: 300, lineHeight: 1.65,
    }}>
      {children}
    </div>
  );
}

function BodyText({ children }) {
  return (
    <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.65, fontWeight: 300 }}>
      {children}
    </p>
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
        <div style={{
          height: "100%", borderRadius: "2px",
          background: "var(--color-text-secondary)",
          width: `${pct}%`,
          transition: "width 0.4s ease",
        }} />
      </div>
    </div>
  );
}
