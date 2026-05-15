"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Added "Home" link before "Events"
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.div
      className="fixed top-0 inset-x-0 z-[100] flex justify-center w-full px-4 pt-4 md:pt-6 pointer-events-none"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav
        className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ease-out 
          ${scrolled 
            ? "w-full max-w-5xl bg-white/70 dark:bg-black/60 backdrop-blur-2xl border border-gray-200/50 dark:border-white/10 rounded-full px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]" 
            : "w-full max-w-7xl bg-transparent border-transparent px-4 md:px-8 py-4"}
        `}
      >
        <Link href="/" aria-label="Home" className="relative group flex items-center gap-2">
          <motion.div whileTap={{ scale: 0.95 }} className="flex items-center gap-2 cursor-pointer">
            <Image 
              src="/logo.png" 
              alt="ACM Logo" 
              width={32} 
              height={32} 
              className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" 
            />
            <span className="text-gray-900 dark:text-white font-extrabold text-2xl tracking-tighter transition-colors">
              ACM<span className="text-blue-600 dark:text-blue-500">SVNIT</span>
            </span>
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center space-x-1 border border-transparent">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.name} href={link.href} className="relative px-5 py-2 rounded-full group" aria-current={isActive ? "page" : undefined}>
                <span className={`relative z-10 text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${
                  isActive 
                    ? "text-blue-700 dark:text-white" 
                    : "text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                }`}>
                  {link.name}
                </span>
                {isActive && (
                  <motion.div 
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-blue-50/80 dark:bg-white/10 rounded-full border border-blue-100/50 dark:border-white/5"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <div className="pl-3 ml-2 border-l border-gray-200 dark:border-white/10">
            <ThemeToggle />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)} 
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center transition-colors shadow-sm"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}><X className="h-5 w-5" /></motion.div>
              ) : (
                <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}><Menu className="h-5 w-5" /></motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[80px] left-4 right-4 pointer-events-auto bg-white/95 dark:bg-black/95 border border-gray-200/50 dark:border-white/10 rounded-3xl overflow-hidden backdrop-blur-2xl shadow-2xl md:hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)} 
                      className={`block px-6 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all ${
                        isActive 
                          ? "bg-blue-50 dark:bg-white/10 text-blue-600 dark:text-white" 
                          : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}