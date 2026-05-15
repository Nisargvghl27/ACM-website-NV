"use client";

import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Heart,
  ArrowRight
} from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2.5 7.1C2.1 8.4 2 10.2 2 12s.1 3.6.5 4.9c.4 1.5 1.7 2.6 3.2 2.9 2.1.3 6.3.3 6.3.3s4.2 0 6.3-.3c1.5-.3 2.8-1.4 3.2-2.9.4-1.3.5-3.1.5-4.9s-.1-3.6-.5-4.9C21.1 5.6 19.8 4.5 18.3 4.2 16.2 3.9 12 3.9 12 3.9s-4.2 0-6.3.3C4.2 4.5 2.9 5.6 2.5 7.1z" /><polygon points="10 15 15 12 10 9 10 15" /></svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: GithubIcon, href: "https://github.com/acm-svnit" },
    { name: "LinkedIn", icon: LinkedinIcon, href: "https://www.linkedin.com/company/acmnitsurat/posts/?feedView=all" },
    { name: "Twitter", icon: TwitterIcon, href: "https://x.com/acmnitsurat" },
    { name: "Facebook", icon: FacebookIcon, href: "https://www.facebook.com/acmnitsurat" },
    { name: "YouTube", icon: YoutubeIcon, href: "https://www.youtube.com/c/acmnitsurat" },
  ];

  // Blog removed here
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-white/10 pt-20 pb-10 transition-colors duration-500 overflow-hidden relative">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-24 bg-blue-500/5 dark:bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-gray-900 dark:text-white font-extrabold text-3xl tracking-tighter transition-colors">
                ACM<span className="text-blue-600 dark:text-blue-500">SVNIT</span>
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pr-4 transition-colors">
              ACM NIT-Surat is a student chapter highly focused on planning and organising events for coding, development, and design. Bridging the gap between theory and industry practice since 2005.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {socialLinks.map((social) => (
                <Link 
                  key={social.name} 
                  href={social.href}
                  aria-label={`Visit our ${social.name}`}
                  className="p-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:border-blue-200 dark:hover:border-white/30 hover:bg-blue-50 dark:hover:bg-white/10 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 lg:ml-auto">
            <h3 className="text-gray-900 dark:text-white font-bold uppercase tracking-widest text-sm mb-6 transition-colors">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white text-sm font-medium transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-600 dark:text-blue-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 lg:ml-auto space-y-6">
            <h3 className="text-gray-900 dark:text-white font-bold uppercase tracking-widest text-sm mb-6 transition-colors">Contact Us</h3>
            
            <div className="space-y-4">
              <a href="mailto:acm@svnit.ac.in" className="flex items-start group">
                <div className="p-2 bg-blue-50 dark:bg-blue-500/10 rounded-lg mr-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-gray-200 text-sm font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">acm@svnit.ac.in</p>
                </div>
              </a>

              <a href="tel:+917977579577" className="flex items-start group">
                <div className="p-2 bg-cyan-50 dark:bg-cyan-500/10 rounded-lg mr-4 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-gray-200 text-sm font-medium group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">+91 79775 79577</p>
                </div>
              </a>

              <div className="flex items-start group cursor-default">
                <div className="p-2 bg-purple-50 dark:bg-purple-500/10 rounded-lg mr-4 transition-colors">
                  <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors">
                    SVNIT, Ichchhanth<br />
                    Surat, Gujarat 395 007
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-white/5 mt-6">
              <p className="text-gray-500 dark:text-gray-500 text-sm italic">
                "Learning never exhausts the mind."
              </p>
              <p className="text-gray-400 dark:text-gray-600 text-xs mt-2 font-bold uppercase tracking-widest">
                - Leonardo Da Vinci
              </p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors">
          <p className="text-gray-500 dark:text-gray-500 text-xs font-bold tracking-widest uppercase text-center md:text-left">
            © {currentYear} ACM NIT Surat Student Chapter.
          </p>
          <p className="flex items-center text-gray-500 dark:text-gray-500 text-xs font-bold tracking-widest uppercase text-center md:text-right">
            Made with <Heart className="w-3 h-3 text-red-500 mx-1 fill-red-500 animate-pulse" /> by ACM Core Team
          </p>
        </div>
      </div>
    </footer>
  );
}