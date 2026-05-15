"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Loader2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { db } from "@/lib/firebase"; 
import { collection, addDoc } from "firebase/firestore";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" });

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Save to Firestore (Your existing logic)
      await addDoc(collection(db, "contact_inquiries"), {
        ...formData,
        submittedAt: new Date(),
      });

      // 2. Call the Email API
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent! Check your email for confirmation.");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        const errorData = await res.json();
        alert(`Email failed to send: ${errorData.error}`);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-24 px-4 relative overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-500">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none flex justify-center items-center">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-100 dark:bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-100 dark:bg-cyan-600/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader 
          icon={MessageSquare} 
          title="Get In" 
          highlightText="Touch" 
          gradientFrom="blue-700" 
          gradientTo="cyan-600" 
          description="Drop us a message and we'll get back to you via email." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 max-w-5xl mx-auto">
          
          {/* Info Cards */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="lg:col-span-5 flex flex-col gap-6">
            <div className="group p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Us</h3>
              <a href="mailto:acm@svnit.ac.in" className="text-blue-600 dark:text-blue-400 font-bold hover:underline transition-all">acm@svnit.ac.in</a>
            </div>

            <div className="group p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-50 dark:bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Contact Us</h3>
              <a href="tel:+917977579577" className="text-cyan-600 dark:text-cyan-400 font-bold hover:underline transition-all">+91 79775 79577</a>
            </div>

            <div className="group p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-50 dark:bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Visit Us</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                National Institute of Technology<br/>
                SVNIT, Ichchhanth<br/>
                Surat, Gujarat 395 007
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible" className="lg:col-span-7">
            <form onSubmit={handleSubmit} suppressHydrationWarning className="p-8 md:p-12 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[2.5rem] shadow-xl backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-50"></div>

              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-8">Send a Message</h3>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">First Name</label>
                    <input 
                      suppressHydrationWarning
                      type="text" 
                      required 
                      value={formData.firstName} 
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})} 
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500/50 transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Last Name</label>
                    <input 
                      suppressHydrationWarning
                      type="text" 
                      required 
                      value={formData.lastName} 
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})} 
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500/50 transition-all" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Email Address</label>
                  <input 
                    suppressHydrationWarning
                    type="email" 
                    required 
                    value={formData.email} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})} 
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500/50 transition-all" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Your Message</label>
                  <textarea 
                    suppressHydrationWarning
                    rows={5} 
                    required 
                    value={formData.message} 
                    onChange={(e) => setFormData({...formData, message: e.target.value})} 
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none" 
                  />
                </div>

                <button 
                  suppressHydrationWarning
                  type="submit" 
                  disabled={loading} 
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest rounded-xl transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] disabled:opacity-50"
                >
                  {loading ? <Loader2 className="animate-spin h-5 w-5" /> : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}