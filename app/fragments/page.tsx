"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const FRAGMENTS = [
  { id: 1,  title: "F1 Money Race",    category: "Flutter / HCI",  year: "2025" },
  { id: 2,  title: "Gaze Study",      category: "Research",       year: "2024" },
  { id: 3,  title: "Physics Canvas",   category: "Design Eng",     year: "2025" },
  { id: 4,  title: "Token System",     category: "Engineering",    year: "2024" },
  { id: 5,  title: "LMS Iconography",  category: "Visual Design",  year: "2023" },
  { id: 6,  title: "Nigeria Stamp",    category: "Research",       year: "2024" },
  { id: 7,  title: "Card Reflection",  category: "Design Eng",     year: "2025" },
  { id: 8,  title: "Decision Fatigue", category: "Research",       year: "2024" },
  { id: 9,  title: "Check-it UI",      category: "Product",        year: "2022" },
  { id: 10, title: "DP System",        category: "Systems",        year: "2025" },
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

export default function FragmentsPage() {
  return (
    <main className="max-w-[1100px] mx-auto pt-32 px-6 pb-32 md:pt-40 md:px-12 md:pb-48">
      
      {/* ── HEADER ── */}
      <section className="mb-32 md:mb-48">
        <p className="text-[10px] uppercase text-[#bbb] tracking-[0.2em] font-medium mb-10">Experiments & Scraps</p>
        <h1 
          className="font-normal leading-[1.05] tracking-[-0.04em] max-w-[15ch] text-[#111]"
          style={{ fontSize: "clamp(34px, 7vw, 72px)" }}
        >
          Technical fragments and design scraps.
        </h1>
      </section>

      {/* ── FRAGMENTS GRID ── */}
      <AnimatedSection className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-start-1 md:col-span-2">
          <p className="text-[10px] uppercase text-[#bbb] tracking-[0.2em] font-medium">Archive</p>
        </div>
        
        <div className="md:col-start-4 md:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {FRAGMENTS.map((f) => (
              <motion.div 
                key={f.id} 
                className="group cursor-crosshair"
                whileHover={{ y: -4 }}
              >
                <div className="aspect-[4/3] bg-[#f9f9f9] border border-[#f0f0f0] rounded-[2px] mb-6 flex items-center justify-center relative overflow-hidden transition-colors group-hover:bg-[#f3f3f3]">
                   {/* Placeholder for fragment image/experiment */}
                   <span className="text-[9px] uppercase tracking-[0.2em] text-[#ddd] font-medium transition-colors group-hover:text-[#ccc]">
                     Fragment — {f.id.toString().padStart(2, '0')}
                   </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-[15px] font-normal text-[#111] tracking-tight">{f.title}</h3>
                  <span className="text-[10px] text-[#bbb] uppercase tracking-widest tabular-nums">{f.year}</span>
                </div>
                <p className="text-[12px] text-[#bbb] uppercase tracking-[0.1em] mt-1">{f.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

    </main>
  );
}
