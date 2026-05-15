"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-50 dark:bg-black transition-colors duration-500 overflow-hidden">
      
      {/* Background Grid & Ambient Glows */}
      <div className="absolute inset-0 w-full h-full pointer-events-none flex justify-center items-center">
        <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-[80px] animate-pulse delay-75"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Floating Glass Logo Card */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-24 h-24 md:w-28 md:h-28 mb-8 flex items-center justify-center bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl shadow-xl dark:shadow-2xl backdrop-blur-2xl"
        >
          {/* Inner Card Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-3xl"></div>
          
          <Image
            src="/logo.png" 
            alt="ACM SVNIT Logo"
            width={60}
            height={60}
            className="object-contain drop-shadow-md z-10 w-12 h-12 md:w-16 md:h-16"
            priority
          />
        </motion.div>

        {/* Cinematic Text Reveal */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl font-extrabold tracking-widest text-gray-900 dark:text-white uppercase drop-shadow-sm"
          >
            ACM<span className="text-blue-600 dark:text-blue-500">SVNIT</span>
          </motion.h1>
        </div>

        {/* Premium Continuous Flow Progress Bar */}
        <div className="w-48 md:w-64 h-1 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden relative shadow-inner">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 dark:from-blue-500 dark:via-cyan-300 dark:to-blue-500 bg-[length:200%_100%]"
            initial={{ width: "0%", x: "-100%" }}
            animate={{
              width: ["0%", "50%", "100%", "100%", "0%"],
              x: ["-100%", "0%", "0%", "100%", "100%"]
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </div>

      </div>
    </div>
  );
}