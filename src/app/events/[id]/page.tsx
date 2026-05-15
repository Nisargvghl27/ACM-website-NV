"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar as CalIcon, Info, Image as ImageIcon, ArrowLeft } from "lucide-react";
import Link from "next/link";

const db = getFirestore();

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      const docRef = doc(db, "events", id as string);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) setEvent(docSnap.data());
      setLoading(false);
    };
    fetchEvent();
  }, [id]);

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>;
  if (!event) return <div className="min-h-screen bg-black flex items-center justify-center text-white">Event Not Found</div>;

  return (
    <section className="min-h-screen pt-32 pb-24 px-4 bg-gray-50 dark:bg-black">
      <div className="max-w-5xl mx-auto">
        <Link href="/events" className="inline-flex items-center gap-2 text-blue-500 font-bold mb-8 hover:-translate-x-1 transition-transform"><ArrowLeft size={18} /> Back to Events</Link>
        
        <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tighter">{event.title}</h1>
        
        {event.date && (
          <div className="flex items-center gap-3 text-blue-400 font-bold mb-10 bg-blue-500/10 w-fit px-4 py-2 rounded-full">
            <CalIcon size={18} /> Date: {event.date}
          </div>
        )}

        {event.description && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><Info className="text-blue-500" /> About the event</h2>
            <p className="text-gray-400 text-lg leading-relaxed bg-white/5 p-8 rounded-[2rem] border border-white/10">{event.description}</p>
          </div>
        )}

        {event.gallery && event.gallery.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><ImageIcon className="text-blue-500" /> Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {event.gallery.map((img: string, idx: number) => (
                <motion.div key={idx} whileHover={{ scale: 1.02 }} className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                  <Image src={img} alt={`Gallery ${idx}`} fill className="object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}