"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="min-h-screen pt-32 pb-24 px-4 relative overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-500">
      
      <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-100 dark:bg-blue-600/10 rounded-full blur-[150px] transition-colors"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-100 dark:bg-cyan-500/10 rounded-full blur-[120px] transition-colors"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] transition-colors"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <PageHeader 
          icon={MessageSquare}
          title="Get in"
          highlightText="Touch"
          gradientFrom="blue-700"
          gradientTo="cyan-600"
          description="Whether you want to collaborate on a project, host an event, or just say hello, our inbox is always open."
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          
          <motion.div variants={itemVariants} className="space-y-10">
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[2.5rem] p-10 backdrop-blur-sm shadow-xl dark:shadow-2xl relative overflow-hidden transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-50"></div>
              
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl group-hover:bg-blue-50 dark:group-hover:bg-blue-600/20 transition-colors">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-6">
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1 transition-colors">Email Us</p>
                    <p className="text-lg text-gray-800 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-white transition-colors">acm@svnit.ac.in</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl group-hover:bg-cyan-50 dark:group-hover:bg-cyan-600/20 transition-colors">
                    <Phone className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div className="ml-6">
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1 transition-colors">Call Us</p>
                    <p className="text-lg text-gray-800 dark:text-gray-300 font-medium group-hover:text-cyan-600 dark:group-hover:text-white transition-colors">+91 79775 79577</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl group-hover:bg-purple-50 dark:group-hover:bg-purple-600/20 transition-colors">
                    <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="ml-6">
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1 transition-colors">Visit Us</p>
                    <p className="text-lg text-gray-800 dark:text-gray-300 font-medium leading-relaxed group-hover:text-purple-600 dark:group-hover:text-white transition-colors">
                      National Institute of Technology<br />
                      Ichchhanth, Surat<br />
                      Gujarat 395007
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form onSubmit={(e) => e.preventDefault()} className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[2.5rem] p-10 backdrop-blur-sm shadow-xl dark:shadow-2xl flex flex-col space-y-6 transition-colors">
              
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-1 transition-colors">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="e.g. Nisarg Vaghela" 
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-1 transition-colors">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="student@svnit.ac.in" 
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-1 transition-colors">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  placeholder="How can we help you?" 
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  required
                />
              </div>

              <div className="space-y-2 flex-grow">
                <label htmlFor="message" className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-1 transition-colors">Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  placeholder="Write your message here..." 
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                  required
                ></textarea>
              </div>

              <motion.button 
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-5 text-sm font-bold uppercase tracking-widest text-white bg-blue-600 rounded-2xl overflow-hidden transition-all hover:scale-[1.02] shadow-lg hover:shadow-[0_10px_40px_rgba(37,99,235,0.4)] mt-4"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Send Message 
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

            </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}