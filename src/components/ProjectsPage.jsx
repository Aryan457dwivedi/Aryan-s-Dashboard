import React from "react";
import { PageHeader } from "./Panel";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <div style={{ padding: "26px" }}>
      <PageHeader
        eyebrow="Projects"
        heading="Six problems. Six solutions."
        sub="Each card documents a real system — the problem it addresses, how it works, and what it has produced."
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project: p }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--color-background-primary)",
        border: `0.5px solid ${hovered ? "var(--color-border-secondary)" : "var(--color-border-tertiary)"}`,
        borderRadius: "var(--border-radius-lg)",
        padding: "18px",
        transition: "border-color 0.15s",
        opacity: p.active ? 1 : 0.4,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2px" }}>
        <div style={{
          fontSize: "10px",
          color: "var(--color-text-tertiary)",
          fontWeight: 500,
          letterSpacing: "0.04em",
        }}>
          Project {String(p.n).padStart(2, "0")}
        </div>
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          fontSize: "10px",
          padding: "2px 7px",
          borderRadius: "20px",
          fontWeight: 500,
          background: p.active ? "var(--color-background-success)" : "var(--color-background-secondary)",
          color: p.active ? "var(--color-text-success)" : "var(--color-text-secondary)",
        }}>
          {p.active ? "Active" : "Inactive"}
        </span>
      </div>

      <div style={{
        fontSize: "14px",
        fontWeight: 600,
        color: "var(--color-text-primary)",
        marginBottom: "10px",
        lineHeight: 1.3,
        letterSpacing: "-0.01em",
      }}>
        {p.name}
      </div>

      <FieldLabel>Problem</FieldLabel>
      <FieldText>{p.problem}</FieldText>

      <FieldLabel>Solution</FieldLabel>
      <FieldText>{p.solution}</FieldText>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "10px" }}>
        {p.tech.map((t) => (
          <span
            key={t}
            style={{
              fontSize: "10px",
              padding: "2px 6px",
              background: "var(--color-background-secondary)",
              border: "0.5px solid var(--color-border-tertiary)",
              borderRadius: "4px",
              color: "var(--color-text-tertiary)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div style={{ height: "0.5px", background: "var(--color-border-tertiary)", margin: "12px 0" }} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
        <Metric value={p.users.toLocaleString()} label="Users" />
        <Metric value={`${(p.requests / 1000).toFixed(1)}k`} label="Requests" />
        <Metric value={p.impact} label="Impact" />
      </div>

      <div style={{ marginTop: "10px", fontSize: "11px", color: "var(--color-text-tertiary)" }}>
        Performance —{" "}
        <span style={{ color: "var(--color-text-secondary)" }}>{p.accuracy}</span>
      </div>
    </div>
  );
}

function FieldLabel({ children }) {
  return (
    <div style={{
      fontSize: "10px",
      fontWeight: 500,
      color: "var(--color-text-tertiary)",
      letterSpacing: "0.07em",
      textTransform: "uppercase",
      marginBottom: "4px",
    }}>
      {children}
    </div>
  );
}

function FieldText({ children }) {
  return (
    <div style={{
      fontSize: "12px",
      color: "var(--color-text-secondary)",
      lineHeight: 1.6,
      marginBottom: "10px",
      fontWeight: 300,
    }}>
      {children}
    </div>
  );
}

function Metric({ value, label }) {
  return (
    <div>
      <div style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-text-primary)" }}>{value}</div>
      <div style={{ fontSize: "10px", color: "var(--color-text-tertiary)", marginTop: "1px", fontWeight: 300 }}>{label}</div>
    </div>
  );
}