"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, Lock, MoreHorizontal, Mic,
  Plus, BookOpen, Lightbulb, Wrench, ChevronDown,
  CheckCircle2, XCircle, RotateCcw, X, Settings2,
} from "lucide-react";
import { AgentIcon, Avatar, Toggle, iconBtnSm, outlineBtn, globalFdStyle } from "../_shared";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
      <span style={{ fontSize: 12, fontWeight: 600, color: "#111827" }}>{children}</span>
      <div style={{ display: "flex", gap: 6 }}>
        <button style={iconBtnSm}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5" stroke="#9CA3AF" strokeWidth="1.2"/>
            <path d="M6 4v2.5M6 8h.01" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </button>
        <button style={iconBtnSm}>
          <ChevronDown size={12} color="#9CA3AF" />
        </button>
      </div>
    </div>
  );
}

// ── Workflow Modal ────────────────────────────────────────────

function WorkflowNode({
  n, title, sub, status, tags, cta,
}: {
  n: string; title: string; sub?: string;
  status: "success" | "failed" | "pending";
  tags?: string[]; cta?: string;
}) {
  return (
    <div style={{
      background: "#fff",
      border: status === "failed" ? "1.5px dashed #F87171" : "1px solid #E5E7EB",
      borderRadius: 10,
      padding: "12px 14px",
      position: "relative",
      minWidth: 280,
    }}>
      {status === "failed" && (
        <div style={{ position: "absolute", top: -5, right: -5, width: 10, height: 10, borderRadius: "50%", background: "#EF4444", border: "2px solid #fff" }} />
      )}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {status === "success" && <CheckCircle2 size={15} color="#16A34A" />}
          {status === "failed"  && <XCircle      size={15} color="#DC2626" strokeDasharray="3 1" />}
          {status === "pending" && <div style={{ width: 15, height: 15, borderRadius: "50%", border: "1.5px solid #9CA3AF", flexShrink: 0 }} />}
          <span style={{ fontSize: 12, fontWeight: 500, color: status === "failed" ? "#B91C1C" : "#111827" }}>{title}</span>
        </div>
        <button style={iconBtnSm}><MoreHorizontal size={13} color="#9CA3AF" /></button>
      </div>
      {sub && (
        <p style={{ margin: "6px 0 0 23px", fontSize: 11, color: "#6B7280" }}>
          {status === "success" && <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
            {sub.includes("Workday") && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#1B5E8A"/><path d="M7 12l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
            )}
            {sub}
          </span>}
        </p>
      )}
      {tags && (
        <div style={{ display: "flex", gap: 6, marginTop: 8, marginLeft: 23 }}>
          {tags.map(t => (
            <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10, background: "#F3F4F6", color: "#374151", borderRadius: 4, padding: "2px 7px", fontWeight: 500 }}>
              <svg width="10" height="10" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="3" fill="#7C5CE6"/><path d="M6 10h8M10 6v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
              {t}
            </span>
          ))}
        </div>
      )}
      {cta && (
        <button style={{ marginTop: 8, marginLeft: 23, display: "flex", alignItems: "center", gap: 5, fontSize: 11, padding: "5px 10px", borderRadius: 6, background: "#fff", color: "#374151", border: "1px solid #E5E7EB", cursor: "pointer", fontWeight: 500 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#EA4335" opacity=".15"/><path d="M8 8l8 8M16 8l-8 8" stroke="#EA4335" strokeWidth="2" strokeLinecap="round"/></svg>
          {cta}
        </button>
      )}
    </div>
  );
}

function Connector() {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "0 auto" }}>
      <div style={{ width: 1.5, height: 28, background: "#D1D5DB" }} />
    </div>
  );
}

