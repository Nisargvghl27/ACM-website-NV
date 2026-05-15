"use client";

import { motion } from "framer-motion";
import { Globe, Mail } from "lucide-react";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";

// Custom SVG Icons
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

export default function AboutPage() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="min-h-screen pt-32 pb-24 px-4 relative overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-500">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none flex justify-center items-center">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-100 dark:bg-blue-600/10 rounded-full blur-[150px] transition-colors"></div>
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-cyan-100 dark:bg-cyan-600/10 rounded-full blur-[150px] transition-colors"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <PageHeader 
          icon={Globe}
          title="About Our"
          highlightText="Chapter"
          gradientFrom="blue-700"
          gradientTo="cyan-600"
          description="Empowering the next generation of computing educators, researchers, and professionals since 2005."
        />

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-5xl mx-auto">
          
          <motion.div variants={itemVariants} className="relative p-8 md:p-12 lg:p-16 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[3rem] backdrop-blur-sm overflow-hidden shadow-xl dark:shadow-2xl transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-50"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
              
              {/* LEFT SIDE: Chapter Identity & Socials */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
                
                {/* Logo */}
                <div className="relative w-48 h-48 rounded-3xl overflow-hidden bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 shadow-lg flex items-center justify-center p-4 transition-colors mb-8">
                  <Image 
                    src="/acm-nitsurat-custom-logo.png" 
                    alt="ACM NIT Surat Custom Logo" 
                    fill 
                    className="object-contain p-4" 
                    priority
                  />
                </div>
                
                {/* Title */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight transition-colors">
                    ACM NIT Surat
                  </h2>
                  <p className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm mt-2 transition-colors">
                    Student Chapter
                  </p>
                </div>

                {/* Icon-Only Social Buttons */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
                  <a 
                    href="mailto:acm@svnit.ac.in" 
                    aria-label="Email Us"
                    className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-white/5 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 text-gray-700 dark:text-gray-300 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://github.com/acm-svnit" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="GitHub"
                    className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-white/5 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black text-gray-700 dark:text-gray-300 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/acmnitsurat/posts/?feedView=all" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn"
                    className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-white/5 hover:bg-[#0077b5] hover:text-white dark:hover:bg-[#0077b5] text-gray-700 dark:text-gray-300 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </div>

              </div>

              {/* RIGHT SIDE: Exact Text Content */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed transition-colors">
                  <p>
                    ACM NIT Surat student chapter, established in 2005, is an integral part of the International Learned Society for Computing, ACM. Comprising a dedicated team of computing educators, researchers, and professionals, the chapter aims to inspire dialogue, resource-sharing, and tackling challenges in the field of computing.
                  </p>
                  <p>
                    Through a wide array of engaging activities like coding challenges, hackathons, quizzes, and application development, the chapter has fostered an environment of learning, fun, and productivity. Its reputation within the institute is exceptional, evident from the massive turnout at every event.
                  </p>
                  <p>
                    With its ambitious goals, including the nationwide recognition of events like Epiphany and Dotslash, ACM NIT Surat is constantly raising the bar and making a significant impact in the world of technology and education.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}