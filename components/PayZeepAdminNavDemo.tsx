"use client";

import { useState } from "react";

const SECTIONS = [
  {
    label: null,
    items: [{ key: "dashboard", label: "Dashboard" }],
  },
  {
    label: "Operations",
    items: [
      { key: "transactions",       label: "Transactions" },
      { key: "terminals",          label: "Terminals" },
      { key: "transfers",          label: "Transfers" },
      { key: "charges",            label: "Charges" },
      { key: "transaction-limit",  label: "Transaction Limit" },
    ],
  },
  {
    label: "Merchant Management",
    items: [
      { key: "merchants",     label: "Merchants" },
      { key: "kyc",           label: "KYC & Compliance" },
      { key: "wallet",        label: "Wallet" },
      { key: "pos-mgmt",      label: "POS Management" },
    ],
  },
  {
    label: "Admin & Controls",
    items: [
      { key: "admin-mgmt",    label: "Admin Management" },
      { key: "activity-log",  label: "Activity Log" },
      { key: "settings",      label: "Settings" },
    ],
  },
];

const ALL_ITEMS = SECTIONS.flatMap((s) => s.items);

const CONTENT: Record<string, { title: string; body: string }> = {
  "dashboard": {
    title: "One operator. Two mental models.",
    body: "The core design challenge: POS administrators and payment gateway ops share a single login but use entirely different data surfaces. Rather than building two portals, we designed a mode-toggle that preserves session state while switching dashboard composition. Both modes share the same layout skeleton — only the metric layer changes. This reduced cognitive overhead while keeping infrastructure unified.",
  },
  "transactions": {
    title: "Speed and auditability are not opposites.",
    body: "Ops teams need to move fast — scan, filter, escalate — but every action must leave a record. We designed the transaction log with layered filtering (date range, merchant, channel, type) and a status-driven row hierarchy that surfaces anomalies before they're searched for. The tension between quick-scan and deep-audit drove every information density decision on this screen.",
  },
  "terminals": {
    title: "State machine as interface.",
    body: "Each terminal exists in one of five lifecycle states: unassigned, assigned, active, flagged, or decommissioned. Every available action is gated by that state. The critical design decision was to show unavailable actions as disabled rather than hidden — operators need to see what they can't do and why. Hiding options produces more support tickets than disabling them with context.",
  },
  "transfers": {
    title: "Designed around the failure edge case.",
    body: "Batch transfer design started with the hardest problem: what happens when 3 of 200 recipients in a batch fail? That question shaped the entire flow. Uploads validate inline before submission. Rows with errors are flagged at the review step, not after processing. Failed transfers in a completed batch are re-queueable individually — no restart from zero. The happy path is easy. The error path is forgiving.",
  },
  "charges": {
    title: "Three variables. One structured surface.",
    body: "Charge configuration had to handle fee type, percentage rate, and flat cap simultaneously — across multiple merchant tiers. The decision was to treat this as a structured form with live rate previews, not free-text fields. Ops can see exactly what a merchant will pay before publishing a change. This reduced misconfiguration incidents significantly over the previous spreadsheet-based approach.",
  },
  "transaction-limit": {
    title: "Two constraints. Visible simultaneously.",
    body: "Limit rules operate across two axes: per-transaction ceiling and daily cumulative cap. The instinct was to paginate these into separate tabs. We resisted it — both constraints need to be visible at once because editing one without seeing the other causes misconfiguration. Side-by-side layout with live effective-rate calculation made the dependency explicit in the interface.",
  },
  "merchants": {
    title: "Indexed for the ops workflow, not the data model.",
    body: "The most common ops task is: find this merchant, check their status, then escalate or clear. The merchant list is indexed by status — pending, active, suspended, flagged — not alphabetically. Search queries across business name, email, and merchant ID simultaneously because ops teams don't always know which identifier they have. The list was designed around the actual lookup pattern, not the database schema.",
  },
  "kyc": {
    title: "One review surface. Four compliance paths.",
    body: "Individual, SME, registered company, and NGO each require different documents, different verification thresholds, and different risk signals. The challenge was designing one review interface that adapts without branching into four separate screens. We used a document-slot model: each slot is either filled, pending, or flagged, regardless of entity type. The compliance logic lives in the backend; the interface stays consistent.",
  },
  "wallet": {
    title: "Inflow and outflow need to talk to each other.",
    body: "The ops need wasn't just to see transactions — it was to cross-reference inflow against outflow for the same merchant without switching views. We stacked both streams in one page with independent scroll and filter controls. The balance card at the top reconciles both directions. The design forces the reconciliation to happen on-screen instead of in a spreadsheet.",
  },
  "pos-mgmt": {
    title: "Inventory, logistics, and ops — one joining key.",
    body: "POS management sits at the intersection of three concerns: what terminals exist (inventory), where they are (logistics), and whether they're working (operations). We separated these into Orders and Tracking views that share the terminal serial number as a joining key. An operator can jump from 'this terminal was ordered' to 'where is it now' in a single click without losing context.",
  },
  "admin-mgmt": {
    title: "Permissions exposed, not abstracted.",
    body: "Internal role management required a deliberate choice: hide permissions behind role names, or surface them explicitly. We chose exposure. Rather than a role dropdown that obscures what each role means, we designed a permission matrix — admins see exactly what each role can and cannot do at assignment time. This is more cognitive load upfront. It dramatically reduces escalations caused by role misconfiguration.",
  },
  "activity-log": {
    title: "Forensic surface. Not just a record.",
    body: "The audit trail serves two simultaneous use cases: real-time monitoring (what is happening now) and historical investigation (what happened, who did it, and when). Most audit logs are designed only for the second use. This one is filterable by actor, action type, and affected resource — making it usable as a live ops view, not just a compliance artifact accessed after an incident.",
  },
  "settings": {
    title: "Ownership labels before options.",
    body: "System settings were scoped to three categories: platform configuration, notification routing, and access control. These were deliberately separated because their ownership differs — platform config belongs to engineering, notification routing to the ops lead, access control to compliance. Each section carries an ownership label. The first question on a settings screen shouldn't be 'should I touch this?' — the design should answer that before the user asks.",
  },
};

