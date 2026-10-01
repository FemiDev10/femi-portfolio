"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search, Plus, Bot, Sparkles, Folder, Star, Grid3X3, ChevronDown,
  CheckCircle2, XCircle, Pause, Eye, Play,
} from "lucide-react";

// ── Pixel-art agent icons ──────────────────────────────────────
export function AgentIcon({ id, size = 36 }: { id: number; size?: number }) {
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
export function Avatar({ name, size = 20, color = "#6366F1" }: { name: string; size?: number; color?: string }) {
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", background: color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <span style={{ fontSize: size * 0.38, color: "#fff", fontWeight: 600, lineHeight: 1 }}>
        {name[0].toUpperCase()}
      </span>
    </div>
  );
}

// ── Status badge ──────────────────────────────────────────────
export const STATUS_STYLES: Record<string, { color: string; bg: string; icon: React.ReactNode }> = {
  Active:        { color: "#2563EB", bg: "#EFF6FF", icon: <Play size={10} fill="#2563EB" /> },
  Paused:        { color: "#6B7280", bg: "#F3F4F6", icon: <Pause size={10} /> },
  Completed:     { color: "#16A34A", bg: "#F0FDF4", icon: <CheckCircle2 size={10} /> },
  Success:       { color: "#16A34A", bg: "#F0FDF4", icon: <CheckCircle2 size={10} /> },
  Failed:        { color: "#DC2626", bg: "#FEF2F2", icon: <XCircle size={10} /> },
  Pending:       { color: "#D97706", bg: "#FFFBEB", icon: <Pause size={10} /> },
  "Needs review":{ color: "#7C3AED", bg: "#F5F3FF", icon: <Eye size={10} /> },
};

export function StatusBadge({ status }: { status: string }) {
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

// ── Toggle switch ───────────────────────────────────────────────
export function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button onClick={onToggle} style={{
      width: 36, height: 20, borderRadius: 10, border: "none", cursor: "pointer",
      background: on ? "#E8502A" : "#D1D5DB", position: "relative", flexShrink: 0,
      transition: "background 0.2s",
    }}>
      <div style={{
        position: "absolute", top: 2, left: on ? 18 : 2, width: 16, height: 16,
        borderRadius: "50%", background: "#fff",
        boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
        transition: "left 0.2s",
      }} />
    </button>
  );
}

// ── Shared data ───────────────────────────────────────────────
export const MY_AGENTS = [
  { id: 1, title: "Offer Letter Generator", desc: "Pulls template from Google Drive", time: "12m", by: "me", tag: "HR", byColor: "#6366F1" },
  { id: 2, title: "Onboarding Buddy",       desc: "Coordinate onboarding tasks for new hir...", time: "45m", by: "me", tag: "Eng", byColor: "#6366F1" },
  { id: 3, title: "Contract Review",        desc: "Review vendor contracts", time: "1h", by: "me", tag: "HR", byColor: "#6366F1" },
  { id: 4, title: "Employee Onboarding Docs",desc:"Generate onboarding documents", time: "2d", by: "me", tag: "HR", byColor: "#6366F1" },
  { id: 5, title: "Sprint Summarizer",      desc: "Summarize sprint tasks", time: "1w", by: "Gregor", tag: "Design", byColor: "#8B5CF6", showDots: true },
  { id: 6, title: "Resume Review",          desc: "Drafting completed - awaiting approval", time: "1w", by: "Gregor", tag: "HR", byColor: "#8B5CF6", showDots: true },
];

export const BROWSE_AGENTS = [
  { id: 7, title: "NDA Review Agent",       desc: "Review NDA agreements",           by: "Mistral", tag: "HR",    byColor: "#E8502A" },
  { id: 8, title: "Q1 Competitor Analysis", desc: "Pulls template from Google Drive", by: "Mistral", tag: "HR",    byColor: "#E8502A" },
  { id: 9, title: "Newsletter agent",       desc: "Screen resumes for open roles",    by: "Jack",    tag: "Sales", byColor: "#0EA5E9" },
];

// ── Sidebar ───────────────────────────────────────────────────
const CHATS = ["Japan trip ideas","Claims processing assistant","Clarify request","Los Angeles trip schedule","Library search","New chat","go","Top mobile screens for all the...","Best TVs available now"];

