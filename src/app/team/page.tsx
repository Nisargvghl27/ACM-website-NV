"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

const teamMembers = [
  { id: 221, name: "Smit Marakna", role: "Chairperson" },
  { id: 222, name: "Chetan Kalsariya", role: "Vice-Chairperson" },
  { id: 223, name: "Jay Pipaliya", role: "Secretary" },
  { id: 224, name: "Archit Savaliya", role: "Secretary" },
  { id: 225, name: "Dhruv Patel", role: "Treasurer" },
  { id: 226, name: "Anand Tiwari", role: "Treasurer" },
  { id: 227, name: "Foram Gandhi", role: "Community Head" },
  { id: 228, name: "Miten Gandhi", role: "Developer" },
  { id: 229, name: "Purv Kabaria", role: "Developer" },
  { id: 230, name: "Om Satodiya", role: "Developer" },
  { id: 231, name: "Vanshik Godeshwar", role: "Problem Setter" },
  { id: 232, name: "Deepak Challa", role: "Problem Setter" },
  { id: 233, name: "Anshul Reddy", role: "Problem Setter" },
  { id: 234, name: "Angela Dutta", role: "Designer" },
  { id: 235, name: "Vanishka Karkera", role: "Designer" },
  { id: 236, name: "Harshil Andhariya", role: "Core Member" },
  { id: 237, name: "Manthan Chauhan", role: "Core Member" },
  { id: 238, name: "Govind", role: "Core Member" }
];

export default function TeamPage() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="min-h-screen pt-32 pb-24 px-4 relative overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-500">
      
      <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none flex justify-center items-center">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-100 dark:bg-blue-600/10 rounded-full blur-[150px] transition-colors duration-500"></div>
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-cyan-100 dark:bg-cyan-600/10 rounded-full blur-[150px] transition-colors duration-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <PageHeader 
          icon={Users}
          title="The Minds Behind"
          highlightText="ACM SVNIT"
          gradientFrom="blue-700"
          gradientTo="cyan-600"
          description="An archive of the brilliant student leaders, developers, and innovators who have shaped our chapter, built by Nisarg Vaghela."
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex flex-col bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[2rem] overflow-hidden transition-all duration-300 shadow-xl dark:shadow-none hover:shadow-2xl dark:hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] hover:border-blue-300 dark:hover:border-blue-500/30"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-zinc-900 border-b border-gray-200 dark:border-white/10">
                <Image 
                  src={`/team2k25/${member.id}.jpg`} 
                  alt={`${member.name} - ${member.role}`} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  loading={member.id <= 228 ? "eager" : "lazy"}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="flex flex-col items-center justify-center p-6 text-center flex-grow bg-white dark:bg-transparent">
                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest transition-colors duration-300">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}