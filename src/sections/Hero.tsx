import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const CYCLING_WORDS = ['Precision', 'Excellence', 'Innovation', 'Reliability'];

const floatingStats = [
  { value: '11+', label: 'Years of Experience' },
  { value: '750+', label: 'Projects Completed' },
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % CYCLING_WORDS.length);
        setFade(true);
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Video Background ── */}
      <div className="absolute inset-0 overflow-hidden bg-[#0d0d0d]">
        {/* 
          Place your video at: public/hero.mp4
          Download from: https://www.pexels.com/video/cctv-cameras-mounted-on-a-wall-7562447/
          Rename the file to hero.mp4 and drop it in the public/ folder.
          The poster image will show as fallback until the video loads.
        */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          poster="/hero-security.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Multi-layer gradient overlays for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/98 via-[#1A1A1A]/92 to-[#1A1A1A]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/50 via-transparent to-transparent" />
        {/* Subtle red radial tint */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(200,16,46,0.08)_0%,transparent_55%)]" />
      </div>

      {/* ── Decorative dot pattern ── */}
      <div className="absolute inset-0 dot-pattern opacity-25 pointer-events-none" />

      {/* ── Decorative vertical lines ── */}
      <div className="absolute top-1/3 right-[8%] w-px h-40 bg-gradient-to-b from-transparent via-[#C8102E]/30 to-transparent opacity-0 animate-fade-in-up delay-700 pointer-events-none" />
      <div className="absolute top-1/2 right-[16%] w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-0 animate-fade-in-up delay-800 pointer-events-none" />

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Copy */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-dark px-4 py-2 rounded-full mb-8 opacity-0 animate-fade-in-down delay-100">
              <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-ping-dot" />
              <span className="text-xs font-semibold tracking-widest uppercase text-white/70">
                Saudi Arabia's Trusted Security Partner
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6 opacity-0 animate-fade-in-up delay-200">
              <span className="block">Securing Your World</span>
              <span className="block whitespace-nowrap">
                with{' '}
                <span
                  className="text-[#C8102E] inline-block transition-all duration-300"
                  style={{
                    opacity: fade ? 1 : 0,
                    transform: fade ? 'translateY(0)' : 'translateY(-10px)',
                  }}
                >
                  {CYCLING_WORDS[wordIndex]}
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-10 max-w-lg opacity-0 animate-fade-in-up delay-300 drop-shadow-md">
              Top Vision Security Company LLC is a nationally recognized provider of
              custom-designed security equipment and consultancy services. Committed
              towards innovation and technical excellence.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-14 opacity-0 animate-fade-in-up delay-400">
              <a href="#what-we-do" className="btn-arrow btn-primary group">
                Explore Our Services
                <ArrowRight className="w-4 h-4 arrow-icon" />
              </a>
              <a href="#who-we-are" className="btn-arrow btn-outline group">
                Learn More
                <ArrowRight className="w-4 h-4 arrow-icon" />
              </a>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-8 opacity-0 animate-fade-in-up delay-500">
              {floatingStats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                    <div className="text-[10px] text-white/45 mt-0.5 whitespace-nowrap">{stat.label}</div>
                  </div>
                  {i < floatingStats.length - 1 && (
                    <div className="w-px h-8 bg-white/10" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Floating glass stat cards */}
          <div className="hidden lg:flex flex-col gap-5 items-end opacity-0 animate-fade-in-right delay-500">
            {[
              { n: '500+', label: 'Satisfied Clients', delay: 0 },
              { n: 'ISO 9001', label: 'Certified Quality', delay: 1.5 },
              { n: '#1', label: 'In Saudi Arabia', delay: 3 },
            ].map((card) => (
              <div
                key={card.label}
                className="glass-dark rounded-2xl px-8 py-5 text-center min-w-[170px] animate-float border border-white/[0.07] hover:border-[#C8102E]/35 transition-colors duration-500 cursor-default"
                style={{ animationDelay: `${card.delay}s` }}
              >
                <div className="text-2xl font-extrabold text-white">{card.n}</div>
                <div className="text-xs text-white/50 mt-1">{card.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll Down Indicator ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in-up delay-700">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/40">Scroll</span>
        <div className="animate-bounce-down">
          <ChevronDown className="w-5 h-5 text-[#C8102E]" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 gradient-bottom pointer-events-none" />
    </section>
  );
}
