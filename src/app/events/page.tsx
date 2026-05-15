"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

// Only the events you have actually added images for
const eventsData = [
  { id: 1, title: "Dotslash 6.0", image: "/dotslash6.jpg", link: "#" },
  { id: 2, title: "Epiphany 12.1", image: "/epiphany12.jpg", link: "#" },
  { id: 3, title: "CodeWars", image: "/codewars.jpg", link: "#" },
  { id: 4, title: "SIH 2023 Stage 1: Ideathon", image: "/SIH.jpg", link: "#" }
];

export default function EventsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="min-h-screen pt-32 pb-24 px-4 relative overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-500">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none flex justify-center items-center">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 dark:bg-blue-600/10 rounded-full blur-[150px] transition-colors duration-500"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-100 dark:bg-cyan-500/10 rounded-full blur-[120px] transition-colors duration-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header using the exact text from the original website */}
        <PageHeader 
          icon={Calendar}
          title="Chapter"
          highlightText="Events"
          gradientFrom="blue-700"
          gradientTo="cyan-600"
          description="These are all the events conducted by the ACM Student chapter in the academic year 2024-2025"
        />

        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible" 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {eventsData.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex flex-col bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-lg dark:shadow-none transition-all duration-300"
            >
              {/* Image Container - NO DARK GRADIENTS, fully visible posters */}
              <div className="relative w-full aspect-square bg-gray-100 dark:bg-zinc-900 overflow-hidden border-b border-gray-200 dark:border-white/10">
                <Image 
                  src={event.image} 
                  alt={event.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              {/* Text Container */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                  {event.title}
                </h3>
                
                <Link 
                  href={event.link} 
                  className="mt-auto inline-flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              
              {/* Invisible Clickable Overlay */}
              <Link href={event.link} className="absolute inset-0 z-10" aria-label={`View ${event.title}`}></Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}