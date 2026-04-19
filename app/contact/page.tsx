"use client";

import { useEffect, useRef, useState } from "react";

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
    <div ref={ref} className={`${className} transition-all duration-1000 ease-[0.16,1,0.3,1]`} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(20px)" : "translateY(40px)" }}>
      {children}
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="max-w-[1100px] mx-auto pt-32 px-6 pb-32 md:pt-48 md:px-12 md:pb-48">
      
      {/* ── HEADER ── */}
      <section className="mb-32 md:mb-48">
        <p className="text-[10px] uppercase text-[#bbb] tracking-[0.2em] font-medium mb-10">Get in touch</p>
        <h1 
          className="font-normal leading-[1.05] tracking-[-0.04em] max-w-[15ch] text-[#111]"
          style={{ fontSize: "clamp(34px, 7vw, 72px)" }}
        >
          Let's build something worth remembering.
        </h1>
      </section>

      {/* ── CONTACT GRID ── */}
      <AnimatedSection className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-start-1 md:col-span-2">
          <p className="text-[10px] uppercase text-[#bbb] tracking-[0.2em] font-medium">Contact</p>
        </div>
        
        <div className="md:col-start-4 md:col-span-8">
          <div className="mb-24">
            <p className="text-[16px] text-[#777] font-light leading-[1.8] max-w-[45ch] mb-12">
              Whether you're hiring, collaborating, or just want to talk design and code — my inbox is open. I reply within 24 hours.
            </p>
            <a 
              href="mailto:femijimoh@gmail.com" 
              className="text-[26px] md:text-[42px] font-normal text-[#111] tracking-[-0.02em] border-b-[1.5px] border-[#111] pb-2 hover:text-[#777] hover:border-[#bbb] transition-all"
            >
              femijimoh@gmail.com
            </a>
          </div>

          {/* Socials & Availability */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-[#f0f0f0]">
            <div>
              <p className="text-[10px] uppercase text-[#bbb] tracking-[0.2em] font-medium mb-6">Elsewhere</p>
              <div className="flex flex-col gap-3">
                {["LinkedIn", "X / Twitter", "Behance", "Resume PDF"].map((link) => (
                  <a key={link} href="#" className="text-[14px] text-[#111] font-light hover:text-[#777] transition-colors w-fit">
                    {link} ↗
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-[10px] uppercase text-[#bbb] tracking-[0.2em] font-medium mb-6">Status</p>
              <div className="flex items-center gap-3 bg-[#f9f9f9] border border-[#f0f0f0] rounded-[4px] px-4 py-3 w-fit">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                <span className="text-[12px] text-[#111] font-light">Available for new roles · Remote</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

    </main>
  );
}
