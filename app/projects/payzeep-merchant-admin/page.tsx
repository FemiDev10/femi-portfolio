import Link from "next/link";
import PayZeepAdminNavDemo from "@/components/PayZeepAdminNavDemo";

export const metadata = {
  title: "PayZeep Merchant Admin — Femi Jimoh",
};

/* ── Mockup frames ────────────────────────────────────────── */

function AdminBrowser({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 12, overflow: "hidden",
      boxShadow: "0 2px 40px rgba(0,0,0,0.08)",
    }}>
      <div style={{
        height: 36, background: "#f4f4f4",
        display: "flex", alignItems: "center", padding: "0 12px", gap: 6,
      }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", flexShrink: 0 }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e", flexShrink: 0 }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840", flexShrink: 0 }} />
        <div style={{
          flex: 1, background: "#fff", borderRadius: 4, height: 20,
          marginLeft: 8, marginRight: 8,
          display: "flex", alignItems: "center", paddingLeft: 8,
        }}>
          <span style={{ fontSize: 11, color: "#aaa", fontFamily: "monospace" }}>admin.payzeep.com</span>
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
    </div>
  );
}

function LaptopMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ padding: "0 24px" }}>
      <div style={{
        background: "#d8d8d8", borderRadius: 16,
        padding: "12px 12px 0", boxShadow: "0 8px 48px rgba(0,0,0,0.12)",
      }}>
        <div style={{ background: "#fff", borderRadius: "8px 8px 0 0", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
        </div>
        <div style={{ height: 24, background: "#d8d8d8" }} />
      </div>
      <div style={{
        width: 80, height: 8, background: "#c8c8c8",
        borderRadius: "0 0 8px 8px", margin: "0 auto",
      }} />
    </div>
  );
}

/* ── Shared style tokens ──────────────────────────────────── */

const inner: React.CSSProperties = {
  maxWidth: 1100, margin: "0 auto", padding: "0 48px",
};

const BRAND = "#3a3a9e";

const sLabel: React.CSSProperties = {
  fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em",
  color: BRAND, margin: "0 0 14px", fontWeight: 500,
};

const sHeading: React.CSSProperties = {
  fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 500, color: "#111",
  letterSpacing: "-0.025em", lineHeight: 1.05, margin: "0 0 28px",
};

const body: React.CSSProperties = {
  fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.9,
  maxWidth: 640, margin: "0 0 20px",
};

const cap: React.CSSProperties = {
  fontSize: 13, color: "#999", textAlign: "center",
  marginTop: 16, marginBottom: 0, fontStyle: "italic",
};

const grid2: React.CSSProperties = {
  display: "flex", flexDirection: "column", gap: 20,
};

const SEC = "100px 0";

/* ── Page ────────────────────────────────────────────────── */

