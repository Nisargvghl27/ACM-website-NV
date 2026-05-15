"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Loading from "./loading"; // Importing your beautiful loading screen!

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  // Control how long the splash screen stays visible (2.5 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1, ease: "easeOut", delay: 0.5 } },
  };

  return (
    <>
      {/* --- Premium Splash Screen Overlay --- */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="splash-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[99999] pointer-events-none"
          >
            <Loading />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Main Home Page Content --- */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-500">
        
        <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-100 dark:bg-blue-600/20 rounded-full blur-[120px] transition-colors duration-500"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-100 dark:bg-cyan-500/20 rounded-full blur-[100px] transition-colors duration-500"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] transition-colors duration-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={!isLoading ? "visible" : "hidden"} // Only animate in when loading is done!
              className="flex flex-col items-start text-left"
            >
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs md:text-sm font-semibold tracking-widest text-blue-700 dark:text-blue-300 uppercase bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 rounded-full backdrop-blur-md transition-colors duration-300">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 dark:bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-500"></span>
                  </span>
                  Technical Excellence at SVNIT
                </div>
              </motion.div>

              <motion.h1 variants={itemVariants} className="mb-6 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-gray-900 dark:text-white leading-[1.15] transition-colors duration-300">
                Architecting the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700 dark:from-blue-400 dark:via-cyan-300 dark:to-blue-500 animate-gradient-x">
                  Future of Tech
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="mb-10 text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl font-medium transition-colors duration-300">
                Welcome to the ACM Student Chapter at SVNIT. We bridge the gap between academic theory and industry practice through innovation, research, and open-source collaboration.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link 
                  href="/events" 
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white bg-blue-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(37,99,235,0.3)] dark:hover:shadow-[0_0_40px_rgba(37,99,235,0.5)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Events 
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 dark:from-blue-600 dark:to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <Link 
                  href="/team" 
                  className="group inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-white bg-white dark:bg-transparent border-2 border-gray-200 dark:border-white/10 rounded-full transition-all duration-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:border-gray-300 dark:hover:border-white/30 shadow-sm dark:shadow-none backdrop-blur-md"
                >
                  Meet The Team
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={imageVariants}
              initial="hidden"
              animate={!isLoading ? "visible" : "hidden"} // Waits for loading screen to finish
              className="relative lg:ml-auto w-full max-w-lg xl:max-w-xl mt-12 lg:mt-0"
            >
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-blue-200 dark:border-blue-500/50 rounded-tl-3xl opacity-100 dark:opacity-50 hidden md:block transition-colors"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-cyan-200 dark:border-cyan-500/50 rounded-br-3xl opacity-100 dark:opacity-50 hidden md:block transition-colors"></div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_rgba(37,99,235,0.15)] aspect-[4/3] group bg-gray-100 dark:bg-black transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10"></div>
                
                <Image 
                  src="/core2k25.jpg" 
                  alt="ACM SVNIT Core Team" 
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-white font-bold text-lg tracking-wide drop-shadow-md">Core Team '26</p>
                  <p className="text-blue-200 text-sm font-medium tracking-widest uppercase drop-shadow-md">National Institute of Technology</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}