export default function PayZeepAdminNavDemo() {
  const [active, setActive]   = useState("dashboard");
  const [shown, setShown]     = useState("dashboard");
  const [opacity, setOpacity] = useState(1);

  const handleEnter = (key: string) => {
    if (key === active) return;
    setActive(key);
    setOpacity(0);
    setTimeout(() => {
      setShown(key);
      setOpacity(1);
    }, 150);
  };

  const content     = CONTENT[shown];
  const activeLabel = ALL_ITEMS.find((i) => i.key === shown)?.label ?? "";

  const NavItem = ({ itemKey, label }: { itemKey: string; label: string }) => {
    const isActive = active === itemKey;
    return (
      <div
        onMouseEnter={() => handleEnter(itemKey)}
        style={{
          display: "flex", alignItems: "center", gap: 10,
          padding: "9px 12px", borderRadius: 8, cursor: "default",
          background: isActive ? "#3a3a9e" : "transparent",
          transition: "background 0.15s ease",
        }}
      >
        <div style={{
          width: 11, height: 11, borderRadius: 3, flexShrink: 0,
          background: isActive ? "rgba(255,255,255,0.35)" : "#ddd",
          transition: "background 0.15s ease",
        }} />
        <span style={{
          fontSize: 13,
          color: isActive ? "#fff" : "#555",
          transition: "color 0.15s ease",
          userSelect: "none",
        }}>
          {label}
        </span>
      </div>
    );
  };

  return (
    <>
      <div className="pza-demo">
        {/* ── Sidebar ── */}
        <div style={{
          background: "#fff", border: "1px solid #e8e8e8",
          borderRadius: 12, padding: "20px 12px",
        }}>
          {/* Logo */}
          <div style={{ padding: "4px 12px 20px" }}>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#3a3a9e", margin: 0, letterSpacing: "-0.02em" }}>
              pay<span style={{ color: "#111" }}>Zeep</span>
            </p>
            <p style={{ fontSize: 10, color: "#bbb", margin: "2px 0 0", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Admin Console
            </p>
          </div>

          {/* Sections */}
          {SECTIONS.map((section, i) => (
            <div key={i} style={{ marginBottom: 2 }}>
              {section.label && (
                <p style={{
                  fontSize: 10, color: "#aaa", textTransform: "uppercase",
                  letterSpacing: "0.1em", padding: "10px 12px 4px", margin: 0,
                }}>
                  {section.label}
                </p>
              )}
              {section.items.map((item) => (
                <NavItem key={item.key} itemKey={item.key} label={item.label} />
              ))}
              {i < SECTIONS.length - 1 && (
                <div style={{ height: 1, background: "#f0f0f0", margin: "10px 0" }} />
              )}
            </div>
          ))}
        </div>

        {/* ── Right panel ── */}
        <div
          className="pza-demo-panel"
          style={{ opacity, transition: "opacity 0.2s ease", paddingTop: 8 }}
        >
          <p style={{
            fontSize: 11, color: "#bbb", textTransform: "uppercase",
            letterSpacing: "0.12em", margin: "0 0 20px",
          }}>
            {activeLabel}
          </p>
          <h3 style={{
            fontSize: 26, fontWeight: 500, color: "#111",
            letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 20px",
          }}>
            {content.title}
          </h3>
          <p style={{
            fontSize: 15, color: "#555", fontWeight: 300, lineHeight: 1.85, margin: 0,
          }}>
            {content.body}
          </p>
        </div>
      </div>

      <style>{`
        .pza-demo {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 48px;
          align-items: start;
          max-width: 960px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .pza-demo { grid-template-columns: 1fr; gap: 32px; }
          .pza-demo-panel { padding-top: 0; }
        }
      `}</style>
    </>
  );
}
