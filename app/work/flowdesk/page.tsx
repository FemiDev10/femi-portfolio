"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search, Plus, Bot, Sparkles, Folder, Star, Clock,
  ChevronDown, MoreHorizontal, ChevronRight,
  CheckCircle2, XCircle, AlertCircle, Play, Pause,
  Eye, RotateCcw, SlidersHorizontal, Grid3X3, List,
  MessageSquare, ArrowRight,
} from "lucide-react";

// ── Pixel-art agent icons ──────────────────────────────────────
function AgentIcon({ id, size = 36 }: { id: number; size?: number }) {
  const configs = [
    { bg: "#1A1207", fg: "#F59E0B", p: [1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0] },
    { bg: "#0A1628", fg: "#60A5FA", p: [0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1] },
    { bg: "#1C1407", fg: "#FCD34D", p: [1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1] },
    { bg: "#1A0707", fg: "#F87171", p: [0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1] },
    { bg: "#12072A", fg: "#A78BFA", p: [1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0] },
    { bg: "#071A10", fg: "#34D399", p: [0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0] },
    { bg: "#1A0C02", fg: "#FB923C", p: [1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1] },
    { bg: "#1A0716", fg: "#F472B6", p: [0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1] },
    { bg: "#021A1A", fg: "#22D3EE", p: [1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0] },
  ];
  const c = configs[(id - 1) % configs.length];
  const cell = size / 4;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: "block", flexShrink: 0, borderRadius: 8 }}>
      <rect width={size} height={size} fill={c.bg} rx="8" />
      {c.p.map((px, i) => px ? (
        <rect key={i} x={(i % 4) * cell} y={Math.floor(i / 4) * cell} width={cell} height={cell} fill={c.fg} />
      ) : null)}
    </svg>
  );
}

// ── Avatar ────────────────────────────────────────────────────
function Avatar({ name, size = 20, color = "#6366F1" }: { name: string; size?: number; color?: string }) {
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", background: color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <span style={{ fontSize: size * 0.38, color: "#fff", fontWeight: 600, lineHeight: 1 }}>
        {name[0].toUpperCase()}
      </span>
    </div>
  );
}

// ── Status badge ──────────────────────────────────────────────
const STATUS_STYLES: Record<string, { color: string; bg: string; icon: React.ReactNode }> = {
  Active:        { color: "#2563EB", bg: "#EFF6FF", icon: <Play size={10} fill="#2563EB" /> },
  Completed:     { color: "#16A34A", bg: "#F0FDF4", icon: <CheckCircle2 size={10} /> },
  Failed:        { color: "#DC2626", bg: "#FEF2F2", icon: <XCircle size={10} /> },
  Pending:       { color: "#D97706", bg: "#FFFBEB", icon: <Pause size={10} /> },
  "Needs review":{ color: "#7C3AED", bg: "#F5F3FF", icon: <Eye size={10} /> },
};

function StatusBadge({ status }: { status: string }) {
  const s = STATUS_STYLES[status] ?? { color: "#6B7280", bg: "#F9FAFB", icon: null };
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      background: s.bg, color: s.color, borderRadius: 20,
      padding: "2px 8px", fontSize: 11, fontWeight: 500,
    }}>
      {s.icon} {status}
    </span>
  );
}

// ── Data ──────────────────────────────────────────────────────
const MY_AGENTS = [
  { id: 1, title: "Offer Letter Generator", desc: "Pulls template from Google Drive", time: "12m", by: "me", tag: "HR", byColor: "#6366F1" },
  { id: 2, title: "Onboarding Buddy",       desc: "Coordinate onboarding tasks for new hir...", time: "45m", by: "me", tag: "Eng", byColor: "#6366F1" },
  { id: 3, title: "Contract Review",        desc: "Review vendor contracts", time: "1h", by: "me", tag: "HR", byColor: "#6366F1" },
  { id: 4, title: "Employee Onboarding Docs",desc:"Generate onboarding documents", time: "2d", by: "me", tag: "HR", byColor: "#6366F1" },
  { id: 5, title: "Sprint Summarizer",      desc: "Summarize sprint tasks", time: "1w", by: "Gregor", tag: "Design", byColor: "#8B5CF6", showDots: true },
  { id: 6, title: "Resume Review",          desc: "Drafting completed - awaiting approval", time: "1w", by: "Gregor", tag: "HR", byColor: "#8B5CF6", showDots: true },
];

