"use client";

import Image from "next/image";
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
        <div className="flex items-center gap-3 mb-5">
          <p className="text-[9px] tracking-widest uppercase text-[#111]/30">Case Study</p>
          <span className="text-[9px] tracking-widest uppercase text-[#111]/30">·</span>
          <span className="inline-flex items-center gap-1.5 text-[9px] tracking-widest uppercase bg-[#111]/5 text-[#111]/40 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
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
          for someone else — all without burying the safety tools three screens deep.
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

      {/* ── HERO IMAGE ─────────────────────────────────────────────────── */}
      <div className="mt-16">
        <Fade>
          <div className="w-full bg-[#f5f4f0] rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/drivevault_rider/Homepage_mockup"
              alt="DriveVault Rider — homepage concept"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </Fade>
      </div>

      <Divider />

      {/* ── THE PLATFORM ────────────────────────────────────────────────── */}
      <section className="max-w-[72ch] py-4">
        <Fade>
          <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-6">The Platform</p>
          <p className="text-base text-[#111]/55 leading-relaxed mb-5">
            DriveVault is a Lagos-first e-hailing platform — think Uber or Bolt, but rebuilt around
            a model where pricing is a conversation, not a decree. Both sides of the marketplace
            can toggle between instant booking and negotiation mode at any time.
          </p>
          <p className="text-base text-[#111]/55 leading-relaxed">
            As Head of Product, I own the full product surface across both apps simultaneously —
            which means every decision on the rider side has to be designed with its driver-side
            counterpart in mind. Pricing, matching, and negotiation are two-sided by definition.
          </p>
        </Fade>
      </section>

      <Divider />

      {/* ── RIDER SPECIFIC ─────────────────────────────────────────────── */}
      <section className="max-w-[72ch] py-4">
        <Fade>
          <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-6">The Rider App</p>
        </Fade>
        <div className="space-y-8">
          {[
            {
              n: "1.",
              title: "Negotiation Mode — 3-round pricing dialogue",
              body: "Riders can propose a fare below the suggested rate. The driver counter-offers. Three rounds, then it closes — accepted, declined, or expired. Riders who negotiate get a deal they chose. Riders who don't want the friction tap instant booking instead.",
            },
            {
              n: "2.",
              title: "Price transparency before you book",
              body: "Upfront fare breakdown: base rate, distance, time estimate, surge factor if active. No mystery charges. No 'the price changed.' The rider commits to a number they saw before tapping confirm.",
            },
            {
              n: "3.",
              title: "Ride for Someone",
              body: "Book a trip for another person — family, staff, a client. The rider pays, the passenger gets a live tracking link and the driver's details. Designed for Lagos office managers booking cars for field staff, parents sending kids home safely.",
            },
            {
              n: "4.",
              title: "Scheduled rides and safety tools upfront",
              body: "Schedule a ride up to 7 days out. Safety features — share trip, emergency contact, driver verification — are accessible from the home screen, not buried in a settings menu. If something goes wrong, one tap is enough.",
            },
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

      {/* ── COMING SOON ────────────────────────────────────────────────── */}
      <section className="max-w-[72ch] py-4">
        <Fade>
          <div className="bg-[#f2f2f2] rounded-2xl px-10 py-12 text-center">
            <span className="inline-flex items-center gap-2 text-[9px] tracking-widest uppercase text-[#111]/40 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
              Case study in progress
            </span>
            <p className="text-base text-[#111]/55 leading-relaxed max-w-[48ch] mx-auto">
              Full design documentation — user research, negotiation UX, booking flows,
              Ride for Someone design decisions, and outcome data — is being written up now.
            </p>
          </div>
        </Fade>
      </section>

    </main>
  );
}
