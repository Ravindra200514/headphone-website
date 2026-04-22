"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Overview", link: "/" },
  { name: "Technology", link: "/technology" },
  { name: "Noise Cancelling", link: "/noise-cancelling" },
  { name: "Specs", link: "/specs" },
];

export default function Navbar() {
  const pathname = usePathname();
  
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [opacity, setOpacity] = useState(1); // Always start visible for multi-page unless we scroll

  useMotionValueEvent(scrollY, "change", (latest) => {
    // If we scroll down a lot, maybe hide. For now, keep it always visible or slightly faded at top.
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(false); 
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full px-6 py-4 transition-all duration-500 glass-nav`}
    >
      <div className="w-full max-w-7xl flex items-center justify-between mx-auto">
        <Link href="/" className="text-white font-semibold tracking-tight text-lg z-50">
          WH‑1000XM6
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.link;
            return (
              <Link
                key={item.name}
                href={item.link}
                className="relative text-sm font-medium tracking-wide py-2 group"
              >
                <span
                  className={`transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/50 group-hover:text-white/80"
                  }`}
                >
                  {item.name}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0050FF] to-[#00D6FF] rounded-full shadow-[0_0_8px_#00D6FF]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        {pathname === '/checkout' ? (
           <Link href="/" className="relative text-white/50 hover:text-white transition-colors text-sm font-medium">
             Back to Product
           </Link>
        ) : (
          <Link href="/checkout" className="relative group px-5 py-2 overflow-hidden rounded-full font-medium text-sm text-white transition-transform active:scale-95">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0050FF] to-[#00D6FF] opacity-80 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]"></span>
            <span className="absolute inset-[1px] rounded-full bg-[#050505] transition-colors group-hover:bg-[#0A0A0C]"></span>
            <span className="relative z-10 flex items-center shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              Buy Now
            </span>
          </Link>
        )}
      </div>
    </motion.nav>
  );
}