export default function MerchantAdminPage() {
  return (
    <main style={{ background: "#fff", color: "#111" }}>

      {/* ── HERO ── */}
      <section style={{ padding: "96px 48px 72px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.08em", marginBottom: 32 }}>
            Work / PayZeep Merchant Admin
          </p>
          <h1 style={{
            fontSize: "clamp(48px, 8vw, 100px)", fontWeight: 400,
            letterSpacing: "-0.04em", color: "#111", lineHeight: 0.92,
            maxWidth: 800, margin: "0 0 28px",
          }}>
            PayZeep<br />Merchant Admin.
          </h1>
          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)", color: "#888",
            fontWeight: 300, maxWidth: 520, lineHeight: 1.7, margin: "0 0 36px",
          }}>
            Internal operations platform for compliance review, terminal management, merchant approvals, and settlement control.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Product Designer", "Paymi Solutions", "2024 – Ongoing", "Web App", "Internal Tool"].map((t) => (
              <span key={t} style={{
                background: "#f5f4ff", border: "1px solid #e0deff",
                color: BRAND, borderRadius: 20, padding: "6px 16px", fontSize: 11,
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 1 — THE BRIEF ── */}
      <section style={{ background: "#fafaf8", padding: SEC, borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <p style={sLabel}>The Brief</p>
          <h2 style={sHeading}>The operating room.</h2>
          <p style={body}>
            Every merchant using PayZeep&apos;s portal is supported by an operations team that reviews KYC documents,
            manages terminal assignments, processes payouts, and resolves disputes.
          </p>
          <p style={body}>
            But as the merchant products scaled, the internal systems behind them were still running on workarounds —
            emails, spreadsheets, and shared credentials that gave everyone access to everything.
          </p>
          <p style={{ ...body, marginBottom: 0 }}>
            My role was to design the operational layer that matched the actual complexity of the business.
            Not just screens. A system.
          </p>
        </div>

        {/* Stats strip */}
        <div style={{
          borderTop: "1px solid #ebebeb", borderBottom: "1px solid #ebebeb",
          padding: "72px 0", marginTop: 72, background: "#fff",
        }}>
          <div style={inner}>
            <div className="ma-stat-grid">
              {[
                { num: "15,000+", label: "px — KYC canvas designed" },
                { num: "6",       label: "Permission categories" },
                { num: "4",       label: "Business types supported" },
                { num: "2",       label: "Approval stages for bulk transfer" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p style={{
                    fontSize: "clamp(48px, 6vw, 88px)", fontWeight: 300,
                    letterSpacing: "-0.03em", color: "#111",
                    margin: 0, lineHeight: 1,
                  }}>
                    {num}
                  </p>
                  <p style={{
                    fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em",
                    color: "#aaa", margin: "12px 0 0",
                  }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — THE PROBLEM ── */}
      <section style={{ background: "#fff", padding: SEC, borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <p style={sLabel}>The Problem</p>
          <h2 style={sHeading}>Operations without tooling is a fragile equilibrium.</h2>
          <p style={{ ...body, marginBottom: 48 }}>
            The cracks were visible before the first screen was designed.
          </p>
          {[
            {
              num: "01",
              title: "KYC review was entirely manual",
              desc: "Documents arrived by email. Staff reviewed them by eye and responded by hand. Four business types, four different document requirements, zero structured flow. The margin for error was significant.",
            },
            {
              num: "02",
              title: "No audit trail",
              desc: "When a merchant's status changed, a payout was triggered, or a role was modified — there was no log. No accountability. For a licensed financial services provider, this isn't just an operational inconvenience. It's a compliance liability.",
            },
            {
              num: "03",
              title: "Bulk transfers had no approval structure",
              desc: "The ops team was processing bulk transfers without a formal approval layer. This was flagged directly during design review: 'We are missing a flow here — while initiating a batch transfer, the user will need to select the approval stage.' The risk was real.",
            },
            {
              num: "04",
              title: "Access was undifferentiated",
              desc: "Anyone with admin credentials could see everything and do everything. A support agent could accidentally — or intentionally — modify a settlement that should only be touched by a finance lead.",
            },
            {
              num: "05",
              title: "Terminal management had no home",
              desc: "As a PTSP, PayZeep deploys physical POS hardware. Tracking which terminal is active, which merchant it's assigned to, and its transaction history required manual cross-referencing. There was no operational view for any of it.",
            },
          ].map(({ num, title, desc }) => (
            <div key={num} style={{
              display: "flex", gap: 40, borderBottom: "1px solid #f2f2f2",
              padding: "36px 0", alignItems: "flex-start",
            }}>
              <p style={{
                fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 300,
                color: "#e8e4ff", margin: 0, lineHeight: 1,
                flexShrink: 0, minWidth: 80,
              }}>
                {num}
              </p>
              <div style={{ paddingTop: 6 }}>
                <p style={{ fontSize: 15, fontWeight: 500, color: "#111", margin: "0 0 8px" }}>
                  {title}
                </p>
                <p style={{ fontSize: 15, color: "#666", fontWeight: 300, lineHeight: 1.8, margin: 0 }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 3 — DASHBOARD ── */}
      <section style={{ background: "#f8f8fc", padding: SEC, borderTop: "1px solid #ebebf0" }}>
        <div style={inner}>
          <p style={sLabel}>Dashboard</p>
          <h2 style={sHeading}>Two dashboards. One operator.</h2>
          <p style={body}>
            The admin opens with two distinct dashboard views depending on what the operator is monitoring —
            POS Terminal activity or Payment Gateway activity. Same person, same login, different operational lens.
          </p>
          <p style={{ ...body, marginBottom: 48 }}>
            Switching between them doesn&apos;t reload the page or change navigation. It shifts the data
            context while keeping the interface stable.
          </p>
          <div style={grid2}>
            <AdminBrowser src="/merchantAdmin/Dashboard.png" alt="POS Terminal Dashboard" />
            <AdminBrowser src="/merchantAdmin/Dashboard-1.png" alt="Payment Gateway Dashboard" />
          </div>
          <p style={cap}>Left: POS Terminal dashboard. Right: Payment Gateway dashboard.</p>
        </div>
      </section>

      {/* ── SECTION 4 — KYC & COMPLIANCE ── */}
      <section style={{ background: "#fff", padding: SEC, borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <p style={sLabel}>KYC &amp; Compliance</p>
          <h2 style={sHeading}>Compliance isn&apos;t one flow. It&apos;s four.</h2>
          <p style={body}>
            KYC &amp; Compliance is the most extensive section in the admin — spanning a 15,000+ pixel Figma
            canvas across every state of a merchant&apos;s compliance journey.
          </p>
          <p style={body}>
            Rather than a generic status table, each business type has its own distinct compliance path.
            Sole Proprietor, Private Limited, Public Limited, and NGO each require different documents.
            The interface reflects that — the reviewer always knows exactly what should be there,
            not just whether a checkbox is ticked.
          </p>
          <p style={{ ...body, marginBottom: 48 }}>
            The ops team can approve directly in-product, request more information with a reason attached,
            or reject with a documented trail. Every action is logged.
          </p>
          <div style={{ marginBottom: 24 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/merchantAdmin/kyc_mockup.jpeg" alt="KYC Overview" style={{ width: "100%", borderRadius: 12, display: "block" }} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <AdminBrowser src="/merchantAdmin/business_details.png" alt="Business Details in KYC Review" />
          </div>
          <p style={cap}>KYC review structured by business type. Approve, request info, or reject — all in product.</p>
        </div>
      </section>

      {/* ── SECTION 5 — TERMINALS ── */}
      <section style={{ background: "#f8f8fc", padding: SEC, borderTop: "1px solid #ebebf0" }}>
        <div style={inner}>
          <p style={sLabel}>Terminals</p>
          <h2 style={sHeading}>Every terminal. Accounted for.</h2>
          <p style={body}>
            As a PTSP licence holder, PayZeep owns and deploys physical POS hardware.
            Terminal management is not a secondary feature — it&apos;s an operational responsibility.
          </p>
          <p style={body}>
            The Terminal Management section tracks every device: terminal ID, merchant ID, serial number,
            threshold limit, battery health, date created, and current status. A terminal going offline
            mid-day at a merchant&apos;s location is a service event that needs a response, not just a log entry.
            The design makes that visible.
          </p>
          <p style={{ ...body, marginBottom: 48 }}>
            Operators can view all terminals, drill into a specific device, add new terminals, or manage
            bulk terminal operations from one section.
          </p>
          <div style={{ marginBottom: 20 }}>
            <AdminBrowser src="/merchantAdmin/terminals.png" alt="All Terminals" />
          </div>
          <div style={grid2}>
            <AdminBrowser src="/merchantAdmin/route_terminal.png" alt="Terminal Detail" />
            <AdminBrowser src="/merchantAdmin/add_terminal.png" alt="Add Terminal" />
          </div>
          <p style={cap}>Terminal list → device detail → add flow. One section, full hardware visibility.</p>
        </div>
      </section>

      {/* ── SECTION 6 — CHARGES ── */}
      <section style={{ background: "#fff", padding: SEC, borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <p style={sLabel}>Charges</p>
          <h2 style={sHeading}>The ops team controls the rate logic.</h2>
          <p style={body}>
            Charge configuration is how PayZeep manages the fee structure across merchants.
            The Charges section lets the ops team define and configure transaction fees by type —
            percentage-based, flat fee, or a combined model.
          </p>
          <p style={{ ...body, marginBottom: 48 }}>
            Operators can view all active charge types and configure them without touching code.
            This was important for a team managing multiple merchant tiers with different pricing arrangements.
          </p>
          <div style={grid2}>
            <AdminBrowser src="/merchantAdmin/charges.png" alt="All Charges" />
            <AdminBrowser src="/merchantAdmin/configure_charges.png" alt="Configure Charges" />
          </div>
          <p style={cap}>View all charges. Configure by percentage, flat fee, or fee type.</p>
        </div>
      </section>

      {/* ── SECTION 7 — TRANSACTIONS ── */}
      <section style={{ background: "#f8f8fc", padding: SEC, borderTop: "1px solid #ebebf0" }}>
        <div style={inner}>
          <p style={sLabel}>Transactions</p>
          <h2 style={sHeading}>Every naira. Traceable.</h2>
          <p style={body}>
            The Transaction section gives the ops team a full view of payment activity across the
            platform — filterable by merchant, terminal, status, date, and payment method.
          </p>
          <p style={{ ...body, marginBottom: 48 }}>
            Two transaction views were prioritised for the admin: Payout Transactions and POS Transactions.
            Each keeps its own ledger because the questions the ops team asks about payouts are different
            from the ones they ask about POS activity.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <AdminBrowser src="/merchantAdmin/payout_transaction.png" alt="Payout Transactions" />
            <AdminBrowser src="/merchantAdmin/pos_transaction.png" alt="POS Transactions" />
          </div>
          <p style={cap}>Payout transactions and POS transactions. Separate views, separate accountability.</p>
        </div>
      </section>

      {/* ── SECTION 8 — SETTLEMENTS ── */}
      <section style={{ background: "#fff", padding: SEC, borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <p style={sLabel}>Settlements</p>
          <h2 style={sHeading}>The settlement black box, opened.</h2>
          <p style={body}>
            Settlement management was one of the areas merchants complained about most — and the admin
            is where the ops team resolves those complaints.
          </p>
          <p style={{ ...body, marginBottom: 48 }}>
            The Settlement section covers reports, approval queues, and FCY (foreign currency) configuration.
            Batch settlements are reviewed and approved before release. Every action creates a log entry.
          </p>
          <div style={{ marginBottom: 24 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/merchantAdmin/settlement_batchview%20mockup.jpeg" alt="Settlement Batch View" style={{ width: "100%", borderRadius: 12, display: "block" }} />
          </div>
          <AdminBrowser src="/merchantAdmin/settlement_report.png" alt="Settlement Reports" />
          <p style={cap}>Settlement batch view and reports. Approval before release, history after.</p>
        </div>
      </section>

      {/* ── SECTION 9 — MERCHANT MANAGEMENT ── */}
      <section style={{ background: "#f8f8fc", padding: SEC, borderTop: "1px solid #ebebf0" }}>
        <div style={inner}>
          <p style={sLabel}>Merchant Management</p>
          <h2 style={sHeading}>Every merchant. One place.</h2>
          <p style={body}>
            The Merchants section gives the ops team a searchable, filterable list of every PayZeep
            merchant — with KYC status, account status, and last activity visible inline.
          </p>
          <p style={body}>
            Clicking a merchant opens a side drawer preview instead of navigating to a new page.
            This came directly from how the ops team worked: they often needed to compare multiple merchants
            or track several reviews at once. Full-page navigation breaks that flow.
          </p>
          <p style={{ ...body, marginBottom: 48 }}>
            The Wallet section goes deeper — separating inflow and outflow transactions per merchant
            so the finance team can reconcile without guessing.
          </p>
          <div style={grid2}>
            <AdminBrowser src="/merchantAdmin/merchants.png" alt="Merchant Management" />
            <AdminBrowser src="/merchantAdmin/business.png" alt="Registered Merchants List" />
          </div>
          <p style={cap}>Merchant list with inline status. Side drawer keeps context intact.</p>
          <div style={{ ...grid2, marginTop: 20 }}>
            <AdminBrowser src="/merchantAdmin/merchant_wallet.png" alt="Wallet Inflow" />
            <AdminBrowser src="/merchantAdmin/merchant_outflow_transaction.png" alt="Wallet Outflow" />
          </div>
          <p style={cap}>Inflow and outflow wallet views. Two directions, one merchant.</p>
        </div>
      </section>

      {/* ── SECTION 10 — ROLES & PERMISSIONS ── */}
      <section style={{ background: "#fff", padding: SEC, borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <p style={sLabel}>Roles &amp; Permissions</p>
          <h2 style={sHeading}>Not everyone should see everything.</h2>
          <p style={body}>
            Role management went through more iterations than any other part of the admin.
            Early conversations leaned toward three tiers — Admin, Standard, View-Only.
            That is common in internal tools, but it was not enough for a licensed financial services
            company with multiple functional teams.
          </p>
          <p style={body}>
            The final permission model covers six categories: Dashboard, KYC &amp; Compliance,
            POS Management, Communication, Admins &amp; Controls, and Developer Tools.
            Each role is fully configurable within those categories.
          </p>
          <p style={{ ...body, marginBottom: 0 }}>
            Role Creation and Role Editing are separate flows — because creating a new role is different
            from updating an existing one, and that distinction matters for audit trails.
          </p>
        </div>
      </section>

      {/* ── NAVIGATION ARCHITECTURE ── */}
      <section style={{ background: "#f5f4ff", padding: SEC, borderTop: "1px solid #eae8ff" }}>
        <div style={inner}>
          <p style={sLabel}>Navigation Architecture</p>
          <h2 style={sHeading}>Structure as a design decision.</h2>
          <p style={{ ...body, marginBottom: 64 }}>
            The sidebar isn&apos;t a sitemap. It&apos;s a model of how an ops team thinks about their
            work — grouped by concern, not by data type. Hover each item.
          </p>
          <PayZeepAdminNavDemo />
        </div>
      </section>

      {/* ── SECTION 11 — MORE SCREENS ── */}
      <section style={{ background: "#f8f8fc", padding: SEC, borderTop: "1px solid #ebebf0" }}>
        <div style={inner}>
          <p style={sLabel}>More Screens</p>
          <h2 style={sHeading}>The full system.</h2>
          <p style={{ ...body, marginBottom: 48 }}>
            Selected screens from across the admin.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { src: "/merchantAdmin/add_transactionmodel.png",          label: "Add Transaction Model" },
              { src: "/merchantAdmin/batch_transfer.png",                label: "Batch Transfer" },
              { src: "/merchantAdmin/upload_batchtransfer.png",          label: "Upload Batch Transfer" },
              { src: "/merchantAdmin/transaction_limit_viewdetails.png", label: "Transaction Limit — Detail" },
              { src: "/merchantAdmin/transaction_limit.png",             label: "Transaction Limit" },
              { src: "/merchantAdmin/pos_management_orders.png",         label: "POS Management — Orders" },
              { src: "/merchantAdmin/pos_management_tracking.png",       label: "POS Management — Tracking" },
            ].map(({ src, label }) => (
              <div key={label}>
                <AdminBrowser src={src} alt={label} />
                <p style={{ fontSize: 11, color: "#aaa", textAlign: "center", marginTop: 10, textTransform: "uppercase", letterSpacing: "0.09em" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 12 — REFLECTION ── */}
      <section style={{ background: "#fff", padding: SEC, borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <p style={sLabel}>Reflection</p>
          <h2 style={{ ...sHeading, maxWidth: 700 }}>
            Internal tools are underdesigned because their users don&apos;t complain loudly.
          </h2>
          <p style={body}>
            Ops staff adapt. They build workarounds. They tolerate friction that would never be acceptable
            in a consumer product. Working on the Merchant Admin pushed me to advocate harder for the people
            doing the work every day.
          </p>
          <p style={body}>
            If I were revisiting it, I would invest earlier in a notification and alerting system.
            Right now the ops team still actively checks for updates — a KYC submission, a flagged transaction,
            a terminal going offline. A proactive notification layer would make the platform feel alive,
            not just accurate.
          </p>
          <p style={{ ...body, marginBottom: 48 }}>
            I would also get the ops team into Figma earlier. Some of the role permission decisions
            that took days in meetings would have been resolved in an hour with a clickable prototype
            in front of the people doing the work.
          </p>
          {[
            "Internal users deserve the same care as public-facing users.",
            "Permission systems need clarity more than complexity.",
            "Auditability is part of the user experience.",
          ].map((q) => (
            <p key={q} style={{
              fontSize: "clamp(16px, 1.8vw, 20px)", fontStyle: "italic",
              color: "#111", borderLeft: `2px solid ${BRAND}`,
              paddingLeft: 24, margin: "28px 0",
              fontWeight: 300, lineHeight: 1.65, maxWidth: 600,
            }}>
              &ldquo;{q}&rdquo;
            </p>
          ))}
        </div>
      </section>

      {/* ── SECTION 13 — CREDITS ── */}
      <section style={{ background: "#f8f8fc", padding: "72px 0", borderTop: "1px solid #ebebf0" }}>
        <div style={inner}>
          <p style={sLabel}>Credits</p>
          <p style={{ fontSize: 15, color: "#666", fontWeight: 300, lineHeight: 2, margin: 0 }}>
            Product Design — Femi Jimoh<br />
            Product Management — Oladunni Treasure
          </p>
        </div>
      </section>

      {/* ── NEXT PROJECT ── */}
      <Link
        href="/projects/payzeep-merchant-portal"
        style={{ display: "block", background: "#0d0d0d", padding: "80px 48px", textDecoration: "none" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 32 }}>
            Next Project
          </p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
            <div>
              <h2 style={{
                fontSize: "clamp(36px, 6vw, 80px)", fontWeight: 400, color: "#fff",
                letterSpacing: "-0.04em", lineHeight: 0.95, margin: "0 0 16px",
              }}>
                PayZeep Merchant Portal.
              </h2>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", fontWeight: 300, margin: 0 }}>
                Merchant-facing dashboard — onboarding, transactions, and withdrawals
              </p>
            </div>
            <span style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "rgba(255,255,255,0.2)", flexShrink: 0, lineHeight: 1 }}>→</span>
          </div>
        </div>
      </Link>

      {/* ── BACK ── */}
      <section style={{ padding: "36px 48px", borderTop: "1px solid #f0f0f0" }}>
        <Link href="/" style={{ fontSize: 12, color: "#bbb", textDecoration: "none" }}>
          ← Back to portfolio
        </Link>
      </section>

      <style>{`
        .ma-stat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 56px 40px;
        }
        @media (max-width: 900px) {
          .ma-stat-grid { grid-template-columns: repeat(2, 1fr); gap: 40px 24px; }
        }
        @media (max-width: 768px) {
          .ma-grid-3 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
