import { CircleCheckBig, ShieldCheck, Users, MapPin, Award, Camera, Lock, Zap, Globe, ArrowRight, HeartPulse, Factory, ShoppingBag, Landmark, Building2, GraduationCap } from 'lucide-react';

// ─── Tailwind note ───────────────────────────────────────────────────────────
// Light-section text uses text-[#1A1A1A] (near-black) so it's always visible.
// Dark-section text uses text-white variants.
// ─────────────────────────────────────────────────────────────────────────────

const highlights = [
  'Custom-designed security equipment nationwide',
  'Exclusive representatives of global manufacturers',
  'Full range of CCTV, access control & detection',
  'Installation, maintenance & after-sales support',
  'Serving government, commercial & residential sectors',
  'ISO-certified quality management',
];

const services = [
  { icon: Camera, title: 'CCTV & Surveillance', desc: 'IP cameras, analog systems, DVRs, NVRs and remote monitoring solutions for 24/7 coverage.' },
  { icon: Lock, title: 'Access Control', desc: 'Biometric, card-based and smart access systems tailored to any facility size or type.' },
  { icon: ShieldCheck, title: 'Intrusion & Alarms', desc: 'Motion sensors, perimeter alarms and real-time alert systems with round-the-clock monitoring.' },
  { icon: Zap, title: 'Fire & Safety', desc: 'Advanced fire detection, suppression and evacuation systems meeting all Saudi safety codes.' },
  { icon: Users, title: 'Physical Security', desc: 'Road blockers, barriers, bollards, turnstiles and smart perimeter lighting solutions.' },
  { icon: Globe, title: 'Consultancy', desc: 'Expert security assessments, risk analysis and fully tailored system design for your facility.' },
];

const clientCategories = [
  { title: 'Healthcare', icon: HeartPulse, clients: ['Jeddah National Hospital', 'Jeddah Kandrah Clinic', 'Al Abeer Medical Center'] },
  { title: 'Industrial', icon: Factory, clients: ['PETROMIN Corporation', 'United Gulf Factory', 'National Aquaculture'] },
  { title: 'Retail', icon: ShoppingBag, clients: ['Manuel Super Market', 'Rubaiyat', 'Boucheron Jewellery'] },
  { title: 'Government', icon: Landmark, clients: ['Civil Defense Jeddah', 'North Police Station', 'Holy Quran Memorization Org'] },
  { title: 'Corporate', icon: Building2, clients: ['Aramex', 'ABB', 'Mövenpick Resorts', 'Binladin Group'] },
  { title: 'Education', icon: GraduationCap, clients: ['King Abdulaziz University', 'Dar Al Fikr Schools', 'Jeddah International School'] },
];

const regions = [
  { city: 'Jeddah', role: 'Main Office', isHQ: true },
];

const processSteps = [
  { n: '01', label: 'Site Survey', desc: 'Free on-site security assessment and full threat analysis by our certified engineers.' },
  { n: '02', label: 'Custom Design', desc: 'A tailored system architecture built precisely around your site and security goals.' },
  { n: '03', label: 'Installation', desc: 'Professional deployment by certified engineers with zero disruption to operations.' },
  { n: '04', label: '24/7 Support', desc: 'Ongoing after-sales maintenance, remote monitoring and emergency response.' },
];

