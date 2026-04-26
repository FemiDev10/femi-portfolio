import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PayZeep Checkout — Femi Jimoh",
  description:
    "End-to-end UX/UI for PayZeep's checkout widget — five payment methods, desktop and mobile, complete edge case coverage.",
};

// ─── Shared style constants ────────────────────────────────────────────────
const MAX = 1140;
const PH = { paddingLeft: 48, paddingRight: 48 } as const;
const PH_M = "calc(min(48px, 6vw))";

const sectionLabel: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 400,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#bbb",
  marginBottom: 16,
};

const sectionHeading: React.CSSProperties = {
  fontSize: "clamp(32px, 5vw, 64px)",
  fontWeight: 500,
  color: "#111",
  letterSpacing: "-0.02em",
  marginBottom: 24,
  lineHeight: 1.1,
};

const bodyText: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 300,
  lineHeight: 1.9,
  color: "#444",
  maxWidth: 680,
};

const caption: React.CSSProperties = {
  fontSize: 13,
  color: "#888",
  textAlign: "center",
  marginTop: 16,
  fontStyle: "italic",
};

const BRAND = "#3a3a9e";

// ─── Phone frame wrapper ───────────────────────────────────────────────────
function PhoneFrame({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div style={{ flexShrink: 0, width: 180 }}>
      <div
        style={{
          background: "#fff",
          borderRadius: 36,
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          overflow: "hidden",
        }}
      >
        <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
      </div>
      <p style={{ fontSize: 11, color: "#aaa", textAlign: "center", marginTop: 8, letterSpacing: "0.06em" }}>
        {label}
      </p>
    </div>
  );
}

