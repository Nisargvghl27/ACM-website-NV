"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SearchX, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 relative overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-500">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none flex justify-center items-center">
        <div className="absolute w-[300px] h-[300px] bg-red-500/10 dark:bg-red-500/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl dark:shadow-2xl backdrop-blur-xl">
            <SearchX className="w-12 h-12 text-red-500 animate-pulse" />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-8xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-6"
        >
          404 <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 text-3xl md:text-5xl">
            Page Not Found
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-lg mx-auto leading-relaxed"
        >
          The route you are looking for doesn't exist or has been moved. Nisarg Vaghela and the ACM tech team are monitoring these logs to keep the site stable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link 
            href="/" 
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/30 backdrop-blur-md shadow-lg dark:shadow-none"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Return Home
          </Link>
        </motion.div>

      </div>
    </section>
  );
}