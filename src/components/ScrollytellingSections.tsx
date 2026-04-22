"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface ScrollytellingSectionsProps {
  scrollYProgress: MotionValue<number>;
}

export default function ScrollytellingSections({ scrollYProgress }: ScrollytellingSectionsProps) {
  // Hero (0 - 15%)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.08, 0.15], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  // Engineering Reveal (15% - 40%)
  const engOpacity = useTransform(scrollYProgress, [0.15, 0.2, 0.35, 0.4], [0, 1, 1, 0]);
  const engX = useTransform(scrollYProgress, [0.15, 0.2], [-50, 0]);

  // Noise Cancelling & Microphones (40% - 65%)
  const ncOpacity = useTransform(scrollYProgress, [0.4, 0.45, 0.6, 0.65], [0, 1, 1, 0]);
  const ncX = useTransform(scrollYProgress, [0.4, 0.45], [50, 0]);

  // Sound & Upscaling (65% - 85%)
  const soundOpacity = useTransform(scrollYProgress, [0.65, 0.7, 0.8, 0.85], [0, 1, 1, 0]);
  const soundY = useTransform(scrollYProgress, [0.65, 0.7], [50, 0]);

  // Reassembly & CTA (85% - 100%)
  const ctaOpacity = useTransform(scrollYProgress, [0.85, 0.9, 1], [0, 1, 1]);
  const ctaY = useTransform(scrollYProgress, [0.85, 0.9], [50, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      
      {/* 1. HERO */}
      <motion.div 
        style={{ opacity: heroOpacity, y: heroY }}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center text-center px-4"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,8,21,0.5)_0%,rgba(5,5,5,0)_60%)] -z-10" />
        <h1 className="text-6xl md:text-8xl font-bold ultra-tracking text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-6 drop-shadow-2xl">
          Sony WH‑1000XM6
        </h1>
        <p className="text-2xl md:text-3xl text-white/90 font-medium mb-4">
          Silence, perfected.
        </p>
        <p className="text-white/60 max-w-lg mx-auto text-lg">
          Flagship wireless noise cancelling, re‑engineered for a world that never stops.
        </p>
      </motion.div>

      {/* 2. ENGINEERING */}
      <motion.div 
        style={{ opacity: engOpacity, x: engX }}
        className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 md:px-24"
      >
        <div className="max-w-md pointer-events-auto">
          <h2 className="text-4xl md:text-5xl font-bold ultra-tracking text-gradient mb-6 leading-tight">
            Precision-engineered <br />for silence.
          </h2>
          <div className="space-y-6 text-white/60 text-lg">
            <p>
              Custom drivers, sealed acoustic chambers, and optimized airflow deliver studio-grade clarity.
            </p>
            <p>
              Every component is tuned for balance, power, and comfort—hour after hour.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 3. NOISE CANCELLING */}
      <motion.div 
        style={{ opacity: ncOpacity, x: ncX }}
        className="sticky top-0 h-screen w-full flex flex-col justify-center items-end px-8 md:px-24 text-right"
      >
        <div className="max-w-md pointer-events-auto">
          <h2 className="text-4xl md:text-5xl font-bold ultra-tracking text-gradient mb-6 leading-tight">
            Adaptive noise <br />cancelling, redefined.
          </h2>
          <ul className="space-y-6 text-white/60 text-lg flex flex-col items-end">
            <li className="flex items-start justify-end gap-3">
              <span className="text-right">Multi-microphone array listens in every direction.</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#00D6FF] mt-2 shadow-[0_0_8px_#00D6FF]"></div>
            </li>
            <li className="flex items-start justify-end gap-3">
              <span className="text-right">Real-time noise analysis adjusts to your environment.</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#00D6FF] mt-2 shadow-[0_0_8px_#00D6FF]"></div>
            </li>
            <li className="flex items-start justify-end gap-3">
              <span className="text-right">Your music stays pure—planes, trains, and crowds fade away.</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#00D6FF] mt-2 shadow-[0_0_8px_#00D6FF]"></div>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* 4. SOUND & UPSCALING */}
      <motion.div 
        style={{ opacity: soundOpacity, y: soundY }}
        className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 md:px-24"
      >
        <div className="max-w-md pointer-events-auto bg-[rgba(5,5,5,0.4)] backdrop-blur-md p-8 rounded-2xl border border-white/5">
          <h2 className="text-4xl md:text-5xl font-bold ultra-tracking text-gradient mb-6 leading-tight">
            Immersive, lifelike sound.
          </h2>
          <div className="space-y-6 text-white/60 text-lg">
            <p>
              High-performance drivers unlock detail, depth, and texture in every track.
            </p>
            <p>
              AI-enhanced upscaling restores clarity to compressed audio, so every note feels alive.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 5. CTA */}
      <motion.div 
        style={{ opacity: ctaOpacity, y: ctaY }}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center text-center px-4"
      >
        <div className="pointer-events-auto">
          <h2 className="text-5xl md:text-7xl font-bold ultra-tracking text-transparent bg-clip-text bg-gradient-to-b from-white to-[#00D6FF] mb-6 drop-shadow-2xl">
            Hear everything. <br />Feel nothing else.
          </h2>
          <p className="text-xl md:text-2xl text-white/60 mb-12">
            WH‑1000XM6. Designed for focus, crafted for comfort.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
            {/* Navigates to checkout */}
            <a href="/checkout" className="relative group px-8 py-4 overflow-hidden rounded-full font-semibold text-lg text-white block">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0050FF] to-[#00D6FF] transition-opacity opacity-90 group-hover:opacity-100 blur-[2px]"></span>
              <span className="absolute inset-[1px] rounded-full bg-[#050505] transition-colors group-hover:bg-[#0A0A0C]"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Experience WH‑1000XM6
              </span>
            </a>
            <a href="#specs" className="text-white/60 hover:text-white transition-colors font-medium underline underline-offset-4 decoration-white/20 hover:decoration-white/100">
              See full specs
            </a>
          </div>
          <p className="mt-8 text-sm text-white/40">
            Engineered for airports, offices, and everything in between.
          </p>
        </div>
      </motion.div>

    </div>
  );
}
