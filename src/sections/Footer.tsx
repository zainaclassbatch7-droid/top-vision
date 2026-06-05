import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const quickLinks = [
  { label: 'About Us', href: '#who-we-are' },
  { label: 'Services', href: '#what-we-do' },
  { label: 'Products', href: '#products' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  { label: 'CCTV Systems', href: '#what-we-do' },
  { label: 'Access Control', href: '#what-we-do' },
  { label: 'Burglar Alarms', href: '#what-we-do' },
  { label: 'Metal Detection', href: '#what-we-do' },
  { label: 'Video Intercom', href: '#what-we-do' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: '#',
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <footer className="relative bg-[#0d0d0d] overflow-hidden">
        {/* Red gradient top border */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C8102E] to-transparent" />

        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#C8102E]/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* ── Brand ── */}
            <div className="scroll-reveal">
              <a href="#" className="flex items-center gap-3 mb-5 group">
                <img
                  src="/logo-new.png"
                  alt="Top Vision Security"
                  className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                    img.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                {/* Text fallback */}
                <div className="hidden flex-col">
                  <span className="text-lg font-extrabold tracking-tight leading-none">
                    <span className="text-[#C8102E]">TOP</span>
                    <span className="text-white">VISION</span>
                  </span>
                  <span className="text-[9px] text-white/50 tracking-[0.15em] uppercase leading-none mt-0.5">
                    Security Company LLC
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-extrabold tracking-tight leading-none">
                    <span className="text-[#C8102E]">TOP</span>
                    <span className="text-white">VISION</span>
                  </span>
                  <span className="text-[9px] text-white/40 tracking-[0.15em] uppercase leading-none mt-0.5">
                    Security Company LLC
                  </span>
                </div>
              </a>
              <p className="text-sm text-white/40 leading-relaxed mb-6">
                Committed towards innovation and technical excellence. Provider of
                custom-designed security equipment and consultancy services in Jeddah,
                Saudi Arabia.
              </p>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full glass-dark flex items-center justify-center text-white/35 hover:text-white hover:bg-[#C8102E] hover:scale-110 transition-all duration-300"
                  >
                    {social.svg}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Quick Links ── */}
            <div className="scroll-reveal" data-delay="100">
              <h4 className="text-xs font-bold text-white uppercase tracking-[0.12em] mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-white/40 hover:text-[#C8102E] transition-colors group"
                    >
                      <span className="w-0 h-px bg-[#C8102E] transition-all duration-300 group-hover:w-3" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Services ── */}
            <div className="scroll-reveal" data-delay="200">
              <h4 className="text-xs font-bold text-white uppercase tracking-[0.12em] mb-6">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <a
                      href={service.href}
                      className="flex items-center gap-2 text-sm text-white/40 hover:text-[#C8102E] transition-colors group"
                    >
                      <span className="w-0 h-px bg-[#C8102E] transition-all duration-300 group-hover:w-3" />
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Contact ── */}
            <div className="scroll-reveal" data-delay="300">
              <h4 className="text-xs font-bold text-white uppercase tracking-[0.12em] mb-6">
                Get In Touch
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C8102E]/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                  </div>
                  <span className="text-sm text-white/40 leading-relaxed">
                    Khalid bin Al Waleed Street, Opp. AL TAZAJ, Jeddah
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C8102E]/8 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-3.5 h-3.5 text-[#C8102E]" />
                  </div>
                  <span className="text-sm text-white/40">+966 55 777 0791</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C8102E]/8 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-3.5 h-3.5 text-[#C8102E]" />
                  </div>
                  <a href="mailto:sales@topvisioncompany.com" className="text-sm text-white/40 hover:text-[#C8102E] transition-colors">
                    sales@topvisioncompany.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="border-t border-white/[0.06] pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/25">
              © 2026 Top Vision Security Company LLC. All Rights Reserved.
            </p>
            <div className="flex items-center gap-5 text-xs text-white/25">
              <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
              <span className="opacity-30">|</span>
              <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Back to Top Button ── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-2xl bg-[#C8102E] text-white flex items-center justify-center shadow-lg shadow-[#C8102E]/30 transition-all duration-400 hover:scale-110 hover:shadow-[#C8102E]/50 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
}
