"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function SpecsPage() {
  const specs = [
    { category: "Full Weight", value: "Approx. 250g (8.82 oz)" },
    { category: "Headphone Type", value: "Closed, Dynamic" },
    { category: "Driver Unit", value: "30mm, specially designed" },
    { category: "Magnet", value: "Neodymium" },
    { category: "Impedance", value: "48 ohm (when connected via headphone cable with unit turned on)" },
    { category: "Frequency Response", value: "4 Hz - 40,000 Hz" },
    { category: "Battery Life", value: "Max. 40 hours (NC ON), Max. 50 hours (NC OFF)" },
    { category: "Bluetooth® Version", value: "Bluetooth Specification Version 5.3" },
    { category: "Supported Audio Formats", value: "SBC, AAC, LDAC, aptX HD" },
    { category: "Noise Cancelling", value: "Auto NC Optimizer, Ambient Sound Mode, Quick Attention" },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Technical Specifications
          </h1>
          <p className="text-white/50 mb-12">
            Every metric behind the WH-1000XM6 engineering triumph.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-white/10 rounded-2xl bg-[#0A0A0C] overflow-hidden"
        >
          {specs.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row md:items-center p-6 ${
                index !== specs.length - 1 ? "border-b border-white/5" : ""
              } hover:bg-white/[0.02] transition-colors`}
            >
              <div className="w-1/3 text-white/50 text-sm font-medium uppercase tracking-wider mb-2 md:mb-0">
                {item.category}
              </div>
              <div className="w-2/3 text-white/90 font-medium">
                {item.value}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
           <a href="/checkout" className="inline-block px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform active:scale-95">
             Order WH-1000XM6
           </a>
        </motion.div>

      </div>
    </main>
  );
}
