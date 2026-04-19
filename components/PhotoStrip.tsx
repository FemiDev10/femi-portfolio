"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const PHOTOS = [
  { id: 1, label: "Studio", bg: "#f3f3f3" },
  { id: 2, label: "Process", bg: "#efefef" },
  { id: 3, label: "Lagos", bg: "#f7f7f7" },
  { id: 4, label: "Detail", bg: "#f0f0f0" },
  { id: 5, label: "Draft", bg: "#f9f9f9" },
  { id: 6, label: "Final", bg: "#e9e9e9" },
];

export default function PhotoStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="w-full overflow-hidden py-12 select-none">
      <div 
        ref={containerRef}
        className="flex gap-4 overflow-x-auto no-scrollbar px-6 md:px-12 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {PHOTOS.map((photo) => (
          <motion.div
            key={photo.id}
            className="flex-shrink-0 w-[75vw] md:w-[450px] aspect-[4/5] bg-[#f9f9f9] rounded-[4px] overflow-hidden relative group snap-start border border-[#f0f0f0]"
            whileHover={{ scale: 0.995 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#ccc] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {photo.label}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
      <div className="max-w-[900px] mx-auto px-6 mt-6 flex justify-between items-center text-[#bbb]">
        <span className="text-[9px] uppercase tracking-[0.1em]">Selected Moments</span>
        <span className="text-[9px] uppercase tracking-[0.1em]">Scroll to explore —&gt;</span>
      </div>
    </div>
  );
}
