import Link from "next/link";
import BrowserMockup from "@/components/BrowserMockup";
import ScreenCarousel from "@/components/ScreenCarousel";
import type { ReactNode, CSSProperties } from "react";

export const metadata = {
  title: "PayZeep Merchant Portal — Femi Jimoh",
};

function SecLabel({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <p style={{ fontSize: 10, color: "#bbb", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12, ...style }}>
      {children}
    </p>
  );
}

function Label({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <p style={{
      fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em",
      color: light ? "rgba(255,255,255,0.3)" : "#aaa",
      fontFamily: "monospace", textAlign: "center", marginTop: 14, marginBottom: 0,
    }}>
      {children}
    </p>
  );
}

const ONBOARDING_SCREENS = [
  { src: "/merchantPortal/onboarding/Login.png",               label: "Login" },
  { src: "/merchantPortal/onboarding/Sign%20up.png",           label: "Sign Up" },
  { src: "/merchantPortal/onboarding/Email%20Verification.png",label: "Email Verification" },
  { src: "/merchantPortal/onboarding/Forgot%20Password.png",   label: "Forgot Password" },
  { src: "/merchantPortal/onboarding/Reset%20Password.png",    label: "Reset Password" },
];

export default function MerchantPortalPage() {
  return (
    <main style={{ background: "#fff", color: "#111" }}>

      {/* ── HERO TEXT ── */}
      <section className="mp-sec" style={{ paddingBottom: 64 }}>
        <div className="mp-inner">
          <p style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.08em", marginBottom: 32 }}>
            Work / PayZeep Merchant Portal
          </p>
          <h1 style={{
            fontSize: "clamp(52px, 9vw, 108px)", fontWeight: 400,
            letterSpacing: "-0.04em", color: "#111", lineHeight: 0.92,
            maxWidth: 860, margin: "0 0 24px",
          }}>
            PayZeep Merchant Portal.
          </h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#aaa", fontWeight: 300, maxWidth: 560, lineHeight: 1.65 }}>
            A complete payment dashboard for Nigeria&apos;s everyday merchant — from first login to first withdrawal.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 36 }}>
            {["Product Designer", "Paymi Solutions", "Jun 2024 – Ongoing", "Web App"].map((t) => (
              <span key={t} style={{ background: "#f5f5f5", border: "1px solid #e8e8e8", color: "#666", borderRadius: 20, padding: "6px 16px", fontSize: 11 }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── HERO SHOWCASE — dark, immersive ── */}
      <div style={{ background: "#0a0d1a", padding: "56px 40px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <BrowserMockup
            src="/merchantPortal/dashboard/Dashboard%20Filled%20State.png"
            alt="PayZeep Merchant Portal — Dashboard Live State"
            bg="#111d30"
          />
          <p style={{ textAlign: "center", fontSize: 10, color: "rgba(255,255,255,0.25)", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.14em", marginTop: 20 }}>
            PayZeep Merchant Portal — Dashboard (Live State)
          </p>
        </div>
      </div>

      {/* ── THE PROJECT ── */}
      <section className="mp-sec" style={{ borderTop: "1px solid #f0f0f0" }}>
        <div className="mp-inner">
          <SecLabel>The Project</SecLabel>
          <h2 className="mp-h2">One portal. Two lives.</h2>
          <div className="mp-two-col">
            <div>
              <p className="mp-body" style={{ marginBottom: 20 }}>
                When I joined PayZeep in June 2024, the Merchant Portal existed — but it was still figuring itself out. Multiple iterations, shifting priorities, and expanding capabilities meant the experience needed steady, deliberate refinement.
              </p>
              <p className="mp-body">
                The portal serves <strong style={{ fontWeight: 500, color: "#111" }}>two completely different moments</strong> in a merchant&apos;s life: the <strong style={{ fontWeight: 500, color: "#111" }}>pre-live phase</strong> — onboarding, KYC, setting up payment tools — and the <strong style={{ fontWeight: 500, color: "#111" }}>live phase</strong> — transacting, tracking, withdrawing, growing. One product. Two very different jobs.
              </p>
            </div>
            <div className="mp-stat-grid">
              {[
                { num: "4",  label: "Business types supported" },
                { num: "6",  label: "Dashboard states designed" },
                { num: "3",  label: "Payment tool types" },
                { num: "2",  label: "Portal phases" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p style={{ fontSize: "clamp(40px, 5vw, 56px)", fontWeight: 400, color: "#111", letterSpacing: "-0.04em", lineHeight: 1, margin: "0 0 8px" }}>{num}</p>
                  <p style={{ fontSize: 11, color: "#bbb", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NAVIGATION STRUCTURE ── */}
      <section className="mp-sec" style={{ background: "#fafafa", borderTop: "1px solid #f0f0f0" }}>
        <div className="mp-inner">
          <SecLabel>Navigation Structure</SecLabel>
          <h2 className="mp-h2">Built like money moves.</h2>
          <p style={{ fontSize: 18, color: "#aaa", fontWeight: 300, marginBottom: 56, lineHeight: 1.6 }}>
            The sidebar isn&apos;t a feature list. It&apos;s a map of how merchants think about their money.
          </p>
          <div className="mp-nav-col">
            <div style={{ background: "#111", borderRadius: 12, padding: 32, width: "fit-content", minWidth: 260 }}>
              <div style={{ fontSize: 13, color: "#fff", lineHeight: 2.4, paddingLeft: 12, borderLeft: "2px solid #4a6cf7" }}>Dashboard</div>
              <div style={{ fontSize: 10, color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4, marginTop: 20 }}>Business Tools</div>
              {["Point of Sale", "Payment Links", "Virtual Accounts"].map((item) => (
                <div key={item} style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 2.4, paddingLeft: 12 }}>{item}</div>
              ))}
              <div style={{ fontSize: 10, color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4, marginTop: 20 }}>Incoming</div>
              {["Web Transactions", "POS Transactions", "Dispute"].map((item) => (
                <div key={item} style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 2.4, paddingLeft: 12 }}>{item}</div>
              ))}
              <div style={{ fontSize: 10, color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4, marginTop: 20 }}>Outgoing</div>
              {["Payout", "Transfer", "Settlements", "Sub Accounts"].map((item) => (
                <div key={item} style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 2.4, paddingLeft: 12 }}>{item}</div>
              ))}
              <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                {["Support", "Developer Tools", "Settings"].map((item) => (
                  <div key={item} style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 2.4, paddingLeft: 12 }}>{item}</div>
                ))}
              </div>
            </div>
            <div>
              <p className="mp-body" style={{ marginBottom: 20 }}>
                The question isn&apos;t <strong style={{ fontWeight: 500, color: "#111" }}>&apos;what does the product do&apos;</strong>. It&apos;s <strong style={{ fontWeight: 500, color: "#111" }}>&apos;what am I trying to do with my money right now&apos;</strong>.
              </p>
              <p className="mp-body">
                Business Tools surfaces money-generating actions first. Incoming shows what arrived. Outgoing shows what left. That sequence — generate, receive, send — mirrors how merchants actually think through their day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="mp-sec" style={{ borderTop: "1px solid #f0f0f0" }}>
        <div className="mp-inner">
          <SecLabel>The Problem</SecLabel>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 400, letterSpacing: "-0.04em", color: "#111", maxWidth: 720, lineHeight: 1.05, marginBottom: 64 }}>
            Five things quietly failing merchants.
          </h2>
          {[
            { num: "01", title: "Test mode was invisible",      body: "Merchants onboarded, set up their account, and wondered why nothing processed. They were in test mode — but nothing made that obvious or showed them the next step." },
            { num: "02", title: "KYC activation was a maze",    body: "Four business types. Different documents for each. No structured flow. Merchants submitted what they guessed was right, then waited for an email that might never come." },
            { num: "03", title: "Payment tools were buried",    body: "PayZeep offers payment links, virtual accounts, and POS — but merchants landing on the dashboard had no obvious path into any of them." },
            { num: "04", title: "Settlements were a black box", body: "When does my money arrive? Why is the balance …0.00? Is this an error? These questions filled support because the product had no answers on screen." },
            { num: "05", title: "No reassuring first screen",   body: "Most merchants check their dashboard when something feels wrong. If the first thing they see doesn't immediately answer 'am I okay?' — they lose confidence fast." },
          ].map(({ num, title, body }) => (
            <div key={num} className="mp-prob-row">
              <p style={{ fontSize: 11, color: "#bbb", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0, paddingTop: 4 }}>{num}</p>
              <div>
                <p style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 10, marginTop: 0 }}>{title}</p>
                <p style={{ fontSize: 15, color: "#777", fontWeight: 300, lineHeight: 1.8, margin: 0 }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ONBOARDING — full carousel, dark ── */}
      <section style={{ borderTop: "1px solid #f0f0f0" }}>
        <div className="mp-inner" style={{ paddingTop: 80, paddingBottom: 0 }}>
          <SecLabel>Onboarding</SecLabel>
          <h2 className="mp-h2">Getting in.</h2>
          <p style={{ fontSize: 18, color: "#aaa", fontWeight: 300, lineHeight: 1.6, paddingBottom: 56 }}>
            Login, signup, email verification, password reset — every entry point designed for first-time merchants.
          </p>
        </div>
        <ScreenCarousel screens={ONBOARDING_SCREENS} bg="#0d1117" mockupBg="#e8edf5" />
      </section>

      {/* ── TEST VS LIVE MODE ── */}
      <section className="mp-sec" style={{ borderTop: "1px solid #f0f0f0" }}>
        <div className="mp-inner">
          <SecLabel>Mode System</SecLabel>
          <h2 style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 400, letterSpacing: "-0.04em", color: "#111", maxWidth: 760, lineHeight: 1.1, marginBottom: 48 }}>
            Merchants should never have to guess where they stand.
          </h2>
          <p className="mp-body" style={{ marginBottom: 24 }}>
            One of the earliest decisions I pushed for was making <strong style={{ fontWeight: 500, color: "#111" }}>Test Mode and Live Mode</strong> a persistent, always-visible part of the experience. Not buried in settings. Not a one-time toast.
          </p>
          <p className="mp-body" style={{ marginBottom: 64 }}>
            We designed <strong style={{ fontWeight: 500, color: "#111" }}>six distinct dashboard states</strong>: Empty, Test Active, Test Inactive, Live Active, Live Inactive, and Filled. Each reflects a different moment in the merchant journey — because the same screen means completely different things depending on where you are.
          </p>

          {/* Two dashboards — big, stacked */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ background: "#0a0d1a", borderRadius: 16, padding: "40px 40px 28px" }}>
              <BrowserMockup src="/merchantPortal/dashboard/Dashboard%20Empty%20State.png" alt="Dashboard Empty State" bg="#111d30" />
              <Label light>Dashboard — Test Mode (Empty State)</Label>
            </div>
            <div style={{ background: "#0a0d1a", borderRadius: 16, padding: "40px 40px 28px" }}>
              <BrowserMockup src="/merchantPortal/dashboard/Dashboard%20Filled%20State.png" alt="Dashboard Filled State" bg="#111d30" />
              <Label light>Dashboard — Live Mode (Filled State)</Label>
            </div>
            <div style={{ background: "#0a101a", borderRadius: 16, padding: "40px 40px 28px" }}>
              <BrowserMockup src="/merchantPortal/dashboard/USD%20Dashboard.png" alt="USD Dashboard" bg="#0d1a2e" />
              <Label light>Dashboard — USD Wallet Added (New Feature)</Label>
              <p style={{ textAlign: "center", fontSize: 13, color: "rgba(255,255,255,0.25)", fontWeight: 300, marginTop: 10 }}>
                Merchants can now see total balance in both NGN and USD from one screen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── KYB ACTIVATION FLOW ── */}
      <section className="mp-sec" style={{ background: "#fff8f0", borderTop: "1px solid #f0f0f0" }}>
        <div className="mp-inner">
          <SecLabel>KYB Activation Flow</SecLabel>
          <h2 className="mp-h2">Not one flow. Four.</h2>
          <p style={{ fontSize: 18, color: "#aaa", fontWeight: 300, marginBottom: 48, lineHeight: 1.6 }}>
            Each business type walks its own path. No irrelevant fields. No guessing.
          </p>
          <p className="mp-body" style={{ marginBottom: 20 }}>
            Nigerian regulatory requirements mean a <strong style={{ fontWeight: 500, color: "#111" }}>Sole Proprietor</strong> needs completely different documents from a <strong style={{ fontWeight: 500, color: "#111" }}>Private Limited Company</strong>, and both differ from an <strong style={{ fontWeight: 500, color: "#111" }}>NGO</strong>. A single generic form might have worked technically — but it would have created friction for real users.
          </p>
          <ul style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 2, marginBottom: 48, paddingLeft: 0, listStyle: "none" }}>
            <li>• <strong style={{ fontWeight: 500, color: "#111" }}>Sole Proprietor</strong> → Payout Account → Sole Details → Business Information</li>
            <li>• <strong style={{ fontWeight: 500, color: "#111" }}>Private LLC</strong> → Payout Account → Director → Shareholder → Business Details</li>
            <li>• <strong style={{ fontWeight: 500, color: "#111" }}>Public LLC</strong> → Extended with additional documentation</li>
            <li>• <strong style={{ fontWeight: 500, color: "#111" }}>NGO / Gov Body / Professional Body</strong> → Organisation-specific documentation</li>
          </ul>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 56 }}>
            {["Sole Proprietor", "Private LLC", "Public LLC", "NGO", "Gov Body", "Professional Body"].map((t) => (
              <span key={t} style={{ border: "1px solid #e8d8c0", background: "#fff8f0", color: "#8a6020", borderRadius: 20, padding: "5px 16px", fontSize: 13 }}>{t}</span>
            ))}
          </div>
          <div className="mp-kyb-grid">
            {[
              { src: "/merchantPortal/business-type/Dashboard.png",               label: "Business Type Selection" },
              { src: "/merchantPortal/business-type/Payout%20Acct..png",          label: "Payout Account Setup" },
              { src: "/merchantPortal/business-type/Sole%20Details.png",          label: "Sole Proprietor Details" },
              { src: "/merchantPortal/business-type/Business%20Doc..png",         label: "Business Documents" },
              { src: "/merchantPortal/business-type/Business%20Doc.-Partner.png", label: "Partner Business Documents" },
              { src: "/merchantPortal/business-type/Success.png",                 label: "BA in Review — Submission Confirmed" },
            ].map(({ src, label }) => (
              <div key={label}>
                <BrowserMockup src={src} alt={label} bg="#fff8f0" />
                <Label>{label}</Label>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY SCREENS ── */}
      <section className="mp-sec" style={{ background: "#0d0d0d" }}>
        <div className="mp-inner">
          <SecLabel style={{ color: "#444" }}>Key Screens</SecLabel>
          <h2 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 400, letterSpacing: "-0.04em", color: "#fff", lineHeight: 0.95, marginBottom: 16 }}>
            The full product.
          </h2>
          <p style={{ fontSize: 16, color: "#555", fontWeight: 300, lineHeight: 1.8, maxWidth: 560, marginBottom: 72 }}>
            Transactions, settlements, settings, developer tools — every screen designed around what a merchant needs in the moment, not what the backend can expose.
          </p>

          {/* Transactions */}
          <p className="mp-group-label">Transactions &amp; Finance</p>
          <div className="mp-grid-2" style={{ marginBottom: 12 }}>
            <div>
              <BrowserMockup src="/merchantPortal/Transaction.png" alt="Web Transactions" bg="#0a0a1a" />
              <Label light>Web Transactions</Label>
            </div>
            <div>
              <BrowserMockup src="/merchantPortal/Transfer.png" alt="Single Transfer" bg="#0a0a1a" />
              <Label light>Single Transfer</Label>
            </div>
          </div>
          <div style={{ marginBottom: 4 }}>
            <BrowserMockup src="/merchantPortal/Bulk%20Transfer.png" alt="Bulk Transfer" bg="#0a0a1a" />
            <Label light>Bulk Transfer</Label>
          </div>

          {/* Settlements */}
          <p className="mp-group-label" style={{ marginTop: 64 }}>Settlements &amp; Payouts</p>
          <div className="mp-grid-2">
            <div>
              <BrowserMockup src="/merchantPortal/Settlement.png" alt="Settlements" bg="#0a0a1a" />
              <Label light>Settlements</Label>
            </div>
            <div>
              <BrowserMockup src="/merchantPortal/Payout%20Account%205.png" alt="Payout Accounts" bg="#0a0a1a" />
              <Label light>Payout Accounts</Label>
            </div>
          </div>

          {/* Settings */}
          <p className="mp-group-label" style={{ marginTop: 64 }}>Settings &amp; Account</p>
          <div className="mp-grid-3" style={{ marginBottom: 12 }}>
            {[
              { src: "/merchantPortal/Profile.png",            label: "Personal Profile" },
              { src: "/merchantPortal/Business%20Profile.png", label: "Business Profile" },
              { src: "/merchantPortal/Security.png",           label: "Security" },
            ].map(({ src, label }) => (
              <div key={label}>
                <BrowserMockup src={src} alt={label} bg="#0a0a1a" />
                <Label light>{label}</Label>
              </div>
            ))}
          </div>
          <div className="mp-grid-3">
            {[
              { src: "/merchantPortal/Teams-1.png",       label: "Team Management" },
              { src: "/merchantPortal/Role.png",          label: "Role Management" },
              { src: "/merchantPortal/Sub%20Account.png", label: "Sub Accounts" },
            ].map(({ src, label }) => (
              <div key={label}>
                <BrowserMockup src={src} alt={label} bg="#0a0a1a" />
                <Label light>{label}</Label>
              </div>
            ))}
          </div>

          {/* Developer Tools */}
          <p className="mp-group-label" style={{ marginTop: 64 }}>Developer Tools</p>
          <div className="mp-grid-3">
            {[
              { src: "/merchantPortal/API%20Keys.png",           label: "API Keys" },
              { src: "/merchantPortal/API%20Keys-1.png",         label: "API Key Created" },
              { src: "/merchantPortal/Approval%20Settings.png",  label: "Approval Settings" },
            ].map(({ src, label }) => (
              <div key={label}>
                <BrowserMockup src={src} alt={label} bg="#0a0a1a" />
                <Label light>{label}</Label>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REFLECTION ── */}
      <section className="mp-sec" style={{ borderTop: "1px solid #f0f0f0" }}>
        <div className="mp-inner" style={{ maxWidth: 860 }}>
          <SecLabel>Reflection</SecLabel>
          <p style={{ fontSize: "clamp(28px, 4vw, 52px)", fontStyle: "italic", fontWeight: 300, color: "#111", letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: 48 }}>
            &ldquo;Every zero, every pending status, every loading spinner carries emotional weight.&rdquo;
          </p>
          <p className="mp-body" style={{ marginBottom: 20 }}>
            Mobile should have had more weight earlier. The portal is designed at 1440px — but a meaningful percentage of merchant logins happen on mid-range Android browsers. Several patterns had to be adapted later, and some of that cleanup is still ongoing.
          </p>
          <p className="mp-body" style={{ marginBottom: 20 }}>
            I would also push harder for usability sessions with actual market traders earlier in the process. A lot of the KYC decisions came from stakeholder conversations and assumptions. The flow works — but I would trust it more after watching someone move through it without prior context.
          </p>
          <p className="mp-body" style={{ marginBottom: 56 }}>
            This project sharpened the way I think about <strong style={{ fontWeight: 500, color: "#111" }}>financial anxiety in product design</strong>. A merchant is rarely opening a dashboard for fun. They are checking if money came in, if something failed, or if the system can be trusted enough for tomorrow&apos;s business.
          </p>
          {[
            "Designing for finance means designing for reassurance",
            "Clear status communication beats clever interface tricks every time",
            "Good onboarding is less about forms and more about confidence",
            "Real merchant behaviour should shape the next round of decisions",
          ].map((item) => (
            <div key={item} style={{ borderTop: "1px solid #f0f0f0", padding: "22px 0" }}>
              <p style={{ fontSize: 16, fontWeight: 500, color: "#111", margin: 0 }}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CREDITS ── */}
      <section style={{ padding: "64px 48px", borderTop: "1px solid #f0f0f0" }}>
        <div className="mp-inner">
          <SecLabel>Credits</SecLabel>
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            {[
              { name: "Oladunni Treasure", role: "Product Designer" },
              { name: "Femi Jimoh",        role: "Product Designer" },
            ].map(({ name, role }) => (
              <div key={name}>
                <p style={{ fontSize: 16, fontWeight: 500, color: "#111", margin: "0 0 4px" }}>{name}</p>
                <p style={{ fontSize: 13, color: "#bbb", fontWeight: 300, margin: 0 }}>{role}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid #f0f0f0" }}>
            <Link href="/" style={{ fontSize: 12, color: "#bbb", textDecoration: "none" }}>← Back to portfolio</Link>
          </div>
        </div>
      </section>

      <style>{`
        .mp-inner { max-width: 1200px; margin: 0 auto; }
        .mp-sec { padding: 96px 48px; }
        .mp-h2 {
          font-size: clamp(40px, 7vw, 88px);
          font-weight: 400; letter-spacing: -0.04em;
          color: #111; line-height: 0.95; margin: 0 0 48px;
        }
        .mp-body {
          font-size: 16px; color: #555; font-weight: 300;
          line-height: 1.9; max-width: 640px; margin: 0;
        }
        .mp-group-label {
          font-size: 10px; color: #444; text-transform: uppercase;
          letter-spacing: 0.14em; margin: 0 0 24px;
        }
        .mp-two-col {
          display: grid; grid-template-columns: 55% 45%;
          gap: 64px; align-items: start;
        }
        .mp-nav-col {
          display: grid; grid-template-columns: auto 1fr;
          gap: 64px; align-items: start;
        }
        .mp-stat-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 40px;
        }
        .mp-prob-row {
          border-top: 1px solid #f0f0f0; padding: 32px 0;
          display: grid; grid-template-columns: 48px 1fr;
          gap: 32px; align-items: start;
        }
        .mp-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .mp-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .mp-kyb-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }

        @media (max-width: 900px) {
          .mp-sec { padding: 64px 32px; }
          .mp-two-col { grid-template-columns: 1fr; gap: 48px; }
          .mp-nav-col { grid-template-columns: 1fr; gap: 40px; }
          .mp-grid-3 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .mp-sec { padding: 48px 20px; }
          .mp-body { max-width: 100%; }
          .mp-h2 { margin-bottom: 32px; }
          .mp-two-col { grid-template-columns: 1fr; gap: 32px; }
          .mp-nav-col { grid-template-columns: 1fr; gap: 32px; }
          .mp-stat-grid { grid-template-columns: 1fr 1fr; gap: 24px; }
          .mp-prob-row { grid-template-columns: 1fr; gap: 8px; }
          .mp-grid-3 { grid-template-columns: 1fr; }
          .mp-grid-2 { grid-template-columns: 1fr; }
          .mp-kyb-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
