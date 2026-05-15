"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Loader2 } from "lucide-react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase"; 
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export default function EventsPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const q = query(collection(db, "events"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const fetchedEvents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setEvents(fetchedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-black"><Loader2 className="text-blue-500 animate-spin w-10 h-10" /></div>;

  return (
    <section className="min-h-screen pt-32 pb-24 px-4 bg-gray-50 dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <PageHeader 
          icon={Calendar} 
          title="Chapter" 
          highlightText="Events" 
          gradientFrom="blue-700" 
          gradientTo="cyan-600" 
          description="Discover our latest hackathons and technical sessions conducted by the ACM Student chapter." 
        />
        
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible" 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {events.map((event) => (
            <motion.div key={event.id} variants={itemVariants} className="group relative flex flex-col bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-lg transition-all duration-300">
              <div className="relative aspect-square overflow-hidden">
                <Image src={event.image || "/placeholder.jpg"} alt={event.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">{event.title}</h3>
                <Link href={`/events/${event.id}`} className="text-blue-600 dark:text-blue-400 font-bold flex items-center gap-2 hover:underline">
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}