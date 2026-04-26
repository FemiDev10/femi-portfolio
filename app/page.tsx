"use client";
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import ScrambleSection from "@/components/ScrambleSection";
import FragmentsSection from "@/components/FragmentsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PhotoCarousel from "@/components/PhotoCarousel";
import ScrollFingerprint from "@/components/ScrollFingerprint";

/* ─── hero word list ─────────────────────────────────────────── */

const HERO_WORDS = [
  { t: "Femi",     italic: false },
  { t: "Jimoh",    italic: false },
  { t: "turns",    italic: false },
  { t: "messy",    italic: false },
  { t: "problems", italic: false },
  { t: "into",     italic: false },
  { t: "products", italic: false },
  { t: "people",   italic: false },
  { t: "can't",    italic: true  },
  { t: "stop",     italic: true  },
  { t: "using",    italic: true  },
  { t: "—",        italic: false },
  { t: "then",     italic: false },
  { t: "codes",    italic: false },
  { t: "every",    italic: false },
  { t: "pixel",    italic: false },
  { t: "himself.", italic: false },
];

/* ─── filter + project data ──────────────────────────────────── */

const filters = [
  { label: "All",          count: 19 },
  { label: "Mobile Apps",  count: 7  },
  { label: "Web App",      count: 6  },
  { label: "Experimental", count: 4  },
  { label: "HCI",          count: 3  },
];

type Project = {
  title: string;
  year: number;
  description: string;
  links: { label: string; href: string }[];
  href?: string;
  thumbnail: React.ReactNode;
  category: string;
};

