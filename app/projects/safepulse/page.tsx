import Link from "next/link";

export const metadata = {
  title: "SafePulse — Femi Jimoh",
};

/* ── Browser mockup ───────────────────────────────────────── */

function SafeBrowser({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 12, overflow: "hidden",
      boxShadow: "0 2px 40px rgba(0,0,0,0.09)",
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
          <span style={{ fontSize: 11, color: "#aaa", fontFamily: "monospace" }}>app.safepulse.com</span>
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
    </div>
  );
}

/* ── Shared tokens ────────────────────────────────────────── */

const inner: React.CSSProperties = { maxWidth: 1100, margin: "0 auto", padding: "0 48px" };
const BRAND = "#0d6efd";

const sLabel: React.CSSProperties = {
  fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em",
  color: "#bbb", margin: "0 0 14px",
};

const sHeading: React.CSSProperties = {
  fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 500, color: "#111",
  letterSpacing: "-0.02em", lineHeight: 1.05, margin: "0 0 24px",
};

const body: React.CSSProperties = {
  fontSize: 16, color: "#444", fontWeight: 300, lineHeight: 1.9,
  maxWidth: 640, margin: "0 0 20px",
};

const cap: React.CSSProperties = {
  fontSize: 13, color: "#888", textAlign: "center",
  marginTop: 16, marginBottom: 0, fontStyle: "italic",
};

const flowImg: React.CSSProperties = {
  width: "100%", display: "block", borderRadius: 12,
};

const SEC = "100px 0";

/* ── Page ────────────────────────────────────────────────── */

