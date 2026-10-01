"use client";
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import ScrambleSection from "@/components/ScrambleSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PhotoCarousel from "@/components/PhotoCarousel";
import ScrollFingerprint from "@/components/ScrollFingerprint";
import { projects, filters } from "@/lib/projects";
import type { Project } from "@/lib/projects";

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
                          className="text-xs text-[#111] underline underline-offset-4 decoration-[#111]/30 transition-all inline-flex items-center gap-1"
                        >
                          {link.locked && (
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, opacity: 0.45 }}>
                              <rect x="2" y="5.5" width="8" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                              <path d="M4 5.5V3.5a2 2 0 0 1 4 0V5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                            </svg>
                          )}
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
                          className="text-xs text-[#111] underline underline-offset-4 decoration-[#111]/30 hover:decoration-[#111] transition-all inline-flex items-center gap-1"
                        >
                          {link.locked && (
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, opacity: 0.45 }}>
                              <rect x="2" y="5.5" width="8" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                              <path d="M4 5.5V3.5a2 2 0 0 1 4 0V5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                            </svg>
                          )}
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

      {/* ── Flux case study preview ── */}
      <section className="max-w-275 mx-auto px-6 pb-20 md:pb-32">
        <Link
          href="/projects/flux"
          className="group grid md:grid-cols-[0.72fr_1.28fr] gap-10 md:gap-16 items-center"
        >
          {/* left — plain text, no box */}
          <div>
            <p className="text-[9px] tracking-widest uppercase text-[#111]/30 mb-3">Product + Design</p>
            <h2 className="text-2xl md:text-3xl font-medium text-[#111] tracking-tight mb-4">Flux</h2>
            <p className="text-sm text-[#111]/55 leading-relaxed mb-3 max-w-[38ch]">
              An AI agent orchestration dashboard — a full working prototype built in Next.js, not a static mockup.
            </p>
            <p className="text-sm text-[#111]/55 leading-relaxed mb-8 max-w-[38ch]">
              Every card, filter, and panel is real frontend code — designed and engineered end to end.
            </p>

            <div className="flex flex-col gap-1.5 mb-8">
              {[
                ["Role", "Design Engineering"],
                ["Platform", "Web App · Next.js"],
                ["Year", "2025"],
              ].map(([l, v]) => (
                <div key={l} className="flex gap-3 text-xs">
                  <span className="text-[#111]/30 w-16 shrink-0">{l}</span>
                  <span className="text-[#111]/60">{v}</span>
                </div>
              ))}
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs text-[#111] underline underline-offset-4 decoration-[#111]/30 group-hover:decoration-[#111] transition-colors">
              View Case Study →
            </span>
          </div>

          {/* right — flat HD screenshot floating on a dark backdrop */}
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{ background: "#0a0a0c" }}
          >
            {/* diagonal grid across the whole panel, only feathering right at the edges */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgba(255,255,255,0.09) 0px, rgba(255,255,255,0.09) 1px, transparent 1px, transparent 30px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.09) 0px, rgba(255,255,255,0.09) 1px, transparent 1px, transparent 30px)",
                maskImage: "radial-gradient(ellipse 100% 100% at 50% 50%, black 55%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse 100% 100% at 50% 50%, black 55%, transparent 100%)",
              }}
            />

            <div className="relative flex items-center justify-center p-8 md:p-14">
              <div
                className="w-full transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                style={{
                  maxWidth: 460, borderRadius: 10, overflow: "hidden", position: "relative", aspectRatio: "16 / 10",
                  border: "1px solid rgba(255,255,255,0.14)",
                  boxShadow: "0 30px 70px rgba(0,0,0,0.6)",
                }}
              >
                <Image
                  src="/flux/flux-preview-zoom.png"
                  alt="Flux — AI agent orchestration dashboard"
                  fill
                  sizes="(max-width: 768px) 70vw, 460px"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* ── Scramble / Quote section ── */}
      <ScrambleSection />


      {/* ── Testimonials section ── */}
      <TestimonialsSection />

      {/* ── Photo carousel ── */}
      <PhotoCarousel />

      {/* ── Scroll fingerprint ── */}
      <ScrollFingerprint />
    </>
  );
}
