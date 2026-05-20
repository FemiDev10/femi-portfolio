"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

function Divider() {
  return <div className="border-t border-[#111]/8 my-16" />;
}

export default function DriveVaultRiderPage() {
  return (
    <main className="max-w-275 mx-auto px-6 pt-20 pb-32">

      {/* ── HEADER ─────────────────────────────────────────────────────── */}
      <section className="max-w-[72ch]">
        <div className="flex items-center gap-3 mb-5 flex-wrap">
          <p className="text-[9px] tracking-widest uppercase text-[#111]/30">Case Study</p>
          <span className="text-[9px] text-[#111]/30">·</span>
          <span className="inline-flex items-center gap-2 text-[9px] tracking-widest uppercase bg-amber-50 text-amber-600 border border-amber-200 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block animate-pulse" />
            Work in Progress
          </span>
        </div>

        <h1 className="font-medium leading-[1.03] tracking-[-0.03em]"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4.8rem)" }}>
          DriveVault<br />Rider App.
        </h1>

        <p className="mt-8 text-base text-[#111]/55 leading-relaxed max-w-[58ch]">
          A ride-hailing experience that treats riders as participants, not passengers. DriveVault
          gives riders price transparency, a live negotiation mode, and the ability to book rides
          for someone else — safety tools first, not buried three screens deep.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Role", value: "Head of Product · Product Designer + PM" },
            { label: "Company", value: "DriveVault (Startup)" },
            { label: "Timeline", value: "2025 — Ongoing" },
            { label: "Platform", value: "iOS + Android" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-2">{label}</p>
              <p className="text-xs text-[#111]/60 leading-relaxed">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HERO PLACEHOLDER IMAGE ──────────────────────────────────────── */}
      <div className="mt-16">
        <Fade>
          <div className="w-full bg-[#f5f4f0] rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Drivevault_rider/Homepage_mockup"
              alt="DriveVault Rider — design in progress"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </Fade>
      </div>

      <Divider />

      {/* ── PLATFORM OVERVIEW ───────────────────────────────────────────── */}
      <section className="max-w-[72ch] py-4">
        <Fade>
          <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-6">The Platform</p>
          <p className="text-base text-[#111]/55 leading-relaxed mb-5">
            DriveVault is a Lagos-first e-hailing platform — think Uber or Bolt, but rebuilt around
            a model where pricing is a conversation, not a decree. Both sides of the marketplace
            can toggle between instant booking and negotiation mode at any time.
          </p>
          <p className="text-base text-[#111]/55 leading-relaxed">
            As Head of Product, I own the full product surface across both apps simultaneously.
            Every decision on the rider side has a driver-side counterpart — pricing, matching, and
            negotiation are two-sided by definition.
          </p>
        </Fade>
      </section>

      <Divider />

      {/* ── COMING SOON LOCKED SECTION ─────────────────────────────────── */}
      <Fade>
        <div className="w-full rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(17,17,17,0.08)" }}>
          {/* locked header */}
          <div className="bg-[#f9f9f9] border-b border-[#111]/8 px-8 py-5 flex items-center justify-between">
            <span className="text-[9px] tracking-widest uppercase text-[#111]/40">Full Case Study</span>
            <span className="inline-flex items-center gap-2 text-[9px] tracking-widest uppercase text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <rect x="2" y="5" width="8" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M4 5V3.5a2 2 0 0 1 4 0V5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              Coming Soon
            </span>
          </div>

          {/* blurred content preview */}
          <div className="relative">
            <div className="px-8 py-10 space-y-10" style={{ filter: "blur(4px)", userSelect: "none", pointerEvents: "none", opacity: 0.4 }}>
              {[
                { n: "01", title: "Negotiation Mode — 3-round pricing dialogue", body: "Riders can propose a fare below the suggested rate. The driver counter-offers. Three rounds, then it closes — accepted, declined, or expired. Riders who negotiate get a deal they chose." },
                { n: "02", title: "Price transparency before you book", body: "Upfront fare breakdown: base rate, distance, time estimate, surge factor if active. No mystery charges. The rider commits to a number they saw before tapping confirm." },
                { n: "03", title: "Ride for Someone", body: "Book a trip for another person — family, staff, a client. The rider pays, the passenger gets a live tracking link and the driver's details." },
                { n: "04", title: "Scheduled rides and safety tools upfront", body: "Schedule a ride up to 7 days out. Safety features are accessible from the home screen — one tap, not buried in settings." },
              ].map(({ n, title, body }) => (
                <div key={n} style={{ display: "grid", gridTemplateColumns: "2ch 1fr", gap: 16 }}>
                  <p className="text-[9px] tracking-widest uppercase text-[#111]/30">{n}</p>
                  <div>
                    <p className="text-sm font-medium text-[#111]/80 mb-2">{title}</p>
                    <p className="text-sm text-[#111]/55 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.96) 60%)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end",
              paddingBottom: 40,
            }}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#111]/5 mb-4">
                  <svg width="18" height="18" viewBox="0 0 12 12" fill="none">
                    <rect x="2" y="5" width="8" height="6" rx="1.5" stroke="rgba(17,17,17,0.4)" strokeWidth="1.2"/>
                    <path d="M4 5V3.5a2 2 0 0 1 4 0V5" stroke="rgba(17,17,17,0.4)" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-sm font-medium text-[#111]/60 mb-1">Case study in progress</p>
                <p className="text-xs text-[#111]/35 max-w-[36ch]">
                  Full documentation — user research, negotiation UX, booking flows, and outcomes — coming soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>

    </main>
  );
}
