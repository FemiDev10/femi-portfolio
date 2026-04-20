"use client";
/* eslint-disable react/no-unescaped-entities */

import { useEffect, useRef, useState, Fragment } from "react";
import PhotoStrip from "@/components/PhotoStrip";

/* ─── Hero Words ─────────────────────────────────────────────── */
const HERO_LINES = [
  "Designer who builds.",
  "Engineer who designs.",
  "5 years of making things",
  "work beautifully —",
  "without handing them off to anyone."
];

// Flattening for word-by-word reveal
const HERO_WORDS = HERO_LINES.flatMap((line, lineIndex) => 
  line.split(" ").map(word => ({
    text: word,
    italic: lineIndex === 3 && (word === "work" || word === "beautifully"),
  }))
);

/* ─── Experience Data ────────────────────────────────────────── */
const EXPERIENCE = [
  { company: "DriveVault", role: "Product Designer & PM", date: "Feb '25 – now" },
  { company: "Paymi Solutions", role: "Product Designer (UI/UX)", date: "Jun '24 – now" },
  { company: "Contripay", role: "Product Designer", date: "Oct '24 – Mar '25" },
  { company: "FourthCanvas", role: "UX Researcher", date: "Apr '24 – Jun '24" },
  { company: "Aimsity", role: "UI/UX Designer", date: "Nov '23 – Dec '23" },
  { company: "Check-it", role: "UI/UX Designer", date: "Aug '22 – Oct '22" },
  { company: "Softkode", role: "Lead Designer", date: "Dec '20 – Dec '22" },
];

/* ─── Skills Data ────────────────────────────────────────────── */
const SKILLS = [
  {
    label: "Design",
    items: ["Product Design", "UX / Interaction", "Design Systems", "Visual Design"]
  },
  {
    label: "Engineering",
    items: ["React / Next.js", "Flutter", "Tailwind CSS", "Framer Motion"]
  },
  {
    label: "Research & PM",
    items: ["HCI Research", "Mixed Methods", "Technical PM", "QA & Delivery"]
  }
];

/* ─── Scroll Reveal Hook ─────────────────────────── */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsVisible(true); observer.unobserve(el); } }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`${className} transition-all duration-1000 ease-[0.16,1,0.3,1]`} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(20px)" }}>
      {children}
    </div>
  );
}

