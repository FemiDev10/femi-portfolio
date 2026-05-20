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

export default function DriveVaultDriverPage() {
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
          DriveVault<br />Driver App.
        </h1>

        <p className="mt-8 text-base text-[#111]/55 leading-relaxed max-w-[58ch]">
          A ride-hailing platform built different. Where every driver isn&rsquo;t just a supplier —
          they&rsquo;re a negotiator. DriveVault gives drivers real pricing power through a live
          negotiation mode, real-time demand intelligence, and full trip earnings transparency.
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

      {/* ── HERO IMAGES ────────────────────────────────────────────────── */}
      <div className="mt-16 space-y-4">
        <Fade>
          <div className="w-full bg-[#f2f2f2] rounded-2xl overflow-hidden">
            <Image
              src="/drivevault_driver/Homepage_placeholder.png"
              alt="DriveVault Driver — homepage concept"
              width={1000} height={750} priority unoptimized
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </Fade>
        <Fade delay={0.08}>
          <div className="w-full bg-[#111] rounded-2xl overflow-hidden">
            <Image
              src="/drivevault_driver/iPhone%2016%20mockup%20with%20concrete%20blocks%20backdrop%20(Mockuuups%20Studio).png"
              alt="DriveVault Driver — iPhone mockup"
              width={1000} height={750} unoptimized
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </Fade>
      </div>

      <Divider />

      {/* ── WHAT DRIVEVAULT IS ──────────────────────────────────────────── */}
      <section className="max-w-[72ch] py-4">
        <Fade>
          <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-6">The Platform</p>
          <p className="text-base text-[#111]/55 leading-relaxed mb-5">
            DriveVault is a Lagos-first e-hailing platform competing with Uber and Bolt — but built
            around a fundamentally different model. Most ride-hailing apps are take-it-or-leave-it:
            a fixed fare, a fixed match, no room for either side to have a real conversation.
          </p>
          <p className="text-base text-[#111]/55 leading-relaxed mb-5">
            DriveVault ships two modes: <strong className="font-medium text-[#111]/80">Instant Booking</strong>{" "}
            — the standard flow — and <strong className="font-medium text-[#111]/80">Negotiation Mode</strong>,
            where riders and drivers enter a structured 3-round pricing dialogue before a trip is confirmed.
            Riders propose. Drivers counter. Both sides close a deal they actually agreed to.
          </p>
          <p className="text-base text-[#111]/55 leading-relaxed">
            As Head of Product, I own the entire product definition — from driver economics to the
            interaction model — and lead design across both the driver and rider apps simultaneously.
          </p>
        </Fade>
      </section>

      <Divider />

      {/* ── DRIVER SPECIFIC ────────────────────────────────────────────── */}
      <section className="max-w-[72ch] py-4">
        <Fade>
          <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-6">The Driver App</p>
        </Fade>
        <div className="space-y-8">
          {[
            {
              n: "1.",
              title: "Negotiation Mode — drivers set their floor",
              body: "In Negotiation Mode, a driver can counter a rider's offer up to 3 rounds. They see the rider's proposed fare, their current demand zone, and their daily earnings target. They counter with context — not a guess.",
            },
            {
              n: "2.",
              title: "Real-time demand intelligence",
              body: "The driver home screen surfaces live demand zones, surge windows, and nearby event spikes. An agent driving near the National Stadium on a concert night shouldn't have to discover surge pricing by accident.",
            },
            {
              n: "3.",
              title: "Minimum price control",
              body: "Drivers set a minimum acceptable fare per zone. Instant bookings below that floor are filtered automatically. The driver's time is a resource the app has to respect.",
            },
            {
              n: "4.",
              title: "Per-trip earnings transparency",
              body: "Every completed trip shows: gross fare, platform cut, fuel estimate, net earnings. Drivers on DriveVault know what they made and why — not just the total payout at end of day.",
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
              Full design documentation — user flows, interaction decisions, negotiation UX,
              driver earnings model, and outcome data — is being written up now.
            </p>
          </div>
        </Fade>
      </section>

    </main>
  );
}
