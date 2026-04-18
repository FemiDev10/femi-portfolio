"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ── Section manifest ───────────────────────────────────────── */
const SECTIONS = [
  { id: "brief",      label: "The Brief" },
  { id: "problem",    label: "The Problem" },
  { id: "platform",   label: "Platform Choice" },
  { id: "ia",         label: "Architecture" },
  { id: "onboarding", label: "Onboarding" },
  { id: "reference",  label: "API Reference" },
  { id: "payments",   label: "Payments" },
  { id: "keys",       label: "API Keys" },
  { id: "tools",      label: "Go-Live" },
  { id: "collab",     label: "Collaboration" },
  { id: "principles", label: "Principles" },
  { id: "outcome",    label: "Outcome" },
  { id: "reflection", label: "Reflection" },
];

/* ── Reusable atoms ─────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: 10, fontWeight: 600, color: "#2C3ADF",
      letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20,
    }}>
      {children}
    </p>
  );
}

function DesignDecision({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: "#f0f3ff", borderLeft: "3px solid #2C3ADF",
      borderRadius: "0 8px 8px 0", padding: "20px 24px", margin: "28px 0",
    }}>
      <p style={{ fontSize: 10, fontWeight: 700, color: "#2C3ADF", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
        Design Decision
      </p>
      {title && <p style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 10, lineHeight: 1.5 }}>{title}</p>}
      <div style={{ fontSize: 14, color: "#444", lineHeight: 1.75 }}>{children}</div>
    </div>
  );
}

function ResearchFinding({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: "#fffbeb", borderLeft: "3px solid #f59e0b",
      borderRadius: "0 8px 8px 0", padding: "20px 24px", margin: "28px 0",
    }}>
      <p style={{ fontSize: 10, fontWeight: 700, color: "#d97706", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
        Research Finding
      </p>
      <div style={{ fontSize: 14, color: "#444", lineHeight: 1.75 }}>{children}</div>
    </div>
  );
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : "translateY(18px)",
      transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

/* ── Main page ──────────────────────────────────────────────── */
export default function PayZeepApiDocsPage() {
  const [active, setActive] = useState("brief");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    SECTIONS.forEach(({ id }) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <main style={{ background: "#fff", minHeight: "100vh" }}>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section style={{ borderBottom: "1px solid #f0f0f0", padding: "96px 48px 72px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: "#2C3ADF", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 28 }}>
            Case Study · Developer Experience Design
          </p>
          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 4.2rem)", fontWeight: 500,
            lineHeight: 1.06, letterSpacing: "-0.03em", color: "#111",
            maxWidth: "16ch", margin: 0,
          }}>
            Good documentation is a product.{" "}
            <em style={{ fontStyle: "italic", fontWeight: 300, color: "#aaa" }}>
              We designed it like one.
            </em>
          </h1>
          <p style={{ fontSize: 16, color: "#777", lineHeight: 1.75, maxWidth: "52ch", margin: "24px 0 36px" }}>
            PayZeep's API documentation portal — built on Redocly, designed for developers
            who need to move fast and integrate confidently.
          </p>
          <a
            href="https://payzeep-apidoc.redocly.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#2C3ADF", color: "#fff", fontSize: 13, fontWeight: 500,
              padding: "11px 22px", borderRadius: 100, textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.82")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            View Live Documentation ↗
          </a>

          {/* Stat row */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid #f0f0f0", marginTop: 56, paddingTop: 36,
          }}>
            {[
              { value: "6",  label: "Sections documented" },
              { value: "3",  label: "Payment methods covered" },
              { value: "1",  label: "Unified hub replacing scattered resources" },
            ].map(({ value, label }) => (
              <div key={label} style={{ paddingRight: 24 }}>
                <p style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700,
                  color: "#111", letterSpacing: "-0.05em", lineHeight: 1, marginBottom: 8,
                }}>{value}</p>
                <p style={{ fontSize: 12, color: "#aaa", lineHeight: 1.5 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meta bar ──────────────────────────────────────────── */}
      <section style={{ background: "#fafafa", borderBottom: "1px solid #f0f0f0", padding: "20px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 36 }}>
          {[
            { label: "Role",     value: "Product Design · IA · Content Design" },
            { label: "Company",  value: "PayZeep (CBN-licensed PSSP/PTSP)" },
            { label: "Platform", value: "Redocly" },
            { label: "With",     value: "Femi Jimoh · Treasure Oladunni" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p style={{ fontSize: 9, fontWeight: 700, color: "#ccc", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{label}</p>
              <p style={{ fontSize: 12, color: "#666" }}>{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Body layout: sidebar + content ────────────────────── */}
      <div className="apidocs-body">

        {/* Sticky nav */}
        <aside className="apidocs-nav">
          <nav>
            {SECTIONS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                style={{
                  display: "block", fontSize: 12, padding: "5px 0 5px 12px",
                  color: active === id ? "#2C3ADF" : "#ccc",
                  fontWeight: active === id ? 600 : 400,
                  borderLeft: `2px solid ${active === id ? "#2C3ADF" : "transparent"}`,
                  textDecoration: "none", transition: "color 0.18s, border-color 0.18s",
                  marginBottom: 4,
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main article */}
        <article className="apidocs-article">

          {/* ── 1. The Brief ──────────────────────────────────── */}
          <FadeIn>
            <section id="brief" className="apidocs-section">
              <SectionLabel>The Brief</SectionLabel>
              <p className="apidocs-body">Most fintech companies treat developer documentation as an engineering afterthought. The API works. The endpoints are live. The documentation is a README on GitHub that hasn't been updated since the first sprint.</p>
              <p className="apidocs-body">PayZeep was different in intention — but the problem was the same in practice. As ZeepWay (PayZeep's payment gateway product) grew and more merchants needed to integrate, the developer-facing documentation was scattered, inconsistent, and not designed for the people who actually had to use it.</p>
              <p className="apidocs-body">Developers integrate payment APIs at a specific moment of pressure: they've been tasked with adding payments to a product, they have a deadline, and they need to get from zero to live as fast as possible. Any friction in that journey — unclear authentication steps, missing error code references, ambiguous endpoint descriptions — translates directly into failed integrations, support tickets, and lost merchant activations.</p>
              <p className="apidocs-body">We were asked to design and build a centralised documentation hub. Not just write docs — design the whole experience of what it feels like to be a developer trying to integrate PayZeep.</p>
            </section>
          </FadeIn>

          {/* ── 2. The Problem ────────────────────────────────── */}
          <FadeIn>
            <section id="problem" className="apidocs-section">
              <SectionLabel>The Problem with Developer Docs</SectionLabel>
              <ResearchFinding>
                The instinct in most engineering orgs is to treat documentation as technical writing. Put the endpoints somewhere. Explain the parameters. Ship it. But <strong>documentation is a UX problem before it's a content problem.</strong>
              </ResearchFinding>
              <p className="apidocs-body">A developer landing on a documentation site for the first time has a specific mental model: <em>I need to know three things before I do anything else.</em> What does this API actually do? How do I authenticate? What does a successful response look like?</p>
              <p className="apidocs-body">If those three answers aren't findable in under 60 seconds, the documentation has already failed — regardless of how comprehensive the endpoint reference is.</p>
              <p className="apidocs-body">We designed the PayZeep API docs around that reality. Every structural decision — the navigation order, the getting-started sequence, the separation of conceptual guides from reference material — was made in service of that first 60 seconds.</p>
            </section>
          </FadeIn>

          {/* ── 3. Platform Choice ────────────────────────────── */}
          <FadeIn>
            <section id="platform" className="apidocs-section">
              <SectionLabel>The Platform Choice — Why Redocly</SectionLabel>
              <p className="apidocs-body">When we evaluated platforms for building the documentation, the options fell into two camps:</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, margin: "20px 0 4px" }}>
                {[
                  { name: "Custom-built", verdict: "Unsustainable", desc: "Full design control, but enormous ongoing maintenance cost. Every docs update requires a developer." },
                  { name: "Wiki-style (Notion, Confluence)", verdict: "Wrong tool", desc: "Easy to write, hard to structure as developer reference. No native OpenAPI rendering. Looks like an internal tool, not a product." },
                ].map(opt => (
                  <div key={opt.name} style={{ background: "#fafafa", border: "1px solid #f0f0f0", borderRadius: 10, padding: "20px" }}>
                    <p style={{ fontSize: 12, fontWeight: 600, color: "#111", marginBottom: 4 }}>{opt.name}</p>
                    <p style={{ fontSize: 11, color: "#e53e3e", fontWeight: 500, marginBottom: 8 }}>✗ {opt.verdict}</p>
                    <p style={{ fontSize: 12, color: "#888", lineHeight: 1.6 }}>{opt.desc}</p>
                  </div>
                ))}
              </div>
              <DesignDecision title="Why Redocly landed differently">
                Redocly enforces a separation between two types of content most API docs conflate — the <em>guide</em> (how to think about the product) and the <em>reference</em> (what every endpoint does). That structural separation was a design decision baked into the platform. We could focus on content design and information architecture instead of rebuilding document rendering from scratch.
                <br /><br />
                The Redocly choice also meant the documentation could live alongside the codebase — updates to the API spec automatically reflected in the docs, keeping reference content accurate without manual maintenance.
              </DesignDecision>
            </section>
          </FadeIn>

          {/* ── 4. Information Architecture ───────────────────── */}
          <FadeIn>
            <section id="ia" className="apidocs-section">
              <SectionLabel>Information Architecture</SectionLabel>
              <p className="apidocs-body">The navigation structure went through several iterations. The final architecture separates the developer journey into two distinct zones — a reading path and a reference layer.</p>

              {/* Code-style nav tree */}
              <div style={{
                background: "#0d1117", borderRadius: 12,
                padding: "28px 32px", margin: "24px 0",
                fontFamily: "'SFMono-Regular', Consolas, monospace",
                fontSize: 12.5, lineHeight: 2.1, overflowX: "auto",
              }}>
                <p style={{ color: "#6e7681", fontSize: 11, marginBottom: 12, letterSpacing: "0.04em" }}>// PayZeep API Documentation Structure</p>
                {[
                  { pre: "",        text: "PayZeep API Docs",    color: "#f0f6fc",  note: "" },
                  { pre: "├── ",    text: "Get Started",         color: "#79c0ff",  note: "  ← Onboarding journey (Create → KYC → Go Live)" },
                  { pre: "├── ",    text: "Guide",               color: "#79c0ff",  note: "  ← Conceptual explanations" },
                  { pre: "├── ",    text: "Transfer",            color: "#79c0ff",  note: "  ← Transfer-specific flows" },
                  { pre: "├── ",    text: "API Keys",            color: "#79c0ff",  note: "  ← Authentication" },
                  { pre: "├── ",    text: "Incoming Payments",   color: "#79c0ff",  note: "  ← Card · Bank Transfer · Mobile Money" },
                  { pre: "└── ",    text: "Integration Tools",   color: "#d2a8ff",  note: "  ← SDKs, webhooks, go-live checklist" },
                  { pre: "    └── ", text: "API Reference",      color: "#ffa657",  note: "  ← Full OpenAPI endpoint documentation" },
                ].map((line, i) => (
                  <div key={i} style={{ display: "flex" }}>
                    <span style={{ color: "#3d444d", flexShrink: 0 }}>{line.pre}</span>
                    <span style={{ color: line.color }}>{line.text}</span>
                    {line.note && <span style={{ color: "#484f58", fontSize: 11 }}>{line.note}</span>}
                  </div>
                ))}
              </div>

              <p className="apidocs-body"><strong style={{ color: "#111" }}>Zone 1 — Journey</strong> (Get Started → Incoming Payments): the linear path a developer follows on their first integration. Each section builds on the previous. A developer who reads these in order is ready to integrate before ever opening the API Reference.</p>
              <p className="apidocs-body"><strong style={{ color: "#111" }}>Zone 2 — Tools</strong> (Integration Tools → API Reference): reference resources developers return to repeatedly. Placed last not because they're less important, but because they're not the starting point.</p>
            </section>
          </FadeIn>

          {/* ── 5. Developer Onboarding ───────────────────────── */}
          <FadeIn>
            <section id="onboarding" className="apidocs-section">
              <SectionLabel>The Three-Step Developer Onboarding</SectionLabel>
              <p className="apidocs-body">One of the most important design decisions wasn't about endpoints at all — it was about what a developer needed to understand before they could write a single line of code.</p>

              <div className="step-flow">
                {[
                  { n: "01", title: "Create an Account", desc: "Sign up at zeepway.com with business name, personal details, email, phone, and password. Verify email via OTP." },
                  { n: "02", title: "Complete KYC Verification", desc: "Submit business registration certificate, tax ID, and owner identification to unlock live transaction capability." },
                  { n: "03", title: "Go Live", desc: "After KYC approval, transfer test settings to the production environment and begin accepting real payments." },
                ].map((step) => (
                  <div key={step.n} style={{
                    flex: 1, background: "#fafafa",
                    border: "1px solid #f0f0f0", borderRadius: 12, padding: "24px",
                  }}>
                    <p style={{ fontSize: 30, fontWeight: 700, color: "#2C3ADF", letterSpacing: "-0.05em", lineHeight: 1, marginBottom: 14 }}>{step.n}</p>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 8 }}>{step.title}</p>
                    <p style={{ fontSize: 13, color: "#888", lineHeight: 1.65 }}>{step.desc}</p>
                  </div>
                ))}
              </div>

              <DesignDecision title="Surfacing account creation before the first endpoint">
                Most API documentation skips this entirely — they assume the reader already has an account and valid credentials. Then developers hit the authentication step, realise they need to create an account first, and leave the docs to go sign up — losing context and momentum.
                <br /><br />
                We surfaced the account creation requirement at the very beginning of the documentation, before a single endpoint is shown. This is content design solving a problem that no amount of technical accuracy can fix.
              </DesignDecision>
            </section>
          </FadeIn>

          {/* ── 6. API Reference ──────────────────────────────── */}
          <FadeIn>
            <section id="reference" className="apidocs-section">
              <SectionLabel>The API Reference</SectionLabel>
              <p className="apidocs-body">The API reference is where most developer documentation dies. A wall of endpoints, parameters, and response schemas with no context, no examples, no sense of what you'd actually use any of it for.</p>
              <p className="apidocs-body">We structured the PayZeep API Reference with Redocly's native OpenAPI rendering. Four principles guided the work:</p>
              <div style={{ margin: "20px 0 24px" }}>
                {[
                  { title: "Endpoint grouping by category", desc: "Operations and transactions grouped semantically, not alphabetically — so developers navigate by intent, not by name." },
                  { title: "Mock server included", desc: "Developers can test requests against a live mock without needing production credentials. Removing that credential barrier changes how quickly a developer forms confidence in the product." },
                  { title: "Production URL clearly separated", desc: "No ambiguity between mock and live environments — one of the most common sources of developer confusion during integration." },
                  { title: "Request/response schemas always in sync", desc: "Rendered directly from the OpenAPI spec. When the API changes, the documentation reflects it automatically." },
                ].map(item => (
                  <div key={item.title} style={{ display: "flex", gap: 16, padding: "16px 0", borderBottom: "1px solid #f5f5f5", alignItems: "flex-start" }}>
                    <div style={{ width: 3, flexShrink: 0, background: "#2C3ADF", borderRadius: 2, alignSelf: "stretch", opacity: 0.35 }} />
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 5 }}>{item.title}</p>
                      <p style={{ fontSize: 13, color: "#888", lineHeight: 1.65 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="apidocs-body">
                The key principle: every endpoint exists in context. A developer looking at{" "}
                <code style={{ background: "#f3f4f6", padding: "2px 7px", borderRadius: 4, fontSize: 12, color: "#2C3ADF", fontFamily: "monospace" }}>
                  POST /incoming-payments
                </code>{" "}
                should understand <em>why</em> you'd call it and <em>what comes before and after it in a typical integration flow</em> — not just what parameters it accepts.
              </p>
            </section>
          </FadeIn>

          {/* ── 7. Incoming Payments ──────────────────────────── */}
          <FadeIn>
            <section id="payments" className="apidocs-section">
              <SectionLabel>Incoming Payments — Three Payment Realities</SectionLabel>
              <p className="apidocs-body">The PayZeep API supports three payment collection methods. Each has different developer requirements, different customer experiences, and different failure modes.</p>
              <div className="payments-grid">
                {[
                  { icon: "💳", method: "Card Payments", desc: "The most familiar method for web integrations. Covers authentication flow, 3DS handling, card tokenisation for recurring charges, and decline code interpretation." },
                  { icon: "🏦", method: "Bank Transfer", desc: "Nigeria's fastest-growing online payment method. The API generates one-time virtual accounts per transaction — covering lifecycle, expiry handling, and webhook confirmation." },
                  { icon: "📱", method: "Mobile Money", desc: "Mobile wallet integrations — initiating charges, handling pending states, and managing confirmation callbacks." },
                ].map(p => (
                  <div key={p.method} style={{ border: "1px solid #f0f0f0", borderRadius: 12, padding: "28px 24px" }}>
                    <p style={{ fontSize: 28, marginBottom: 14 }}>{p.icon}</p>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 8 }}>{p.method}</p>
                    <p style={{ fontSize: 13, color: "#888", lineHeight: 1.65 }}>{p.desc}</p>
                  </div>
                ))}
              </div>
              <p className="apidocs-body" style={{ marginTop: 20 }}>Designing documentation for three distinct payment rails under a single section required careful information architecture. We used a consistent structure for each method — <em>how it works → how to implement → how to handle errors</em> — so developers familiar with one could onboard to another without re-learning the documentation structure.</p>
            </section>
          </FadeIn>

          {/* ── 8. API Keys ───────────────────────────────────── */}
          <FadeIn>
            <section id="keys" className="apidocs-section">
              <SectionLabel>API Keys — Authentication Design</SectionLabel>
              <p className="apidocs-body">Authentication is where integrations most commonly break — not because the API is wrong, but because the documentation doesn't clearly explain the difference between test and production credentials, when to use which, and how to manage key rotation.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, margin: "20px 0" }}>
                {[
                  "Generating API keys from the merchant dashboard",
                  "Test vs. Production keys — what each environment allows, how to switch",
                  "Key security — what to do with keys in your codebase (hint: not hardcoded)",
                  "Key rotation — how to update keys without downtime",
                  "Scoped permissions — which operations each key type can authorise",
                ].map(item => (
                  <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", background: "#fafafa", border: "1px solid #f0f0f0", borderRadius: 8, padding: "14px 16px" }}>
                    <span style={{ color: "#2C3ADF", fontSize: 13, flexShrink: 0, marginTop: 1 }}>→</span>
                    <p style={{ fontSize: 12.5, color: "#666", lineHeight: 1.55 }}>{item}</p>
                  </div>
                ))}
              </div>
              <p className="apidocs-body">The documentation is written assuming the reader is a competent developer but not necessarily familiar with PayZeep's specific security model. Every assumption is stated explicitly.</p>
            </section>
          </FadeIn>

          {/* ── 9. Integration Tools / Go-Live ────────────────── */}
          <FadeIn>
            <section id="tools" className="apidocs-section">
              <SectionLabel>Integration Tools — The Go-Live Checklist</SectionLabel>
              <p className="apidocs-body">A go-live checklist was one of the most practically useful pieces of content we designed. It answers the question every developer asks before flipping a payment integration to production: <em>Have I actually done everything I need to do?</em></p>
              <div style={{ background: "#fafafa", border: "1px solid #f0f0f0", borderRadius: 12, padding: "28px 32px", margin: "20px 0" }}>
                {[
                  "Account fully KYC-verified and approved",
                  "API keys generated for production environment",
                  "Webhook endpoints configured and tested",
                  "At least one successful test transaction confirmed",
                  "Error handling implemented for key decline codes",
                  "Customer-facing payment UI reviewed",
                  "Support contact added (for payment disputes)",
                ].map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
                    <div style={{
                      width: 18, height: 18, borderRadius: 4,
                      border: "1.5px solid #2C3ADF", flexShrink: 0, marginTop: 1,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <span style={{ color: "#2C3ADF", fontSize: 10, fontWeight: 700 }}>✓</span>
                    </div>
                    <p style={{ fontSize: 13, color: "#666", lineHeight: 1.55 }}>{item}</p>
                  </div>
                ))}
              </div>
              <DesignDecision title="This content doesn't come from the API spec">
                It comes from understanding the developer journey end-to-end and identifying the moments where people make mistakes or lose confidence. That's a design job.
              </DesignDecision>
            </section>
          </FadeIn>

          {/* ── 10. Collaboration ─────────────────────────────── */}
          <FadeIn>
            <section id="collab" className="apidocs-section">
              <SectionLabel>Working with Treasure</SectionLabel>
              <div style={{ background: "#fffdf9", border: "1px solid #f5eedf", borderRadius: 12, padding: "32px" }}>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, marginBottom: 16 }}>
                  This documentation portal was built in close collaboration with <strong style={{ color: "#111" }}>Treasure Oladunni</strong>, co-designer on the project.
                </p>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, marginBottom: 16 }}>
                  The division of work was organic rather than rigid. We both contributed to the information architecture discussions — mapping out who the developer audiences were, what mental models they arrived with, what questions they needed answered first. Treasure brought a sharp eye for content clarity: identifying where explanations were technically accurate but practically confusing, and rewriting them until they weren't.
                </p>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8 }}>
                  The Redocly configuration, theming, and component structure was a collaborative build — part design, part engineering, part editorial. The result is a documentation site that reflects that joint investment — structured, clear, and built with genuine care for the person on the other side of the screen trying to make their first API call.
                </p>
              </div>
            </section>
          </FadeIn>

          {/* ── 11. Principles ────────────────────────────────── */}
          <FadeIn>
            <section id="principles" className="apidocs-section">
              <SectionLabel>What Makes Good API Documentation</SectionLabel>
              <p className="apidocs-body">Through building this, we arrived at principles we now apply to any documentation design problem:</p>
              <div className="principles-grid">
                {[
                  { n: "01", title: "Start with the journey, not the reference", desc: "A developer's first question is never 'what does this endpoint return?' It's 'how do I get started?' The getting-started experience is the most important page in any API doc." },
                  { n: "02", title: "Separate guide from reference", desc: "Conceptual content and technical reference serve different reading modes. A developer in guide mode is reading to understand. A developer in reference mode is scanning to find. Design for both modes, separately." },
                  { n: "03", title: "Say the obvious things", desc: "Documentation that assumes too much leaves the majority behind. Say what test mode means. Say when to use production keys. Saying the obvious thing offends no one; assuming it costs you integrations." },
                  { n: "04", title: "Mock servers are UX", desc: "A mock server lets a developer make a real API call before they have credentials. Removing that barrier changes how quickly a developer forms confidence in the product." },
                  { n: "05", title: "Error states are documentation, too", desc: "Decline codes, timeout responses, validation errors — developers encounter these on their worst days. Document them with the same care as the happy path." },
                  { n: "06", title: "Documentation is never done", desc: "An API evolves. The documentation must evolve with it. Building on Redocly means the OpenAPI spec and the documentation stay in sync — reducing the documentation debt that kills most developer portals over time." },
                ].map(p => (
                  <div key={p.n} style={{ padding: "24px 0", borderBottom: "1px solid #f5f5f5" }}>
                    <p style={{ fontSize: 11, fontWeight: 700, color: "#2C3ADF", letterSpacing: "0.08em", marginBottom: 8 }}>{p.n}</p>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 8, lineHeight: 1.4 }}>{p.title}</p>
                    <p style={{ fontSize: 13, color: "#888", lineHeight: 1.65 }}>{p.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* ── 12. Outcome ───────────────────────────────────── */}
          <FadeIn>
            <section id="outcome" className="apidocs-section">
              <SectionLabel>Outcome</SectionLabel>
              <div style={{ background: "#f0f3ff", borderRadius: 12, padding: "32px", marginBottom: 0 }}>
                <p style={{ fontSize: 14, color: "#2C3ADF", fontWeight: 500, lineHeight: 1.7, marginBottom: 20 }}>
                  The PayZeep API documentation portal went live at{" "}
                  <a href="https://payzeep-apidoc.redocly.app" target="_blank" rel="noopener noreferrer"
                    style={{ color: "#2C3ADF", textDecoration: "underline" }}>
                    payzeep-apidoc.redocly.app
                  </a>{" "}
                  — a centralised hub for every developer working with PayZeep's payment infrastructure.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    "Structured, navigable documentation site covering the full developer journey from account creation to live transactions",
                    "Clear three-step onboarding sequence that reduces 'how do I even start?' confusion",
                    "Incoming payments coverage for all three methods: Card, Bank Transfer, Mobile Money",
                    "API Reference powered by OpenAPI, with mock server for zero-credential testing",
                    "Go-live checklist reducing pre-launch developer anxiety",
                    "Authentication guide covering test/production key separation and security best practices",
                    "Built on Redocly for long-term maintainability — docs update with the API, not behind it",
                  ].map(item => (
                    <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: "#2C3ADF", flexShrink: 0, fontSize: 12, marginTop: 3, fontWeight: 700 }}>✓</span>
                      <p style={{ fontSize: 13, color: "#3a4aaa", lineHeight: 1.55 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </FadeIn>

          {/* ── 13. Reflection ────────────────────────────────── */}
          <FadeIn>
            <section id="reflection" className="apidocs-section">
              <SectionLabel>Reflection</SectionLabel>
              <p className="apidocs-body">Developer documentation sits in an interesting gap in design practice. It's not consumer UX. It's not visual design. It's not content strategy alone. It's all three — applied to an audience that is highly technical, highly critical, and deeply impatient.</p>
              <p className="apidocs-body">Developers don't give documentation the benefit of the doubt. If they can't find what they need in the first minute, they move on. If the authentication section is unclear, they open a support ticket. If the error documentation is missing, they test in production because there's nowhere else to test.</p>
              <p className="apidocs-body">Designing the PayZeep API docs taught us that documentation quality is product quality. A merchant who can't integrate because the documentation confused their developer is a lost merchant — one that an API reference update or a go-live checklist might have saved.</p>
              <p style={{
                fontSize: 14, fontStyle: "italic", color: "#bbb", lineHeight: 1.8,
                borderTop: "1px solid #f0f0f0", paddingTop: 24, marginTop: 24,
                maxWidth: "60ch",
              }}>
                Good documentation is invisible when it works. The developer integrates, goes live, processes payments, and never thinks about the docs again. That's the goal: to be useful enough to be forgotten.
              </p>
            </section>
          </FadeIn>

          {/* ── Credits ───────────────────────────────────────── */}
          <FadeIn>
            <div style={{
              borderTop: "1px solid #f0f0f0", paddingTop: 40, marginTop: 16,
              display: "flex", justifyContent: "space-between", alignItems: "center",
              flexWrap: "wrap", gap: 16,
            }}>
              <div>
                <p style={{ fontSize: 10, color: "#ccc", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>Designed & Built by</p>
                <p style={{ fontSize: 13, color: "#666" }}>Femi Jimoh · Treasure Oladunni</p>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                <a
                  href="https://payzeep-apidoc.redocly.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    background: "#2C3ADF", color: "#fff", fontSize: 12, fontWeight: 500,
                    padding: "8px 18px", borderRadius: 100, textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.82")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  View Live Site ↗
                </a>
                <Link href="/" style={{ fontSize: 12, color: "#bbb", textDecoration: "none" }}>← Back to portfolio</Link>
              </div>
            </div>
          </FadeIn>
        </article>
      </div>

      <style>{`
        .apidocs-body {
          display: grid;
          grid-template-columns: 160px 1fr;
          max-width: 960px;
          margin: 0 auto;
          padding: 0 48px;
          gap: 56px;
        }
        .apidocs-nav {
          position: sticky;
          top: 80px;
          align-self: start;
          padding-top: 56px;
        }
        .apidocs-article {
          padding: 56px 0 120px;
          min-width: 0;
        }
        .apidocs-section {
          margin-bottom: 72px;
          scroll-margin-top: 88px;
        }
        .apidocs-body p.apidocs-body {
          font-size: 14px;
          color: #666;
          line-height: 1.8;
          max-width: 60ch;
          margin-bottom: 18px;
        }
        .step-flow {
          display: flex;
          gap: 14px;
          margin: 24px 0;
        }
        .payments-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin: 20px 0;
        }
        .principles-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 48px;
          margin: 20px 0;
        }

        @media (max-width: 1024px) {
          .apidocs-body {
            grid-template-columns: 1fr;
            padding: 0 32px;
          }
          .apidocs-nav { display: none; }
          .apidocs-article { padding: 48px 0 80px; }
          .principles-grid { grid-template-columns: 1fr; }
          .payments-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .apidocs-body { padding: 0 20px; }
          .step-flow { flex-direction: column; }
          section.apidocs-section { margin-bottom: 52px; }
        }
      `}</style>
    </main>
  );
}