const BROWSE_AGENTS = [
  { id: 7, title: "NDA Review Agent",       desc: "Review NDA agreements",           by: "Mistral", tag: "HR",    byColor: "#E8502A" },
  { id: 8, title: "Q1 Competitor Analysis", desc: "Pulls template from Google Drive", by: "Mistral", tag: "HR",    byColor: "#E8502A" },
  { id: 9, title: "Newsletter agent",       desc: "Screen resumes for open roles",    by: "Jack",    tag: "Sales", byColor: "#0EA5E9" },
];

const STATS = [
  { label: "Active",       count: 5,  sub: "+2 today",       color: "#2563EB", bg: "#EFF6FF", Icon: Play    },
  { label: "Completed",    count: 32, sub: "+12 this month",  color: "#16A34A", bg: "#F0FDF4", Icon: CheckCircle2 },
  { label: "Needs Review", count: 9,  sub: "2 urgent",        color: "#7C3AED", bg: "#F5F3FF", Icon: Eye     },
  { label: "Pending",      count: 6,  sub: "+2 today",        color: "#D97706", bg: "#FFFBEB", Icon: Pause   },
  { label: "Failed",       count: 5,  sub: "+1 today",        color: "#DC2626", bg: "#FEF2F2", Icon: XCircle },
];

type Step = { text: string; status: "success"|"failed"|"pending"; error?: string; hasCTA?: boolean };
type Activity = {
  id: number; agentId: number; title: string; desc: string;
  status: string; time: string; steps?: Step[];
};

const ACTIVITIES: Activity[] = [
  { id:1, agentId:1, title:"Offer Letter Generator",  desc:"Pulls template from Google Drive",       status:"Active",        time:"44m" },
  { id:2, agentId:2, title:"Onboarding Buddy",         desc:"Coordinate onboarding tasks for new hires",status:"Active",      time:"1h"  },
  { id:3, agentId:3, title:"Contract Review",           desc:"Review vendor contracts",               status:"Active",        time:"1h"  },
  { id:4, agentId:6, title:"Resume Review",             desc:"Drafting completed - awaiting approval", status:"Failed",       time:"5d",
    steps:[
      { text:"Send template drafts to Slack #HR-leads and #Candidates for review", status:"pending" },
      { text:"Auto-fill templates with candidate details", status:"failed", error:"Candidate details pull action failed...", hasCTA:true },
      { text:"Turn letters to templates", status:"success" },
      { text:"Pull latest letters from Google Drive", status:"success" },
    ]
  },
  { id:5, agentId:5, title:"Sprint Summarizer",         desc:"Summarize sprint tasks",                status:"Pending",       time:"5d"  },
  { id:6, agentId:6, title:"Resume Review",             desc:"Drafting completed - awaiting approval", status:"Needs review", time:"1w"  },
  { id:7, agentId:7, title:"NDA Review Agent",          desc:"Review NDA agreements",                 status:"Completed",     time:"4m"  },
  { id:8, agentId:1, title:"Offer Letter Generator",    desc:"Pulls template from Google Drive",       status:"Failed",       time:"5d"  },
  { id:9, agentId:6, title:"Resume Review",             desc:"Screen resumes for open roles",          status:"Needs review", time:"1w"  },
];

// ── Agent Card ────────────────────────────────────────────────
function AgentCard({ agent, showTime = true }: { agent: typeof MY_AGENTS[0] & { showDots?: boolean }; showTime?: boolean }) {
  return (
    <Link href="/work/flowdesk/agent"
      style={{
        display: "flex", flexDirection: "column", gap: 10, padding: "14px 16px",
        background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12,
        cursor: "pointer", textDecoration: "none", color: "inherit",
        transition: "box-shadow 0.15s, border-color 0.15s",
      }}
      className="fd-card"
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
        <AgentIcon id={agent.id} size={36} />
        {agent.showDots && <MoreHorizontal size={16} color="#9CA3AF" />}
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: "#111827", margin: "0 0 3px", lineHeight: 1.3 }}>{agent.title}</p>
        <p style={{ fontSize: 12, color: "#6B7280", margin: 0, lineHeight: 1.4 }}>{agent.desc}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#9CA3AF" }}>
        {showTime && <><Clock size={11} /><span>{agent.time}</span></>}
        <Avatar name={agent.by === "me" ? "M" : agent.by} size={16} color={agent.byColor} />
        <span style={{ color: "#6B7280" }}>{agent.by === "me" ? "by me" : agent.by}</span>
        <span style={{ background: "#F3F4F6", color: "#374151", borderRadius: 4, padding: "1px 6px", fontSize: 10, fontWeight: 500 }}>
          # {agent.tag}
        </span>
        {showTime && <ArrowRight size={11} style={{ marginLeft: "auto" }} />}
      </div>
    </Link>
  );
}