export default function MePage() {
  const heroRef = useRef<HTMLHeadingElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const spans = wordRefs.current.filter((s): s is HTMLSpanElement => s !== null);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        spans.forEach((s, i) => {
          setTimeout(() => {
            s.style.transition = "color 0.8s ease, filter 0.8s ease";
            s.style.color = "#111";
            s.style.filter = "blur(0px)";
          }, i * 60);
        });
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="max-w-[1100px] mx-auto pt-24 px-6 pb-32 md:pt-40 md:px-12 md:pb-48">
      
      {/* ── HERO ── */}
      <section className="mb-24 md:mb-40">
        <p className="text-[10px] uppercase text-[#bbb] tracking-[0.2em] font-medium mb-10">Femi Jimoh — About</p>
        <h1 
          ref={heroRef}
          className="font-normal leading-[1.05] tracking-[-0.04em] max-w-[15ch] sm:max-w-[20ch]"
          style={{ fontSize: "clamp(34px, 7vw, 72px)" }}
        >
          {HERO_WORDS.map((word, i) => (
            <Fragment key={i}>
              <span
                ref={(el) => { wordRefs.current[i] = el; }}
                style={{
                  display: "inline-block",
                  filter: "blur(4px)",
                  fontStyle: word.italic ? "italic" : "normal",
                  fontWeight: word.italic ? 300 : 400,
                  color: word.italic ? "#999" : "#ddd",
                }}
              >
                {word.text}
              </span>
              {" "}
              {(word.text === "builds." || word.text === "designs." || word.text === "things" || word.text === "—") && <br className="hidden sm:block" />}
            </Fragment>
          ))}
        </h1>
      </section>

      {/* ── PHOTO STRIP ── */}
      <AnimatedSection className="mb-32 md:mb-48 -mx-6 md:-mx-12">
        <PhotoStrip />
      </AnimatedSection>

      {/* ── BIO ── */}
      <AnimatedSection className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 md:mb-48">
        <div className="md:col-start-1 md:col-span-2">
          <p className="text-[10px] uppercase text-[#bbb] tracking-[0.2em] font-medium">Profile</p>
        </div>
        <div className="md:col-start-4 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="text-[16px] text-[#777] font-light leading-[1.8] tracking-tight">
            I'm Femi Jimoh — a product designer, design engineer, and PM based in Lagos. 
            I started in UX, got obsessed with HCI research, then taught myself to code 
            so I'd never have to describe a design to a developer again. 
            My work sits at the intersection of <span className="text-[#111] font-normal">how people think</span> and <span className="text-[#111] font-normal">how products behave</span>.
          </div>
          <div className="text-[16px] text-[#777] font-light leading-[1.8] tracking-tight">
            I care about the gap between what a product promises and what it actually delivers. 
            Most of my best work has been closing that gap — quietly, precisely, without drama. 
            When I'm not designing, I'm building experimental interfaces. 
            The F1 money race app was one of those. There are more coming.
          </div>
        </div>
      </AnimatedSection>

      {/* ── CURRENTLY ── */}
      <AnimatedSection className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 md:mb-48">
        <div className="md:col-start-1 md:col-span-2">
          <p className="text-[10px] uppercase text-[#bbb] tracking-[0.2em] font-medium">Currently</p>
        </div>
        <div className="md:col-start-4 md:col-span-8">
          <div className="flex flex-wrap gap-3">
            {["Open to new roles", "Lagos · Remote-friendly", "Available now"].map((text) => (
              <span key={text} className="text-[12px] text-[#111] border border-[#e8e8e8] rounded-[2px] px-[14px] py-[6px] font-light">
                {text}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <div className="h-[1px] bg-[#f0f0f0] mb-32 md:mb-48" />

      {/* ── EXPERIENCE ── */}
      <AnimatedSection className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 md:mb-48">
        <div className="md:col-start-1 md:col-span-2">
          <p className="text-[10px] uppercase text-[#bbb] tracking-[0.2em] font-medium">Experience</p>
        </div>
        <div className="md:col-start-4 md:col-span-8">
          <div className="divide-y divide-[#f0f0f0]">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-baseline justify-between py-8 first:pt-0">
                <div>
                  <div className="text-[20px] font-normal text-[#111] tracking-[-0.02em]">{exp.company}</div>
                  <div className="text-[14px] text-[#888] font-light mt-1">{exp.role}</div>
                </div>
                <div className="text-[13px] text-[#bbb] font-light mt-4 sm:mt-0 tabular-nums uppercase tracking-widest">{exp.date}</div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── SKILLS ── */}
      <AnimatedSection className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 md:mb-48">
        <div className="md:col-start-1 md:col-span-2">
          <p className="text-[10px] uppercase text-[#bbb] tracking-[0.2em] font-medium">Expertise</p>
        </div>
        <div className="md:col-start-4 md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12">
          {SKILLS.map((skill, i) => (
            <div key={i}>
              <p className="text-[10px] text-[#111] uppercase tracking-[0.2em] mb-6 font-medium">{skill.label}</p>
              <div className="space-y-3">
                {skill.items.map((item) => (
                  <span key={item} className="block text-[14px] text-[#777] font-light">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <div className="h-[1px] bg-[#f0f0f0] mb-32 md:mb-48" />

      {/* ── ELSEWHERE ── */}
      <AnimatedSection className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-start-1 md:col-span-2">
          <p className="text-[10px] uppercase text-[#bbb] tracking-[0.2em] font-medium">Elsewhere</p>
        </div>
        <div className="md:col-start-4 md:col-span-8">
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            {[
              { label: "LinkedIn ↗", href: "#" },
              { label: "X / Twitter ↗", href: "#" },
              { label: "Behance ↗", href: "#" },
              { label: "Resume ↗", href: "#" },
              { label: "femijimoh@gmail.com", href: "mailto:femijimoh@gmail.com" },
            ].map((link) => (
              <a key={link.label} href={link.href} className="text-[16px] text-[#111] border-b border-transparent hover:border-[#111] transition-all font-light pb-1">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
