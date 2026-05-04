"use client";
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { useState } from "react";
import { projects, filters } from "@/lib/projects";

/* ─── page ───────────────────────────────────────────────────── */

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <main className="max-w-275 mx-auto px-6 pt-16 pb-32">
      
      {/* ── Header ── */}
      <section className="mb-16">
        <p className="text-[11px] uppercase text-[#bbb] tracking-[0.2em] font-medium mb-4">Portfolio</p>
        <h1 
          className="font-normal leading-[1.1] tracking-[-0.04em] max-w-[15ch]"
          style={{ fontSize: "clamp(32px, 6vw, 64px)" }}
        >
          Selected Works Archive
        </h1>
        <p className="text-xs text-[#111]/40 mt-6 max-w-[45ch] leading-relaxed">
          A collection of product design, design engineering, and HCI research spanning five years and multiple industries.
        </p>
      </section>

      {/* ── Filters ── */}
      <section className="pb-8 mb-12">
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
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {filtered.map((project) => (
            project.href ? (
              <Link
                key={project.title}
                href={project.href}
                className="flex flex-col gap-3 group"
                data-magnetic-card
              >
                <div className="aspect-4/3 w-full overflow-hidden" data-card-image>
                  {project.thumbnail}
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-medium text-[#111]">{project.title}</span>
                    <span className="text-[11px] text-[#111]/30 tabular-nums">{project.year}</span>
                  </div>
                  <p className="text-xs text-[#111]/50 leading-relaxed">{project.description}</p>
                  <div className="flex items-center gap-4 mt-1">
                    {project.links.map((link) => (
                      <span
                        key={link.label}
                        className="text-[11px] text-[#111] underline underline-offset-4 decoration-[#111]/20 hover:decoration-[#111] transition-all"
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
                    <span className="text-[11px] text-[#111]/30 tabular-nums">{project.year}</span>
                  </div>
                  <p className="text-xs text-[#111]/50 leading-relaxed">{project.description}</p>
                  <div className="flex items-center gap-4 mt-1">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-[11px] text-[#111] underline underline-offset-4 decoration-[#111]/20 hover:decoration-[#111] transition-all"
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
      </section>

    </main>
  );
}