// ── Sidebar ───────────────────────────────────────────────────
function Sidebar() {
  const chats = ["Japan trip ideas","Claims processing assistant","Clarify request","Los Angeles trip schedule","Library search","New chat","go","Top mobile screens for all the...","Best TVs available now"];
  return (
    <div style={{
      width: 228, flexShrink: 0, background: "#fff", borderRight: "1px solid #E5E7EB",
      display: "flex", flexDirection: "column", height: "100vh", overflowY: "auto", overflowX: "hidden",
    }}>
      {/* Top bar */}
      <div style={{ padding: "12px 12px 8px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: "#E8502A", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#fff", fontWeight: 800, fontSize: 14, letterSpacing: "-0.05em" }}>M</span>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          <button style={iconBtn}><Search size={15} color="#6B7280" /></button>
          <button style={iconBtn}><Grid3X3 size={15} color="#6B7280" /></button>
        </div>
      </div>

      {/* New Chat */}
      <div style={{ padding: "4px 10px 8px" }}>
        <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 10px", borderRadius: 8, background: "none", border: "none", cursor: "pointer", fontSize: 13, color: "#111827", fontWeight: 500, width: "100%" }}>
          <Plus size={15} /> New Chat
        </button>
      </div>

      {/* Automations */}
      <SidebarSection label="Automations">
        <SidebarItem icon={<Bot size={14} />} label="Agents" active />
        <SidebarItem icon={<Sparkles size={14} />} label="Intelligence" badge="Beta" />
      </SidebarSection>

      {/* Projects */}
      <SidebarSection label="Projects">
        <SidebarItem icon={<Folder size={14} />} label="Design" />
        <SidebarItem icon={<Folder size={14} />} label="Travel Planning" />
        <SidebarItem icon={<Star size={14} />} label="Starred Convo" />
      </SidebarSection>

      {/* Latest Agent Chats */}
      <SidebarSection label="Latest Agent Chats">
        {[1,2,3].map(id => (
          <Link key={id} href="/work/flowdesk/agent" style={{ display:"flex", alignItems:"center", gap:8, padding:"5px 10px", borderRadius:6, cursor:"pointer", textDecoration:"none", color:"#374151", fontSize:12 }} className="fd-sidebar-item">
            <AgentIcon id={id} size={18} />
            <span style={{ overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{MY_AGENTS[id-1].title}</span>
          </Link>
        ))}
      </SidebarSection>

      {/* Chats */}
      <SidebarSection label="Chats">
        {chats.map(c => (
          <div key={c} style={{ padding:"5px 10px", fontSize:12, color:"#6B7280", cursor:"pointer", borderRadius:6, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }} className="fd-sidebar-item">{c}</div>
        ))}
      </SidebarSection>

      {/* User footer */}
      <div style={{ marginTop: "auto", borderTop: "1px solid #F3F4F6", padding: "12px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Avatar name="L" size={28} color="#E8502A" />
          <div>
            <p style={{ margin: 0, fontSize: 12, fontWeight: 600, color: "#111827" }}>La Ayda</p>
            <p style={{ margin: 0, fontSize: 10, color: "#E8502A", fontWeight: 500 }}>Enterprise</p>
          </div>
        </div>
        <ChevronDown size={14} color="#9CA3AF" />
      </div>
    </div>
  );
}

const iconBtn: React.CSSProperties = { background: "none", border: "none", cursor: "pointer", padding: 4, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" };

function SidebarSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: "4px 10px 6px" }}>
      <p style={{ fontSize: 10, fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.06em", margin: "6px 4px 2px" }}>{label}</p>
      {children}
    </div>
  );
}

function SidebarItem({ icon, label, active, badge }: { icon: React.ReactNode; label: string; active?: boolean; badge?: string }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 8, padding: "6px 10px", borderRadius: 6,
      background: active ? "#F3F4F6" : "transparent", cursor: "pointer",
      fontSize: 13, fontWeight: active ? 600 : 400, color: active ? "#111827" : "#374151",
    }} className="fd-sidebar-item">
      <span style={{ color: active ? "#111827" : "#6B7280" }}>{icon}</span>
      <span>{label}</span>
      {badge && <span style={{ marginLeft: "auto", fontSize: 9, background: "#E5E7EB", color: "#6B7280", borderRadius: 4, padding: "1px 5px", fontWeight: 600 }}>{badge}</span>}
    </div>
  );
}

// ── Activity Row ──────────────────────────────────────────────
function ActivityRow({ item, expanded, onToggle }: { item: Activity; expanded: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: "1px solid #F3F4F6" }}>
      <div
        onClick={onToggle}
        style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", cursor: "pointer", background: expanded ? "#FAFAFA" : "transparent" }}
        className="fd-row"
      >
        <ChevronRight size={14} color="#9CA3AF" style={{ transform: expanded ? "rotate(90deg)" : "none", transition: "transform 0.15s", flexShrink: 0 }} />
        <AgentIcon id={item.agentId} size={28} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ margin: 0, fontSize: 13, fontWeight: 500, color: "#111827" }}>{item.title}</p>
          <p style={{ margin: 0, fontSize: 11, color: "#9CA3AF", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.desc}</p>
        </div>
        <StatusBadge status={item.status} />
        <span style={{ fontSize: 11, color: "#9CA3AF", flexShrink: 0 }}>
          <Clock size={10} style={{ display: "inline", marginRight: 3, verticalAlign: "middle" }} />{item.time}
        </span>
      </div>

      {expanded && item.steps && (
        <div style={{ background: "#FAFAFA", padding: "4px 16px 12px 56px", display: "flex", flexDirection: "column", gap: 6 }}>
          {item.steps.map((step, i) => (
            <div key={i} style={{
              padding: "10px 14px", borderRadius: 8, fontSize: 12,
              background: step.status === "failed" ? "#FFF5F5" : "#fff",
              border: step.status === "failed" ? "1px solid #FECACA" : "1px solid #F3F4F6",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {step.status === "success" && <CheckCircle2 size={13} color="#16A34A" />}
                {step.status === "failed"  && <XCircle     size={13} color="#DC2626" />}
                {step.status === "pending" && <div style={{ width: 13, height: 13, borderRadius: "50%", border: "1px dashed #9CA3AF", flexShrink: 0 }} />}
                <span style={{ color: step.status === "failed" ? "#B91C1C" : "#374151", fontWeight: step.status === "failed" ? 500 : 400 }}>{step.text}</span>
              </div>
              {step.error && <p style={{ margin: "4px 0 6px 21px", fontSize: 11, color: "#9CA3AF" }}>{step.error}</p>}
              {step.hasCTA && (
                <div style={{ marginTop: 8, marginLeft: 21, display: "flex", gap: 8 }}>
                  <button style={{ display:"flex", alignItems:"center", gap:4, fontSize:11, padding:"4px 10px", borderRadius:6, background:"#111827", color:"#fff", border:"none", cursor:"pointer", fontWeight:500 }}>
                    <RotateCcw size={10} /> Re-run
                  </button>
                  <button style={{ fontSize:11, padding:"4px 10px", borderRadius:6, background:"#fff", color:"#374151", border:"1px solid #E5E7EB", cursor:"pointer" }}>
                    Manage workflow
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────
export default function FlowDeskPage() {
  const [tab, setTab] = useState<"agents"|"hub">("agents");
  const [expanded, setExpanded] = useState<number | null>(4);

  return (
    <>
      <style>{`
        body { margin: 0; }
        .fd-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); border-color: #D1D5DB !important; }
        .fd-sidebar-item:hover { background: #F9FAFB; }
        .fd-row:hover { background: #F9FAFB; }
        * { box-sizing: border-box; }
      `}</style>

      <div style={{ display: "flex", height: "100vh", fontFamily: "'DM Sans', system-ui, sans-serif", background: "#F9FAFB", overflow: "hidden" }}>
        <Sidebar />

        {/* Main content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {/* Top bar */}
          <div style={{ padding: "14px 24px", borderBottom: "1px solid #E5E7EB", background: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#111827" }}>Agents</h1>
            <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", background: "#111827", color: "#fff", border: "none", borderRadius: 8, fontSize: 12, fontWeight: 500, cursor: "pointer" }}>
              <Plus size={13} /> Create an Agent
            </button>
          </div>

          {/* Tabs */}
          <div style={{ borderBottom: "1px solid #E5E7EB", background: "#fff", padding: "0 24px" }}>
            <div style={{ display: "flex", gap: 0 }}>
              {(["My Agents","Agent Hub"] as const).map((t, i) => (
                <button
                  key={t}
                  onClick={() => setTab(i === 0 ? "agents" : "hub")}
                  style={{
                    padding: "12px 16px", background: "none", border: "none", cursor: "pointer",
                    fontSize: 14, fontWeight: 600, borderBottom: (i === 0 ? tab === "agents" : tab === "hub") ? "2px solid #111827" : "2px solid transparent",
                    color: (i === 0 ? tab === "agents" : tab === "hub") ? "#111827" : "#6B7280",
                    marginBottom: -1,
                  }}
                >{t}</button>
              ))}
            </div>
          </div>

          <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px" }}>
            {tab === "agents" ? (
              <>
                {/* Filter bar */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                  <button style={filterBtn}><span>Latest used</span> <ChevronDown size={12} /></button>
                  <button style={filterBtn}><Plus size={12} /> Filters</button>
                  <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
                    <button style={iconBtn2}><Search size={14} color="#6B7280" /> <span style={{ fontSize:12, color:"#6B7280" }}>Find</span></button>
                    <button style={iconBtn2}><Grid3X3 size={14} color="#6B7280" /></button>
                    <button style={iconBtn2}><List size={14} color="#6B7280" /></button>
                  </div>
                </div>

                {/* My Agents grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 32 }}>
                  {MY_AGENTS.map(a => <AgentCard key={a.id} agent={a} />)}
                </div>

                {/* Browse Agents */}
                <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", margin: "0 0 16px" }}>Browse Agents</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                  {BROWSE_AGENTS.map(a => <AgentCard key={a.id} agent={{ ...a, time: "", showDots: false }} showTime={false} />)}
                </div>
              </>
            ) : (
              <>
                {/* Hub filter bar */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                  <button style={filterBtn}><span>Agent: All</span> <ChevronDown size={12} /></button>
                  <div style={{ marginLeft: "auto" }}>
                    <button style={filterBtn}><span>Last 30 days</span> <ChevronDown size={12} /></button>
                  </div>
                </div>

                {/* Stats strip */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12, marginBottom: 28 }}>
                  {STATS.map(s => (
                    <div key={s.label} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: 12, padding: "16px" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                        <span style={{ fontSize: 12, color: "#6B7280", fontWeight: 500 }}>{s.label}</span>
                        <div style={{ width: 28, height: 28, borderRadius: 8, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <s.Icon size={13} color={s.color} />
                        </div>
                      </div>
                      <p style={{ margin: "0 0 4px", fontSize: 28, fontWeight: 700, color: "#111827", lineHeight: 1 }}>{s.count}</p>
                      <p style={{ margin: 0, fontSize: 11, color: "#6B7280" }}>↑ {s.sub}</p>
                    </div>
                  ))}
                </div>

                {/* Activity list */}
                <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #F3F4F6" }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>Latest Activity</span>
                    <button style={filterBtn}><span>Status: All</span> <ChevronDown size={12} /></button>
                  </div>
                  {ACTIVITIES.map(item => (
                    <ActivityRow
                      key={item.id} item={item}
                      expanded={expanded === item.id}
                      onToggle={() => setExpanded(expanded === item.id ? null : item.id)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const filterBtn: React.CSSProperties = {
  display: "flex", alignItems: "center", gap: 5, padding: "6px 12px",
  background: "#fff", border: "1px solid #E5E7EB", borderRadius: 8,
  fontSize: 12, color: "#374151", cursor: "pointer", fontWeight: 500,
};

const iconBtn2: React.CSSProperties = {
  display: "flex", alignItems: "center", gap: 4, padding: "6px 10px",
  background: "#fff", border: "1px solid #E5E7EB", borderRadius: 8,
  cursor: "pointer",
};
