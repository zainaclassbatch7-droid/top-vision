import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { submitQuoteRequest } from '@/lib/quoteSubmission';

const contactInfo = [
  { icon: MapPin, label: 'Office Address', value: 'Khalid bin Al Waleed Street, Opp. AL TAZAJ, Jeddah' },
  { icon: Phone, label: 'Phone', value: '+966 55 777 0791' },
  { icon: Mail, label: 'Email', value: 'sales@topvisioncompany.com' },
  { icon: Clock, label: 'Working Hours', value: 'Saturday – Thursday: 9:00 AM – 6:00 PM' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      await submitQuoteRequest(formData, 'contact-section');
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
    <section id="contact" className="relative py-28 bg-[#1A1A1A] dot-pattern overflow-hidden">
      {/* Red radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C8102E]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal text-center mb-16">
          <div className="red-accent-line mx-auto mb-6" />
          <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#C8102E] mb-4 block">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-white/55 max-w-2xl mx-auto">
            Get in touch with us for consultation, site survey, and custom security solutions tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* ── Left — Contact Info ── */}
          <div className="scroll-reveal-left lg:col-span-2 space-y-5">
            <div className="mb-2">
              <h3 className="text-xl font-bold text-white mb-2">Top Vision Security Company LLC</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Committed towards innovation and technical excellence. Our determination to exceed the expectations of our clients drives us to deliver exceptional results.
              </p>
            </div>

            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex items-start gap-4 p-4 glass-dark rounded-2xl group hover:border-[#C8102E]/25 transition-all duration-300 card-hover"
              >
                <div className="w-11 h-11 rounded-xl bg-[#C8102E]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8102E]/20 group-hover:scale-110 transition-all duration-300">
                  <info.icon className="w-5 h-5 text-[#C8102E]" />
                </div>
                <div>
                  <div className="text-[10px] text-white/35 uppercase tracking-widest mb-1">{info.label}</div>
                  <div className="text-sm text-white/80 font-medium">{info.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Right — Form ── */}
          <div className="scroll-reveal-right lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass-dark rounded-3xl p-7 sm:p-10 relative overflow-hidden"
            >
              {/* Red top border accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8102E] to-transparent" />

              <h3 className="text-xl font-bold text-white mb-8">Request a Consultation</h3>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                {/* Full Name */}
                <div className="float-label-wrapper">
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className="w-full px-4 pt-7 pb-2.5 bg-white/[0.05] border border-white/10 rounded-xl text-white placeholder:text-transparent focus:outline-none focus:border-[#C8102E] transition-colors text-sm"
                  />
                  <label htmlFor="contact-name">Full Name *</label>
                </div>

                {/* Email */}
                <div className="float-label-wrapper">
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className="w-full px-4 pt-7 pb-2.5 bg-white/[0.05] border border-white/10 rounded-xl text-white placeholder:text-transparent focus:outline-none focus:border-[#C8102E] transition-colors text-sm"
                  />
                  <label htmlFor="contact-email">Email Address *</label>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                {/* Phone */}
                <div className="float-label-wrapper">
                  <input
                    type="tel"
                    name="phone"
                    id="contact-phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder=" "
                    className="w-full px-4 pt-7 pb-2.5 bg-white/[0.05] border border-white/10 rounded-xl text-white placeholder:text-transparent focus:outline-none focus:border-[#C8102E] transition-colors text-sm"
                  />
                  <label htmlFor="contact-phone">Phone Number</label>
                </div>

                {/* Company */}
                <div className="float-label-wrapper">
                  <input
                    type="text"
                    name="company"
                    id="contact-company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder=" "
                    className="w-full px-4 pt-7 pb-2.5 bg-white/[0.05] border border-white/10 rounded-xl text-white placeholder:text-transparent focus:outline-none focus:border-[#C8102E] transition-colors text-sm"
                  />
                  <label htmlFor="contact-company">Company Name</label>
                </div>
              </div>

              {/* Message */}
              <div className="float-label-wrapper mb-8">
                <textarea
                  name="message"
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  className="w-full px-4 pt-7 pb-3 bg-white/[0.05] border border-white/10 rounded-xl text-white placeholder:text-transparent focus:outline-none focus:border-[#C8102E] transition-colors resize-none text-sm"
                />
                <label htmlFor="contact-message">Tell us about your security requirements *</label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full sm:w-auto justify-center"
              >
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
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
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
  );
}
