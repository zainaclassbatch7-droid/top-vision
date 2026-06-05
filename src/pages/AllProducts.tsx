import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import {
  ArrowLeft, ArrowRight, Send,
  Camera, Fingerprint, Users, Bell, Phone, ShieldCheck,
  MapPin, Mail, Clock,
} from 'lucide-react';
import { categories } from '@/lib/productsData';
import BrandMark from '@/components/BrandMark';
import { submitQuoteRequest } from '@/lib/quoteSubmission';

const categoryIcons = [Camera, Fingerprint, Users, Bell, Phone, ShieldCheck];

const contactInfo = [
  { icon: MapPin, label: 'Office Address', value: 'Khalid bin Al Waleed Street, Opp. AL TAZAJ, Jeddah' },
  { icon: Phone, label: 'Phone', value: '012-6570179' },
  { icon: Mail, label: 'Email', value: 'sales@topvisioncompany.com' },
  { icon: Clock, label: 'Working Hours', value: 'Saturday – Thursday: 9:00 AM – 6:00 PM' },
];

export default function AllProducts() {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      await submitQuoteRequest(formData, 'all-products-page');
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error('Quote request failed', error);
      setSubmitError('We could not send your inquiry right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A]">

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 navbar-transition navbar-scrolled">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <BrandMark
                logoClassName="h-12 sm:h-14"
                titleClassName="text-xl sm:text-2xl"
                subtitleClassName="text-[10px] sm:text-xs text-white/50 tracking-[0.18em]"
              />
            </Link>

            {/* Top nav */}
            <div className="hidden lg:flex items-center gap-1">
              <Link to="/" className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-md hover:bg-white/5">
                <ArrowLeft className="w-3.5 h-3.5" /> Home
              </Link>
            </div>


          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="pt-20 bg-[#1A1A1A] grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="red-accent-line mb-6" />
          <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#C8102E] mb-4 block">
            Complete Product Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            World-Class Security Equipment
          </h1>
          <p className="text-white/60 leading-relaxed max-w-2xl">
            We are exclusive representatives of many renowned manufacturers of CCTV &amp; security
            products from USA, UK, Korea and Taiwan, China.
          </p>
        </div>
      </section>

      {/* ── Sticky Tab Bar ── */}
      <div className="sticky top-20 z-40 bg-[#111111] border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3" style={{ scrollbarWidth: 'none' }}>
            {categories.map((cat, i) => {
              const Icon = categoryIcons[i];
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveTab(i)}
                  className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === i
                      ? 'bg-[#C8102E] text-white'
                      : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.label}
                  <span className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                    activeTab === i ? 'bg-white/20 text-white' : 'bg-white/10 text-white/40'
                  }`}>
                    {cat.products.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Products Grid ── */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="red-accent-line mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">{categories[activeTab].label}</h2>
              <p className="text-sm text-[#1A1A1A]/45 mt-1">{categories[activeTab].products.length} products in this category</p>
            </div>
            <a
              href="/#contact"
              className="btn-arrow group hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] transition-all"
            >
              Request a Quote <ArrowRight className="w-4 h-4 arrow-icon" />
            </a>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {categories[activeTab].products.map((p) => (
              <div
                key={p.img}
                className="card-hover group bg-white border border-gray-200 rounded-xl overflow-hidden hover:bg-[#C8102E] hover:border-[#C8102E] transition-all duration-300"
              >
                <div className="aspect-square bg-gray-50 group-hover:bg-[#A00D24] p-6 flex items-center justify-center overflow-hidden transition-colors duration-300">
                  <img
                    src={`/Product Images/products/${p.img}`}
                    alt={p.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 border-t border-gray-100 group-hover:border-white/20">
                  <p className="text-sm font-semibold text-[#1A1A1A] group-hover:text-white leading-tight">{p.name}</p>
                  <p className="text-xs text-[#1A1A1A]/50 group-hover:text-white/80 mt-1 leading-relaxed">{p.desc}</p>
                  <div className="mt-3 pt-3 border-t border-gray-100 group-hover:border-white/20 flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C8102E] group-hover:text-white">
                      {categories[activeTab].label}
                    </span>
                    <a href="/#contact" className="text-[11px] font-medium text-[#1A1A1A]/35 group-hover:text-white/80 transition-colors">
                      Enquire →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="py-24 bg-[#1A1A1A] grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Left */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="red-accent-line mb-6" />
                <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#C8102E] mb-4 block">Get In Touch</span>
                <h2 className="text-3xl font-bold text-white mb-4">Need help choosing<br />the right product?</h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  Our security experts will help you find the perfect solution tailored to your requirements and budget.
                </p>
              </div>
              <div className="space-y-3">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4 p-4 bg-white/[0.04] border border-white/[0.07] rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-[#C8102E]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#C8102E]" />
                    </div>
                    <div>
                      <div className="text-xs text-white/40 uppercase tracking-wider mb-1">{label}</div>
                      <div className="text-sm text-white/80">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-6 sm:p-8"
              >
                <h3 className="text-lg font-semibold text-white mb-6">Request a Consultation</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1.5">Full Name *</label>
                    <input type="text" name="name" required placeholder="Your name"
                      value={formData.name} onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white/[0.06] border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#C8102E] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1.5">Email Address *</label>
                    <input type="email" name="email" required placeholder="your@email.com"
                      value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white/[0.06] border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#C8102E] transition-colors" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1.5">Phone Number</label>
                    <input type="tel" name="phone" placeholder="+966 XX XXX XXXX"
                      value={formData.phone} onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white/[0.06] border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#C8102E] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1.5">Company Name</label>
                    <input type="text" name="company" placeholder="Your company"
                      value={formData.company} onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white/[0.06] border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#C8102E] transition-colors" />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-white/70 mb-1.5">Message *</label>
                  <textarea required rows={4} name="message" placeholder="Tell us about your security requirements..."
                    value={formData.message} onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white/[0.06] border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#C8102E] transition-colors resize-none" />
                </div>
                <button type="submit" disabled={isSubmitting}
                  className="btn-arrow group inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#A00D24] text-white font-semibold px-6 py-3 rounded-md transition-all hover:scale-[1.02] w-full sm:w-auto justify-center">
                  {isSubmitting ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Inquiry Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Inquiry
                    </>
                  )}
                </button>
                {submitError && (
                  <p className="mt-4 text-sm text-[#ff8f9f]">{submitError}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer strip ── */}
      <div className="bg-[#111111] border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center">
            <BrandMark
              className="gap-2.5"
              logoClassName="h-9 sm:h-10"
              titleClassName="text-base sm:text-lg"
              subtitleClassName="text-[9px] text-white/40 tracking-[0.16em]"
            />
          </Link>
          <p className="text-xs text-white/30">© 2026 Top Vision Security Company LLC. All Rights Reserved.</p>
          <Link to="/" className="btn-arrow group inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
        </div>
      </div>

    </div>
  );
}
