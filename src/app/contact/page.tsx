"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export default function ContactPage() {
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
      
      {/* Premium Background Ambience */}
      <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none flex justify-center items-center">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-100 dark:bg-blue-600/10 rounded-full blur-[120px] transition-colors"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-100 dark:bg-cyan-600/10 rounded-full blur-[150px] transition-colors"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <PageHeader 
          icon={MessageSquare}
          title="Get In"
          highlightText="Touch"
          gradientFrom="blue-700"
          gradientTo="cyan-600"
          description="Have a question about an upcoming event, want to collaborate, or just want to say hi? Drop us a message."
        />

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            {/* LEFT SIDE: Contact Information Cards */}
            <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-6">
              
              <div className="group p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl shadow-lg dark:shadow-none transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500/50 hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">Email Us</h3>
                <a href="mailto:acm@svnit.ac.in" className="text-blue-600 dark:text-blue-400 font-bold hover:underline transition-all">acm@svnit.ac.in</a>
              </div>

              <div className="group p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl shadow-lg dark:shadow-none transition-all duration-300 hover:border-cyan-300 dark:hover:border-cyan-500/50 hover:-translate-y-1">
                <div className="w-12 h-12 bg-cyan-50 dark:bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">Contact Us</h3>
                <a href="tel:+917977579577" className="text-cyan-600 dark:text-cyan-400 font-bold hover:underline transition-all">+91 79775 79577</a>
              </div>

              <div className="group p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl shadow-lg dark:shadow-none transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-500/50 hover:-translate-y-1">
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">Visit Us</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  National Institute of Technology<br/>
                  SVNIT, Ichchhanth<br/>
                  Surat, Gujarat 395 007
                </p>
              </div>

            </motion.div>

            {/* RIGHT SIDE: Interactive Glassmorphic Form */}
            <motion.div variants={itemVariants} className="lg:col-span-7">
              {/* Added suppressHydrationWarning to tell React to ignore extension injections */}
              <form suppressHydrationWarning className="p-8 md:p-12 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[2.5rem] shadow-xl dark:shadow-2xl backdrop-blur-md relative overflow-hidden transition-colors">
                
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-50"></div>

                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-8 transition-colors">Send a Message</h3>

                <div className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-bold text-gray-700 dark:text-gray-300 transition-colors">First Name</label>
                      <input 
                        suppressHydrationWarning
                        type="text" 
                        id="firstName" 
                        placeholder="John" 
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-bold text-gray-700 dark:text-gray-300 transition-colors">Last Name</label>
                      <input 
                        suppressHydrationWarning
                        type="text" 
                        id="lastName" 
                        placeholder="Doe" 
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-700 dark:text-gray-300 transition-colors">Email Address</label>
                    <input 
                      suppressHydrationWarning
                      type="email" 
                      id="email" 
                      placeholder="john@example.com" 
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-gray-700 dark:text-gray-300 transition-colors">Your Message</label>
                    <textarea 
                      suppressHydrationWarning
                      id="message" 
                      rows={5} 
                      placeholder="How can we help you?" 
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    suppressHydrationWarning
                    type="button" 
                    className="group w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold uppercase tracking-widest rounded-xl transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_10px_40px_rgba(37,99,235,0.5)] active:scale-95"
                  >
                    Send Message 
                    <Send className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </button>

                </div>
              </form>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}