export function Sidebar() {
  const pathname = usePathname();
  const agentsActive = pathname === "/work/flux";
  const intelligenceActive = pathname === "/work/flux/intelligence";

  return (
    <div style={{
      width: 228, flexShrink: 0, background: "#fff", borderRight: "1px solid #E5E7EB",
      display: "flex", flexDirection: "column", height: "100vh", overflowY: "auto", overflowX: "hidden",
    }}>
      {/* Top bar */}
      <div style={{ padding: "12px 12px 8px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/work/flux" style={{ width: 28, height: 28, borderRadius: 8, background: "#E8502A", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#fff", fontWeight: 800, fontSize: 14, letterSpacing: "-0.05em" }}>F</span>
        </Link>
        <div style={{ display: "flex", gap: 4 }}>
          <button style={iconBtn}><Search size={15} color="#6B7280" /></button>
          <button style={iconBtn}><Grid3X3 size={15} color="#6B7280" /></button>
        </div>
      </div>

      {/* New Chat */}
      <div style={{ padding: "4px 10px 8px" }}>
        <Link href="/work/flux/chat" style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 10px", borderRadius: 8, textDecoration: "none", cursor: "pointer", fontSize: 13, color: "#111827", fontWeight: 500, width: "100%" }}>
          <Plus size={15} /> New Chat
        </Link>
      </div>

      {/* Automations */}
      <SidebarSection label="Automations">
        <SidebarItem icon={<Bot size={14} />} label="Agents" href="/work/flux" active={agentsActive} />
        <SidebarItem icon={<Sparkles size={14} />} label="Intelligence" href="/work/flux/intelligence" active={intelligenceActive} badge="Beta" />
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
          <Link key={id} href="/work/flux/agent" style={{ display:"flex", alignItems:"center", gap:8, padding:"5px 10px", borderRadius:6, cursor:"pointer", textDecoration:"none", color:"#374151", fontSize:12 }} className="fd-sidebar-item">
            <AgentIcon id={id} size={18} />
            <span style={{ overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{MY_AGENTS[id-1].title}</span>
          </Link>
        ))}
      </SidebarSection>

      {/* Chats */}
      <SidebarSection label="Chats">
        {CHATS.map(c => (
          <Link key={c} href={`/work/flux/chat?topic=${encodeURIComponent(c)}`} style={{ display: "block", padding:"5px 10px", fontSize:12, color:"#6B7280", cursor:"pointer", borderRadius:6, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", textDecoration: "none" }} className="fd-sidebar-item">{c}</Link>
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

export const iconBtn: React.CSSProperties = { background: "none", border: "none", cursor: "pointer", padding: 4, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" };

export function SidebarSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: "4px 10px 6px" }}>
      <p style={{ fontSize: 10, fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.06em", margin: "6px 4px 2px" }}>{label}</p>
      {children}
    </div>
  );
}

export function SidebarItem({ icon, label, active, badge, href }: { icon: React.ReactNode; label: string; active?: boolean; badge?: string; href?: string }) {
  const content = (
    <>
      <span style={{ color: active ? "#111827" : "#6B7280" }}>{icon}</span>
      <span>{label}</span>
      {badge && <span style={{ marginLeft: "auto", fontSize: 9, background: "#E5E7EB", color: "#6B7280", borderRadius: 4, padding: "1px 5px", fontWeight: 600 }}>{badge}</span>}
    </>
  );
  const style: React.CSSProperties = {
    display: "flex", alignItems: "center", gap: 8, padding: "6px 10px", borderRadius: 6,
    background: active ? "#F3F4F6" : "transparent", cursor: "pointer", textDecoration: "none",
    fontSize: 13, fontWeight: active ? 600 : 400, color: active ? "#111827" : "#374151",
  };
  if (href) {
    return <Link href={href} style={style} className="fd-sidebar-item">{content}</Link>;
  }
  return <div style={style} className="fd-sidebar-item">{content}</div>;
}

// ── Shared style tokens ──────────────────────────────────────
export const filterBtn: React.CSSProperties = {
  display: "flex", alignItems: "center", gap: 5, padding: "6px 12px",
  background: "#fff", border: "1px solid #E5E7EB", borderRadius: 8,
  fontSize: 12, color: "#374151", cursor: "pointer", fontWeight: 500,
};

export const iconBtnSm: React.CSSProperties = {
  background: "none", border: "none", cursor: "pointer", padding: 2,
  display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 4,
};

export const outlineBtn: React.CSSProperties = {
  display: "flex", alignItems: "center", gap: 5, padding: "5px 12px",
  background: "#fff", border: "1px solid #E5E7EB", borderRadius: 7,
  fontSize: 12, color: "#374151", cursor: "pointer", fontWeight: 500,
};

export const primaryBtn: React.CSSProperties = {
  display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
  padding: "7px 14px", background: "#111827", color: "#fff", border: "none",
  borderRadius: 8, fontSize: 12, fontWeight: 500, cursor: "pointer",
};

export const globalFdStyle = `
  * { box-sizing: border-box; }
  body { margin: 0; }
  .fd-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); border-color: #D1D5DB !important; }
  .fd-sidebar-item:hover { background: #F9FAFB; }
  .fd-row:hover { background: #F9FAFB; }
  .fd-input::placeholder { color: #9CA3AF; }
`;
