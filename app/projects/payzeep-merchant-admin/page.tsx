import Link from "next/link";
import PayZeepAdminNavDemo from "@/components/PayZeepAdminNavDemo";

export const metadata = {
  title: "PayZeep Merchant Admin — Femi Jimoh",
};

/* ── Inline mockup components ─────────────────────────────── */

function AdminBrowser({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 12, overflow: "hidden",
      boxShadow: "0 2px 40px rgba(0,0,0,0.10)",
    }}>
      {/* Chrome bar */}
      <div style={{
        height: 36, background: "#f0f0f0",
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
      {/* Screenshot */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
    </div>
  );
}

function LaptopMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ padding: "0 24px" }}>
      <div style={{
        background: "#d0d0d0", borderRadius: 16,
        padding: "12px 12px 0", boxShadow: "0 8px 48px rgba(0,0,0,0.15)",
      }}>
        {/* Screen */}
        <div style={{ background: "#fff", borderRadius: "8px 8px 0 0", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
        </div>
        {/* Base */}
        <div style={{ height: 24, background: "#d0d0d0", borderRadius: "0 0 16px 16px" }} />
      </div>
      {/* Notch */}
      <div style={{
        width: 80, height: 8, background: "#c0c0c0",
        borderRadius: "0 0 8px 8px", margin: "0 auto",
      }} />
    </div>
  );
}

/* ── Shared layout primitives ──────────────────────────────── */

function SectionLabel({ children }: { children: string }) {
  return (
    <p style={{
      fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em",
      color: "#bbb", margin: "0 0 14px",
    }}>
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 style={{
      fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 500, color: "#111",
      letterSpacing: "-0.02em", lineHeight: 1.05, margin: "0 0 48px",
    }}>
      {children}
    </h2>
  );
}

function Caption({ children }: { children: string }) {
  return (
    <p style={{
      fontSize: 13, color: "#888", textAlign: "center",
      marginTop: 20, marginBottom: 0,
    }}>
      {children}
    </p>
  );
}

const inner: React.CSSProperties = {
  maxWidth: 1100, margin: "0 auto", padding: "0 48px",
};

const grid2: React.CSSProperties = {
  display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16,
};

/* ── Page ──────────────────────────────────────────────────── */

