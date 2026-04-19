"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const HCI_PROJECTS = [
  {
    title: "Wearable Fall Detection",
    year: "2024",
    role: "Researcher & Engineer",
    summary: "Real-time fall detection using 3-axis accelerometers and machine learning for elderly care.",
    href: "/hci/fall-detection"
  },
  {
    title: "Decision Fatigue Study",
    year: "2024",
    role: "HCI Researcher",
    summary: "Mixed-methods study exploring the correlation between information density and user confidence in fintech.",
    href: "#"
  },
  {
    title: "Gaze-Based Navigation",
    year: "2023",
    role: "Interaction Designer",
    summary: "Experimenting with eye-tracking as a primary input method for spatial computing environments.",
    href: "#"
  }
];

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

export default function HCIPage() {
  return (
    <main className="max-w-[1100px] mx-auto pt-32 px-6 pb-32 md:pt-40 md:px-12 md:pb-48">
      
      {/* ── HEADER ── */}
      <section className="mb-32 md:mb-48">
        <p className="text-[10px] uppercase text-[#bbb] tracking-[0.2em] font-medium mb-10">Human-Computer Interaction</p>
        <h1 
          className="font-normal leading-[1.05] tracking-[-0.04em] max-w-[15ch] text-[#111]"
          style={{ fontSize: "clamp(34px, 7vw, 72px)" }}
        >
          Rigour at the edge of interaction.
        </h1>
      </section>

      {/* ── HCI GRID ── */}
      <AnimatedSection className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 md:mb-48">
        <div className="md:col-start-1 md:col-span-2">
          <p className="text-[10px] uppercase text-[#bbb] tracking-[0.2em] font-medium">Research</p>
        </div>
        
        <div className="md:col-start-4 md:col-span-8">
          <p className="text-[16px] text-[#777] font-light leading-[1.8] max-w-[45ch] mb-24">
            My research focuses on how humans process information and interact with physical systems. From machine learning for fall detection to cognitive load studies in fintech.
          </p>

          <div className="divide-y divide-[#f0f0f0] border-t border-[#f0f0f0]">
            {HCI_PROJECTS.map((p, i) => (
              <Link 
                key={i} 
                href={p.href} 
                className="group flex flex-col sm:flex-row sm:items-baseline justify-between py-12 transition-all hover:pl-2"
              >
                <div className="max-w-[50ch]">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-[22px] font-normal text-[#111] tracking-tight group-hover:text-[#777] transition-colors">{p.title}</h3>
                    <div className="h-[1px] w-6 bg-[#eee] group-hover:w-12 transition-all" />
                  </div>
                  <p className="text-[14px] text-[#999] font-light mb-4 uppercase tracking-[0.1em]">{p.role}</p>
                  <p className="text-[15px] text-[#888] font-light leading-relaxed">{p.summary}</p>
                </div>
                <div className="text-[12px] text-[#bbb] font-light mt-6 sm:mt-0 uppercase tracking-widest">{p.year}</div>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

    </main>
  );
}
