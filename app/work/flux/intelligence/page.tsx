"use client";

import Link from "next/link";
import { Zap, Clock, ChevronRight } from "lucide-react";
import { Sidebar, outlineBtn, globalFdStyle } from "../_shared";

const METRICS = [
  { label: "Agents Run Today",   value: "47",    Icon: Zap,   color: "#2563EB", bg: "#EFF6FF" },
  { label: "Avg Response Time",  value: "1.2s",  Icon: Clock, color: "#16A34A", bg: "#F0FDF4" },
];

const INSIGHTS = [
  {
    id: 1,
    color: "#7C3AED",
    title: "Resume Review is bottlenecking HR approvals",
    summary: "3 of the last 5 runs required manual re-approval after auto-fill failures.",
    confidence: 92,
    href: "/work/flux/agent-view?id=6&name=Resume%20Review&dept=HR",
  },
  {
    id: 2,
    color: "#2563EB",
    title: "Onboarding Buddy usage spiked this week",
    summary: "Eng ran this agent 3x more than last week, mostly on Mondays.",
    confidence: 87,
    href: "/work/flux/agent-view?id=2&name=Onboarding%20Buddy&dept=Eng",
  },
  {
    id: 3,
    color: "#16A34A",
    title: "Contract Review could save ~4 hours a week",
    summary: "Automating the clause-extraction step would remove the most common manual hand-off.",
    confidence: 85,
    href: "/work/flux/agent-view?id=3&name=Contract%20Review&dept=HR",
  },
];

export default function IntelligencePage() {
  return (
    <>
      <style>{globalFdStyle}</style>
      <div style={{ display: "flex", height: "100vh", fontFamily: "'DM Sans', system-ui, sans-serif", background: "#F9FAFB", overflow: "hidden" }}>
        <Sidebar />

        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {/* Top bar */}
          <div style={{ padding: "14px 24px", borderBottom: "1px solid #E5E7EB", background: "#fff", display: "flex", alignItems: "center", gap: 10 }}>
            <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#111827" }}>Intelligence</h1>
            <span style={{ fontSize: 10, background: "#E5E7EB", color: "#6B7280", borderRadius: 4, padding: "2px 6px", fontWeight: 600 }}>Beta</span>
          </div>

          <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
            <p style={{ margin: "0 0 20px", fontSize: 13, color: "#6B7280", maxWidth: 560, lineHeight: 1.6 }}>
              Flux analyzes every agent run and surfaces patterns worth your attention — bottlenecks, spikes, and opportunities to automate further.
            </p>

            {/* Metric tiles */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginBottom: 28, maxWidth: 560 }}>
              {METRICS.map(m => (
                <div key={m.label} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: 12, padding: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                    <span style={{ fontSize: 12, color: "#6B7280", fontWeight: 500 }}>{m.label}</span>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: m.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <m.Icon size={13} color={m.color} />
                    </div>
                  </div>
                  <p style={{ margin: 0, fontSize: 28, fontWeight: 700, color: "#111827", lineHeight: 1 }}>{m.value}</p>
                </div>
              ))}
            </div>

            {/* Insight feed */}
            <p style={{ fontSize: 12, fontWeight: 600, color: "#111827", margin: "0 0 12px" }}>Latest Insights</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 620 }}>
              {INSIGHTS.map(insight => (
                <div key={insight.id} style={{
                  background: "#fff", border: "1px solid #E5E7EB", borderLeft: `3px solid ${insight.color}`,
                  borderRadius: 10, padding: "16px 18px",
                }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 6 }}>
                    <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>{insight.title}</p>
                    <span style={{ flexShrink: 0, fontSize: 11, fontWeight: 600, color: insight.color, background: `${insight.color}14`, borderRadius: 20, padding: "2px 8px" }}>
                      {insight.confidence}% confidence
                    </span>
                  </div>
                  <p style={{ margin: "0 0 12px", fontSize: 12.5, color: "#6B7280", lineHeight: 1.6 }}>{insight.summary}</p>
                  <Link href={insight.href} style={{ ...outlineBtn, textDecoration: "none", display: "inline-flex" }}>
                    View Details <ChevronRight size={12} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