const projects: Project[] = [
  {
    title: "F1 Money Race",
    year: 2025,
    description:
      "Flutter app where your bank accounts race like F1 cars. Finance as pit stops, lap times, positions.",
    href: "/projects/f1-money-race",
    links: [{ label: "Case Study →", href: "/projects/f1-money-race" }],
    category: "Mobile Apps",
    thumbnail: (
      <div className="w-full h-full overflow-hidden">
        <video
          src="/moneyRace/screen-recordingV2.mov"
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    ),
  },
  {
    title: "Chainrails",
    year: 2025,
    description:
      "SDK payment interface — pay from any chain, any token. No checking or swapping.",
    links: [
      { label: "Case Study →", href: "#" },
      { label: "Live ↗", href: "#" },
    ],
    category: "Web App",
    thumbnail: (
      <div className="w-full h-full bg-[#f0ede6] flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-sm px-6 py-5 w-52 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#e8e4dc]" />
            <div>
              <p className="text-[10px] text-[#111]/60 leading-none">Oritrus</p>
              <p className="text-[9px] text-[#111]/30">oxefar5</p>
            </div>
          </div>
          <div>
            <p className="text-[9px] text-[#111]/40 mb-0.5">Amount</p>
            <p className="text-xl font-medium text-[#111]">$100.00</p>
          </div>
          <button className="w-full bg-[#111] text-white text-[10px] rounded-full py-2">
            Pay with Crypto
          </button>
        </div>
      </div>
    ),
  },
  {
    title: "PayZeep Merchant Portal",
    year: 2024,
    description:
      "Merchant-facing payments dashboard focused on onboarding clarity, transaction trust, and discoverable payment tools.",
    href: "/projects/payzeep-merchant-portal",
    links: [{ label: "Case Study →", href: "/projects/payzeep-merchant-portal" }],
    category: "Web App",
    thumbnail: (
      <div className="w-full h-full overflow-hidden" style={{ background: "#eeeaff", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img
          src="/merchantPortal/dashboard/merchant%20portal-mockup.png"
          alt="PayZeep Merchant Portal"
          style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
        />
      </div>
    ),
  },
  {
    title: "PayZeep Merchant Admin",
    year: 2024,
    description:
      "Internal operations platform for merchant compliance, approvals, permissions, and terminal management.",
    href: "/projects/payzeep-merchant-admin",
    links: [{ label: "Case Study →", href: "/projects/payzeep-merchant-admin" }],
    category: "Web App",
    thumbnail: (
      <div className="w-full h-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/merchantAdmin/merchantAdmin_HomeMockup.jpeg"
          alt="PayZeep Merchant Admin"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
    ),
  },
  {
    title: "SafePulse",
    year: 2026,
    description:
      "Civic safety intelligence platform for browsing verified incidents, reporting with KYC, and exploring risk patterns across Nigeria.",
    href: "/projects/safepulse",
    links: [{ label: "Case Study →", href: "/projects/safepulse" }],
    category: "Web App",
    thumbnail: (
      <div className="w-full h-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/safePulse/historical_data_mockup.jpeg"
          alt="SafePulse"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center bottom", display: "block" }}
        />
      </div>
    ),
  },
  {
    title: "PayZeep Checkout",
    year: 2025,
    description:
      "Payment checkout widget designed around card, transfer, USSD, QR, and bank flows with equal trust and clarity.",
    href: "/projects/payzeep-checkout",
    links: [{ label: "Case Study →", href: "#" }],
    category: "Web App",
    thumbnail: (
      <div className="w-full h-full bg-[#f5f3ef] flex items-center justify-center px-6">
        <div className="w-full max-w-56 bg-white rounded-2xl shadow-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[9px] tracking-widest uppercase text-[#111]/30">
                PayZeep
              </p>
              <p className="text-xs text-[#111] mt-1">Checkout</p>
            </div>
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#2563eb]" />
              <div className="w-2 h-2 rounded-full bg-[#111]/15" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-5 gap-1">
              <div className="h-5 rounded-full bg-[#111] opacity-90" />
              <div className="h-5 rounded-full bg-[#111]/6" />
              <div className="h-5 rounded-full bg-[#111]/6" />
              <div className="h-5 rounded-full bg-[#111]/6" />
              <div className="h-5 rounded-full bg-[#111]/6" />
            </div>
            <div className="h-9 rounded-xl bg-[#111]/5" />
            <div className="h-9 rounded-xl bg-[#111]/5" />
            <div className="h-8 rounded-full bg-[#111] opacity-90" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "PayZeep API Docs",
    year: 2024,
    description:
      "Developer documentation portal for PayZeep's payment API — designed around the developer's first 60 seconds, not the spec.",
    href: "/projects/payzeep-api-docs",
    links: [{ label: "Case Study →", href: "/projects/payzeep-api-docs" }],
    category: "Web App",
    thumbnail: (
      <div className="w-full h-full bg-[#0b0f1e] flex items-center justify-center px-5 relative overflow-hidden">
        {/* subtle grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(44,58,223,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(44,58,223,0.06) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }} />
        {/* Docs layout mock */}
        <div style={{ display: "flex", gap: 10, width: "100%", maxWidth: 220, height: 160, padding: "12px 0", position: "relative" }}>
          {/* Sidebar */}
          <div style={{ width: 52, flexShrink: 0, display: "flex", flexDirection: "column", gap: 6, paddingTop: 4 }}>
            {[
              { w: 40, active: true },
              { w: 36, active: false },
              { w: 44, active: false },
              { w: 32, active: false },
              { w: 42, active: false },
              { w: 38, active: false },
            ].map((item, i) => (
              <div key={i} style={{
                height: 5, width: item.w, borderRadius: 3,
                background: item.active ? "#2C3ADF" : "rgba(255,255,255,0.08)",
              }} />
            ))}
          </div>
          {/* Content area */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6, paddingTop: 4 }}>
            <div style={{ height: 5, width: "55%", background: "rgba(44,58,223,0.8)", borderRadius: 3 }} />
            <div style={{ height: 4, width: "90%", background: "rgba(255,255,255,0.08)", borderRadius: 3 }} />
            <div style={{ height: 4, width: "75%", background: "rgba(255,255,255,0.06)", borderRadius: 3 }} />
            {/* Code block */}
            <div style={{ background: "#141927", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 6, padding: "8px 10px", marginTop: 4 }}>
              <div style={{ height: 3.5, width: "80%", background: "#79c0ff", borderRadius: 2, marginBottom: 4, opacity: 0.8 }} />
              <div style={{ height: 3.5, width: "60%", background: "#ffa657", borderRadius: 2, marginBottom: 4, opacity: 0.8 }} />
              <div style={{ height: 3.5, width: "70%", background: "#d2a8ff", borderRadius: 2, opacity: 0.8 }} />
            </div>
            <div style={{ height: 4, width: "85%", background: "rgba(255,255,255,0.06)", borderRadius: 3 }} />
          </div>
        </div>
        {/* Badge */}
        <div style={{ position: "absolute", top: 14, right: 14 }}>
          <span style={{
            fontSize: 8, fontWeight: 600, color: "#7b8ef7",
            background: "rgba(44,58,223,0.15)", border: "1px solid rgba(44,58,223,0.3)",
            padding: "2px 7px", borderRadius: 20, letterSpacing: "0.02em",
          }}>Redocly</span>
        </div>
        {/* Label */}
        <div style={{ position: "absolute", bottom: 14, left: 14 }}>
          <span style={{ fontSize: 8, color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "monospace" }}>
            DevX · API Docs
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Peer Virtual Cards",
    year: 2025,
    description:
      "New look for Peer's Virtual Cards — vibrant, built around how users actually spend.",
    links: [{ label: "🔒 Read Case Study", href: "#" }],
    category: "Mobile Apps",
    thumbnail: (
      <div className="w-full h-full bg-[#edf0f4] flex items-center justify-end pr-8">
        <div className="bg-white rounded-xl shadow-sm px-4 py-3 w-36">
          <p className="text-[8px] text-[#111]/30 tracking-widest uppercase mb-1">BALANCE</p>
          <p className="text-lg font-medium text-[#111] tracking-tight">$481,296</p>
          <div className="mt-3 flex gap-1">
            <div className="h-1.5 w-10 rounded-full bg-[#e2e6ed]" />
            <div className="h-1.5 w-6 rounded-full bg-[#e2e6ed]" />
            <div className="h-1.5 w-8 rounded-full bg-[#e2e6ed]" />
          </div>
          <div className="mt-1 flex gap-1">
            <div className="h-1.5 w-8 rounded-full bg-[#e2e6ed]" />
            <div className="h-1.5 w-10 rounded-full bg-[#e2e6ed]" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Blueprint Savings",
    year: 2024,
    description:
      "Savings product redesign through spatial metaphors and micro-progress.",
    links: [{ label: "Case Study →", href: "#" }],
    category: "Mobile Apps",
    thumbnail: (
      <div className="w-full h-full bg-[#0d0d0d] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 rounded-full border border-white/5" style={{ margin: "24px" }} />
        <div className="absolute inset-0 rounded-full border border-white/5" style={{ margin: "44px" }} />
        <div className="absolute inset-0 rounded-full border border-white/5" style={{ margin: "64px" }} />
        <div className="w-14 h-14 rounded-full bg-[#3b5bdb] flex items-center justify-center z-10">
          <span className="text-white text-lg font-medium">₦</span>
        </div>
      </div>
    ),
  },
  {
    title: "Payzeep Mobile App (Android & iOS)",
    year: 2024,
    description:
      "Mobile command centre for Nigeria's 1.5M+ agency banking agents. Real-time network intelligence, progressive KYC, and commission management.",
    href: "/projects/paymi-agent",
    links: [{ label: "Case Study →", href: "/projects/paymi-agent" }],
    category: "Mobile Apps",
    thumbnail: (
      <div className="w-full h-full bg-[#0b1120] flex items-center justify-center relative overflow-hidden">
        {/* subtle grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }} />
        {/* phone shell */}
        <div style={{
          width: 72, height: 130,
          background: "#131c30",
          borderRadius: 16,
          border: "1.5px solid rgba(255,255,255,0.1)",
          display: "flex", flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 16px 40px rgba(0,0,0,0.6)",
          position: "relative",
        }}>
          {/* status bar */}
          <div style={{ height: 10, background: "#0f172a", display: "flex", alignItems: "center", paddingLeft: 8, gap: 3 }}>
            <div style={{ width: 14, height: 3, borderRadius: 2, background: "rgba(255,255,255,0.1)" }} />
          </div>
          {/* balance area */}
          <div style={{ padding: "6px 8px 4px" }}>
            <div style={{ fontSize: 5.5, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>Balance</div>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#fff", letterSpacing: "-0.02em" }}>₦128,400</div>
          </div>
          {/* network monitor strip */}
          <div style={{ margin: "2px 6px", background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: 5, padding: "4px 5px" }}>
            <div style={{ fontSize: 4.5, color: "rgba(74,222,128,0.8)", letterSpacing: "0.08em", marginBottom: 3 }}>NETWORK MONITOR</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[["GTBank", "97%"], ["First Bank", "61%"], ["OPay", "22%"]].map(([bank, pct]) => (
                <div key={bank} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontSize: 5, color: "rgba(255,255,255,0.4)" }}>{bank}</div>
                  <div style={{
                    fontSize: 5, fontWeight: 600,
                    color: Number(pct) > 80 ? "#4ade80" : Number(pct) > 50 ? "#fbbf24" : "#f87171",
                  }}>{pct}</div>
                </div>
              ))}
            </div>
          </div>
          {/* quick action pills */}
          <div style={{ display: "flex", gap: 3, padding: "4px 6px" }}>
            {["Airtime", "Transfer", "Bills"].map(label => (
              <div key={label} style={{ flex: 1, background: "rgba(255,255,255,0.06)", borderRadius: 4, padding: "3px 0", textAlign: "center", fontSize: 4.5, color: "rgba(255,255,255,0.4)" }}>{label}</div>
            ))}
          </div>
          {/* commission bar */}
          <div style={{ margin: "2px 6px 0", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 4, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: 5, color: "rgba(255,255,255,0.3)" }}>Commission</div>
            <div style={{ fontSize: 5.5, fontWeight: 600, color: "#a78bfa" }}>₦3,200</div>
          </div>
        </div>
        {/* label */}
        <div style={{ position: "absolute", bottom: 14, left: 14 }}>
          <span style={{ fontSize: 8, color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "monospace" }}>
            AGENCY BANKING · iOS & Android
          </span>
        </div>
        {/* CBN badge */}
        <div style={{ position: "absolute", top: 14, right: 14 }}>
          <span style={{
            fontSize: 8, fontWeight: 500, color: "#a78bfa",
            background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)",
            padding: "2px 7px", borderRadius: 20, letterSpacing: "0.02em",
          }}>CBN-licensed</span>
        </div>
      </div>
    ),
  },
  {
    title: "DriveVault — Driver",
    year: 2025,
    description:
      "Ride-hailing driver app for Lagos — real-time demand intelligence, minimum price control, and per-trip earnings transparency.",
    href: "/projects/drivevault-driver",
    links: [{ label: "Case Study →", href: "/projects/drivevault-driver" }],
    category: "Mobile Apps",
    thumbnail: (
      <div className="w-full h-full bg-[#0a0e1a] flex items-center justify-center relative overflow-hidden">
        {/* subtle radial glow */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 30%, rgba(234,179,8,0.08) 0%, transparent 65%)" }} />
        {/* phone mock */}
        <div style={{
          width: 78, height: 140,
          background: "#111827",
          borderRadius: 18,
          border: "1.5px solid rgba(255,255,255,0.08)",
          overflow: "hidden",
          display: "flex", flexDirection: "column",
          boxShadow: "0 20px 48px rgba(0,0,0,0.7)",
        }}>
          {/* status bar */}
          <div style={{ height: 8, background: "#0d1117" }} />
          {/* earnings header */}
          <div style={{ padding: "8px 10px 4px" }}>
            <div style={{ fontSize: 5, color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", marginBottom: 2 }}>TODAY'S EARNINGS</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#eab308", letterSpacing: "-0.03em" }}>₦85,000</div>
          </div>
          {/* online pill */}
          <div style={{ margin: "2px 8px 6px", background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)", borderRadius: 20, padding: "3px 8px", display: "flex", alignItems: "center", gap: 4 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e" }} />
            <span style={{ fontSize: 5, color: "#22c55e", fontWeight: 600, letterSpacing: "0.04em" }}>ONLINE</span>
          </div>
          {/* opportunity card */}
          <div style={{ margin: "0 6px 6px", background: "#1a2035", border: "1px solid rgba(234,179,8,0.15)", borderRadius: 8, padding: "7px 8px" }}>
            <div style={{ fontSize: 4.5, color: "#eab308", fontWeight: 700, letterSpacing: "0.06em", marginBottom: 3 }}>OPPORTUNITY</div>
            <div style={{ fontSize: 5.5, color: "#fff", fontWeight: 600, marginBottom: 2 }}>Concert · National Stadium</div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 4.5, color: "rgba(255,255,255,0.4)" }}>1.8× surge</span>
              <span style={{ fontSize: 4.5, color: "#eab308" }}>+₦200/trip</span>
            </div>
          </div>
          {/* stats row */}
          <div style={{ display: "flex", gap: 4, padding: "0 6px" }}>
            {[["7", "Trips"], ["4.5★", "Rating"], ["₦12k", "Potential"]].map(([v, l]) => (
              <div key={l} style={{ flex: 1, background: "#1a2035", borderRadius: 6, padding: "5px 4px", textAlign: "center" }}>
                <div style={{ fontSize: 6, fontWeight: 700, color: "#fff" }}>{v}</div>
                <div style={{ fontSize: 4, color: "rgba(255,255,255,0.3)" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        {/* label */}
        <div style={{ position: "absolute", bottom: 14, left: 14 }}>
          <span style={{ fontSize: 8, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "monospace" }}>
            Driver · iOS
          </span>
        </div>
        {/* badge */}
        <div style={{ position: "absolute", top: 14, right: 14 }}>
          <span style={{ fontSize: 8, fontWeight: 600, color: "#eab308", background: "rgba(234,179,8,0.1)", border: "1px solid rgba(234,179,8,0.2)", padding: "2px 7px", borderRadius: 20 }}>Lagos-first</span>
        </div>
      </div>
    ),
  },
  {
    title: "DriveVault — Rider",
    year: 2025,
    description:
      "Ride-hailing rider app for Lagos — price transparency, Ride for Someone, scheduled rides, and safety tools that aren't buried in settings.",
    href: "/projects/drivevault-rider",
    links: [{ label: "Case Study →", href: "/projects/drivevault-rider" }],
    category: "Mobile Apps",
    thumbnail: (
      <div className="w-full h-full bg-[#f5f4f0] flex items-center justify-center relative overflow-hidden">
        {/* subtle texture */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 40% 60%, rgba(59,130,246,0.06) 0%, transparent 60%)" }} />
        {/* phone mock */}
        <div style={{
          width: 78, height: 140,
          background: "#fff",
          borderRadius: 18,
          border: "1px solid rgba(0,0,0,0.08)",
          overflow: "hidden",
          display: "flex", flexDirection: "column",
          boxShadow: "0 12px 36px rgba(0,0,0,0.12)",
        }}>
          {/* status bar */}
          <div style={{ height: 8, background: "#fafafa", borderBottom: "1px solid rgba(0,0,0,0.04)" }} />
          {/* greeting */}
          <div style={{ padding: "7px 10px 4px" }}>
            <div style={{ fontSize: 6, color: "#111", fontWeight: 600 }}>Good morning, Chidi 👋</div>
          </div>
          {/* search bar */}
          <div style={{ margin: "0 7px 6px", background: "#f4f4f4", borderRadius: 8, padding: "5px 8px", display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", border: "1.5px solid #3b82f6" }} />
            <div style={{ height: 3, flex: 1, background: "rgba(0,0,0,0.1)", borderRadius: 2 }} />
          </div>
          {/* shortcut chips */}
          <div style={{ display: "flex", gap: 4, padding: "0 7px 5px" }}>
            {["🏠 Home", "💼 Work"].map(label => (
              <div key={label} style={{ flex: 1, background: "#f0f4ff", border: "1px solid rgba(59,130,246,0.15)", borderRadius: 6, padding: "4px 0", textAlign: "center", fontSize: 4.5, color: "#3b82f6", fontWeight: 500 }}>{label}</div>
            ))}
          </div>
          {/* quick actions */}
          <div style={{ display: "flex", gap: 4, padding: "0 7px 5px" }}>
            {["Schedule →", "For Someone →"].map(a => (
              <div key={a} style={{ flex: 1, background: "#f9f9f9", border: "1px solid rgba(0,0,0,0.06)", borderRadius: 6, padding: "4px 3px", textAlign: "center", fontSize: 4, color: "#555" }}>{a}</div>
            ))}
          </div>
          {/* price compare card */}
          <div style={{ margin: "0 7px", background: "#f0f7ff", border: "1px solid rgba(59,130,246,0.15)", borderRadius: 8, padding: "6px 8px" }}>
            <div style={{ fontSize: 4.5, color: "#3b82f6", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 3 }}>ECONOMY · 5 min</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 7, fontWeight: 700, color: "#111" }}>₦6,200</span>
              <span style={{ fontSize: 4, color: "#22c55e", fontWeight: 600 }}>Save ₦1,000</span>
            </div>
            <div style={{ fontSize: 4, color: "rgba(0,0,0,0.35)", marginTop: 2 }}>Others: ₦7,200–₦9,500</div>
          </div>
        </div>
        {/* label */}
        <div style={{ position: "absolute", bottom: 14, left: 14 }}>
          <span style={{ fontSize: 8, color: "rgba(0,0,0,0.25)", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "monospace" }}>
            Rider · iOS
          </span>
        </div>
        {/* badge */}
        <div style={{ position: "absolute", top: 14, right: 14 }}>
          <span style={{ fontSize: 8, fontWeight: 600, color: "#3b82f6", background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)", padding: "2px 7px", borderRadius: 20 }}>Lagos-first</span>
        </div>
      </div>
    ),
  },
  {
    title: "Wearable Fall Detection",
    year: 2024,
    description:
      "Designed and built a wearable fall detection system for elderly patients. 93% accuracy, 200 real-world tests, 7-step validation chain. Final year thesis.",
    href: "/hci/fall-detection",
    links: [{ label: "Case Study →", href: "/hci/fall-detection" }],
    category: "HCI",
    thumbnail: (
      <div className="w-full h-full bg-[#0d1117] flex items-center justify-center relative overflow-hidden">
        {/* grid lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }} />
        {/* device body */}
        <div style={{
          width: 64, height: 82,
          background: "#1a1f2e",
          borderRadius: 12,
          border: "1.5px solid rgba(255,255,255,0.12)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 6, position: "relative",
          boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
        }}>
          {/* top pill */}
          <div style={{ width: 20, height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 4, position: "absolute", top: 8 }} />
          {/* sensor circle */}
          <div style={{ width: 22, height: 22, borderRadius: "50%", border: "1.5px solid rgba(99,179,237,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#63b3ed", boxShadow: "0 0 8px #63b3ed" }} />
          </div>
          {/* LED row */}
          <div style={{ display: "flex", gap: 4, marginTop: 4 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e" }} />
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
          </div>
          {/* bottom bar */}
          <div style={{ width: 32, height: 3, background: "rgba(255,255,255,0.07)", borderRadius: 3, position: "absolute", bottom: 10 }} />
        </div>
        {/* pulse ring */}
        <div style={{
          position: "absolute", width: 90, height: 110,
          border: "1px solid rgba(99,179,237,0.08)",
          borderRadius: 18, pointerEvents: "none",
        }} />
        {/* tag */}
        <div style={{ position: "absolute", bottom: 14, left: 14 }}>
          <span style={{ fontSize: 8, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "monospace" }}>
            HCI · WEARABLE · EE
          </span>
        </div>
        {/* accuracy badge */}
        <div style={{ position: "absolute", top: 14, right: 14 }}>
          <span style={{
            fontSize: 9, fontWeight: 500, color: "#63b3ed",
            background: "rgba(99,179,237,0.1)", border: "1px solid rgba(99,179,237,0.2)",
            padding: "2px 7px", borderRadius: 20, letterSpacing: "0.02em",
          }}>93%</span>
        </div>
      </div>
    ),
  },
  {
    title: "Decision Fatigue Study",
    year: 2024,
    description:
      "HCI research into how information density affects user confidence in fintech onboarding.",
    links: [{ label: "Read Paper →", href: "#" }],
    category: "HCI",
    thumbnail: (
      <div className="w-full h-full bg-[#f5f0e8] flex flex-col justify-center px-6">
        <span className="text-[9px] tracking-widest text-[#9b6b2f] uppercase mb-4">HCI RESEARCH</span>
        <p className="text-sm font-medium text-[#111] leading-snug max-w-[26ch]">
          How information density drives decision fatigue in mobile banking
        </p>
        <div className="mt-6 grid grid-cols-2 gap-2">
          <div>
            <p className="text-[9px] text-[#111]/30 uppercase tracking-widest mb-0.5">Participants</p>
            <p className="text-xs text-[#111]/60">N = 48</p>
          </div>
          <div>
            <p className="text-[9px] text-[#111]/30 uppercase tracking-widest mb-0.5">Method</p>
            <p className="text-xs text-[#111]/60">Mixed methods</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Design System — DP",
    year: 2025,
    description:
      "Full component library and token system for a fintech startup across 3 products.",
    links: [{ label: "Case Study →", href: "#" }],
    category: "Web App",
    thumbnail: (
      <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center relative">
        <div className="flex flex-col items-center">
          <span className="text-white text-5xl font-bold tracking-tight leading-none">DP.</span>
          <span className="mt-2 bg-[#f5c518] text-[#0a0a0a] text-[9px] font-medium px-2 py-0.5 rounded-full tracking-wider">
            DESIGN SYSTEM
          </span>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="text-white/15 text-xs">2025</span>
        </div>
      </div>
    ),
  },
];

/* ─── page ───────────────────────────────────────────────────── */

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");

  // hero word-reveal refs
  const heroRef  = useRef<HTMLHeadingElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // ── IntersectionObserver: replay reveal every time hero enters viewport ──
  useEffect(() => {
    const h1 = heroRef.current;
    if (!h1) return;

    const spans = () =>
      wordRefs.current.filter((s): s is HTMLSpanElement => s !== null);

    const reset = () => {
      spans().forEach((s) => {
        s.style.transition = "none";
        s.style.color      = "#ddd";
        s.style.filter     = "blur(4px)";
      });
    };

    const reveal = () => {
      spans().forEach((s, i) => {
        setTimeout(() => {
          s.style.transition = "color 0.55s ease, filter 0.55s ease";
          s.style.color      = s.dataset.italic !== undefined
            ? "rgba(17,17,17,0.65)"
            : "#111";
          s.style.filter     = "blur(0px)";
        }, i * 45);
      });
    };

    // seed initial hidden state before first paint
    reset();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reset();
            setTimeout(reveal, 400);
          }
        });
      },
      { threshold: 0.5, root: null }
    );

    observer.observe(h1);
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <main className="max-w-275 mx-auto px-6">

        {/* ── Hero ── */}
        <section className="pt-10 pb-8 md:pt-20 md:pb-14">
          <h1
            ref={heroRef}
            className="font-medium leading-[1.05] tracking-[-0.03em] max-w-[18ch]"
            style={{ fontSize: "clamp(1.75rem, 8vw, 4.5rem)" }}
          >
            {HERO_WORDS.map((word, i) => (
              <Fragment key={i}>
                <span
                  ref={(el) => { wordRefs.current[i] = el; }}
                  data-italic={word.italic ? "" : undefined}
                  style={{
                    display:       "inline-block",
                    color:         "#ddd",
                    filter:        "blur(4px)",
                    fontStyle:     word.italic ? "italic"  : "normal",
                    fontWeight:    word.italic ? 400       : undefined,
                    letterSpacing: word.italic ? "-0.02em" : undefined,
                  }}
                >
                  {word.t}
                </span>
                {/* space between words (plain text node, collapses at line-wrap points) */}
                {i < HERO_WORDS.length - 1 && " "}
              </Fragment>
            ))}
          </h1>

          {/* Meta row */}
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-start gap-4 sm:gap-16">
            <div>
              <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-2">Built For</p>
              <p className="text-xs text-[#111]/50 leading-relaxed">
                Fintech · Health · Consumer · Enterprise
              </p>
            </div>
            <div>
              <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-2">Open To</p>
              <p className="text-xs text-[#111]/50 leading-relaxed">
                Senior Designer · Design Engineer · Technical PM
              </p>
            </div>
          </div>
        </section>

        {/* ── Filters ── */}
        <section id="work" className="pb-8">
          {/* border-b on container; each tab uses border-b-2 -mb-px to sit flush against it */}
          {/* overflow-x-auto for mobile horizontal scroll; no-scrollbar hides the scrollbar */}
          <div className="flex items-end gap-7 border-b border-[#111]/8 overflow-x-auto no-scrollbar" style={{ WebkitOverflowScrolling: "touch" }}>
            {filters.map(({ label, count }) => (
              <button
                key={label}
                onClick={() => setActiveFilter(label)}
                className={`text-xs cursor-pointer flex items-baseline gap-1 pb-3 border-b-2 -mb-px transition-colors shrink-0 ${
                  activeFilter === label
                    ? "text-[#111] border-[#111]"
                    : "text-[#111]/35 hover:text-[#111]/70 border-transparent"
                }`}
              >
                {label}
                <sup className="text-[9px]">{count}</sup>
              </button>
            ))}
          </div>
        </section>

        {/* ── Work Grid ── */}
        <section className="pb-20 md:pb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-6">
            {filtered.slice(0, 6).map((project) => (
              project.href ? (
                <Link
                  key={project.title}
                  href={project.href}
                  className="flex flex-col gap-3"
                  data-magnetic-card
                >
                  <div className="aspect-4/3 w-full overflow-hidden" data-card-image>
                    {project.thumbnail}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-medium text-[#111]">{project.title}</span>
                      <span className="text-[11px] text-[#111]/30">{project.year}</span>
                    </div>
                    <p className="text-xs text-[#111]/50 leading-relaxed">{project.description}</p>
                    <div className="flex items-center gap-4 mt-0.5">
                      {project.links.map((link) => (
                        <span
                          key={link.label}
                          className="text-xs text-[#111] underline underline-offset-4 decoration-[#111]/30 transition-all"
                        >
                          {link.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ) : (
                <article
                  key={project.title}
                  className="flex flex-col gap-3"
                  data-magnetic-card
                >
                  <div className="aspect-4/3 w-full overflow-hidden" data-card-image>
                    {project.thumbnail}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-medium text-[#111]">{project.title}</span>
                      <span className="text-[11px] text-[#111]/30">{project.year}</span>
                    </div>
                    <p className="text-xs text-[#111]/50 leading-relaxed">{project.description}</p>
                    <div className="flex items-center gap-4 mt-0.5">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="text-xs text-[#111] underline underline-offset-4 decoration-[#111]/30 hover:decoration-[#111] transition-all"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              )
            ))}
          </div>

          {filtered.length > 6 && (
            <div className="mt-12 flex justify-end">
              <Link 
                href="/work"
                className="text-xs text-[#111] uppercase tracking-[0.15em] font-medium border-b border-[#111]/10 pb-1 hover:border-[#111] transition-all"
              >
                See more projects —&gt;
              </Link>
            </div>
          )}
        </section>

      </main>

      {/* ── Scramble / Quote section ── */}
      <ScrambleSection />

      {/* ── Fragments section ── */}
      <FragmentsSection />

      {/* ── Testimonials section ── */}
      <TestimonialsSection />

      {/* ── Photo carousel ── */}
      <PhotoCarousel />

      {/* ── Scroll fingerprint ── */}
      <ScrollFingerprint />
    </>
  );
}
