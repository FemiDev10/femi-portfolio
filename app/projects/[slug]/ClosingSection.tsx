"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export type ClosingContent = {
  closer: string[];
  reflection: string[];
  ps: string[];
  credits: {
    name: string;
    role: string;
  }[];
};

function FadeBlock({
  delay,
  children,
}: {
  delay: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function ClosingSection({
  content,
}: {
  content: ClosingContent;
}) {
  return (
    <section className="mt-24 max-w-[72ch]">
      <div className="space-y-16">
        <FadeBlock delay={0}>
          <div className="grid gap-5 md:grid-cols-[110px_minmax(0,1fr)] md:gap-10">
            <div>
              <p className="text-[9px] tracking-widest uppercase text-[#111]/30">
                Closer
              </p>
            </div>
            <div className="max-w-[60ch] space-y-5">
              {content.closer.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm text-[#111]/70 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </FadeBlock>

        <FadeBlock delay={0.12}>
          <div className="grid gap-5 md:grid-cols-[110px_minmax(0,1fr)] md:gap-10">
            <div>
              <p className="text-[9px] tracking-widest uppercase text-[#111]/30">
                Reflection
              </p>
            </div>
            <ul className="max-w-[56ch] space-y-3.5">
              {content.reflection.map((point) => (
                <li
                  key={point}
                  className="text-sm text-[#111]/55 leading-relaxed"
                >
                  • {point}
                </li>
              ))}
            </ul>
          </div>
        </FadeBlock>

        <FadeBlock delay={0.24}>
          <div className="grid gap-5 md:grid-cols-[110px_minmax(0,1fr)] md:gap-10">
            <div>
              <p className="text-[9px] tracking-widest uppercase text-[#111]/30">
                PS
              </p>
            </div>
            <div className="max-w-[56ch] space-y-4">
              {content.ps.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-xs text-[#111]/45 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </FadeBlock>

        <FadeBlock delay={0.36}>
          <div className="grid gap-5 md:grid-cols-[110px_minmax(0,1fr)] md:gap-10">
            <div>
              <p className="text-[9px] tracking-widest uppercase text-[#111]/30">
                Credits
              </p>
            </div>
            <div className="max-w-[60ch]">
              <div className="space-y-0">
                {content.credits.map((credit) => (
                  <motion.div
                    key={credit.name}
                    whileHover={{ opacity: 1, x: 4 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="flex items-start justify-between gap-8 py-5 border-b border-[#111]/8 text-[#111]/75"
                  >
                    <p className="text-sm leading-relaxed">{credit.name}</p>
                    <p className="text-sm text-[#111]/50 leading-relaxed text-right">
                      {credit.role}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FadeBlock>
      </div>
    </section>
  );
}
