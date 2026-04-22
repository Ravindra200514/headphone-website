"use client";

import { useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import CanvasSequence from "@/components/CanvasSequence";
import ScrollytellingSections from "@/components/ScrollytellingSections";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative bg-[#050505]">
      <Navbar />

      <div ref={containerRef} className="h-[800vh] w-full relative">
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
          <CanvasSequence scrollYProgress={scrollYProgress} /> 
          <ScrollytellingSections scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </main>
  );
}
