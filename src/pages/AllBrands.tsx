import { useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import BrandMark from '@/components/BrandMark';
import { brands, brandImageSrc } from '@/lib/brandsData';

export default function AllBrands() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <nav className="fixed top-0 left-0 right-0 z-50 navbar-transition navbar-scrolled">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center">
              <BrandMark
                logoClassName="h-12 sm:h-14"
                titleClassName="text-xl sm:text-2xl"
                subtitleClassName="text-[10px] sm:text-xs text-white/50 tracking-[0.18em]"
              />
            </Link>
            <div className="hidden lg:flex items-center gap-1">
              <Link to="/" className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-md hover:bg-white/5">
                <ArrowLeft className="w-3.5 h-3.5" /> Home
              </Link>
            </div>
            <a href="/#contact" className="hidden sm:inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#A00D24] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-all hover:scale-[1.02]">
              Get A Quote
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-20 bg-[#1A1A1A] grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="red-accent-line mb-6" />
          <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#C8102E] mb-4 block">
            Trusted Global Brands
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Brands We Work With
          </h1>
          <p className="text-white/60 leading-relaxed max-w-2xl">
            We partner with leading international manufacturers to deliver dependable
            security, surveillance, access control, alarm, and intercom solutions across Saudi Arabia.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="red-accent-line mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">All Brands</h2>
              <p className="text-sm text-[#1A1A1A]/45 mt-1">{brands.length} brand partners</p>
            </div>
            <a href="/#contact" className="btn-arrow group hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] transition-all">
              Discuss Your Project <ArrowRight className="w-4 h-4 arrow-icon" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.map(({ file, name, category }) => (
              <div key={file} className="card-hover group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#C8102E]/30 hover:shadow-xl transition-all duration-300">
                <div className="h-44 bg-gray-50 flex items-center justify-center p-8">
                  <img
                    src={brandImageSrc(file)}
                    alt={name}
                    className="max-h-24 max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 border-t border-gray-100">
                  <p className="text-sm font-semibold text-[#1A1A1A] leading-tight">{name}</p>
                  <span className="inline-block mt-2 text-[10px] font-semibold uppercase tracking-wider text-[#C8102E] bg-[#C8102E]/8 px-2 py-0.5 rounded-full">
                    {category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
          <p className="text-xs text-white/30">© 2025 Top Vision Security Company LLC. All Rights Reserved.</p>
          <Link to="/" className="btn-arrow group inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
