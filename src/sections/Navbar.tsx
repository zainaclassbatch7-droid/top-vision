import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Menu, X, ChevronDown, Shield } from 'lucide-react';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import BrandMark from '@/components/BrandMark';

const aboutDropdown = [
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Whom We Serve', href: '#whom-we-serve' },
  { label: 'Where We Serve', href: '#where-we-serve' },
];

const navLinks = [
  { label: 'About Us', href: '#about', dropdown: aboutDropdown },
  { label: 'Partners', href: '#partners' },
  { label: 'Products', href: '/products', isRoute: true },
  { label: 'Brands', href: '/brands', isRoute: true },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const scrolled = useNavbarScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className={`fixed top-0 left-0 right-0 z-50 navbar-transition ${scrolled ? 'navbar-scrolled' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <BrandMark
                className="gap-3 transition-all duration-300 group-hover:opacity-90"
                logoClassName="h-12 sm:h-14"
                titleClassName="text-xl sm:text-2xl"
                subtitleClassName="text-[10px] sm:text-xs text-white/50 tracking-[0.18em]"
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.href} className="relative group">
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="nav-link flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/75 hover:text-white transition-colors rounded-md"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="nav-link flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/75 hover:text-white transition-colors rounded-md"
                    >
                      {link.label}
                      {link.dropdown && (
                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                      )}
                    </a>
                  )}
                  {link.dropdown && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-[#111111] border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-1 group-hover:translate-y-0 overflow-hidden">
                      {link.dropdown.map((item, idx) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-2 px-4 py-3 text-sm text-white/65 hover:text-white hover:bg-white/5 transition-colors group/item"
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          <span className="w-1 h-1 rounded-full bg-[#C8102E] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="hidden sm:inline-flex btn-primary text-sm animate-pulse-glow"
              >
                <Shield className="w-4 h-4" />
                Get A Quote
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-white/80 hover:text-white transition-colors lg:hidden p-1.5 rounded-lg hover:bg-white/5"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ${
            mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease' }}
        >
          <div className="glass-dark border-t border-white/5 mx-0">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.href}>
                    <button
                      onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                    >
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${mobileAboutOpen ? 'max-h-48' : 'max-h-0'}`}
                    >
                      <div className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-3">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2 px-3 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#C8102E]" />
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex sm:hidden mt-3 btn-primary justify-center"
              >
                <Shield className="w-4 h-4" />
                Get A Quote
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
