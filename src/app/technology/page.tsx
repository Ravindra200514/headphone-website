"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden relative">
      <Navbar />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,80,255,0.05)_0%,rgba(5,5,5,0)_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1 space-y-8 relative z-10"
        >
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gradient leading-tight">
            Precision-engineered <br />for absolute silence.
          </h1>
          
          <div className="space-y-6 text-white/60 text-lg max-w-lg">
            <p>
              The WH-1000XM6 redefines acoustic architecture. Every component has been refined, miniaturized, and perfectly balanced inside custom acoustic chambers designed specifically for high-fidelity audio reproduction without vibration interference.
            </p>
            <p>
              Our redesigned high-performance drivers utilize carbon-fiber reinforced domes, delivering extreme rigidity and allowing precise high-frequency detail alongside thunderous, controlled bass. 
            </p>
            <p>
              Optimized airflow paths completely seal the audio chamber, guaranteeing studio-grade clarity whether you are on a plane, in a cafe, or completely alone in your thoughts.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-white mb-2">30<span className="text-sm text-[#00D6FF] ml-1">mm</span></div>
              <div className="text-xs text-white/40 uppercase tracking-widest">Precision Driver</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">Zero</div>
              <div className="text-xs text-white/40 uppercase tracking-widest">Acoustic Leakage</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="order-1 lg:order-2 relative h-[500px] lg:h-[700px] w-full rounded-2xl overflow-hidden border border-white/5 bg-[#0A0A0C]"
        >
          {/* Using the user-provided headphone image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/sequence/download.jpg" 
            alt="Sony WH-1000XM6 Technology" 
            className="w-full h-full object-cover object-center translate-y-[10%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </motion.div>
        
      </div>
    </main>
  );
}
