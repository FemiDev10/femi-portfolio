"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Check, Play } from "lucide-react";
import { AgentIcon, Sidebar, StatusBadge, globalFdStyle } from "../_shared";

const RUN_HISTORY = [
  { id: 1, when: "Today, 9:41 AM",     duration: "2m 14s", status: "Success" },
  { id: 2, when: "Yesterday, 4:02 PM", duration: "1m 48s", status: "Success" },
  { id: 3, when: "Yesterday, 11:15 AM",duration: "3m 02s", status: "Failed"  },
  { id: 4, when: "Mon, 8:30 AM",       duration: "2m 05s", status: "Success" },
  { id: 5, when: "Fri, 2:47 PM",       duration: "1m 55s", status: "Success" },
];

const PAUSED_IDS = new Set(["5"]);

function AgentViewContent() {
  const params = useSearchParams();
  const name = params.get("name") ?? "Contract Review";
  const dept = params.get("dept") ?? "HR";
  const id = params.get("id") ?? "3";
  const isNew = params.get("new") === "1";
  const status = PAUSED_IDS.has(id) ? "Paused" : "Active";

  return (
    <>
      <style>{globalFdStyle}</style>
      <div style={{ display: "flex", height: "100vh", fontFamily: "'DM Sans', system-ui, sans-serif", background: "#F9FAFB", overflow: "hidden" }}>
        <Sidebar />

        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {/* Top bar */}
          <div style={{ padding: "14px 24px", borderBottom: "1px solid #E5E7EB", background: "#fff", display: "flex", alignItems: "center", gap: 14 }}>
            <Link href="/work/flux" style={{ display: "flex", alignItems: "center", color: "#6B7280" }}>
              <ArrowLeft size={16} />
            </Link>
            <AgentIcon id={Number(id) || 3} size={32} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <h1 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: "#111827" }}>{name}</h1>
                <span style={{ fontSize: 10, background: "#F3F4F6", color: "#374151", borderRadius: 4, padding: "2px 6px", fontWeight: 500 }}># {dept}</span>
                <StatusBadge status={status} />
              </div>
              <p style={{ margin: "2px 0 0", fontSize: 11, color: "#9CA3AF" }}>
                {isNew ? "Just launched — no runs yet" : "Last run: Today, 9:41 AM"}
              </p>
            </div>
          </div>

          <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
            {isNew && (
              <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8, marginBottom: 20, maxWidth: 920 }}>
                <Check size={14} color="#16A34A" />
                <span style={{ fontSize: 12.5, color: "#166534" }}>Agent launched successfully. It hasn&apos;t run yet — hit Run Agent below to kick off its first run.</span>
              </div>
            )}

            <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 16, maxWidth: 920, marginBottom: 20 }}>
              {/* Left: Run History */}
              <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ padding: "14px 16px", borderBottom: "1px solid #F3F4F6" }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>Run History</span>
                </div>
                {isNew ? (
                  <div style={{ padding: "32px 16px", textAlign: "center" }}>
                    <p style={{ margin: 0, fontSize: 12, color: "#9CA3AF" }}>No runs yet</p>
                  </div>
                ) : RUN_HISTORY.map(run => (
                  <div key={run.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderBottom: "1px solid #F3F4F6" }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ margin: 0, fontSize: 12.5, color: "#111827", fontWeight: 500 }}>{run.when}</p>
                      <p style={{ margin: "2px 0 0", fontSize: 11, color: "#9CA3AF" }}>{run.duration}</p>
                    </div>
                    <StatusBadge status={run.status} />
                    <button style={{ background: "none", border: "none", cursor: "pointer", fontSize: 11.5, color: "#2563EB", fontWeight: 500, padding: 0, textDecoration: "underline", textUnderlineOffset: 2 }}>
                      View Output
                    </button>
                  </div>
                ))}
              </div>

              {/* Right: Agent Config */}
              <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: 12, padding: 16, display: "flex", flexDirection: "column", gap: 16, alignSelf: "start" }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>Agent Config</span>

                <div>
                  <p style={{ margin: "0 0 4px", fontSize: 10, fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.06em" }}>Instructions</p>
                  <p style={{ margin: 0, fontSize: 12.5, color: "#374151", lineHeight: 1.6 }}>
                    Review incoming {dept} documents, extract key terms, flag anything unusual, and draft a one-paragraph summary for approval.
                  </p>
                </div>

                <div>
                  <p style={{ margin: "0 0 6px", fontSize: 10, fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.06em" }}>Tools Enabled</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {["Web Search", "File Access"].map(t => (
                      <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, background: "#F3F4F6", color: "#374151", borderRadius: 20, padding: "3px 9px", fontWeight: 500 }}>
                        <Check size={10} color="#16A34A" /> {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p style={{ margin: "0 0 6px", fontSize: 10, fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.06em" }}>Model Used</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 22, height: 22, borderRadius: 6, background: "#10A37F", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ color: "#fff", fontSize: 10, fontWeight: 800 }}>G</span>
                    </div>
                    <span style={{ fontSize: 12.5, color: "#374151", fontWeight: 500 }}>GPT-4o</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Run Agent button */}
            <button style={{
              maxWidth: 920, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              padding: "16px", background: "#111827", color: "#fff", border: "none", borderRadius: 12,
              fontSize: 14, fontWeight: 700, cursor: "pointer",
            }}>
              <Play size={15} fill="#fff" /> Run Agent
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default function AgentViewPage() {
  return (
    <Suspense fallback={null}>
      <AgentViewContent />
    </Suspense>
  );
}
