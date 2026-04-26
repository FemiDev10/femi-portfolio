"use client";

import { useState } from "react";

const SECTIONS = [
  {
    label: null,
    items: [{ key: "dashboard", label: "Dashboard" }],
  },
  {
    label: "Business Tools",
    items: [
      { key: "pos",              label: "Point of Sale" },
      { key: "payment-links",   label: "Payment Links" },
      { key: "virtual-accounts", label: "Virtual Accounts" },
    ],
  },
  {
    label: "Incoming",
    items: [
      { key: "web-transactions", label: "Web Transactions" },
      { key: "pos-transactions", label: "POS Transactions" },
      { key: "dispute",          label: "Dispute" },
    ],
  },
  {
    label: "Outgoing",
    items: [
      { key: "payout",       label: "Payout" },
      { key: "transfer",     label: "Transfer" },
      { key: "settlements",  label: "Settlements" },
      { key: "sub-accounts", label: "Sub Accounts" },
    ],
  },
];

const BOTTOM = [
  { key: "support",          label: "Support" },
  { key: "developer-tools",  label: "Developer Tools" },
  { key: "settings",         label: "Settings" },
];

const ALL_ITEMS = [...SECTIONS.flatMap((s) => s.items), ...BOTTOM];

const CONTENT: Record<string, { title: string; body: string }> = {
  "dashboard":         { title: "The first thing they see.",           body: "Six dashboard states, from empty to fully live. Every state answers the same question: am I okay right now?" },
  "pos":               { title: "POS without the mystery.",            body: "Merchants link terminals, track POS transactions separately from web, and reconcile without calling support." },
  "payment-links":     { title: "Generate. Share. Get paid.",          body: "Create customisable payment links with amount presets. Preview before sharing. No code required." },
  "virtual-accounts":  { title: "A dedicated account per flow.",       body: "Generate VAs, link them to POS terminals, and track each one independently. Money in, clearly labelled." },
  "web-transactions":  { title: "Every incoming payment, visible.",    body: "Searchable, filterable, downloadable. Merchants stop guessing and start knowing." },
  "pos-transactions":  { title: "POS and web, kept separate.",         body: "Two channels, two views. Merchants reconcile faster when the data isn't mixed." },
  "dispute":           { title: "Handle it in-product.",               body: "Disputes surface here instead of via email chains. Status updates stay inside the portal." },
  "payout":            { title: "Money out, on their terms.",          body: "Withdraw to a linked account with one action. The Available Amount card makes the number impossible to miss." },
  "transfer":          { title: "Single or batch.",                    body: "Send to one recipient or upload a file for bulk. Pending approvals queue before they move." },
  "settlements":       { title: "No more settlement anxiety.",         body: "Settlement timelines, history, and status — all visible. The black box is open." },
  "sub-accounts":      { title: "One merchant, multiple businesses.",  body: "Separate sub accounts for separate business lines. Consolidated oversight from one login." },
  "support":           { title: "Less support, by design.",            body: "The goal was always to answer questions before they become tickets. Support exists for what the product can't yet handle." },
  "developer-tools":   { title: "API keys, webhooks, test mode.",      body: "Developers get what they need without touching merchant settings. Test mode is visually unmistakable." },
  "settings":          { title: "Everything in one place.",            body: "Business profile, team management, roles, security, and password — organised as a hub, not a checklist." },
};

export default function PayZeepNavDemo() {
  const [active, setActive]       = useState("dashboard");
  const [shown, setShown]         = useState("dashboard");
  const [opacity, setOpacity]     = useState(1);

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
          padding: "10px 12px", borderRadius: 8, cursor: "default",
          background: isActive ? "#3d3dbf" : "transparent",
          transition: "background 0.15s ease",
        }}
      >
        <div style={{
          width: 12, height: 12, borderRadius: 3, flexShrink: 0,
          background: isActive ? "rgba(255,255,255,0.35)" : "#ddd",
          transition: "background 0.15s ease",
        }} />
        <span style={{
          fontSize: 14,
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
      <div className="pz-demo">
        {/* ── Sidebar ── */}
        <div style={{
          background: "#fff", border: "1px solid #e8e8e8",
          borderRadius: 12, padding: "20px 12px",
        }}>
          {/* Logo */}
          <div style={{ padding: "4px 12px 20px" }}>
            <p style={{ fontSize: 16, fontWeight: 700, color: "#3d3dbf", margin: 0, letterSpacing: "-0.02em" }}>
              payZeep
            </p>
            <p style={{ fontSize: 10, color: "#bbb", margin: "3px 0 0", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              by paymi solutions
            </p>
          </div>

          {/* Main sections */}
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
            </div>
          ))}

          {/* Divider */}
          <div style={{ height: 1, background: "#f0f0f0", margin: "10px 0" }} />

          {/* Bottom items */}
          {BOTTOM.map((item) => (
            <NavItem key={item.key} itemKey={item.key} label={item.label} />
          ))}
        </div>

        {/* ── Right panel ── */}
        <div
          className="pz-demo-panel"
          style={{ opacity, transition: "opacity 0.2s ease", paddingTop: 8 }}
        >
          <p style={{
            fontSize: 11, color: "#bbb", textTransform: "uppercase",
            letterSpacing: "0.12em", margin: "0 0 20px",
          }}>
            {activeLabel}
          </p>
          <h3 style={{
            fontSize: 28, fontWeight: 500, color: "#111",
            letterSpacing: "-0.02em", lineHeight: 1.15, margin: "0 0 16px",
          }}>
            {content.title}
          </h3>
          <p style={{
            fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.8, margin: 0,
          }}>
            {content.body}
          </p>
        </div>
      </div>

      <style>{`
        .pz-demo {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 48px;
          align-items: start;
          max-width: 960px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .pz-demo { grid-template-columns: 1fr; gap: 32px; }
          .pz-demo-panel { padding-top: 0; }
        }
      `}</style>
    </>
  );
}
