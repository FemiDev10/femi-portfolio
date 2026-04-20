"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const ITEMS = [
  { id: 1, label: "Studio", bg: "#f3f3f3" },
  { id: 2, label: "Process", bg: "#efefef" },
  { id: 3, label: "Detail", bg: "#f7f7f7" },
  { id: 4, label: "Context", bg: "#f0f0f0" },
  { id: 5, label: "Outcome", bg: "#f9f9f9" },
  { id: 6, label: "Draft", bg: "#e9e9e9" },
  { id: 7, label: "Final", bg: "#f2f2f2" },
];

function CarouselItem({ 
  item, 
  index, 
  containerWidth, 
  scrollX 
}: { 
  item: typeof ITEMS[0], 
  index: number, 
  containerWidth: number, 
  scrollX: any 
}) {
  const itemWidth = 320;
  const gap = 40;
  const centerPosition = (index * (itemWidth + gap)) + (itemWidth / 2);
  
  // Calculate relative distance from viewport center (0 = center, 1/-1 = edges)
  const distanceNormalized = useTransform(scrollX, (latest: number) => {
    const viewportCenter = latest + (containerWidth / 2);
    const distance = centerPosition - viewportCenter;
    return distance / (containerWidth / 1.2);
  });

  // 1. Arc Motion (Vertical Dip)
  const translateY = useTransform(distanceNormalized, (d) => Math.pow(Math.abs(d), 1.5) * 100);

  // 2. 3D Depth (Z-axis)
  const translateZ = useTransform(distanceNormalized, (d) => Math.abs(d) * -400);

  // 3. 3D Rotation (Facing Center)
  const rotateY = useTransform(distanceNormalized, (d) => d * -25);

  // 4. Scale and Opacity
  const scale = useTransform(distanceNormalized, (d) => 1 - Math.abs(d) * 0.2);
  const opacity = useTransform(distanceNormalized, (d) => 1 - Math.abs(d) * 0.6);
  
  // 5. Blur for focus effect
  const filter = useTransform(distanceNormalized, (d) => `blur(${Math.abs(d) * 8}px)`);

  return (
    <motion.div
      className="flex-shrink-0 relative group"
      style={{
        width: itemWidth,
        height: 440,
        perspective: "1200px",
        transformStyle: "preserve-3d",
        zIndex: useTransform(distanceNormalized, (d) => Math.round((1 - Math.abs(d)) * 100)),
      }}
    >
      <motion.div
        className="w-full h-full rounded-[20px] relative overflow-hidden transition-all duration-700"
        style={{
          y: translateY,
          z: translateZ,
          rotateY: rotateY,
          scale,
          opacity,
          filter,
          background: item.bg,
          border: "1px solid rgba(17,17,17,0.05)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
        }}
        whileHover={{ 
          scale: 1.05, 
          z: 50, 
          filter: "blur(0px)",
          opacity: 1,
          boxShadow: "0 40px 80px rgba(0,0,0,0.12)" 
        }}
      >
        {/* Noise overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#bbb] font-medium mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {item.label}
          </span>
          <div className="w-12 h-[1px] bg-[#ddd] group-hover:w-20 transition-all duration-700" />
        </div>

        {/* Glossy gradient reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}

export default function SpatialGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const { scrollX } = useScroll({ container: containerRef });
  const smoothScrollX = useSpring(scrollX, { stiffness: 40, damping: 18 });

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      const handleResize = () => setContainerWidth(containerRef.current?.offsetWidth || 0);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Subtle auto-drift
  useEffect(() => {
    let interval: any;
    if (!isHovered && containerRef.current) {
      interval = setInterval(() => {
        if (containerRef.current) {
          const max = containerRef.current.scrollWidth - containerRef.current.offsetWidth;
          if (containerRef.current.scrollLeft >= max - 2) {
            containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            containerRef.current.scrollBy({ left: 1, behavior: "auto" });
          }
        }
      }, 40);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="relative w-full py-32 overflow-visible select-none">
      <div 
        ref={containerRef}
        className="flex gap-10 overflow-x-auto no-scrollbar py-24 px-[40%] cursor-grab active:cursor-grabbing snap-x"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ perspective: "1500px" }}
      >
        {ITEMS.map((item, index) => (
          <div key={item.id} className="snap-center transform-gpu">
            <CarouselItem 
              item={item} 
              index={index} 
              containerWidth={containerWidth} 
              scrollX={smoothScrollX}
            />
          </div>
        ))}
      </div>

      <div className="max-w-[900px] mx-auto px-6 flex items-center justify-between mt-12">
        <div className="flex flex-col gap-1">
          <p className="text-[10px] text-[#111] uppercase tracking-[0.2em] font-medium">
            Spatial Archive
          </p>
          <div className="h-[1px] w-full bg-[#111]/10 origin-left scale-x-50" />
        </div>
        
        <div className="flex items-center gap-6">
          <span className="text-[9px] text-[#bbb] uppercase tracking-[0.15em]">01 / 07</span>
          <p className="text-[9px] text-[#bbb] uppercase tracking-[0.15em] flex items-center gap-3">
            Swipe to navigate
            <span className="w-12 h-[1px] bg-[#bbb]/30" />
          </p>
        </div>
      </div>
    </div>
  );
}
