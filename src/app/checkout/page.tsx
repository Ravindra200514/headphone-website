"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { CreditCard, Apple, CheckCircle2, Lock } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate real-world API call latency
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2500);
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center relative overflow-hidden">
        <Navbar />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,214,255,0.05)_0%,rgba(5,5,5,0)_50%)]" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="z-10 flex flex-col items-center max-w-md text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-tr from-[#0050FF] to-[#00D6FF] rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,214,255,0.3)]">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Payment Successful</h1>
          <p className="text-white/60 mb-8">
            Thank you for purchasing the Sony WH-1000XM6. Your receipt and shipping details have been sent to your email.
          </p>
          <Link href="/" className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors font-medium">
            Return to Homepage
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
      <Navbar />
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        
        {/* Left Column: Form */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold tracking-tight mb-2 text-white">Checkout</h1>
          <p className="text-white/50 mb-10">Complete your secure purchase.</p>

          <form onSubmit={handlePayment} className="space-y-8">
            
            {/* Express Checkout */}
            <div className="space-y-4">
              <h2 className="text-sm font-medium text-white/70 uppercase tracking-widest">Express Checkout</h2>
              <button type="button" className="w-full flex items-center justify-center gap-2 bg-white text-black py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors">
                <Apple className="w-5 h-5 mb-1" /> Pay
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-[1px] flex-1 bg-white/10" />
              <span className="text-white/30 text-sm">or pay with card</span>
              <div className="h-[1px] flex-1 bg-white/10" />
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h2 className="text-sm font-medium text-white/70 uppercase tracking-widest">Contact Information</h2>
              <input 
                type="email" 
                required
                placeholder="Email Address" 
                className="w-full bg-[#0A0A0C] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00D6FF] transition-colors"
              />
            </div>

            {/* Card Info */}
            <div className="space-y-4">
              <h2 className="text-sm font-medium text-white/70 uppercase tracking-widest">Payment Details</h2>
              <div className="bg-[#0A0A0C] border border-white/10 rounded-xl overflow-hidden focus-within:border-[#00D6FF] transition-colors">
                <div className="border-b border-white/10 relative">
                  <input 
                    type="text" 
                    required
                    placeholder="Card Number" 
                    className="w-full bg-transparent px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none"
                    maxLength={19}
                  />
                  <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                </div>
                <div className="flex">
                  <input 
                    type="text" 
                    required
                    placeholder="MM/YY" 
                    className="w-1/2 border-r border-white/10 bg-transparent px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none"
                    maxLength={5}
                  />
                  <input 
                    type="text" 
                    required
                    placeholder="CVC" 
                    className="w-1/2 bg-transparent px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none"
                    maxLength={4}
                  />
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full relative group px-5 py-4 overflow-hidden rounded-xl font-semibold text-white transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#0050FF] to-[#00D6FF] transition-opacity opacity-90 group-hover:opacity-100"></span>
              <span className="absolute inset-[1px] rounded-xl bg-gradient-to-r from-[#0050FF] to-[#00D6FF] group-hover:bg-[#0050FF] transition-colors"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isProcessing ? (
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Lock className="w-4 h-4 mb-[2px]" /> Pay $399.00
                  </>
                )}
              </span>
            </button>
          </form>
        </motion.div>

        {/* Right Column: Order Summary */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#0A0A0C] border border-white/5 rounded-2xl p-8 h-fit lg:sticky lg:top-32"
        >
          <h2 className="text-xl font-semibold mb-6 text-white">Order Summary</h2>
          
          <div className="flex items-center gap-6 pb-6 border-b border-white/10">
            <div className="w-20 h-20 bg-[#050505] border border-white/5 rounded-xl overflow-hidden relative flex items-center justify-center">
              {/* Fallback frame from the sequence to show product */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/sequence/ezgif-frame-001.jpg" alt="Sony WH-1000XM6" className="w-[150%] h-[150%] object-cover object-center absolute" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white/90">Sony WH-1000XM6</h3>
              <p className="text-white/50 text-sm">Matte Black • Wireless Noise Cancelling</p>
            </div>
            <div className="ml-auto font-medium">$399.00</div>
          </div>

          <div className="space-y-4 py-6 border-b border-white/10 text-white/60 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="text-white/90">$399.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-white/90">Free Express</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Tax</span>
              <span className="text-white/90">$0.00</span>
            </div>
          </div>

          <div className="flex justify-between pt-6 text-lg font-semibold">
            <span>Total</span>
            <span className="text-gradient">$399.00</span>
          </div>

          <div className="mt-8 flex items-start gap-3 bg-[rgba(0,80,255,0.05)] border border-[rgba(0,80,255,0.2)] p-4 rounded-xl text-sm">
            <Lock className="w-5 h-5 text-[#00D6FF] flex-shrink-0" />
            <p className="text-white/50">Payments are processed securely using bank-grade AES-256 encryption. We never store your full credit card details.</p>
          </div>

        </motion.div>

      </div>
    </main>
  );
}