export default function About() {
  return (
    <>
      {/* ── 1. WHO WE ARE ── */}
      <section id="who-we-are" className="relative py-20 bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[clamp(6rem,16vw,12rem)] font-black text-white/[0.025] select-none pointer-events-none leading-none tracking-tighter">01</span>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-14 bg-[#C8102E]" />
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#C8102E]">Who We Are</span>
              <div className="h-px w-14 bg-[#C8102E]" />
            </div>
            <h2 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight">
              Saudi Arabia's Most <span className="red-gradient-text">Trusted</span> Security Partner
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal-left relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src="/about-security.jpg" alt="Top Vision Security" className="w-full h-[520px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111]/90 via-[#111]/20 to-transparent" />
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#C8102E] via-[#C8102E]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid grid-cols-3 gap-3">
                    {[{ value: 11, suffix: '+', label: 'Years Experience' }, { value: 750, suffix: '+', label: 'Projects Done' }, { value: 500, suffix: '+', label: 'Satisfied Clients' }].map(({ value, suffix, label }) => (
                      <div key={label} className="bg-black/65 backdrop-blur-md rounded-2xl p-4 text-center border border-white/10">
                        <div className="text-3xl font-black text-white scroll-reveal" data-count={value} data-suffix={suffix}>{value}{suffix}</div>
                        <div className="text-xs uppercase tracking-widest text-white/55 mt-1">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            <div className="scroll-reveal-right space-y-6">
              <p className="text-lg text-white/75 leading-relaxed">
                Top Vision Security Company LLC is a nationally recognized leader in custom-designed security solutions. Founded in 2015, we have grown into a full-spectrum security integrator — committed to innovation, technical excellence, and exceeding client expectations across every sector of Saudi society.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {highlights.map((item, i) => (
                  <div key={item} className="scroll-reveal flex items-start gap-3 p-4 rounded-xl border border-white/[0.07] bg-white/[0.03] hover:border-[#C8102E]/35 hover:bg-white/[0.05] transition-all duration-300" data-delay={i * 70}>
                    <CircleCheckBig className="w-5 h-5 text-[#C8102E] mt-0.5 flex-shrink-0" />
                    <span className="text-base text-white/80">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {['SASO Certified', 'MOMRA Approved', 'ISO 9001', 'Est. 2015'].map((c) => (
                  <span key={c} className="text-sm border border-[#C8102E]/25 text-[#C8102E] px-4 py-2 rounded-full bg-[#C8102E]/8 font-semibold">{c}</span>
                ))}
              </div>
              <a href="#contact" className="btn-arrow btn-primary inline-flex group">
                Get a Free Consultation <ArrowRight className="w-4 h-4 arrow-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT WE DO ── */}
      <section id="what-we-do" className="relative py-20 bg-[#f7f7f7] overflow-hidden">
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[clamp(6rem,16vw,12rem)] font-black text-black/[0.04] select-none pointer-events-none leading-none tracking-tighter">02</span>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-14 bg-[#C8102E]" />
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#C8102E]">What We Do</span>
              <div className="h-px w-14 bg-[#C8102E]" />
            </div>
            <h2 className="text-5xl sm:text-6xl font-extrabold text-[#1A1A1A] mb-4">Our Security Services</h2>
            <p className="text-lg text-[#1A1A1A]/70 max-w-2xl mx-auto leading-relaxed">
              End-to-end security solutions — from consultation and design through to professional installation and ongoing round-the-clock support.
            </p>
          </div>

          {/* Services — 3×2 grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="scroll-reveal group bg-white rounded-2xl p-7 border border-gray-200 hover:border-[#C8102E]/30 hover:shadow-xl transition-all duration-400 relative overflow-hidden" data-delay={i * 80}>
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C8102E] to-[#ff3352] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                <div className="w-14 h-14 bg-[#C8102E]/8 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#C8102E] group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-[#C8102E] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-[#1A1A1A] font-bold text-lg mb-3">{title}</h3>
                <p className="text-[#1A1A1A]/65 text-base leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Image + Process steps */}
          <div className="grid lg:grid-cols-5 gap-6 items-stretch">
            <div className="scroll-reveal-left lg:col-span-2 relative rounded-3xl overflow-hidden min-h-[280px] group shadow-lg">
              <img src="/asset_7.jpg" alt="Security services" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#111]/88 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center p-10">
                <div className="text-6xl font-black text-white leading-none mb-2">9</div>
                <div className="text-white/75 text-base mb-7">Security service categories</div>
                <div className="text-6xl font-black text-white leading-none mb-2">100%</div>
                <div className="text-white/75 text-base">Saudi Arabia focused</div>
              </div>
            </div>
            <div className="scroll-reveal-right lg:col-span-3 grid grid-cols-2 gap-4">
              {processSteps.map(({ n, label, desc }, i) => (
                <div key={n} className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#C8102E]/30 hover:shadow-lg transition-all duration-300" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="text-4xl font-black text-[#C8102E]/40 group-hover:text-[#C8102E]/70 transition-colors mb-4 leading-none">{n}</div>
                  <h4 className="text-[#1A1A1A] font-bold text-base mb-2">{label}</h4>
                  <p className="text-[#1A1A1A]/65 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHOM WE SERVE ── */}
      <section id="whom-we-serve" className="relative py-20 bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[clamp(6rem,16vw,12rem)] font-black text-white/[0.025] select-none pointer-events-none leading-none tracking-tighter">03</span>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-14 bg-[#C8102E]" />
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#C8102E]">Whom We Serve</span>
              <div className="h-px w-14 bg-[#C8102E]" />
            </div>
            <h2 className="text-5xl sm:text-6xl font-extrabold text-white mb-4">Industries We Serve</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Serving a diverse range of clients across Saudi Arabia — from government institutions to retail chains, healthcare facilities and universities.
            </p>
          </div>

          {/* Stats bar */}
          <div className="scroll-reveal grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[{ value: 500, suffix: '+', label: 'Satisfied Clients' }, { value: 500, suffix: '+', label: 'Projects Completed' }, { value: 11, suffix: '+', label: 'Years Experience' }, { value: 15, suffix: '+', label: 'Industry Sectors' }].map(({ value, suffix, label }, i) => (
              <div key={label} className="glass-dark rounded-2xl py-8 px-5 text-center hover:border-[#C8102E]/25 transition-colors" data-delay={i * 80}>
                <div className="text-4xl font-black text-white mb-2 scroll-reveal" data-count={value} data-suffix={suffix}>{value}{suffix}</div>
                <div className="text-sm text-white/65 uppercase tracking-wider font-medium">{label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {clientCategories.map(({ title, icon: Icon, clients }, i) => (
                <div key={title} className="scroll-reveal glass-dark rounded-2xl p-6 group hover:border-[#C8102E]/30 transition-all duration-300" data-delay={i * 70}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#C8102E]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8102E]/20 transition-colors">
                      <Icon className="w-4 h-4 text-[#C8102E]" />
                    </div>
                    <span className="text-white font-bold text-lg">{title}</span>
                    <div className="ml-auto w-1.5 h-7 rounded-full bg-[#C8102E]/25 group-hover:bg-[#C8102E] transition-colors" />
                  </div>
                  <ul className="space-y-2.5">
                    {clients.map((c) => (
                      <li key={c} className="flex items-center gap-2.5 text-sm text-white/65 group-hover:text-white/85 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]/50 flex-shrink-0" />{c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="scroll-reveal-right space-y-5">
              <div className="relative rounded-3xl overflow-hidden h-72 shadow-2xl">
                <iframe
                  title="Top Vision Saudi Arabia"
                  src="https://maps.google.com/maps?q=21.523639,39.185417&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full rounded-3xl"
                />
                <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                  <p className="text-white font-bold text-base leading-snug drop-shadow">Trusted by 500+ organizations across Saudi Arabia</p>
                  <a href="#contact" className="btn-arrow inline-flex items-center gap-1.5 text-[#C8102E] text-sm font-semibold mt-2 pointer-events-auto">Work with us <ArrowRight className="w-3.5 h-3.5 arrow-icon" /></a>
                </div>
              </div>
              <div className="glass-dark rounded-2xl p-6">
                <p className="text-xs uppercase tracking-widest text-white/35 font-bold mb-4">Recognized by</p>
                <div className="flex flex-wrap gap-2">
                  {['SASO Certified', 'MOMRA Approved', 'ISO 9001', 'GSOC Member'].map((c) => (
                    <span key={c} className="text-sm border border-[#C8102E]/20 text-[#C8102E] px-3 py-1.5 rounded-full bg-[#C8102E]/8 font-medium">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHERE WE SERVE ── */}
      <section id="where-we-serve" className="relative py-20 bg-[#f7f7f7] overflow-hidden">
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[clamp(6rem,16vw,12rem)] font-black text-black/[0.04] select-none pointer-events-none leading-none tracking-tighter">04</span>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-14 bg-[#C8102E]" />
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#C8102E]">Where We Serve</span>
              <div className="h-px w-14 bg-[#C8102E]" />
            </div>
            <h2 className="text-5xl sm:text-6xl font-extrabold text-[#1A1A1A] mb-4">Based in Jeddah</h2>
            <p className="text-lg text-[#1A1A1A]/70 max-w-2xl mx-auto leading-relaxed">
              Our office is located in Jeddah, Saudi Arabia — serving clients across the Kingdom from a single, dedicated headquarters.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="scroll-reveal-left space-y-5">
              <div className="relative rounded-3xl overflow-hidden h-80 shadow-xl">
                <iframe
                  title="Top Vision HQ"
                  src="https://maps.google.com/maps?q=21.523639,39.185417&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full rounded-3xl"
                />
                <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                  <div className="flex gap-3">
                    {[['1', 'Office'], ['11+', 'Years'], ['48h', 'Response']].map(([val, label]) => (
                      <div key={label} className="flex-1 bg-black/65 backdrop-blur-md rounded-xl px-3 py-3.5 text-center border border-white/10">
                        <div className="text-xl font-black text-white">{val}</div>
                        <div className="text-xs text-white/75 mt-0.5">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#C8102E]/15 rounded-2xl p-6 flex items-center gap-5 hover:border-[#C8102E]/35 hover:shadow-md transition-all duration-300 group">
                <div className="w-14 h-14 bg-[#C8102E]/8 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8102E] transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-[#C8102E] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-[#1A1A1A] font-bold text-base mb-1">Khalid bin Al Waleed Street, Jeddah</div>
                  <div className="text-[#1A1A1A]/65 text-sm leading-relaxed">Opp. AL TAZAJ, Jeddah, Saudi Arabia</div>
                </div>
              </div>
            </div>

            <div className="scroll-reveal-right space-y-4">
              <p className="text-xs uppercase tracking-widest text-[#1A1A1A]/35 font-bold mb-3">Our Office</p>
              <div className="grid grid-cols-2 gap-3">
                {regions.map(({ city, role, isHQ }, i) => (
                  <div key={city} className={`group bg-white rounded-2xl p-5 border transition-all duration-300 hover:shadow-lg ${isHQ ? 'border-[#C8102E]/30 bg-[#C8102E]/[0.015]' : 'border-gray-200 hover:border-[#C8102E]/25'}`} style={{ transitionDelay: `${i * 60}ms` }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#C8102E]" />
                        <span className="text-[#1A1A1A] font-bold text-base">{city}</span>
                      </div>
                      {isHQ && (
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping-dot absolute inline-flex h-full w-full rounded-full bg-[#C8102E] opacity-75" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C8102E]" />
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-[#C8102E] font-bold tracking-wide">{role}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 mt-2">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#C8102E]/8 rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#C8102E]" />
                  </div>
                  <span className="text-[#1A1A1A] font-bold text-base">Our Certifications</span>

                </div>
                <div className="flex flex-wrap gap-2">
                  {['SASO Certified', 'MOMRA Approved', 'ISO 9001', 'GSOC Member'].map((c) => (
                    <span key={c} className="text-sm border border-[#C8102E]/20 text-[#C8102E] px-4 py-2 rounded-full bg-[#C8102E]/[0.04] hover:bg-[#C8102E]/[0.1] transition-colors font-medium">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
