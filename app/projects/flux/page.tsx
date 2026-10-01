import type { ReactNode } from "react";

export const metadata = {
  title: "Flux — Femi Jimoh",
};

const META_PILLS = ["Next.js", "Design Engineering", "AI Product", "Lab"];

const STATS = [
  { value: "Next.js",     label: "Stack" },
  { value: "Clickable",   label: "Prototype" },
  { value: "AI Agents",   label: "Focus" },
  { value: "Lab",         label: "Category" },
];

const DECISIONS = [
  {
    num: "01",
    title: "Conversation-first navigation",
    body: "Agents are long-running tasks. They should feel like threads, not rows in a table.",
  },
  {
    num: "02",
    title: "Sidebar as context, not chrome",
    body: "The sidebar holds your agents, projects, and recent chats. It is always there but never in the way.",
  },
  {
    num: "03",
    title: "Cards over tables",
    body: "Each agent is a card. You see the name, the last action, who ran it, and what department. Scannable in one second.",
  },
  {
    num: "04",
    title: "Built not mocked",
    body: "Every interaction in Flux is real frontend code. The filters work. The navigation works. It is a product, not a presentation.",
  },
];

const STACK = ["Next.js 14 (App Router)", "Tailwind CSS", "TypeScript", "DM Sans"];

