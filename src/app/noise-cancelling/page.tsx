"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function NoiseCancellingPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden relative">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gradient leading-tight mb-4">
              Adaptive noise cancelling, redefined.
            </h1>
            <p className="text-xl text-white/60">
              The revolutionary Multi-Microphone Array listens in every direction, powered by our next-generation V3 Processing chip. It actively measures external ambiance and internal resonance millions of times per second.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0A0A0C] border border-white/5 rounded-2xl p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border border-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Intelligent Sensing</h3>
            <p className="text-white/50 leading-relaxed text-sm">
              Eight precision microphones are scattered precisely around the earcup architecture. They capture the hum of airplane engines and the chatter of crowded cafes with identical accuracy.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#0A0A0C] border border-white/5 border-t-[#00D6FF]/50 rounded-2xl p-8 relative overflow-hidden group"
          >
            <h3 className="text-xl font-bold mb-4 text-white">V3 Processor</h3>
            <p className="text-white/50 leading-relaxed text-sm">
              The dual-chip design separates high-frequency and low-frequency cancellation tasks. The result is total silence without the pressurized "cabin feel" typical of legacy noise-cancelling tech.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#0A0A0C] border border-white/5 rounded-2xl p-8 relative overflow-hidden group"
          >
            <h3 className="text-xl font-bold mb-4 text-white">Auto NC Optimizer</h3>
            <p className="text-white/50 leading-relaxed text-sm">
              Whether you are wearing glasses or the cabin pressure changes during a flight, the headphones automatically recalibrate the noise-cancelling profile specifically for your anatomy.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 w-full h-[400px] rounded-2xl overflow-hidden relative border border-white/10"
        >
          {/* Middle sequence showing microphones spreading out */}
          <img src="/sequence/ezgif-frame-210.jpg" alt="Processor Node" className="w-full h-full object-cover scale-110" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-[#00D6FF] uppercase tracking-[0.5em] text-xs font-semibold px-4 py-2 border border-[#00D6FF]/30 backdrop-blur-md rounded-full bg-[#00D6FF]/10">
              Active Noise Cancelling Matrix
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
