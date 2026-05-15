"use client";

import { useState, useEffect } from "react";
import { auth, db } from "@/lib/firebase"; 
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { motion } from "framer-motion";
import { LayoutDashboard, PlusCircle, Loader2, Trash2, List } from "lucide-react";
import Image from "next/image";

export default function AdminPanel() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  
  // Login State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Events State
  const [events, setEvents] = useState<any[]>([]);
  const [fetchingEvents, setFetchingEvents] = useState(true);

  // Form State
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [gallery, setGallery] = useState("");

  // Fetch Existing Events
  const fetchEvents = async () => {
    setFetchingEvents(true);
    try {
      const q = query(collection(db, "events"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const fetchedEvents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(fetchedEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setFetchingEvents(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        fetchEvents(); // Fetch events only if logged in
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      console.error("Login Error:", error);
      setLoginError("Invalid email or password. Please try again.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    try {
      const galleryArray = gallery.split(",").map(url => url.trim()).filter(url => url !== "");
      await addDoc(collection(db, "events"), {
        title,
        date,
        description,
        image: imageUrl || "/placeholder.jpg",
        gallery: galleryArray,
        createdAt: new Date()
      });
      alert("Event Added Successfully!");
      setTitle(""); setDate(""); setDescription(""); setImageUrl(""); setGallery("");
      fetchEvents(); // Refresh the list after adding
    } catch (error) {
      console.error(error);
      alert("Error adding event");
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteEvent = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this event? This cannot be undone.")) return;
    
    try {
      await deleteDoc(doc(db, "events", id));
      setEvents(events.filter(event => event.id !== id)); // Remove from UI instantly
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("Failed to delete event.");
    }
  };

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-white"><Loader2 className="animate-spin text-blue-500 w-10 h-10" /></div>;

  // Show Login Form if not authenticated
  if (!user) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-black transition-colors duration-500">
        
        {/* Background Ambient Glow */}
        <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none flex justify-center items-center">
          <div className="absolute w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[120px]"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="w-full max-w-md p-8 sm:p-10 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[2.5rem] shadow-2xl backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400"></div>
          
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center">
              <LayoutDashboard className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2 text-center tracking-tight">Admin Login</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-8">Enter your credentials to access the dashboard</p>

          {loginError && (
            <div className="mb-6 p-3 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm text-center rounded-xl font-medium">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="email" 
              placeholder="Admin Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full p-4 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all" 
              required 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full p-4 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all" 
              required 
            />
            
            <button 
              type="submit" 
              disabled={isLoggingIn} 
              className="w-full mt-4 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest rounded-xl flex justify-center items-center transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] disabled:opacity-50"
            >
              {isLoggingIn ? <Loader2 className="animate-spin h-5 w-5" /> : "Sign In"}
            </button>
          </form>
        </motion.div>
      </section>
    );
  }

  // Render Dashboard if authenticated
  return (
    <section className="min-h-screen pt-32 pb-24 px-4 bg-gray-50 dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tighter flex items-center gap-3">
            <LayoutDashboard className="text-blue-600 dark:text-blue-500" /> Admin Dashboard
          </h1>
          <button 
            onClick={() => signOut(auth)} 
            className="text-red-500 font-bold border border-red-500/20 px-6 py-2 rounded-full hover:bg-red-500 hover:text-white transition-all shadow-sm"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT SIDE: Add New Event Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-5 p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[2.5rem] shadow-xl dark:shadow-2xl h-fit">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <PlusCircle className="text-blue-600 dark:text-blue-500" /> Add New Event
            </h2>
            <form onSubmit={handleAddEvent} className="space-y-4">
              <input type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-4 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all" required />
              <input type="text" placeholder="Date (e.g., 18th Feb 2023)" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-4 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all" />
              <textarea placeholder="Event Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-4 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all h-32 resize-none" />
              <input type="text" placeholder="Main Card Image URL (Cloudinary)" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="w-full p-4 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all" />
              <textarea placeholder="Gallery URLs (Comma separated)" value={gallery} onChange={(e) => setGallery(e.target.value)} className="w-full p-4 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all resize-none" />
              
              <button disabled={uploading} className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest rounded-xl flex justify-center items-center transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] disabled:opacity-50">
                {uploading ? <Loader2 className="animate-spin h-5 w-5" /> : "Publish Event"}
              </button>
            </form>
          </motion.div>

          {/* RIGHT SIDE: Manage Existing Events */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-7 p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[2.5rem] shadow-xl dark:shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <List className="text-cyan-600 dark:text-cyan-400" /> Manage Events
            </h2>
            
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {fetchingEvents ? (
                <div className="flex justify-center py-10"><Loader2 className="animate-spin text-blue-500 w-8 h-8" /></div>
              ) : events.length === 0 ? (
                <div className="text-center py-10 text-gray-500 dark:text-gray-400 font-medium bg-gray-50 dark:bg-white/5 rounded-2xl border border-dashed border-gray-300 dark:border-white/20">
                  No events found. Add your first event!
                </div>
              ) : (
                events.map((event) => (
                  <div key={event.id} className="group flex items-center justify-between p-4 bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-2xl hover:border-blue-300 dark:hover:border-blue-500/50 transition-all">
                    
                    <div className="flex items-center gap-4 overflow-hidden">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-gray-200 dark:bg-zinc-800">
                        <Image src={event.image || "/placeholder.jpg"} alt={event.title} fill className="object-cover" />
                      </div>
                      <div className="truncate">
                        <h3 className="font-bold text-gray-900 dark:text-white truncate text-lg">{event.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{event.date || "No date set"}</p>
                      </div>
                    </div>

                    <button 
                      onClick={() => handleDeleteEvent(event.id)}
                      className="p-3 text-gray-400 hover:text-white hover:bg-red-500 rounded-xl transition-all ml-4 shrink-0 shadow-sm"
                      title="Delete Event"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                    
                  </div>
                ))
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}