export default function SafePulsePage() {
  return (
    <main style={{ background: "#fff", color: "#111" }}>

      {/* ── HERO ── */}
      <section style={{ padding: "96px 48px 72px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.08em", marginBottom: 32 }}>
            Work / SafePulse
          </p>
          <h1 style={{
            fontSize: "clamp(48px, 8vw, 100px)", fontWeight: 400,
            letterSpacing: "-0.04em", color: "#111", lineHeight: 0.92,
            maxWidth: 800, margin: "0 0 28px",
          }}>
            SafePulse.
          </h1>
          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)", color: "#888",
            fontWeight: 300, maxWidth: 520, lineHeight: 1.7, margin: "0 0 36px",
          }}>
            Civic safety intelligence platform for browsing verified incidents, reporting with KYC, and exploring risk patterns across Nigeria.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Product Designer", "Solo Project", "2026", "Web App", "Civic Tech"].map((t) => (
              <span key={t} style={{
                background: "#f0f4ff", border: "1px solid #dde6ff",
                color: "#2d5be3", borderRadius: 20, padding: "6px 16px", fontSize: 11,
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <section style={{ padding: "0 0 80px" }}>
        <div style={inner}>
          <div style={{
            background: "linear-gradient(135deg, #0d1b2a 0%, #1a2f4a 50%, #0a1628 100%)",
            borderRadius: 16, padding: 32,
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/safePulse/historical_data.png"
              alt="SafePulse Historical Data"
              style={{ width: "100%", display: "block", borderRadius: 8, objectFit: "contain", maxHeight: 600 }}
            />
          </div>
          <p style={cap}>SafePulse Historical Data — Real-time safety intelligence across Nigeria</p>
        </div>
      </section>

      {/* ── SECTION 1 — THE BRIEF ── */}
      <section style={{ background: "#fff", padding: SEC, borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <p style={sLabel}>The Brief</p>
          <h2 style={sHeading}>Safety information should reach people fast. In Nigeria, it doesn&apos;t.</h2>
          <p style={body}>
            Nigeria is one of the most complex public safety environments in the world. From highway attacks and urban fires to shifting suspicious gatherings, incidents happen fast and information is vital.
          </p>
          <p style={body}>
            But that information lives in WhatsApp groups, scattered Twitter threads, and word of mouth. It is fragmented, unverified, and nearly impossible to act on at scale.
          </p>
          <p style={{ ...body, marginBottom: 0 }}>
            SafePulse&apos;s vision: a real-time public safety platform with a live verified incident map, structured reporting, and an analytical intelligence layer. My role was to design this full product from scratch — alone — in four months.
          </p>
        </div>

        {/* Stats */}
        <div style={{
          borderTop: "1px solid #ebebeb", borderBottom: "1px solid #ebebeb",
          padding: "72px 0", marginTop: 72, background: "#fff",
        }}>
          <div style={inner}>
            <div className="sp-stat-grid">
              {[
                { num: "4",   label: "months — Solo Design Timeline" },
                { num: "3",   label: "User Types Served" },
                { num: "5",   label: "Core User Flows Mapped" },
                { num: "3",   label: "Historical Data Lenses" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p style={{
                    fontSize: "clamp(56px, 7vw, 100px)", fontWeight: 300,
                    letterSpacing: "-0.03em", color: "#111", margin: 0, lineHeight: 1,
                  }}>
                    {num}
                  </p>
                  <p style={{
                    fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em",
                    color: "#bbb", margin: "12px 0 0",
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
      <section style={{ background: "#f9f9f9", padding: SEC, borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <p style={sLabel}>The Problem</p>
          <h2 style={sHeading}>The data exists. The structure doesn&apos;t.</h2>
          <p style={{ ...body, marginBottom: 48 }}>
            During research and discovery, five critical gaps kept showing up in how safety information is handled in Nigeria.
          </p>
          {[
            {
              num: "01",
              title: "The trust deficit",
              desc: "Fragmented news makes it nearly impossible to distinguish confirmed facts from rumours. People act on incomplete information — or freeze entirely.",
            },
            {
              num: "02",
              title: "Login as a barrier",
              desc: "Most civic platforms force users to create an account before seeing anything. That kills reach. Citizens who just want to check if their route is safe should never hit a login wall.",
            },
            {
              num: "03",
              title: "The integrity balance",
              desc: "Open reporting leads to noise and misinformation. But heavy verification stops genuine reporters. Finding the middle ground was the hardest product problem on this project.",
            },
            {
              num: "04",
              title: "No visualisation layer",
              desc: "State-level safety data was scattered across agencies and rarely presented as an interactive intelligence layer. Journalists and researchers had no structured way to access it.",
            },
            {
              num: "05",
              title: "Static information",
              desc: "A list of incidents is not enough. People need severity signals, real-time updates, and media evidence to actually act on what they see.",
            },
          ].map(({ num, title, desc }) => (
            <div key={num} style={{
              display: "flex", gap: 40, borderBottom: "1px solid #efefef",
              padding: "32px 0", alignItems: "flex-start",
            }}>
              <p style={{
                fontSize: "clamp(48px, 5vw, 72px)", fontWeight: 300,
                color: "#e0e0e0", margin: 0, lineHeight: 1,
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

      {/* ── SECTION 3 — PROGRESSIVE AUTH ── */}
      <section style={{ background: "#fff", padding: SEC, borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <p style={sLabel}>Key Decision</p>
          <h2 style={sHeading}>Let them in. Gate what matters.</h2>
          <p style={body}>
            Unlike most platforms that put login at the front door, SafePulse uses a progressive model. Home, Incidents, and Historical Data are fully accessible without an account — no friction, no gate.
          </p>
          <p style={body}>
            Authentication only appears when someone clicks &apos;Report Incident&apos;. The sign-in screen explains why it&apos;s needed: to verify the authenticity of reports and maintain integrity in a high-stakes environment.
          </p>
          <p style={{ ...body, marginBottom: 48 }}>
            Signing in is just the first layer. To actually submit a report, users must complete KYC verification — uploading a government ID, taking a selfie for face verification, and waiting 24–48 hours for approval. This creates a clear hierarchy: browse freely, report responsibly.
          </p>
          <div style={{ background: "#fff", borderRadius: 12, padding: 48 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/safePulse/onboarding_userflow.png" alt="Onboarding User Flow" style={flowImg} />
          </div>
          <p style={cap}>Onboarding &amp; auth flow. Progressive gates — only introduced when the action requires them.</p>
        </div>
      </section>

      {/* ── SECTION 4 — HOME DASHBOARD ── */}
      <section style={{ background: "#f9f9f9", padding: SEC, borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <p style={sLabel}>Home Dashboard</p>
          <h2 style={sHeading}>The first thing they see has to answer: am I safe right now?</h2>
          <p style={body}>
            The Home dashboard is built around a live, severity-coded map of Nigeria. Four stat cards give the immediate national picture: Total Incidents, High Severity count, Top Incident Type, and Verification Rate.
          </p>
          <p style={body}>
            Below the map is the Activity Feed — a live stream of recent incidents by location and severity. Below that, the Recent Incident Log gives power users a filterable, downloadable data table with S/N, incident ID, location, severity, status, time, and action.
          </p>
          <p style={{ ...body, marginBottom: 48 }}>
            The severity coding uses four levels throughout the product: Critical (red), High (orange), Medium (yellow), Low (blue). These are consistent across the map, the feed, and every table — users never have to re-learn what a colour means.
          </p>
          <div style={{ background: "#fff", borderRadius: 12, padding: 48, marginBottom: 24 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/safePulse/home_userflow.png" alt="Home Dashboard User Flow" style={flowImg} />
          </div>
          <p style={{ ...cap, marginBottom: 32 }}>Home dashboard user flow — map, feed, and incident log working as one.</p>
          <SafeBrowser src="/safePulse/home_viewDetails.png" alt="Incident Detail Modal" />
          <p style={cap}>Incident detail modal — ID, verification count, media evidence, live mini-map.</p>
        </div>
      </section>

      {/* ── SECTION 5 — INCIDENTS ── */}
      <section style={{ background: "#fff", padding: SEC, borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <p style={sLabel}>Incidents</p>
          <h2 style={sHeading}>Three ways to see the same data.</h2>
          <p style={body}>
            The Incidents page gives users three views of the same real-time data: a List View for quick scanning, a Map View with location pins for geographic context, and a Severity View that groups incidents by Critical, High, Medium, and Low.
          </p>
          <p style={body}>
            This decision came from a key insight during research: different user types think spatially in different ways. A journalist scanning for patterns wants the list. A citizen checking their commute wants the map. An emergency coordinator wants severity-grouped at a glance.
          </p>
          <p style={{ ...body, marginBottom: 48 }}>
            The same incident, three entry points. No hierarchy between them.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 8 }}>
            <SafeBrowser src="/safePulse/incidents_list view.png" alt="Incidents List View" />
            <SafeBrowser src="/safePulse/incident_map-view.png" alt="Incidents Map View" />
          </div>
          <p style={{ ...cap, marginBottom: 32 }}>List view and map view. Same data, different spatial thinking.</p>
          <div style={{ background: "#fff", borderRadius: 12, padding: 48, marginBottom: 8 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/safePulse/incident_userflow.png" alt="Incident Page User Flow" style={flowImg} />
          </div>
          <p style={{ ...cap, marginBottom: 32 }}>Incident page flow — list, map, and severity views feeding into incident detail.</p>
          <SafeBrowser src="/safePulse/incident_viewdetails.png" alt="Full Incident Detail" />
          <p style={cap}>Full incident detail — verification count, evidence media, location, and status.</p>
        </div>
      </section>

      {/* ── SECTION 6 — REPORTING & KYC ── */}
      <section style={{ background: "#f9f9f9", padding: SEC, borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <p style={sLabel}>Report Incidents</p>
          <h2 style={sHeading}>The integrity layer.</h2>
          <p style={body}>
            Reporting is where SafePulse&apos;s trust model lives. The flow is deliberately multi-step — not to create friction, but to create accountability.
          </p>
          <p style={body}>
            When a user clicks &apos;Report Incident&apos;, they hit the auth gate if not signed in. After authentication, KYC status is checked. If not verified, the user sees a KYC Required screen and can choose to start verification or exit.
          </p>
          <p style={body}>
            The KYC flow is three steps: upload a government ID, complete face verification via selfie, then review and submit. After submission, the user waits 24–48 hours. The pending state is clearly communicated — no ambiguity about where they are in the queue.
          </p>
          <p style={{ ...body, marginBottom: 48 }}>
            Once verified, the report form covers: incident type, severity level, location, date and time, description, and optional media evidence. Submitted reports appear immediately in My Reports — a personal table of all submitted incidents with status tracking.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 8 }}>
            <SafeBrowser src="/safePulse/report_incident_signinRequired.png" alt="Sign In Required" />
            <SafeBrowser src="/safePulse/report_incdients_startKYC.png" alt="Start KYC" />
            <SafeBrowser src="/safePulse/report_incdients_UploadGovt.png" alt="Upload Government ID" />
            <SafeBrowser src="/safePulse/report_incdients_faceVertifcation.png" alt="Face Verification" />
            <SafeBrowser src="/safePulse/report_incdients_review.png" alt="Review and Submit" />
          </div>
          <p style={{ ...cap, marginBottom: 32 }}>The full report flow: auth gate → KYC → ID upload → face verification → review.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 8 }}>
            <SafeBrowser src="/safePulse/report incident_form.png" alt="Report Incident Form" />
            <SafeBrowser src="/safePulse/my reports_table.png" alt="My Reports Table" />
          </div>
          <p style={cap}>Report form and My Reports table. Submit, track, manage.</p>
        </div>
      </section>

      {/* ── SECTION 7 — HISTORICAL DATA ── */}
      <section style={{ background: "#fff", padding: SEC, borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <p style={sLabel}>Historical Data</p>
          <h2 style={sHeading}>From data to intelligence.</h2>
          <p style={{ ...body, marginBottom: 64 }}>
            The Historical Data section is where SafePulse earns its value for journalists, researchers, and emergency coordinators. It&apos;s structured around three analytical lenses — not just chart types, but three distinct questions.
          </p>

          {/* Sub A */}
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: BRAND, margin: "0 0 16px" }}>
              Incident Overview
            </p>
            <p style={{ ...body, marginBottom: 32 }}>
              The first tab answers: what is the trend? Total incidents, most affected state, most common incident type, and peak incident time are surfaced as stat cards. Below that, a longitudinal trend chart shows incident volume over time. Time-of-day activity and monthly comparison charts reveal patterns the headline numbers miss. A full detailed dataset table with download is available at the bottom — filterable by type, severity, location, and date.
            </p>
            <SafeBrowser src="/safePulse/historicalData_incident_overview.png" alt="Historical Data — Incident Overview" />
          </div>

          {/* Sub B */}
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: BRAND, margin: "0 0 16px" }}>
              Geographic Insights
            </p>
            <p style={{ ...body, marginBottom: 32 }}>
              The second tab answers: where is the risk concentrated? An interactive heatmap of Nigeria lets users click states to drill into detailed incident data. Incidents by State (Top 10) uses a horizontal bar chart — scannable, rankable, comparable. Incidents by Demographic Group breaks down age distributions across reported incidents. State-Level Performance Data shows incident count, average resolution time, and severity distribution per state.
            </p>
            <SafeBrowser src="/safePulse/historicalData_geo_insights.png" alt="Historical Data — Geographic Insights" />
          </div>

          {/* Sub C */}
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: BRAND, margin: "0 0 16px" }}>
              Patterns &amp; Risk
            </p>
            <p style={{ ...body, marginBottom: 32 }}>
              The third tab shifts from description to prediction. Highest Risk Severity Type, Peak Critical Window, Highest Risk Month, and Recurring Pattern are surfaced as headline callouts. A multi-line severity trend chart tracks Critical, High, Medium, and Low over time on one canvas. A Time vs Day heatmap shows which hours of which days see the highest incident frequency — the kind of pattern that informs emergency resource allocation. An incident type breakdown shows Traffic, Medical Emergency, Fire/Smoke, Public Disturbance, and others ranked by volume.
            </p>
            <SafeBrowser src="/safePulse/historicalData_pattern&risks.png" alt="Historical Data — Patterns and Risk" />
          </div>

          <div style={{ background: "#f9f9f9", borderRadius: 12, padding: 48, marginBottom: 8 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/safePulse/historical_data_userflow.png" alt="Historical Data User Flow" style={flowImg} />
          </div>
          <p style={cap}>Historical Data flow — three analytical lenses, one intelligence layer.</p>
        </div>
      </section>

      {/* ── SECTION 8 — DESIGN SYSTEM ── */}
      <section style={{ background: "#111", padding: SEC }}>
        <div style={inner}>
          <p style={{ ...sLabel, color: "#555" }}>Design System</p>
          <h2 style={{ ...sHeading, color: "#fff" }}>Built to scale.</h2>
          <p style={{ ...body, color: "#555", marginBottom: 48 }}>
            Every decision documented. Every component consistent.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { src: "/safePulse/Colour System.png",  label: "Colour System" },
              { src: "/safePulse/typography.png",     label: "Typography" },
              { src: "/safePulse/grids.png",           label: "Grids" },
              { src: "/safePulse/shadows.png",         label: "Shadows" },
              { src: "/safePulse/border radius.png",   label: "Border Radius" },
              { src: "/safePulse/spacin.png",          label: "Spacing" },
            ].map(({ src, label }) => (
              <div key={label}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={label} style={{ width: "100%", display: "block", borderRadius: 8 }} />
                <p style={{ fontSize: 11, color: "#444", textAlign: "center", marginTop: 10, textTransform: "uppercase", letterSpacing: "0.09em" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
          <p style={{ ...cap, color: "#555", marginTop: 32 }}>
            Colour system, typography, grids, shadows, border radius, spacing.
          </p>
        </div>
      </section>

      {/* ── SECTION 9 — BRANDING ── */}
      <section style={{ background: "#fff", padding: SEC, borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <p style={sLabel}>Brand</p>
          <h2 style={sHeading}>SafePulse identity.</h2>
          <p style={{ ...body, marginBottom: 48 }}>
            The branding was designed to communicate trust and urgency without feeling like a government product. The S-mark logomark is bold, geometric, and works equally well as an app icon and a full lockup. The primary palette — navy and cyan — signals intelligence and clarity. White keeps the interface breathable.
          </p>
          <div style={{ background: "#0a0a14", borderRadius: 16, padding: 48 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/safePulse/branding logo.png" alt="SafePulse Brand" style={{ width: "100%", display: "block", borderRadius: 8 }} />
          </div>
          <p style={cap}>SafePulse brand system — logo, lockup, and social kit.</p>
        </div>
      </section>

      {/* ── SECTION 10 — USER FLOWS ── */}
      <section style={{ background: "#f9f9f9", padding: SEC, borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <p style={sLabel}>User Flows</p>
          <h2 style={sHeading}>Every journey mapped.</h2>
          <p style={{ ...body, marginBottom: 48 }}>
            Before any screen was designed, every core flow was mapped as a user flow — decisions, branches, error states, and exit points included. This wasn&apos;t documentation after the fact. It was the design foundation.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { src: "/safePulse/home_userflow.png",              label: "Home Dashboard" },
              { src: "/safePulse/incident_userflow.png",          label: "Incidents Page" },
              { src: "/safePulse/profile_settings_userflow.png",  label: "Profile & Settings" },
              { src: "/safePulse/historical_data_userflow.png",   label: "Historical Data" },
            ].map(({ src, label }) => (
              <div key={label} style={{
                background: "#fff", borderRadius: 8, padding: 24,
                boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={label} style={{ width: "100%", display: "block", borderRadius: 4 }} />
                <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#bbb", textAlign: "center", margin: "12px 0 0" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 11 — REFLECTION ── */}
      <section style={{ background: "#fff", padding: SEC, borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <p style={sLabel}>Reflection</p>
          <h2 style={{ ...sHeading, maxWidth: 720 }}>
            Designing for public safety changed how I think about hierarchy.
          </h2>
          <p style={body}>
            When the product is about safety, every status label, every loading state, and every empty map carries emotional weight. A citizen checking if their route home is safe is not browsing casually. They are making a real decision.
          </p>
          <p style={body}>
            That changed the way I approached information hierarchy throughout the product. Speed of comprehension became more important than visual elegance. A severity badge that reads in 200ms is worth more than a beautifully crafted icon that takes two seconds to parse.
          </p>
          <p style={{ ...body, marginBottom: 48 }}>
            Working alone for four months also forced sharper product judgment. I had to make constant calls about what needed depth immediately and what could wait. The progressive auth model, the three-tab historical structure, and the KYC flow were all shaped by that constraint — not despite it.
          </p>
          {[
            "Verification is a design problem, not just a policy one.",
            "Trust is built in the quiet moments — empty states matter as much as full ones.",
            "Constraint forces you to distinguish launch-critical from future-growth.",
          ].map((q) => (
            <p key={q} style={{
              fontSize: "clamp(16px, 1.8vw, 20px)", fontStyle: "italic",
              color: "#111", borderLeft: "2px solid #111",
              paddingLeft: 24, margin: "28px 0",
              fontWeight: 300, lineHeight: 1.65, maxWidth: 600,
            }}>
              &ldquo;{q}&rdquo;
            </p>
          ))}
        </div>
      </section>

      {/* ── SECTION 12 — CREDITS ── */}
      <section style={{ background: "#f9f9f9", padding: "72px 0", borderTop: "1px solid #f0f0f0" }}>
        <div style={inner}>
          <p style={sLabel}>Credits</p>
          <p style={{ fontSize: 15, color: "#666", fontWeight: 300, lineHeight: 2, margin: 0 }}>
            Product Design — Femi Jimoh
          </p>
        </div>
      </section>

      {/* ── NEXT PROJECT ── */}
      <Link
        href="/projects/payzeep-merchant-admin"
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
                PayZeep Merchant Admin.
              </h2>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", fontWeight: 300, margin: 0 }}>
                Internal operations platform — compliance, terminals, settlements
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
        .sp-stat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 56px 40px;
        }
        @media (max-width: 900px) {
          .sp-stat-grid { grid-template-columns: repeat(2, 1fr); gap: 40px 24px; }
        }
        @media (max-width: 768px) {
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </main>
  );
}