function Label({ children }: { children: ReactNode }) {
  return (
    <p style={{ fontSize: 10, color: "#bbb", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>
      {children}
    </p>
  );
}

export default function FluxPage() {
  return (
    <main className="max-w-275 mx-auto px-6">

      {/* ── HERO ── */}
      <section style={{ padding: "80px 0" }}>
        <p style={{ fontSize: 12, color: "#999", letterSpacing: "0.04em", marginBottom: 20 }}>
          Design Engineering · Lab · 2025
        </p>
        <h1 style={{
          fontSize: "clamp(56px, 9vw, 112px)", fontWeight: 400,
          letterSpacing: "-0.04em", color: "#111", lineHeight: 0.92,
          margin: "0 0 20px",
        }}>
          Flux.
        </h1>
        <p style={{ fontSize: 18, color: "#aaa", fontWeight: 300, lineHeight: 1.6, maxWidth: 640, margin: "0 0 32px" }}>
          An AI agent orchestration dashboard — designed and built in Next.js. Not a mockup. A working product.
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {META_PILLS.map((p) => (
            <span key={p} style={{
              background: "#f5f5f5", border: "1px solid #e8e8e8", color: "#666",
              borderRadius: 20, padding: "5px 14px 11px", fontSize: 11,
            }}>
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="fd-sec" style={{ borderTop: "1px solid #f0f0f0" }}>
        <Label>The Project</Label>
        <h2 style={{
          fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 400, letterSpacing: "-0.04em",
          color: "#111", maxWidth: 820, lineHeight: 1.08, marginBottom: 48,
        }}>
          What if managing AI agents felt as simple as a chat app?
        </h2>
        <div className="fd-two-col">
          <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, margin: 0 }}>
            Flux is an AI agent orchestration dashboard built to explore what enterprise AI tooling should actually feel like. Most AI dashboards are overwhelming — tables of logs, raw JSON outputs, no clear hierarchy. Flux approaches the problem differently: what if you managed agents the way you manage conversations? Fast, contextual, and built around how people actually think about tasks.
          </p>
          <div className="fd-stat-grid">
            {STATS.map((s) => (
              <div key={s.label} style={{ borderTop: "1px solid #e8e8e8", paddingTop: 16 }}>
                <p style={{ fontSize: 18, fontWeight: 500, color: "#111", margin: 0 }}>{s.value}</p>
                <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginTop: 6, marginBottom: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROTOTYPE ── */}
      <section className="fd-sec" style={{ borderTop: "1px solid #f0f0f0" }}>
        <Label>Live Prototype</Label>
        <h2 style={{
          fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 400, letterSpacing: "-0.04em",
          color: "#111", marginBottom: 16, lineHeight: 1.08,
        }}>
          Click through it.
        </h2>
        <p style={{ fontSize: 18, color: "#aaa", fontWeight: 300, marginBottom: 48, lineHeight: 1.6 }}>
          This is not a screenshot. The prototype below is the actual Next.js frontend.
        </p>
        <div className="fd-frame" style={{ border: "1px solid #e8e8e8", borderRadius: 12, overflow: "hidden", width: "100%" }}>
          <iframe
            src="/work/flux"
            style={{ width: "100%", height: "100%", border: "none", display: "block" }}
            title="Flux — AI Agent Dashboard"
          />
        </div>
      </section>

      {/* ── DESIGN DECISIONS ── */}
      <section className="fd-sec" style={{ borderTop: "1px solid #f0f0f0" }}>
        <Label>Design Decisions</Label>
        <h2 style={{
          fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 400, letterSpacing: "-0.04em",
          color: "#111", marginBottom: 64, lineHeight: 1.08,
        }}>
          Four decisions that shaped it.
        </h2>
        {DECISIONS.map((d) => (
          <div key={d.num} className="fd-decision-row">
            <p style={{ fontSize: 11, color: "#bbb", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>{d.num}</p>
            <div>
              <p style={{ fontSize: 18, fontWeight: 500, color: "#111", marginBottom: 10, marginTop: 0 }}>{d.title}</p>
              <p style={{ fontSize: 15, color: "#777", fontWeight: 300, lineHeight: 1.8, margin: 0 }}>{d.body}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── DESIGN ENGINEERING ── */}
      <section className="fd-sec" style={{ borderTop: "1px solid #f0f0f0" }}>
        <Label>Design Engineering</Label>
        <h2 style={{
          fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 400, letterSpacing: "-0.04em",
          color: "#111", maxWidth: 760, lineHeight: 1.1, marginBottom: 48,
        }}>
          Designed and built by the same person.
        </h2>
        <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 680, marginBottom: 32 }}>
          Flux exists because most design portfolios show what something could look like. This one shows what it actually does. The frontend was built in Next.js with Tailwind CSS. Every component is real. Every interaction is real. The point was to close the gap between the design and the thing itself.
        </p>
        <div style={{
          background: "#f8f8f8", borderLeft: "3px solid #e8e8e8", borderRadius: 8,
          padding: "24px 32px", fontFamily: "monospace", fontSize: 13, color: "#555",
          lineHeight: 2.2, maxWidth: 680,
        }}>
          {STACK.map((line) => <div key={line}>{line}</div>)}
        </div>
      </section>

      {/* ── REFLECTION ── */}
      <section className="fd-sec" style={{ borderTop: "1px solid #f0f0f0" }}>
        <Label>Reflection</Label>
        <p style={{
          fontSize: "clamp(24px, 3.5vw, 42px)", fontStyle: "italic", fontWeight: 300,
          color: "#111", letterSpacing: "-0.025em", maxWidth: 820, lineHeight: 1.25,
          marginBottom: 48,
        }}>
          &ldquo;Most portfolios show what you can design. This one shows what you can build.&rdquo;
        </p>
        <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9, maxWidth: 680, margin: 0 }}>
          Flux is a lab project. It is not a shipped commercial product. But it represents something important — the belief that a designer who can build is a fundamentally different kind of collaborator. No handoff. No loss in translation. The design is the product.
        </p>
      </section>

      <style>{`
        .fd-sec { padding: 96px 0; }
        .fd-two-col {
          display: grid; grid-template-columns: 55% 45%;
          gap: 64px; align-items: start;
        }
        .fd-stat-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 32px 24px;
        }
        .fd-decision-row {
          border-top: 1px solid #f0f0f0; padding: 32px 0;
          display: grid; grid-template-columns: 200px 1fr;
          gap: 48px; align-items: start;
        }
        .fd-frame { height: 680px; }

        @media (max-width: 900px) {
          .fd-sec { padding: 64px 0; }
          .fd-two-col { grid-template-columns: 1fr; gap: 40px; }
        }
        @media (max-width: 640px) {
          .fd-sec { padding: 48px 0; }
          .fd-decision-row { grid-template-columns: 1fr; gap: 10px; }
          .fd-frame { height: 420px; }
        }
      `}</style>
    </main>
  );
}