function WorkflowModal({ onClose }: { onClose: () => void }) {
  const [chatMsg, setChatMsg] = useState("");
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.35)", backdropFilter: "blur(2px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 900, background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.18)", display: "flex", flexDirection: "column", maxHeight: "90vh" }}>

        {/* Modal top bar */}
        <div style={{ padding: "14px 20px", borderBottom: "1px solid #E5E7EB", display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <AgentIcon id={6} size={28} />
          <span style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>Resume Review</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "#FEF2F2", color: "#DC2626", borderRadius: 20, padding: "2px 8px", fontSize: 11, fontWeight: 500 }}>
            <XCircle size={10} /> Failed
          </span>
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            <button style={outlineBtn}>
              <RotateCcw size={13} /> Re-run
            </button>
            <button onClick={onClose} style={{ ...iconBtnSm, padding: 6, borderRadius: 8, border: "1px solid #E5E7EB" }}>
              <X size={15} color="#6B7280" />
            </button>
          </div>
        </div>

        {/* Modal body */}
        <div style={{ display: "flex", flex: 1, overflow: "hidden", minHeight: 0 }}>

          {/* Left: chat panel */}
          <div style={{ width: 220, borderRight: "1px solid #E5E7EB", display: "flex", flexDirection: "column", background: "#FAFAFA" }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-end", padding: 16, gap: 6 }}>
              <div style={{ width: 24, height: 24, borderRadius: 6, background: "#E8502A", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#fff", fontWeight: 800, fontSize: 12 }}>+</span>
              </div>
              <p style={{ margin: 0, fontSize: 12, fontWeight: 600, color: "#111827" }}>Not sure what to do?</p>
              <p style={{ margin: 0, fontSize: 11, color: "#6B7280", lineHeight: 1.5 }}>
                Describe your goal and AI will build the instructions. Your agent can handle workflow up to your descriptive inputs.
              </p>
            </div>
            <div style={{ padding: "10px 12px", borderTop: "1px solid #E5E7EB" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, border: "1px solid #E5E7EB", borderRadius: 10, padding: "8px 12px", background: "#fff" }}>
                <input
                  value={chatMsg} onChange={e => setChatMsg(e.target.value)}
                  placeholder="Type here..."
                  style={{ flex: 1, border: "none", outline: "none", fontSize: 12, color: "#111827", background: "transparent" }}
                />
                <button style={{ width: 22, height: 22, borderRadius: 6, background: "#111827", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 8.5V1.5M5 1.5L2 4.5M5 1.5L8 4.5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
              <button style={{ marginTop: 6, display: "flex", alignItems: "center", gap: 4, fontSize: 10, color: "#6B7280", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                <Plus size={10} /> Add attachment
              </button>
            </div>
          </div>

          {/* Right: workflow diagram */}
          <div style={{ flex: 1, overflowY: "auto", padding: "24px 32px", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <input type="checkbox" style={{ width: 14, height: 14, accentColor: "#111827" }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>Workflow</span>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button style={iconBtnSm}><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2v10" stroke="#9CA3AF" strokeWidth="1.4" strokeLinecap="round"/></svg></button>
                <button style={iconBtnSm}><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10" stroke="#9CA3AF" strokeWidth="1.4" strokeLinecap="round"/></svg></button>
              </div>
            </div>

            {/* Start pill */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#F3F4F6", borderRadius: 20, padding: "5px 14px", fontSize: 12, color: "#6B7280", fontWeight: 500 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", border: "1.5px solid #9CA3AF" }} />
                Start
              </div>
            </div>
            <Connector />

            <WorkflowNode n="1" title="Pull templates from Google Drive" sub="Workday connected." status="success" />
            <Connector />
            <WorkflowNode n="2" title="Turn letters to remplates" sub="Templates ready." status="success" />
            <Connector />
            <WorkflowNode n="3" title="Auto-fill with candidate details" status="failed" sub="Attach related doc in chat or connect to your drive." cta="Connect to Drive" />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ width: 1.5, height: 28, background: "#D1D5DB" }} />
            </div>
            <WorkflowNode n="4" title="Send drafts to Slack for review" status="pending" tags={["#HR-leads", "#Candidates"]} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Agent Detail Page ─────────────────────────────────────────

export default function AgentDetailPage() {
  const [showModal, setShowModal]     = useState(false);
  const [detailTab, setDetailTab]     = useState<"details"|"activity">("details");
  const [workday, setWorkday]         = useState(true);
  const [gdrive, setGdrive]           = useState(false);
  const [slack, setSlack]             = useState(true);
  const [codeInterp, setCodeInterp]   = useState(true);
  const [imageGen, setImageGen]       = useState(false);
  const [canvas, setCanvas]           = useState(true);
  const [chatInput, setChatInput]     = useState("");

  return (
    <>
      <style>{`
        ${globalFdStyle}
        .fd-rp-section { border-top: 1px solid #F3F4F6; padding-top: 16px; margin-top: 16px; }
      `}</style>

      {/* Top nav bar */}
      <div style={{ height: 48, borderBottom: "1px solid #E5E7EB", background: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", flexShrink: 0 }}>
        <Link href="/work/flux" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "#111827", fontSize: 13, fontWeight: 600 }}>
          <ArrowLeft size={15} color="#6B7280" />
          <AgentIcon id={6} size={22} />
          Resume Review
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#6B7280" }}>
            <Lock size={12} /> Public to everyone
          </div>
          <button style={{ padding: "5px 14px", background: "#111827", color: "#fff", border: "none", borderRadius: 7, fontSize: 12, fontWeight: 500, cursor: "pointer" }}>Share</button>
          <button style={iconBtnSm}><MoreHorizontal size={15} color="#6B7280" /></button>
        </div>
      </div>

      {/* Main layout */}
      <div style={{ display: "flex", height: "calc(100vh - 48px)", fontFamily: "'DM Sans', system-ui, sans-serif", background: "#F9FAFB", overflow: "hidden" }}>

        {/* Left icon rail */}
        <div style={{ width: 48, borderRight: "1px solid #E5E7EB", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 0", gap: 8, flexShrink: 0 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "#E8502A", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: 13 }}>M</span>
          </div>
          <div style={{ width: 1, height: 16, background: "#E5E7EB" }} />
          {[Plus, Lightbulb, Settings2].map((Icon, i) => (
            <button key={i} style={{ width: 32, height: 32, borderRadius: 8, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon size={15} color="#6B7280" />
            </button>
          ))}
          <div style={{ width: 1, height: 1, background: "#E5E7EB", marginTop: 4 }} />
          {[6,1,2].map(id => (
            <button key={id} style={{ background: "none", border: "none", cursor: "pointer", padding: 2 }}>
              <AgentIcon id={id} size={26} />
            </button>
          ))}
        </div>

        {/* Center: chat area */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {/* empty chat */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "40px 32px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, maxWidth: 480, width: "100%" }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "#E8502A", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 2h12v10H2z" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" fill="none"/>
                  <path d="M5 8h6M5 5.5h6M5 10.5h3" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M12 12l2 2" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#111827" }}>Lets start chatting with your agent</p>
              <p style={{ margin: 0, fontSize: 12, color: "#6B7280", lineHeight: 1.6 }}>
                Describe your goal and AI will build the instructions. Your agent can handle records, associations, routing, sequences, and more.
              </p>
            </div>
          </div>

          {/* Input bar */}
          <div style={{ padding: "12px 20px 16px", borderTop: "1px solid #E5E7EB", background: "#fff" }}>
            <div style={{ border: "1.5px solid #E8502A", borderRadius: 12, overflow: "hidden", background: "#fff" }}>
              <div style={{ padding: "10px 14px" }}>
                <input
                  className="fd-input"
                  value={chatInput}
                  onChange={e => setChatInput(e.target.value)}
                  placeholder="Ask Le Chat Agent..."
                  style={{ width: "100%", border: "none", outline: "none", fontSize: 13, color: "#111827", background: "transparent" }}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderTop: "1px solid #FEE2E2" }}>
                <button style={toolBtn}><Plus size={13} color="#6B7280" /></button>
                <button style={toolBtn}><BookOpen size={13} color="#6B7280" /><span style={{ fontSize: 12, color: "#374151" }}>Research</span></button>
                <button style={toolBtn}><Lightbulb size={13} color="#6B7280" /><span style={{ fontSize: 12, color: "#374151" }}>Think</span></button>
                <button style={toolBtn}><Wrench size={13} color="#6B7280" /><span style={{ fontSize: 12, color: "#374151" }}>Tools</span></button>
                <div style={{ marginLeft: "auto" }}>
                  <button style={{ width: 32, height: 32, borderRadius: "50%", background: "#111827", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Mic size={14} color="#fff" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div style={{ width: 300, borderLeft: "1px solid #E5E7EB", background: "#fff", display: "flex", flexDirection: "column", overflowY: "auto" }}>
          {/* Agent header */}
          <div style={{ padding: "20px 16px 14px", borderBottom: "1px solid #F3F4F6" }}>
            <AgentIcon id={6} size={44} />
            <p style={{ margin: "10px 0 2px", fontSize: 15, fontWeight: 700, color: "#111827" }}>Resume Review</p>
            <p style={{ margin: "0 0 10px", fontSize: 11, color: "#6B7280" }}>Drafting completed - awaiting approval</p>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 14 }}>
              <Avatar name="G" size={18} color="#6366F1" />
              <span style={{ fontSize: 11, color: "#6B7280" }}>Managed by Gregor</span>
              <span style={{ fontSize: 10, background: "#F3F4F6", color: "#374151", borderRadius: 4, padding: "1px 6px", fontWeight: 500 }}># HR</span>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button
                onClick={() => setShowModal(true)}
                style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "7px 0", background: "#111827", color: "#fff", border: "none", borderRadius: 8, fontSize: 12, fontWeight: 500, cursor: "pointer" }}>
                <Settings2 size={13} /> Manage workflow
              </button>
              <button style={{ padding: "7px 10px", background: "#fff", border: "1px solid #E5E7EB", borderRadius: 8, cursor: "pointer", display: "flex" }}>
                <MoreHorizontal size={14} color="#6B7280" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", borderBottom: "1px solid #E5E7EB" }}>
            {(["Details","Activity"] as const).map(t => (
              <button key={t} onClick={() => setDetailTab(t.toLowerCase() as "details"|"activity")}
                style={{ flex: 1, padding: "10px 0", background: "none", border: "none", borderBottom: detailTab === t.toLowerCase() ? "2px solid #111827" : "2px solid transparent", fontSize: 12, fontWeight: 600, color: detailTab === t.toLowerCase() ? "#111827" : "#6B7280", cursor: "pointer", marginBottom: -1 }}>
                {t}
              </button>
            ))}
          </div>

          {/* Details panel */}
          {detailTab === "details" && (
            <div style={{ padding: "16px" }}>

              {/* Instructions */}
              <SectionLabel>Instructions</SectionLabel>
              <div style={{ fontSize: 12, color: "#374151", lineHeight: 1.6, marginBottom: 4 }}>
                <span style={{ fontWeight: 600 }}># Data Analysis</span>
                <p style={{ margin: "4px 0 0", color: "#6B7280" }}>Analyze and plot this data thoroughly and give me key figures like mean, median and standard deviation.</p>
              </div>

              {/* Guardrails */}
              <div className="fd-rp-section">
                <SectionLabel>Guardrails</SectionLabel>
                <p style={{ margin: 0, fontSize: 12, color: "#6B7280", lineHeight: 1.6 }}>You only discuss topics related to tutoring.</p>
              </div>

              {/* Tone */}
              <div className="fd-rp-section">
                <SectionLabel>Tone</SectionLabel>
                <input placeholder="Type i.e. Casual, Detailed, Humorous, Objective, etc..." style={{ width: "100%", border: "none", outline: "none", fontSize: 12, color: "#9CA3AF", background: "transparent", fontStyle: "italic", padding: 0, fontFamily: "inherit" }} />
              </div>

              {/* Knowledge */}
              <div className="fd-rp-section">
                <SectionLabel>Knowledge</SectionLabel>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <KnowledgeRow icon="workday" label="Workday" toggled={workday} onToggle={() => setWorkday(v => !v)} />
                  <KnowledgeRow icon="gdrive" label="Google Drive" toggled={gdrive} onToggle={() => setGdrive(v => !v)} cta={!gdrive ? "Connect Account" : undefined} />
                  <KnowledgeRow icon="slack" label="Slack" toggled={slack} onToggle={() => setSlack(v => !v)} />
                  <button style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", fontSize: 11, color: "#6B7280", padding: 0, fontFamily: "inherit" }}>
                    <Plus size={11} /> Add connection
                  </button>
                </div>
              </div>

              {/* Tools */}
              <div className="fd-rp-section">
                <SectionLabel>Tools</SectionLabel>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <ToolRow icon="code" label="Code Interpreter" toggled={codeInterp} onToggle={() => setCodeInterp(v => !v)} />
                  <ToolRow icon="img" label="Image Generation" toggled={imageGen} onToggle={() => setImageGen(v => !v)} />
                  <ToolRow icon="canvas" label="Canvas" toggled={canvas} onToggle={() => setCanvas(v => !v)} />
                </div>
              </div>

            </div>
          )}

          {/* Activity panel */}
          {detailTab === "activity" && (
            <div style={{ padding: 16, fontSize: 12, color: "#6B7280", textAlign: "center", marginTop: 32 }}>
              No recent activity to show.
            </div>
          )}
        </div>
      </div>

      {showModal && <WorkflowModal onClose={() => setShowModal(false)} />}
    </>
  );
}

// ── Row helpers ───────────────────────────────────────────────

function KnowledgeIcon({ type }: { type: string }) {
  const icons: Record<string, string> = {
    workday: "#1B5E8A", gdrive: "#EA4335", slack: "#4A154B",
  };
  const labels: Record<string, string> = {
    workday: "W", gdrive: "G", slack: "S",
  };
  return (
    <div style={{ width: 18, height: 18, borderRadius: 4, background: icons[type] ?? "#E5E7EB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <span style={{ color: "#fff", fontSize: 9, fontWeight: 700 }}>{labels[type] ?? "?"}</span>
    </div>
  );
}

function KnowledgeRow({ icon, label, toggled, onToggle, cta }: { icon: string; label: string; toggled: boolean; onToggle: () => void; cta?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <KnowledgeIcon type={icon} />
      <span style={{ fontSize: 12, color: "#374151", flex: 1 }}>{label}</span>
      {cta ? (
        <button onClick={onToggle} style={{ fontSize: 10, color: "#E8502A", background: "none", border: "none", cursor: "pointer", fontWeight: 600, padding: 0, fontFamily: "inherit" }}>{cta}</button>
      ) : (
        <Toggle on={toggled} onToggle={onToggle} />
      )}
    </div>
  );
}

function ToolIcon({ type }: { type: string }) {
  const bgs: Record<string, string> = { code: "#E5E7EB", img: "#E5E7EB", canvas: "#E5E7EB" };
  const chars: Record<string, string> = { code: "<>", img: "⬜", canvas: "□" };
  return (
    <div style={{ width: 18, height: 18, borderRadius: 4, background: bgs[type] ?? "#E5E7EB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <span style={{ fontSize: 8, color: "#6B7280", fontFamily: "monospace" }}>{chars[type]}</span>
    </div>
  );
}

function ToolRow({ icon, label, toggled, onToggle }: { icon: string; label: string; toggled: boolean; onToggle: () => void }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <ToolIcon type={icon} />
      <span style={{ fontSize: 12, color: "#374151", flex: 1 }}>{label}</span>
      <Toggle on={toggled} onToggle={onToggle} />
    </div>
  );
}

// ── Style tokens ──────────────────────────────────────────────

const toolBtn: React.CSSProperties = {
  display: "flex", alignItems: "center", gap: 5, padding: "4px 10px",
  background: "none", border: "none", cursor: "pointer", borderRadius: 6,
  fontFamily: "inherit",
};
