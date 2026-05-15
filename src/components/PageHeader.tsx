"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  icon: LucideIcon;
  title: string;
  highlightText: string;
  gradientFrom: string;
  gradientTo: string;
  description: string;
}

export function PageHeader({ icon: Icon, title, highlightText, gradientFrom, gradientTo, description }: PageHeaderProps) {
  return (
    <div className="text-center mb-16 md:mb-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="inline-flex items-center justify-center p-3 mb-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl dark:shadow-2xl backdrop-blur-md transition-colors"
      >
        <Icon className={`w-6 h-6 text-${gradientFrom} dark:text-${gradientTo}`} />
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-6 transition-colors"
      >
        {title} <span className={`text-transparent bg-clip-text bg-gradient-to-r from-${gradientFrom} to-${gradientTo} dark:from-${gradientTo} dark:to-${gradientFrom}`}>{highlightText}</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium transition-colors px-4 md:px-0"
      >
        {description}
      </motion.p>
    </div>
  );
}