"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ClosingSection from "../[slug]/ClosingSection";

const p = (path: string) => `/paymi%20app/${path.replace(/ /g, "%20")}`;

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}

function Phone({ src, label, width = 200 }: { src: string; label?: string; width?: number }) {
  return (
    <figure style={{ margin: 0, flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
      <Image src={src} alt={label || ""} width={width * 3} height={Math.round(width * 3 * 2.17)} unoptimized
        style={{ width, height: "auto", display: "block", borderRadius: 8 }} />
      {label && (
        <figcaption className="text-[9px] tracking-widest uppercase text-[#111]/30 text-center" style={{ maxWidth: width }}>
          {label}
        </figcaption>
      )}
    </figure>
  );
}

function ScrollRow({ children }: { children: React.ReactNode }) {
  return (
    <Fade>
      <div className="w-full bg-[#f2f2f2] rounded-2xl p-8 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", minWidth: "max-content" }}>
          {children}
        </div>
      </div>
    </Fade>
  );
}

function Divider() {
  return <div className="border-t border-[#111]/8 my-16" />;
}

export default function PaymiPage() {
  return (
    <main className="max-w-275 mx-auto px-6 pt-20 pb-32">
      <style>{`
        .step-grid { display: grid; grid-template-columns: 1fr 280px; gap: 32px; align-items: start; }
        .compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        @media (max-width: 640px) {
          .step-grid { grid-template-columns: 1fr; }
          .compare-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HEADER ─────────────────────────────────────────────────────── */}
      <section className="max-w-[72ch]">
        <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-5">Case Study</p>
        <h1 className="font-medium leading-[1.03] tracking-[-0.03em]"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4.8rem)" }}>
          Paymi Agent.
        </h1>
        <p className="mt-8 text-base text-[#111]/55 leading-relaxed max-w-[58ch]">
          Redesigning Nigeria&rsquo;s last-mile payment experience — from the ground up. One live product,
          a year of iterations, and the people who are the bank.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { label: "Role", value: "Product Designer (UI/UX)" },
            { label: "Company", value: "Paymi Solutions Limited" },
            { label: "Timeline", value: "Jun 2024 — Ongoing" },
            { label: "Platform", value: "iOS + Android" },
            { label: "Deliverables", value: "End-to-end UX, UI design, component system, interaction design" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-2">{label}</p>
              <p className="text-xs text-[#111]/60 leading-relaxed">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            { label: "App Store ↗", href: "https://apps.apple.com/ng/app/payzeep-agent/id6553954016" },
            { label: "Play Store ↗", href: "https://play.google.com/store/apps/details?id=ng.com.paymi.mpos" },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}
              className="inline-flex items-center gap-2 text-xs font-medium text-[#111]/55 border border-[#111]/15 rounded-full px-4 py-2 hover:border-[#111]/35 hover:text-[#111]/75 transition-colors">
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* ── HERO IMAGE ─────────────────────────────────────────────────── */}
      <div className="mt-16">
        <Fade>
          <div className="w-full bg-[#f2f2f2] rounded-2xl overflow-hidden">
            <Image src={p("Homepage.png")} alt="Paymi Agent" width={1600} height={1200} priority unoptimized
              style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </Fade>
      </div>

      <Divider />

      {/* ── THE PRODUCT ─────────────────────────────────────────────────── */}
      <section className="max-w-[72ch] py-4">
        <Fade>
          <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-6">The Product</p>
          <p className="text-base text-[#111]/55 leading-relaxed mb-5">
            Most fintech products are built for people with bank accounts, stable internet, and time to figure
            things out. Paymi Agent was built for the person standing behind a POS machine in Kano at 2pm,
            trying to process a withdrawal for a customer who has been waiting ten minutes, on a network that
            just dropped.
          </p>
          <p className="text-base text-[#111]/55 leading-relaxed mb-5">
            Over a year working on Paymi Agent, I redesigned the home screen twice, built a bank network
            monitoring feature from scratch, designed a complete 5-step KYC onboarding flow, solved session
            timeout for agents with poor connectivity, and shipped a transaction history system that gave
            merchants real control over their financial records.
          </p>
          <p className="text-base text-[#111]/55 leading-relaxed">
            It is a two-sided product: a financial tool for the agent, and an interface that has to perform
            for the customer standing in front of them.{" "}
            <strong className="font-medium text-[#111]/80">When the app fails, someone doesn&rsquo;t get their money.</strong>
          </p>
        </Fade>
      </section>

      <Divider />

      {/* ── THE CHALLENGE ───────────────────────────────────────────────── */}
      <section className="max-w-[72ch] py-4">
        <Fade>
          <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-6">The Challenge</p>
        </Fade>
        <div className="space-y-8">
          {[
            { n: "1.", title: "When the app fails, someone doesn't get their money", body: "Agents process dozens of transactions a day. A confusing button, a silent error, or a failed network call isn't a UX problem — it's a business problem with a real person waiting. 'Error 400' means nothing to Chidinma in Ojuelegba. 'GTB is down right now' means everything." },
            { n: "2.", title: "Poor connectivity kills transactions silently", body: "Agents across northern Nigeria have unstable connections. Before we fixed it, sessions expired mid-transaction without warning. Transfers went into bank downtime without the agent knowing. The app just stopped. Nobody knew if the money moved." },
            { n: "3.", title: "The home screen was built for the business, not the agent", body: "The original design led with commission — what the agent had earned. Made sense from a business perspective. But agents open this app 40+ times a day. What they need first: balance, transfer, add money. The hierarchy was wrong from day one." },
          ].map(({ n, title, body }) => (
            <Fade key={n}>
              <div style={{ display: "grid", gridTemplateColumns: "2ch 1fr", gap: 16 }}>
                <p className="text-[9px] tracking-widest uppercase text-[#111]/30" style={{ paddingTop: 2 }}>{n}</p>
                <div>
                  <p className="text-sm font-medium text-[#111]/80 mb-2 leading-snug">{title}</p>
                  <p className="text-sm text-[#111]/55 leading-relaxed">{body}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── HOME SCREEN REDESIGN ─────────────────────────────────────────── */}
      <section className="py-4">
        <div className="max-w-[72ch] mb-10">
          <Fade>
            <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-6">Redesign 01 — Home Screen</p>
            <p className="text-base text-[#111]/55 leading-relaxed mb-4">
              The original home screen led with a commission card. From a business perspective: logical. From
              an agent&rsquo;s perspective: irrelevant most of the time. Agents open this app 40+ times a day.
              Commission doesn&rsquo;t change 40 times a day. Balance does.
            </p>
            <p className="text-base text-[#111]/55 leading-relaxed mb-8">
              I restructured the hierarchy around what agents actually need at the top of every session:{" "}
              <strong className="font-medium text-[#111]/80">balance, transfer, add money</strong>. The redesign
              also surfaces the agent&rsquo;s bank account number at the top — because agents read it out loud
              to customers multiple times a day and were navigating three screens deep to find it.
            </p>
          </Fade>
        </div>

        <Fade>
          <div className="w-full bg-[#f2f2f2] rounded-2xl p-8">
            <div className="compare-grid">
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <Image src={p("old dashboard design/Component.png")} alt="Original dashboard" width={600} height={900} unoptimized
                  style={{ width: "100%", height: "auto", borderRadius: 8 }} />
                <p className="text-[9px] tracking-widest uppercase text-[#111]/30 text-center">Before — commission in hero position</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <Image src={p("Dashboard Updated.png")} alt="Redesigned dashboard" width={900} height={900} unoptimized
                  style={{ width: "100%", height: "auto", borderRadius: 8 }} />
                <p className="text-[9px] tracking-widest uppercase text-[#111]/30 text-center">After — balance first, bank info surfaced</p>
              </div>
            </div>
          </div>
        </Fade>

        <div className="max-w-[72ch] mt-10 space-y-4">
          {[
            { n: "1.", d: "Transfer and Add Money became inline CTAs inside the balance card — two fewer touches per transaction, multiplied by 40 sessions a day." },
            { n: "2.", d: "Bank account number moved to the top bar — always visible without scrolling. Agents read this to customers." },
            { n: "3.", d: "Commission card moved below the fold. Still visible — just not the first thing demanding attention when a customer is waiting." },
            { n: "4.", d: "KYC prompt became a Tier upgrade card. Agents respond to 'unlock higher limits' more than 'complete your profile'." },
          ].map(({ n, d }) => (
            <Fade key={n}>
              <div style={{ display: "grid", gridTemplateColumns: "2ch 1fr", gap: 16 }}>
                <p className="text-[9px] tracking-widest uppercase text-[#111]/30" style={{ paddingTop: 2 }}>{n}</p>
                <p className="text-sm text-[#111]/55 leading-relaxed">{d}</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── POS WITHDRAWAL ─────────────────────────────────────────────── */}
      <section className="py-4">
        <div className="max-w-[72ch] mb-10">
          <Fade>
            <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-6">POS Card Withdrawal</p>
            <p className="text-base text-[#111]/55 leading-relaxed">
              Agent connects mPOS terminal. Customer inserts card, enters PIN, selects account type. Six steps,
              every one stateful and glanceable under market noise. The processing countdown during a POS swipe
              is a clock, not a spinner — silence during a card transaction feels like failure; a countdown feels
              like progress.
            </p>
          </Fade>
        </div>
        <ScrollRow>
          {[
            { src: p("add money/Withdraw.png"), label: "01 · Enter amount" },
            { src: p("add money/insert card.png"), label: "02 · Insert card" },
            { src: p("add money/card inserted.png"), label: "03 · Card detected" },
            { src: p("add money/card pin.png"), label: "04 · Enter PIN" },
            { src: p("add money/select acc type.png"), label: "05 · Account type" },
            { src: p("add money/sucess page.png"), label: "06 · Successful" },
          ].map(({ src, label }) => <Phone key={label} src={src} label={label} width={185} />)}
        </ScrollRow>
      </section>

      <Divider />

      {/* ── ADD MONEY ─────────────────────────────────────────────────── */}
      <section className="py-4">
        <div className="max-w-[72ch] mb-10">
          <Fade>
            <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-6">Add Money</p>
            <p className="text-base text-[#111]/55 leading-relaxed">
              Agents fund their Paymi wallet via bank transfer or debit card. The Add Money screen surfaces
              the agent&rsquo;s bank details immediately — account name, number, bank — because agents share
              these details with customers multiple times a day. Copy Account Number is one tap, always visible.
            </p>
          </Fade>
        </div>
        <ScrollRow>
          {[
            { src: p("add money/Add money-2.png"), label: "Entry screen" },
            { src: p("add money/transfer.png"), label: "Bank transfer details" },
          ].map(({ src, label }) => <Phone key={label} src={src} label={label} width={240} />)}
        </ScrollRow>
      </section>

      <Divider />

      {/* ── BANK NETWORK MONITOR ─────────────────────────────────────── */}
      <section className="py-4">
        <div className="max-w-[72ch] mb-10">
          <Fade>
            <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-6">Bank Network Monitor · Favourite Feature</p>
            <p className="text-base text-[#111]/55 leading-relaxed mb-4">
              Agents were processing transfers into banks experiencing downtime. Transactions would fail.
              Customers would get angry. Agents would get blamed. Neither side understood why.
            </p>
            <p className="text-base text-[#111]/55 leading-relaxed mb-4">
              The first design split banks into two lists: those with delays and those without. Binary.
              Clean. <em>Wrong.</em> It told agents there was a problem but not which transaction type to
              avoid — an agent doing a card withdrawal needs different information than an agent sending a
              bank transfer.
            </p>
            <p className="text-base text-[#111]/55 leading-relaxed">
              The redesign introduced tabs that match the agent&rsquo;s workflow:{" "}
              <strong className="font-medium text-[#111]/80">Withdrawal / Transfer / Bills</strong>. You think
              in transaction types. The interface thinks in transaction types. No translation required.
            </p>
          </Fade>
        </div>

        <Fade>
          <div className="w-full bg-[#f2f2f2] rounded-2xl p-8">
            <div className="compare-grid">
              <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
                <Image src={p("bank network status/first desgin .png")} alt="First design" width={600} height={900} unoptimized
                  style={{ width: "100%", maxWidth: 300, height: "auto", borderRadius: 8 }} />
                <p className="text-[9px] tracking-widest uppercase text-[#111]/30 text-center">First design — flat good / bad lists</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
                <Image src={p("bank network status/Check bank network - withdrawal.png")} alt="Final design" width={600} height={900} unoptimized
                  style={{ width: "100%", maxWidth: 300, height: "auto", borderRadius: 8 }} />
                <p className="text-[9px] tracking-widest uppercase text-[#111]/30 text-center">Final — tabbed by transaction type</p>
              </div>
            </div>
          </div>
        </Fade>

        <div className="mt-4">
          <ScrollRow>
            {[
              { src: p("bank network status/Check bank network - withdrawal.png"), label: "Withdrawal — per bank, per card scheme" },
              { src: p("bank network status/Check bank network - transfer.png"), label: "Transfer — deposit & transfer rates" },
              { src: p("bank network status/Check bank network - bills.png"), label: "Bills — provider success rates" },
            ].map(({ src, label }) => <Phone key={label} src={src} label={label} width={220} />)}
          </ScrollRow>
        </div>

        <div className="max-w-[72ch] mt-10">
          <Fade>
            <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-4">The Aha Moment</p>
            <p className="text-sm text-[#111]/55 leading-relaxed">
              A Stanbic IBTC card on Mastercard: 23% success rate. The same customer&rsquo;s Visa on the
              same bank: 99.45%. That level of granularity — per bank, per card scheme — is what makes this
              actually useful. Agents can now say: &ldquo;GTB is red on Mastercard, try Visa.&rdquo; This was
              the hardest feature to get approved internally. The most-requested feature by agents once they
              had it. That gap is exactly what good design closes.
            </p>
          </Fade>
        </div>
      </section>

      <Divider />

      {/* ── KYC ONBOARDING ────────────────────────────────────────────── */}
      <section className="py-4">
        <div className="max-w-[72ch] mb-10">
          <Fade>
            <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-6">5-Step KYC Onboarding</p>
            <p className="text-base text-[#111]/55 leading-relaxed mb-4">
              Every new agent goes through five steps before their first transaction. Each step was designed
              to reduce drop-off.
            </p>
            <p className="text-base text-[#111]/55 leading-relaxed">
              People don&rsquo;t quit because the requirements are hard. They quit because the requirements
              feel endless. The stepper visible throughout makes progress legible. Knowing you&rsquo;re at
              Step 5 of 6 is motivation. Standing in front of an unmarked door is not.
            </p>
          </Fade>
        </div>

        <div className="space-y-4">
          {([
            { step: "01", title: "Account Type Selection", body: "Individual or Business. Sets the entire downstream KYC path — business accounts route through SCUML. Individual agents never see it.", src: p("individual account/Step 1.png"), wide: false },
            { step: "02", title: "Personal Details", body: "Full name, date of birth, BVN. Inline validation per field — errors surface in real time, not on submit. No filling three fields and getting one confusing error message.", src: p("individual account/Step 2.png"), wide: true },
            { step: "03", title: "Address Details", body: "Residential address, state, LGA, social handles. Social fields were deliberate — agents are often small business owners with a public presence that helps verify identity.", src: p("individual account/Step 3.png"), wide: false },
            { step: "04", title: "Selfie / Face Match", body: "Live selfie with face detection. States: empty → positioning → captured → Match >90% (pass) → <90% (retry). Designed to feel encouraging. Humans blink. The UI should understand that.", src: p("individual account/Step 4.png"), wide: true },
            { step: "05", title: "KYC Documents", body: "BVN verification, National ID, Proof of Address. Submit only activates when complete. 'Skip for later' was deliberate — see the dashboard first, complete KYC second.", src: p("individual account/Step 5.png"), wide: false },
          ] as { step: string; title: string; body: string; src: string; wide: boolean }[]).map(({ step, title, body, src, wide }) => (
            <Fade key={step}>
              <div className="w-full bg-[#f2f2f2] rounded-2xl p-8">
                {wide ? (
                  <>
                    <div style={{ marginBottom: 24 }}>
                      <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-2">Step {step}</p>
                      <p className="text-sm font-medium text-[#111]/80 mb-2 leading-snug">{title}</p>
                      <p className="text-sm text-[#111]/55 leading-relaxed max-w-[56ch]">{body}</p>
                    </div>
                    <Image src={src} alt={title} width={1600} height={700} unoptimized
                      style={{ width: "100%", height: "auto", display: "block", borderRadius: 8 }} />
                  </>
                ) : (
                  <div className="step-grid">
                    <div>
                      <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-2">Step {step}</p>
                      <p className="text-sm font-medium text-[#111]/80 mb-2 leading-snug">{title}</p>
                      <p className="text-sm text-[#111]/55 leading-relaxed">{body}</p>
                    </div>
                    <Image src={src} alt={title} width={840} height={1820} unoptimized
                      style={{ width: 280, height: "auto", display: "block", borderRadius: 8 }} />
                  </div>
                )}
              </div>
            </Fade>
          ))}
        </div>

        <div className="mt-4">
          <Fade>
            <div className="w-full bg-[#f2f2f2] rounded-2xl p-8">
              <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-6 text-center">KYC Completed</p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <Image src={p("individual account/KYC Completed.png")} alt="KYC completed" width={1200} height={600} unoptimized
                  style={{ flex: "1 1 280px", minWidth: 0, maxWidth: 480, height: "auto", borderRadius: 8 }} />
                <Image src={p("Activate Account.png")} alt="Activate account" width={1200} height={600} unoptimized
                  style={{ flex: "1 1 280px", minWidth: 0, maxWidth: 480, height: "auto", borderRadius: 8 }} />
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <Divider />

      {/* ── SESSION TIMEOUT ───────────────────────────────────────────── */}
      <section className="py-4">
        <div className="max-w-[72ch] mb-10">
          <Fade>
            <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-6">First Project at Paymi · The Problem Nobody Was Talking About</p>
            <p className="text-base text-[#111]/55 leading-relaxed">
              Users in northern Nigeria with poor connectivity were losing sessions mid-transaction without
              knowing why. No warning. No recovery. Two separate problems: connection loss and session timeout.
              Both needed states that felt human — not alarming, but honest. Three states, every scenario covered.
              These three states directly reduced support tickets in the first month after launch.
            </p>
          </Fade>
        </div>
        <ScrollRow>
          {[
            { src: p("internet connection & session timeout/Component.png"), label: "Connection lost — retry visible" },
            { src: p("internet connection & session timeout/Component-1.png"), label: "Connected — recovery state" },
            { src: p("internet connection & session timeout/Component-2.png"), label: "Session expired — login prompt" },
          ].map(({ src, label }) => <Phone key={label} src={src} label={label} width={220} />)}
        </ScrollRow>
      </section>

      <Divider />

      {/* ── TRANSACTION HISTORY ───────────────────────────────────────── */}
      <section className="py-4">
        <div className="max-w-[72ch] mb-10">
          <Fade>
            <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-6">Transaction History</p>
            <p className="text-base text-[#111]/55 leading-relaxed">
              Agents needed records they could actually use — filter by type, filter by status, request
              statements for specific periods. The statement of account gives agents control over date range,
              transaction category (credit, debit, or both), and balance after each transaction inline.
              The goal: a statement a merchant could hand to an accountant.
            </p>
          </Fade>
        </div>
        <ScrollRow>
          {[
            { src: p("transactional history/Component-1.png"), label: "History + request statement" },
            { src: p("transactional history/Categories filter.png"), label: "Filter by category" },
            { src: p("transactional history/Categories filter-1.png"), label: "Filter by status" },
            { src: p("transactional history/Component-2.png"), label: "Statement timeframe" },
            { src: p("transactional history/Component-3.png"), label: "Custom date range" },
          ].map(({ src, label }) => <Phone key={label} src={src} label={label} width={185} />)}
        </ScrollRow>

        <div className="mt-4">
          <Fade>
            <div className="w-full bg-[#f2f2f2] rounded-2xl overflow-hidden" style={{ maxHeight: 540, position: "relative" }}>
              <Image src={p("stateofacc.png")} alt="Statement of Account" width={1600} height={3200} unoptimized
                style={{ width: "100%", height: "auto", display: "block" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 100, background: "linear-gradient(transparent, #f2f2f2)", pointerEvents: "none" }} />
            </div>
            <p className="mt-3 text-[9px] tracking-widest uppercase text-[#111]/30">
              Statement of account — date range · category filter · balance per transaction
            </p>
          </Fade>
        </div>
      </section>

      <Divider />

      {/* ── TRANSACTION STATES ────────────────────────────────────────── */}
      <section className="py-4">
        <div className="max-w-[72ch] mb-10">
          <Fade>
            <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-6">Transaction States</p>
            <p className="text-base text-[#111]/55 leading-relaxed">
              Bill payment is where agents make a significant portion of their daily commission. Airtime and
              data alone can be 20–30 transactions on a busy day. The success state needed to feel earned.
              The error receipt needed to say exactly what went wrong — not &lsquo;Error 400.&rsquo; Not
              &lsquo;Something went wrong.&rsquo; Specific. Actionable.
            </p>
          </Fade>
        </div>
        <div className="space-y-4">
          <ScrollRow>
            {[
              { src: p("state/Success/Airtime.png"), label: "Airtime · Yippee!" },
              { src: p("state/Success/Cable TV.png"), label: "Cable TV" },
              { src: p("state/Success/Data.png"), label: "Data" },
              { src: p("state/Success/Electricity.png"), label: "Electricity" },
            ].map(({ src, label }) => <Phone key={label} src={src} label={label} width={185} />)}
          </ScrollRow>
          <ScrollRow>
            {[
              { src: p("state/Success/Success receipt.png"), label: "Transfer success" },
              { src: p("state/Success/Error receipt.png"), label: "Transfer declined" },
              { src: p("state/Success/Transfer.png"), label: "Transfer receipt" },
              { src: p("state/Success/Withdrawal.png"), label: "Withdrawal receipt" },
            ].map(({ src, label }) => <Phone key={label} src={src} label={label} width={185} />)}
          </ScrollRow>
        </div>
      </section>

      <Divider />

      {/* ── SAVED BENEFICIARIES ───────────────────────────────────────── */}
      <section className="py-4">
        <div className="max-w-[72ch] mb-10">
          <Fade>
            <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-6">Saved Beneficiaries</p>
            <p className="text-base text-[#111]/55 leading-relaxed">
              An agent who serves the same 200 people regularly should pull up a customer&rsquo;s details in
              two taps. Saved beneficiaries — searchable, manageable, with clear states for adding, selecting,
              and deleting — reduce number-entry errors and speed up repeat transactions.
            </p>
          </Fade>
        </div>
        <ScrollRow>
          {[
            { src: p("beneficiar transfer money/Bill.png"), label: "Saved list" },
            { src: p("beneficiar transfer money/Bill-1.png"), label: "Select options" },
            { src: p("beneficiar transfer money/Bill-2.png"), label: "Delete confirm" },
            { src: p("beneficiar transfer money/Bill-3.png"), label: "Deleted" },
            { src: p("beneficiar transfer money/Bill-4.png"), label: "Add to favourites" },
            { src: p("beneficiar transfer money/New.png"), label: "Add new" },
            { src: p("beneficiar transfer money/New-1.png"), label: "Recipient details" },
            { src: p("beneficiar transfer money/New-2.png"), label: "Added" },
          ].map(({ src, label }) => <Phone key={label} src={src} label={label} width={170} />)}
        </ScrollRow>
      </section>

      <Divider />

      {/* ── AUTHENTICATION ────────────────────────────────────────────── */}
      <section className="py-4">
        <div className="max-w-[72ch] mb-10">
          <Fade>
            <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-6">Authentication</p>
            <p className="text-base text-[#111]/55 leading-relaxed">
              Login is personalised — &ldquo;Welcome Back! Hello Joshua&rdquo; — because the agent&rsquo;s
              name on the login screen signals: this app belongs to them. Every money movement is PIN-gated.
              Every entry point has empty and filled states designed with the same care as the transaction flows.
            </p>
          </Fade>
        </div>
        <Fade>
          <div className="w-full bg-[#f2f2f2] rounded-2xl p-8">
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
              {[
                { src: p("Login User.png"), label: "Login" },
                { src: p("Phone Verification.png"), label: "Phone verification" },
                { src: p("Create Password.png"), label: "Create password" },
                { src: p("Device Reg..png"), label: "Device registration" },
              ].map(({ src, label }) => (
                <div key={label} style={{ flex: "1 1 180px", minWidth: 0, maxWidth: 280 }}>
                  <Image src={src} alt={label} width={1400} height={800} unoptimized
                    style={{ width: "100%", height: "auto", borderRadius: 8 }} />
                  <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mt-3 text-center">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </section>

      <Divider />

      <ClosingSection content={{
        closer: [
          "For an agent in Kano processing a ₦50,000 withdrawal, a confusing button or a silent error isn't an inconvenience — it's a business problem. Every pixel on this product has stakes attached to it.",
          "I'd push harder for usability testing with agents in the field earlier. A lot of assumptions came from analytics and support tickets rather than watching someone actually use the app in context. The bank network monitor came from a field complaint. It should have come from a research session six months earlier.",
        ],
        reflection: [
          "Designing for low-connectivity forces you to think about every failure state — and that rigour makes the happy path better too",
          "The most important design decision is often information hierarchy — what does the user need to know right now",
          "Agents are sophisticated users. They use this app dozens of times a day. They will notice sloppy design",
          "Reliability is the design — the best features are invisible when they're working",
        ],
        ps: [
          "PS: 'Yippee!' is the right word for a successful airtime purchase. Anyone who disagrees hasn't spent enough time in a market.",
          "Also: the bank network monitor was the hardest feature to get approved internally and the most-requested feature by agents once they had it. That gap is exactly what good design closes.",
        ],
        credits: [
          { name: "Femi Jimoh", role: "Product Designer (UI/UX)" },
          { name: "Oladunni Treasure", role: "Product Designer" },
        ],
      }} />

    </main>
  );
}