export default function MerchantAdminPage() {
  return (
    <main style={{ background: "#fff", color: "#111" }}>

      {/* ── HERO ── */}
      <section style={{ padding: "96px 48px 64px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.08em", marginBottom: 32 }}>
            Work / PayZeep Merchant Admin
          </p>
          <h1 style={{
            fontSize: "clamp(48px, 8vw, 100px)", fontWeight: 400,
            letterSpacing: "-0.04em", color: "#111", lineHeight: 0.92,
            maxWidth: 800, margin: "0 0 24px",
          }}>
            PayZeep Merchant Admin.
          </h1>
          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)", color: "#aaa",
            fontWeight: 300, maxWidth: 540, lineHeight: 1.65,
          }}>
            Internal operations platform for compliance review, terminal management, merchant approvals, and settlement control.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 36 }}>
            {["Product Designer", "Paymi Solutions", "2024 – Ongoing", "Web App", "Internal Tool"].map((t) => (
              <span key={t} style={{
                background: "#f5f5f5", border: "1px solid #e8e8e8",
                color: "#666", borderRadius: 20, padding: "6px 16px", fontSize: 11,
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── DASHBOARD ── */}
      <section style={{ background: "#f7f7f7", padding: "80px 0", borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <SectionLabel>Dashboard</SectionLabel>
          <SectionHeading>Two lenses. Same operator.</SectionHeading>
          <div style={grid2}>
            <div>
              <AdminBrowser src="/merchantAdmin/Dashboard.png" alt="POS Terminal Dashboard" />
              <p style={{ fontSize: 11, color: "#bbb", textAlign: "center", marginTop: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                POS Terminal Dashboard
              </p>
            </div>
            <div>
              <AdminBrowser src="/merchantAdmin/Dashboard-1.png" alt="Payment Gateway Dashboard" />
              <p style={{ fontSize: 11, color: "#bbb", textAlign: "center", marginTop: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Payment Gateway Dashboard
              </p>
            </div>
          </div>
          <Caption>Two dashboard views. Same operator. Different lenses.</Caption>
        </div>
      </section>

      {/* ── TRANSACTIONS ── */}
      <section style={{ background: "#fff", padding: "80px 0", borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <SectionLabel>Transactions</SectionLabel>
          <SectionHeading>Every payment. Full context.</SectionHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <AdminBrowser src="/merchantAdmin/payout_transaction.png" alt="Payout Transactions" />
              <p style={{ fontSize: 11, color: "#bbb", textAlign: "center", marginTop: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Payout Transactions
              </p>
            </div>
            <div>
              <AdminBrowser src="/merchantAdmin/pos_transaction.png" alt="POS Transactions" />
              <p style={{ fontSize: 11, color: "#bbb", textAlign: "center", marginTop: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                POS Transactions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHARGES ── */}
      <section style={{ background: "#f9f9f9", padding: "80px 0", borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <SectionLabel>Charges</SectionLabel>
          <SectionHeading>Ops-controlled rate logic.</SectionHeading>
          <div style={grid2}>
            <div>
              <AdminBrowser src="/merchantAdmin/charges.png" alt="All Charges" />
              <p style={{ fontSize: 11, color: "#bbb", textAlign: "center", marginTop: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                All Charges
              </p>
            </div>
            <div>
              <AdminBrowser src="/merchantAdmin/configure_charges.png" alt="Configure Charges" />
              <p style={{ fontSize: 11, color: "#bbb", textAlign: "center", marginTop: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Configure Charges
              </p>
            </div>
          </div>
          <Caption>Configurable by percentage, flat fee, or fee type. Ops team controls the rate logic.</Caption>
        </div>
      </section>

      {/* ── TERMINALS ── */}
      <section style={{ background: "#fff", padding: "80px 0", borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <SectionLabel>Terminals</SectionLabel>
          <SectionHeading>Every terminal. Full visibility.</SectionHeading>
          <div style={{ marginBottom: 20 }}>
            <AdminBrowser src="/merchantAdmin/terminals.png" alt="All Terminals" />
            <p style={{ fontSize: 11, color: "#bbb", textAlign: "center", marginTop: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              All Terminals
            </p>
          </div>
          <div style={grid2}>
            <div>
              <AdminBrowser src="/merchantAdmin/route_terminal.png" alt="Terminal Detail" />
              <p style={{ fontSize: 11, color: "#bbb", textAlign: "center", marginTop: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Terminal Detail — Merchant ID, Serial, Threshold, Battery
              </p>
            </div>
            <div>
              <AdminBrowser src="/merchantAdmin/add_terminal.png" alt="Add Terminal" />
              <p style={{ fontSize: 11, color: "#bbb", textAlign: "center", marginTop: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Add Terminal Flow
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUSINESSES / MERCHANTS ── */}
      <section style={{ background: "#f9f9f9", padding: "80px 0", borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <SectionLabel>Businesses &amp; Merchants</SectionLabel>
          <SectionHeading>Registered merchants at a glance.</SectionHeading>
          <div style={grid2}>
            <div>
              <AdminBrowser src="/merchantAdmin/business.png" alt="Registered Merchants List" />
              <p style={{ fontSize: 11, color: "#bbb", textAlign: "center", marginTop: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Registered Merchants List
              </p>
            </div>
            <div>
              <AdminBrowser src="/merchantAdmin/merchants.png" alt="Merchant Management" />
              <p style={{ fontSize: 11, color: "#bbb", textAlign: "center", marginTop: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Merchant Management
              </p>
            </div>
          </div>
          <Caption>Every registered merchant. Status, portal path, last activity — visible at a glance.</Caption>
        </div>
      </section>

      {/* ── KYC & COMPLIANCE ── */}
      <section style={{ background: "#fff", padding: "80px 0", borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <SectionLabel>KYC &amp; Compliance</SectionLabel>
          <SectionHeading>Four entities. Four paths.</SectionHeading>
          <div style={{ marginBottom: 32 }}>
            <LaptopMockup src="/merchantAdmin/kyc_mockup.jpeg" alt="KYC Overview" />
          </div>
          <div>
            <AdminBrowser src="/merchantAdmin/business_details.png" alt="Business Details in KYC Review" />
            <p style={{ fontSize: 11, color: "#bbb", textAlign: "center", marginTop: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Business Details — KYC Review
            </p>
          </div>
          <Caption>KYC review structured by business type. Four entity types, four compliance paths.</Caption>
        </div>
      </section>

      {/* ── SETTLEMENTS ── */}
      <section style={{ background: "#f9f9f9", padding: "80px 0", borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <SectionLabel>Settlements</SectionLabel>
          <SectionHeading>No more settlement black boxes.</SectionHeading>
          <div style={{ marginBottom: 20 }}>
            <LaptopMockup src="/merchantAdmin/settlement_batchview%20mockup.jpeg" alt="Settlement Batch View" />
          </div>
          <div>
            <AdminBrowser src="/merchantAdmin/settlement_report.png" alt="Settlement Reports" />
            <p style={{ fontSize: 11, color: "#bbb", textAlign: "center", marginTop: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Settlement Reports
            </p>
          </div>
          <Caption>Settlement history, approval queue, and FCY configuration in one section.</Caption>
        </div>
      </section>

      {/* ── MERCHANT WALLET ── */}
      <section style={{ background: "#fff", padding: "80px 0", borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <SectionLabel>Merchant Wallet</SectionLabel>
          <SectionHeading>Inflow and outflow. One view.</SectionHeading>
          <div style={grid2}>
            <div>
              <AdminBrowser src="/merchantAdmin/merchant_wallet.png" alt="Wallet Inflow" />
              <p style={{ fontSize: 11, color: "#bbb", textAlign: "center", marginTop: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Inflow Transactions
              </p>
            </div>
            <div>
              <AdminBrowser src="/merchantAdmin/merchant_outflow_transaction.png" alt="Wallet Outflow" />
              <p style={{ fontSize: 11, color: "#bbb", textAlign: "center", marginTop: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Outflow Transactions
              </p>
            </div>
          </div>
          <Caption>Inflow and outflow. Two wallet views, one merchant.</Caption>
        </div>
      </section>

      {/* ── NAVIGATION ARCHITECTURE ── */}
      <section style={{ background: "#fafafa", padding: "80px 0", borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <SectionLabel>Navigation Architecture</SectionLabel>
          <SectionHeading>Structure as a design decision.</SectionHeading>
          <p style={{
            fontSize: "clamp(15px, 1.8vw, 18px)", color: "#666", fontWeight: 300,
            lineHeight: 1.8, maxWidth: 640, marginBottom: 64,
          }}>
            The sidebar isn't a sitemap. It's a model of how an ops team thinks about their work — grouped by concern, not by data type. Hover each item.
          </p>
          <PayZeepAdminNavDemo />
        </div>
      </section>

      {/* ── MORE SCREENS ── */}
      <section style={{ background: "#f9f9f9", padding: "80px 0", borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <SectionLabel>More Screens</SectionLabel>
          <SectionHeading>The full surface area.</SectionHeading>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { src: "/merchantAdmin/add_transactionmodel.png",        label: "Add Transaction Model" },
              { src: "/merchantAdmin/batch_transfer.png",              label: "Batch Transfer" },
              { src: "/merchantAdmin/upload_batchtransfer.png",        label: "Upload Batch Transfer" },
              { src: "/merchantAdmin/transaction_limit_viewdetails.png", label: "Transaction Limit — Detail" },
              { src: "/merchantAdmin/transaction_limit.png",           label: "Transaction Limit" },
              { src: "/merchantAdmin/pos_management_orders.png",       label: "POS Management — Orders" },
              { src: "/merchantAdmin/pos_management_tracking.png",     label: "POS Management — Tracking" },
            ].map(({ src, label }) => (
              <div key={label}>
                <AdminBrowser src={src} alt={label} />
                <p style={{ fontSize: 11, color: "#bbb", textAlign: "center", marginTop: 10, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
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
      <section style={{ padding: "40px 48px", borderTop: "1px solid #f0f0f0" }}>
        <Link href="/" style={{ fontSize: 12, color: "#bbb", textDecoration: "none" }}>
          ← Back to portfolio
        </Link>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .ma-grid-2 { grid-template-columns: 1fr !important; }
          .ma-grid-3 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