// ─── Desktop widget frame ──────────────────────────────────────────────────
function WidgetCard({ src, alt, label }: { src: string; alt: string; label?: string }) {
  return (
    <div>
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          boxShadow: "0 4px 24px rgba(0,0,0,0.09)",
          overflow: "hidden",
        }}
      >
        <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
        {label && (
          <div
            style={{
              padding: "10px 14px",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#aaa",
            }}
          >
            {label}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Horizontal scroll strip ───────────────────────────────────────────────
function HScrollStrip({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="no-scrollbar"
      style={{
        overflowX: "auto",
        display: "flex",
        gap: 20,
        padding: "32px 0",
        WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
      }}
    >
      {children}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────
export default function PayZeepCheckoutPage() {
  return (
    <main style={{ fontFamily: "inherit", background: "#fff" }}>

      {/* ── HERO IMAGE ── */}
      <div style={{ width: "100%", background: "#0d0d1a" }}>
        <img
          src="/checkout/thumbnail_mockup.jpeg"
          alt="PayZeep Checkout"
          style={{ width: "100%", display: "block", maxHeight: 680, objectFit: "cover" }}
        />
      </div>

      {/* ── HEADER METADATA ── */}
      <div
        style={{
          maxWidth: MAX,
          margin: "0 auto",
          padding: `80px ${PH_M}`,
          paddingLeft: PH.paddingLeft,
          paddingRight: PH.paddingRight,
        }}
      >
        <h1
          style={{
            fontSize: "clamp(40px, 6vw, 80px)",
            fontWeight: 500,
            color: "#111",
            letterSpacing: "-0.03em",
            marginBottom: 40,
            lineHeight: 1.05,
          }}
        >
          PayZeep Checkout
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "8px 40px",
            borderTop: "1px solid #ebebeb",
            paddingTop: 32,
          }}
        >
          {[
            ["Role", "Product Designer"],
            ["Company", "PayZeep (Paymi Solutions Limited)"],
            ["Timeline", "2025 — Ongoing"],
            ["Platform", "Web Widget + Mobile (iOS & Android)"],
            ["Deliverables", "End-to-end checkout UX/UI, 5 payment method flows, desktop + mobile, complete edge case coverage"],
          ].map(([k, v]) => (
            <div key={k} style={{ padding: "16px 0" }}>
              <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#bbb", marginBottom: 6 }}>
                {k}
              </div>
              <div style={{ fontSize: 15, fontWeight: 400, color: "#222", lineHeight: 1.5 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SECTION 1 — THE BRIEF ── */}
      <section style={{ background: "#fff", padding: "100px 0" }}>
        <div style={{ maxWidth: MAX, margin: "0 auto", paddingLeft: PH.paddingLeft, paddingRight: PH.paddingRight }}>
          <p style={sectionLabel}>The Brief</p>
          <h2 style={sectionHeading}>Five ways to pay. One experience that earns trust.</h2>
          <p style={bodyText}>
            PayZeep's checkout widget is the moment of truth — the last screen a customer sees before money moves. It
            sits inside merchant websites and mobile apps across Nigeria, processing card payments, bank transfers, USSD
            codes, QR scans, and direct bank debits.
          </p>
          <p style={{ ...bodyText, marginTop: 24 }}>
            The challenge wasn't technical integration. The challenge was making five completely different payment
            mechanisms — each with its own mental model, its own failure modes, its own timing — feel like they belong
            to the same product. And making every single one of them feel safe enough that a customer doesn't abandon
            at the final step.
          </p>
          <p style={{ ...bodyText, marginTop: 24 }}>
            Every flow ends in one of four states: Transaction Successful, Transaction Failed, Invalid Amount, or
            Session Timeout. I designed each of those endings with the same rigour as the entry points.
          </p>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0 40px",
              marginTop: 80,
              padding: "80px 0",
              borderTop: "1px solid #f0f0f0",
            }}
          >
            {[
              ["5", "Payment Methods"],
              ["4", "Transaction End States"],
              ["2", "Platforms (Web + Mobile)"],
              ["40+", "Screens Designed"],
            ].map(([num, label]) => (
              <div key={label} style={{ marginBottom: 40 }}>
                <div
                  style={{
                    fontSize: "clamp(56px, 7vw, 100px)",
                    fontWeight: 300,
                    color: "#111",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#bbb",
                    marginTop: 8,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — THE CONTEXT ── */}
      <section style={{ background: "#f9f9f9", padding: "100px 0" }}>
        <div style={{ maxWidth: MAX, margin: "0 auto", paddingLeft: PH.paddingLeft, paddingRight: PH.paddingRight }}>
          <p style={sectionLabel}>The Context</p>
          <h2 style={sectionHeading}>Nigeria's payment landscape is not a single thing.</h2>
          <p style={bodyText}>
            Designing a checkout for Nigeria means designing for the full spectrum of how Nigerians actually pay. A
            merchant in Victoria Island might have customers who exclusively use Mastercard. A trader in Kano might
            serve customers who have never used a card but dial USSD every morning. A restaurant in Abuja might want
            QR scan for table payments.
          </p>
          <p style={{ ...bodyText, marginTop: 24 }}>
            This is not hypothetical diversity — it is the daily reality of Nigerian commerce. A checkout that doesn't
            support all five methods isn't a checkout for Nigeria. It's a checkout for a subset of Nigeria.
          </p>
          <p style={{ ...bodyText, marginTop: 24 }}>
            PayZeep's checkout is designed from this premise. Every method gets the same design quality. No method is
            treated as a fallback or an afterthought. Card checkout is not 'the real one' — it is one of five equals.
          </p>

          <div
            style={{
              background: "#0d0d1a",
              borderRadius: 16,
              padding: "48px 48px",
              textAlign: "center",
              marginTop: 64,
            }}
          >
            <img
              src="/checkout/thumbnail_mockup.jpeg"
              alt="PayZeep Checkout widget across merchant ecosystem"
              style={{
                width: "100%",
                maxWidth: 900,
                margin: "0 auto",
                borderRadius: 12,
                display: "block",
              }}
            />
            <p style={{ ...caption, color: "rgba(255,255,255,0.4)", marginTop: 24 }}>
              PayZeep Checkout — the widget that powers payments across the merchant ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — THE PROBLEM ── */}
      <section style={{ background: "#fff", padding: "100px 0" }}>
        <div style={{ maxWidth: MAX, margin: "0 auto", paddingLeft: PH.paddingLeft, paddingRight: PH.paddingRight }}>
          <p style={sectionLabel}>The Problem</p>
          <h2 style={sectionHeading}>Checkout is where trust goes to die.</h2>
          <p style={{ ...bodyText, marginBottom: 48 }}>
            Four problems defined the design mandate before a single screen was drawn.
          </p>

          {[
            {
              num: "01",
              title: "Five methods, zero consistency",
              body: "Card, Transfer, USSD, QR, and Bank each work at a completely different technical and conceptual level. But users shouldn't feel that. The widget needed to feel unified across all five — same confidence, same clarity, same brand — regardless of which tab they're on.",
            },
            {
              num: "02",
              title: "Error states were afterthoughts",
              body: "In Nigerian fintech, network issues, session timeouts, invalid amounts, and failed transactions are everyday events — not edge cases. Treating these as secondary design concerns would mean the most common failure moments in a user's payment journey go undesigned. That was not acceptable.",
            },
            {
              num: "03",
              title: "The transfer handoff problem",
              body: "Bank transfer checkout has a UX challenge no other method shares: the user must leave your product, open their banking app, make a real money transfer, then come back and confirm. Designing that handoff — the wait state, the countdown timer, the progress indicator, the confirmation — required a completely different approach.",
            },
            {
              num: "04",
              title: "Mobile and desktop are different canvases",
              body: "The web widget is constrained to a modal on a merchant's site. The mobile flow is full-screen. Same information architecture, completely different spatial rules. Both needed to feel native to their environment without diverging in brand or logic.",
            },
          ].map(({ num, title, body }) => (
            <div
              key={num}
              style={{
                display: "flex",
                gap: 40,
                alignItems: "flex-start",
                borderBottom: "1px solid #f0f0f0",
                padding: "36px 0",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(48px, 5vw, 72px)",
                  fontWeight: 300,
                  color: "#ebebeb",
                  lineHeight: 1,
                  minWidth: 80,
                  flexShrink: 0,
                }}
              >
                {num}
              </div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#111", marginBottom: 8 }}>{title}</div>
                <div style={{ fontSize: 15, fontWeight: 300, color: "#666", lineHeight: 1.8 }}>{body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 4 — THE SHELL ── */}
      <section style={{ background: "#f9f9f9", padding: "100px 0" }}>
        <div style={{ maxWidth: MAX, margin: "0 auto", paddingLeft: PH.paddingLeft, paddingRight: PH.paddingRight }}>
          <p style={sectionLabel}>Key Decision 01</p>
          <h2 style={sectionHeading}>One shell. Five personalities.</h2>
          <p style={bodyText}>
            The checkout widget is built around a persistent shell: the PayZeep logo, the payer's email address, the
            amount to pay, the close button, and the payment method tabs (Card, Transfer, Bank, USSD, QR Code). This
            shell never changes regardless of which method is selected.
          </p>
          <p style={{ ...bodyText, marginTop: 24 }}>
            Inside that shell, each payment method has its own distinct flow and interaction pattern. The shell is the
            trust anchor — it says 'you are still in the same safe place' even as the content shifts completely
            beneath it.
          </p>
          <p style={{ ...bodyText, marginTop: 24 }}>
            This decision also made the widget extensible. Adding a sixth payment method in the future means adding a
            new inner flow, not redesigning the frame.
          </p>

          <div
            style={{
              background: "#f7f7f7",
              borderRadius: 20,
              padding: "64px 48px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 64,
            }}
          >
            <div
              style={{
                filter: "drop-shadow(0 16px 48px rgba(0,0,0,0.18))",
                borderRadius: 16,
                overflow: "hidden",
                maxWidth: 360,
                width: "100%",
              }}
            >
              <img src="/checkout/Card.png" alt="PayZeep checkout shell" style={{ width: "100%", display: "block" }} />
            </div>
            <p style={{ ...caption, marginTop: 24 }}>
              The persistent shell — logo, email, amount, method tabs. Constant across all 5 flows.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — CARD CHECKOUT (DESKTOP) ── */}
      <section style={{ background: "#fff", padding: "100px 0" }}>
        <div style={{ maxWidth: MAX, margin: "0 auto", paddingLeft: PH.paddingLeft, paddingRight: PH.paddingRight }}>
          <p style={sectionLabel}>Method 01 — Card Checkout (Web)</p>
          <h2 style={sectionHeading}>The most complex flow. Designed to feel effortless.</h2>
          <p style={bodyText}>
            Card checkout spans 8 distinct states — from entry to success. Each state has a single clear forward
            action. Nothing is ambiguous. Nothing requires the user to guess what comes next.
          </p>
          <p style={{ ...bodyText, marginTop: 24 }}>
            The 3D Secure OTP flow (Card-4 through Card-6) was one of the most carefully considered parts of the
            widget. The OTP entry uses a segmented input — each digit gets its own box, which fills as the user types.
            This pattern reduces entry errors and gives immediate visual feedback on progress.
          </p>
          <p style={{ ...bodyText, marginTop: 24 }}>
            The 'Proceed Payment' and 'Authorise Payment' CTAs change label at the right moment in the flow —
            reflecting what the system is actually about to do, not a generic 'Submit' that means nothing.
          </p>

          {/* Horizontal scroll strip */}
          <HScrollStrip>
            {[
              { src: "/checkout/Card.png", label: "Entry" },
              { src: "/checkout/Card-1.png", label: "Card Number" },
              { src: "/checkout/Card-2.png", label: "Expiry + CVV" },
              { src: "/checkout/Card-3.png", label: "Proceed" },
              { src: "/checkout/Card-4.png", label: "OTP Entry" },
              { src: "/checkout/Card-5.png", label: "OTP Digits" },
              { src: "/checkout/Card-6.png", label: "Authorise" },
              { src: "/checkout/Card-7.png", label: "Checking Status" },
            ].map(({ src, label }) => (
              <WidgetCard key={label} src={src} alt={label} label={label} />
            ))}
          </HScrollStrip>

          {/* Saved cards */}
          <p style={{ ...bodyText, marginTop: 16 }}>
            Beyond the main card flow, two additional states handle the saved cards experience.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 40 }}>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#bbb", marginBottom: 12 }}>
                Saved cards — select
              </p>
              <div style={{ maxWidth: 360, borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.09)" }}>
                <img src="/checkout/Saved%20Card1.png" alt="Saved cards select" style={{ width: "100%", display: "block" }} />
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#bbb", marginBottom: 12 }}>
                Saved card — selected
              </p>
              <div style={{ maxWidth: 360, borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.09)" }}>
                <img src="/checkout/Saved%20Card2.png" alt="Saved card selected" style={{ width: "100%", display: "block" }} />
              </div>
            </div>
          </div>
          <p style={caption}>
            Masked card numbers (****4198) give enough information to identify without exposing sensitive data.
          </p>

          {/* Add new card */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 48 }}>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#bbb", marginBottom: 12 }}>
                Add new card — empty
              </p>
              <div style={{ maxWidth: 360, borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.09)" }}>
                <img src="/checkout/add%20new.png" alt="Add new card empty" style={{ width: "100%", display: "block" }} />
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#bbb", marginBottom: 12 }}>
                Add new card — filled
              </p>
              <div style={{ maxWidth: 360, borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.09)" }}>
                <img src="/checkout/add%20new%202.png" alt="Add new card filled" style={{ width: "100%", display: "block" }} />
              </div>
            </div>
          </div>
          <p style={caption}>Adding a new card — empty and filled states. Inline validation before save.</p>
        </div>
      </section>

      {/* ── SECTION 6 — TRANSACTION END STATES ── */}
      <section style={{ background: "#f9f9f9", padding: "100px 0" }}>
        <div style={{ maxWidth: MAX, margin: "0 auto", paddingLeft: PH.paddingLeft, paddingRight: PH.paddingRight }}>
          <p style={sectionLabel}>Edge Cases — All Four Endings</p>
          <h2 style={sectionHeading}>Every ending, designed with the same care.</h2>
          <p style={bodyText}>
            These are the four states a user sees at the end of any payment method — not just card. They were designed
            to either celebrate, resolve, or reassure. The icon, the colour, the heading, and the CTA copy all carry
            that specific weight.
          </p>
          <p style={{ ...bodyText, marginTop: 24 }}>
            Success is green — a checkmark, the exact amount confirmed, the merchant name. Failed is red with a warning
            icon — clear cause, single CTA: 'Try Again'. Invalid is yellow/amber — the amount constraint explained,
            same 'Try Again' path. Session Timeout is purple/neutral — security-framed, the only action is Login.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 24,
              marginTop: 64,
            }}
          >
            {[
              { src: "/checkout/Success.png", label: "Transaction Successful — ✓ green" },
              { src: "/checkout/Failed.png", label: "Transaction Failed — ✗ red" },
              { src: "/checkout/Invalid.png", label: "Invalid Amount — ⚠ amber" },
              { src: "/checkout/Session%20Timeout.png", label: "Session Timeout — ⏱ neutral" },
            ].map(({ src, label }) => (
              <WidgetCard key={label} src={src} alt={label} label={label} />
            ))}
          </div>
          <p style={caption}>Four endings. None of them an afterthought.</p>
        </div>
      </section>

      {/* ── SECTION 7 — TRANSFER CHECKOUT (DESKTOP) ── */}
      <section style={{ background: "#fff", padding: "100px 0" }}>
        <div style={{ maxWidth: MAX, margin: "0 auto", paddingLeft: PH.paddingLeft, paddingRight: PH.paddingRight }}>
          <p style={sectionLabel}>Method 02 — Transfer Checkout (Web)</p>
          <h2 style={sectionHeading}>Designing the handoff moment.</h2>
          <p style={bodyText}>
            Transfer checkout has a UX challenge that no other payment method shares: the user must leave your product,
            open their banking app, make a real money transfer, then come back and confirm it happened.
          </p>
          <p style={{ ...bodyText, marginTop: 24 }}>
            The design answer was a countdown timer — 'This one-time account expires in 29 mins 43 secs' — displayed
            persistently below the account details. The timer creates urgency without panic, and prevents the most
            common transfer failure: the account expiring before the user returns.
          </p>
          <p style={{ ...bodyText, marginTop: 24 }}>
            After the user clicks 'I've transferred the money', the widget enters a pending state with a Sent →
            Received progress indicator. The account details expand to confirm the recipient — account name, bank name,
            account number, amount — giving the user a way to verify before the money clears.
          </p>
          <p style={{ ...bodyText, marginTop: 24 }}>
            Two entry variants were designed to accommodate different merchant implementations.
          </p>

          {/* Two transfer entry layouts */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 64 }}>
            <div style={{ maxWidth: 360 }}>
              <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#bbb", marginBottom: 12 }}>
                Transfer entry — layout 1
              </p>
              <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.09)" }}>
                <img src="/checkout/Transfer.png" alt="Transfer layout 1" style={{ width: "100%", display: "block" }} />
              </div>
            </div>
            <div style={{ maxWidth: 360 }}>
              <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#bbb", marginBottom: 12 }}>
                Transfer entry — layout 2
              </p>
              <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.09)" }}>
                <img src="/checkout/Transfer%20option%202.png" alt="Transfer layout 2" style={{ width: "100%", display: "block" }} />
              </div>
            </div>
          </div>
          <p style={caption}>
            Two transfer entry layouts — same information architecture, different spatial arrangement for different
            merchant contexts.
          </p>

          {/* Transfer wait state trilogy */}
          <HScrollStrip>
            {[
              { src: "/checkout/Transfer-1.png", label: "Initiated — timer visible" },
              { src: "/checkout/Transfer-2.png", label: "In Progress — progress bar" },
              { src: "/checkout/Transfer-3.png", label: "Received — details expanded" },
            ].map(({ src, label }) => (
              <WidgetCard key={label} src={src} alt={label} label={label} />
            ))}
          </HScrollStrip>
          <p style={caption}>The wait state trilogy — the most considered sequence in the entire checkout.</p>
        </div>
      </section>

      {/* ── SECTION 8 — USSD CHECKOUT (DESKTOP) ── */}
      <section style={{ background: "#f9f9f9", padding: "100px 0" }}>
        <div style={{ maxWidth: MAX, margin: "0 auto", paddingLeft: PH.paddingLeft, paddingRight: PH.paddingRight }}>
          <p style={sectionLabel}>Method 03 — USSD Checkout (Web)</p>
          <h2 style={sectionHeading}>When the internet isn't the assumption.</h2>
          <p style={bodyText}>
            USSD is the payment method that works when everything else doesn't. No mobile data required — just a phone
            signal. For Nigerian merchants whose customers span the full connectivity spectrum, USSD isn't a legacy
            fallback. It's an essential channel.
          </p>
          <p style={{ ...bodyText, marginTop: 24 }}>
            The USSD flow starts with bank selection — a searchable dropdown of all supported banks. Once selected, a
            USSD code is generated and displayed prominently: large text, easily readable, with a copy affordance. The
            user dials the code on their phone. The system waits.
          </p>
          <p style={{ ...bodyText, marginTop: 24 }}>
            'I have completed this payment' is the CTA that bridges the off-app gap. After that, the same checking
            state and success state as every other method.
          </p>

          <HScrollStrip>
            {[
              { src: "/checkout/USSD.png", label: "Bank Select" },
              { src: "/checkout/USSD-1.png", label: "USSD Code Generated" },
              { src: "/checkout/USSD-2.png", label: "Dial Prompt" },
              { src: "/checkout/USSD-3.png", label: "Confirm" },
            ].map(({ src, label }) => (
              <WidgetCard key={label} src={src} alt={label} label={label} />
            ))}
          </HScrollStrip>

          <HScrollStrip>
            {[
              { src: "/checkout/USSD-4.png", label: "Completed" },
              { src: "/checkout/USSD-5.png", label: "Cancel Option" },
              { src: "/checkout/USSD-6.png", label: "Checking" },
              { src: "/checkout/USSD-7.png", label: "Success" },
            ].map(({ src, label }) => (
              <WidgetCard key={label} src={src} alt={label} label={label} />
            ))}
          </HScrollStrip>
          <p style={caption}>8 states across the full USSD flow — bank selection through async confirmation.</p>
        </div>
      </section>

      {/* ── SECTION 9 — QR CODE + BANK (DESKTOP) ── */}
      <section style={{ background: "#fff", padding: "100px 0" }}>
        <div style={{ maxWidth: MAX, margin: "0 auto", paddingLeft: PH.paddingLeft, paddingRight: PH.paddingRight }}>
          <p style={sectionLabel}>Method 04 & 05 — QR Code + Bank (Web)</p>
          <h2 style={sectionHeading}>Simplest. And most data-intensive. Both necessary.</h2>
          <p style={bodyText}>
            QR Code checkout is the simplest flow in the entire widget. One screen. One action. The user scans the
            displayed QR code with their mobile banking app — no typing, no steps, no decisions beyond the scan. It is
            the lowest-friction payment method in the suite.
          </p>
          <p style={{ ...bodyText, marginTop: 24 }}>
            Bank checkout is the opposite: the most data-intensive flow. The user selects their bank, enters their
            account number (which auto-resolves to their name — a verification step that builds trust), then provides
            date of birth and phone number. The additional identity data reflects the higher security requirements of
            direct bank debit transactions.
          </p>

          <div style={{ marginTop: 64 }}>
            <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#bbb", marginBottom: 16 }}>
              QR Code — one screen. Scan and done.
            </p>
            <div
              style={{
                background: "#f7f7f7",
                borderRadius: 20,
                padding: "48px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  filter: "drop-shadow(0 16px 48px rgba(0,0,0,0.18))",
                  borderRadius: 16,
                  overflow: "hidden",
                  maxWidth: 360,
                  width: "100%",
                }}
              >
                <img src="/checkout/QR%20Code.png" alt="QR Code checkout" style={{ width: "100%", display: "block" }} />
              </div>
            </div>
            <p style={caption}>QR Code — one screen. Scan and done. Zero form fields.</p>
          </div>

          <div style={{ marginTop: 64 }}>
            <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#bbb", marginBottom: 16 }}>
              Bank direct debit — full flow
            </p>
            <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.09)" }}>
              <img src="/checkout/Bank.png" alt="Bank direct debit" style={{ width: "100%", display: "block" }} />
            </div>
            <p style={caption}>
              Bank direct debit — account resolution, identity verification, secure debit authorisation.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 10 — MOBILE CARD ── */}
      <section style={{ background: "#f9f9f9", padding: "100px 0" }}>
        <div style={{ maxWidth: MAX, margin: "0 auto", paddingLeft: PH.paddingLeft, paddingRight: PH.paddingRight }}>
          <p style={sectionLabel}>Mobile — Card</p>
          <h2 style={sectionHeading}>Same flow. Different canvas.</h2>
          <p style={bodyText}>
            The mobile checkout is full-screen — not a constrained modal. This changes everything spatially. Input
            fields are larger and thumb-friendly. The method tabs become a vertically stacked list on the checkout
            entry screen. The OTP entry is more pin-pad in character.
          </p>
          <p style={{ ...bodyText, marginTop: 24 }}>
            The card flow on mobile covers the same 8 logical states as desktop — plus the full set of end states.
            Success, Error, Invalid, and Session Timeout all have mobile-specific treatments that feel native to the
            phone environment.
          </p>

          <div
            style={{
              background: "#f0f0f0",
              borderRadius: 16,
              padding: 48,
              textAlign: "center",
              marginTop: 64,
            }}
          >
            <img
              src="/checkout/mobile_checkout/Bank-1_mockup.png"
              alt="Mobile checkout card flow in context"
              style={{
                maxWidth: 800,
                width: "100%",
                margin: "0 auto",
                borderRadius: 12,
                display: "block",
              }}
            />
            <p style={{ ...caption, marginTop: 20 }}>Mobile checkout — card flow in context.</p>
          </div>

          <HScrollStrip>
            {[
              { src: "/checkout/mobile_checkout/Checkout.png", label: "Entry" },
              { src: "/checkout/mobile_checkout/Card1.png", label: "Card Number" },
              { src: "/checkout/mobile_checkout/Card2.png", label: "Expiry + CVV" },
              { src: "/checkout/mobile_checkout/Card3.png", label: "Proceed" },
              { src: "/checkout/mobile_checkout/Card4.png", label: "OTP" },
              { src: "/checkout/mobile_checkout/Card5.png", label: "Checking" },
              { src: "/checkout/mobile_checkout/Success.png", label: "✓ Success" },
              { src: "/checkout/mobile_checkout/Error.png", label: "✗ Error" },
              { src: "/checkout/mobile_checkout/Invalid.png", label: "⚠ Invalid" },
              { src: "/checkout/mobile_checkout/Checkout1.png", label: "⏱ Timeout" },
            ].map(({ src, label }) => (
              <PhoneFrame key={label} src={src} alt={label} label={label} />
            ))}
          </HScrollStrip>
        </div>
      </section>

      {/* ── SECTION 11 — MOBILE TRANSFER ── */}
      <section style={{ background: "#fff", padding: "100px 0" }}>
        <div style={{ maxWidth: MAX, margin: "0 auto", paddingLeft: PH.paddingLeft, paddingRight: PH.paddingRight }}>
          <p style={sectionLabel}>Mobile — Transfer</p>
          <h2 style={sectionHeading}>The handoff, on the user's own device.</h2>
          <p style={bodyText}>
            Transfer on mobile has an advantage desktop doesn't — the user is already on the device they'll use to
            make the transfer. The flow accounts for this: after displaying account details and the countdown timer,
            the 'I've transferred the money' CTA can optionally deep-link into common banking apps.
          </p>
          <p style={{ ...bodyText, marginTop: 24 }}>
            The Sent → Received progress indicator on mobile is vertically stacked, with clear status labels and the
            account details expanding beneath it on confirmation.
          </p>

          <div
            style={{
              background: "#f0f0f0",
              borderRadius: 16,
              padding: 48,
              textAlign: "center",
              marginTop: 64,
            }}
          >
            <img
              src="/checkout/mobile_checkout/Transfer1_mockup.png"
              alt="Mobile transfer flow in context"
              style={{
                maxWidth: 800,
                width: "100%",
                margin: "0 auto",
                borderRadius: 12,
                display: "block",
              }}
            />
            <p style={{ ...caption, marginTop: 20 }}>Mobile transfer flow — handoff moment in context.</p>
          </div>

          <HScrollStrip>
            {[
              { src: "/checkout/mobile_checkout/Checkout.png", label: "Entry" },
              { src: "/checkout/mobile_checkout/Transfer1.png", label: "Account Details" },
              { src: "/checkout/mobile_checkout/Transfer2.png", label: "In Progress" },
              { src: "/checkout/mobile_checkout/Transfer3.png", label: "Received" },
              { src: "/checkout/mobile_checkout/Card5.png", label: "Checking" },
              { src: "/checkout/mobile_checkout/Success.png", label: "✓ Success" },
            ].map(({ src, label }) => (
              <PhoneFrame key={label} src={src} alt={label} label={label} />
            ))}
          </HScrollStrip>
        </div>
      </section>

      {/* ── SECTION 12 — MOBILE USSD + QR + BANK ── */}
      <section style={{ background: "#f9f9f9", padding: "100px 0" }}>
        <div style={{ maxWidth: MAX, margin: "0 auto", paddingLeft: PH.paddingLeft, paddingRight: PH.paddingRight }}>
          <p style={sectionLabel}>Mobile — USSD, QR Code & Bank</p>
          <h2 style={sectionHeading}>Every method. Every device.</h2>
          <p style={bodyText}>
            USSD on mobile is uniquely powerful — the user is on the same device they'll dial the code from. The USSD
            code is displayed large with a direct dial affordance.
          </p>
          <p style={{ ...bodyText, marginTop: 24 }}>
            QR on mobile shows the code for scanning with a different device or banking app — a slightly different use
            case from the desktop version, where the user is more likely to be at a point-of-sale context.
          </p>
          <p style={{ ...bodyText, marginTop: 24 }}>
            Bank debit on mobile covers the full Checkout → Bank selection → Account details → Auth → Checking →
            Success flow across 6 screens.
          </p>

          {/* USSD strip */}
          <p
            style={{
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#bbb",
              marginTop: 64,
              marginBottom: 0,
            }}
          >
            USSD
          </p>
          <HScrollStrip>
            {[
              { src: "/checkout/mobile_checkout/Checkout.png", label: "Entry" },
              { src: "/checkout/mobile_checkout/USSD.png", label: "Bank Select" },
              { src: "/checkout/mobile_checkout/USSD-1.png", label: "USSD Code" },
              { src: "/checkout/mobile_checkout/USSD-2.png", label: "USSD-2 variant" },
              { src: "/checkout/mobile_checkout/USSD-2-1.png", label: "Confirm" },
              { src: "/checkout/mobile_checkout/USSD-3.png", label: "Sent" },
              { src: "/checkout/mobile_checkout/USSD-4.png", label: "Received" },
              { src: "/checkout/mobile_checkout/USSD-5.png", label: "✓ Success" },
            ].map(({ src, label }) => (
              <PhoneFrame key={label} src={src} alt={label} label={label} />
            ))}
          </HScrollStrip>

          {/* QR strip */}
          <p
            style={{
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#bbb",
              marginTop: 40,
              marginBottom: 0,
            }}
          >
            QR Code
          </p>
          <HScrollStrip>
            {[
              { src: "/checkout/mobile_checkout/Checkout.png", label: "Entry" },
              { src: "/checkout/mobile_checkout/QR.png", label: "QR Display" },
            ].map(({ src, label }) => (
              <PhoneFrame key={label} src={src} alt={label} label={label} />
            ))}
          </HScrollStrip>

          {/* Bank strip */}
          <p
            style={{
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#bbb",
              marginTop: 40,
              marginBottom: 0,
            }}
          >
            Bank Direct Debit
          </p>
          <HScrollStrip>
            {[
              { src: "/checkout/mobile_checkout/Checkout.png", label: "Entry" },
              { src: "/checkout/mobile_checkout/Bank.png", label: "Bank Select" },
              { src: "/checkout/mobile_checkout/Bank-1.png", label: "Account Number" },
              { src: "/checkout/mobile_checkout/Bank-2.png", label: "Account Resolved" },
              { src: "/checkout/mobile_checkout/Bank-3.png", label: "Checking" },
              { src: "/checkout/mobile_checkout/Bank-4.png", label: "✓ Success" },
            ].map(({ src, label }) => (
              <PhoneFrame key={label} src={src} alt={label} label={label} />
            ))}
          </HScrollStrip>

          <p style={caption}>Every method. Every device. No flow left undesigned.</p>
        </div>
      </section>

      {/* ── SECTION 13 — DESIGN DECISIONS ── */}
      <section style={{ background: "#fff", padding: "100px 0" }}>
        <div style={{ maxWidth: MAX, margin: "0 auto", paddingLeft: PH.paddingLeft, paddingRight: PH.paddingRight }}>
          <p style={sectionLabel}>Design Decisions</p>
          <h2 style={sectionHeading}>The thinking behind the pixels.</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 24,
              marginTop: 48,
            }}
          >
            {[
              {
                title: "The persistent shell",
                body: "Keeping the PayZeep branding, email, amount, and method tabs constant across all 5 flows was a deliberate trust anchor. Users switching methods shouldn't feel disoriented. The shell says: you are still in the same safe place. It also makes the widget extensible — a sixth payment method is a new inner flow, not a redesign.",
              },
              {
                title: "The countdown timer on transfer",
                body: "The one-time account expiry timer was debated. The risk: creating anxiety. The payoff: preventing the most common transfer failure — account expiry before the user returns. The decision was to keep it, but style it to inform rather than alarm. Small text, neutral colour, persistent but not screaming.",
              },
              {
                title: "Saved card masking",
                body: "Showing ****4198 with expiry date gives users enough to identify the right card without exposing sensitive data. The pattern is familiar from banking apps — users trust it immediately. 'Add New Card' is always visible at the bottom of the list, never buried behind a scroll.",
              },
              {
                title: "The four end states as brand moments",
                body: "Success, Failed, Invalid Amount, and Session Timeout are not functional afterthoughts — they are the last impression the checkout leaves. Each one uses a distinct icon, a distinct colour temperature, and copy that is specific to what actually happened. 'Try Again' appears on Failed and Invalid because both are recoverable. 'Login' appears on Timeout because re-authentication is the only path.",
              },
              {
                title: "Mobile as a redesign, not a resize",
                body: "The mobile checkout was designed from scratch for the phone environment — not adapted from the desktop widget. Full-screen layout, thumb-zone CTAs, larger input fields, and native-feeling transitions. The information architecture is identical. The spatial execution is entirely different.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                style={{
                  border: "1px solid #ececec",
                  borderRadius: 14,
                  padding: 36,
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#111",
                    marginBottom: 16,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {title}
                </div>
                <div style={{ fontSize: 15, fontWeight: 300, color: "#666", lineHeight: 1.8 }}>{body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 14 — REFLECTION ── */}
      <section style={{ background: "#f9f9f9", padding: "100px 0" }}>
        <div style={{ maxWidth: MAX, margin: "0 auto", paddingLeft: PH.paddingLeft, paddingRight: PH.paddingRight }}>
          <p style={sectionLabel}>Reflection</p>
          <h2 style={sectionHeading}>Checkout taught me that micro-decisions carry macro weight.</h2>
          <p style={bodyText}>
            The difference between a checkout that converts and one that doesn't often comes down to things that look
            trivial: the placeholder text in a card number field, the exact label on a CTA at step 3, whether the
            error message says 'Something went wrong' or tells the user what actually happened and what to do next.
          </p>
          <p style={{ ...bodyText, marginTop: 24 }}>
            Designing across five payment methods simultaneously forced a system-level discipline I hadn't exercised at
            this scale before. Every decision made for the card flow had to be pressure-tested against how it would
            read in the transfer flow, the USSD flow, the QR flow, and the bank flow. Consistency across radically
            different interactions is the hardest design problem — harder than any single flow in isolation.
          </p>
          <p style={{ ...bodyText, marginTop: 24 }}>
            The four end states are what I'm most proud of in this project. They're not the glamorous part of checkout
            design. But they're where customer trust is made or broken — and they're almost always the part that gets
            designed last, if at all.
          </p>

          {[
            "Consistency across different payment methods is a trust problem, not a visual one.",
            "Error states are primary user journeys in Nigerian fintech. Design them first.",
            "The checkout's job is to disappear. Every element that doesn't serve that goal is a liability.",
          ].map((quote) => (
            <p
              key={quote}
              style={{
                fontSize: "clamp(18px, 2.5vw, 24px)",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#111",
                borderLeft: "2px solid #111",
                paddingLeft: 28,
                margin: "40px 0",
                lineHeight: 1.6,
                maxWidth: 720,
              }}
            >
              "{quote}"
            </p>
          ))}
        </div>
      </section>

      {/* ── SECTION 15 — CREDITS ── */}
      <section style={{ background: "#fff", padding: "100px 0" }}>
        <div style={{ maxWidth: MAX, margin: "0 auto", paddingLeft: PH.paddingLeft, paddingRight: PH.paddingRight }}>
          <p style={sectionLabel}>Credits</p>
          <h2 style={{ ...sectionHeading, fontSize: "clamp(28px, 4vw, 48px)" }}>Team</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 8 }}>
            {[
              ["Oladunni Treasure", "Product Designer"],
              ["Femi Jimoh", "Product Designer"],
            ].map(([name, role]) => (
              <div key={name} style={{ display: "flex", gap: 24, alignItems: "baseline" }}>
                <span style={{ fontSize: 17, fontWeight: 400, color: "#111" }}>{name}</span>
                <span style={{ fontSize: 13, color: "#bbb", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  {role}
                </span>
              </div>
            ))}
          </div>

          {/* Next project */}
          <div
            style={{
              marginTop: 120,
              paddingTop: 60,
              borderTop: "1px solid #ebebeb",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
            }}
          >
            <div>
              <p style={{ ...sectionLabel, marginBottom: 8 }}>Next Project</p>
              <a
                href="/projects/payzeep-merchant-portal"
                style={{
                  fontSize: "clamp(22px, 3vw, 40px)",
                  fontWeight: 500,
                  color: "#111",
                  letterSpacing: "-0.02em",
                  textDecoration: "none",
                }}
              >
                PayZeep Merchant Portal →
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
