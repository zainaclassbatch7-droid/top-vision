import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { brands, brandImageSrc } from '@/lib/brandsData';

const featuredBrands = brands.slice(0, 8);

export default function Brands() {
  return (
    <section id="brands" className="py-16 bg-[#1A1A1A] grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal text-center mb-12">
          <div className="red-accent-line mx-auto mb-6" />
          <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#C8102E] mb-4 block">
            Our Brands
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Brands We Work With
          </h2>
          <p className="text-white/55 max-w-2xl mx-auto leading-relaxed">
            We supply trusted international brands across CCTV, access control,
            alarms, intercom systems, and advanced security technologies.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {featuredBrands.map(({ file, name, category }) => (
            <div
              key={file}
              className="card-hover group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-[#C8102E]/35 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="h-36 bg-white flex items-center justify-center p-8">
                <img
                  src={brandImageSrc(file)}
                  alt={name}
                  className="max-h-20 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 border-t border-white/10">
                <p className="text-sm font-semibold text-white leading-tight">{name}</p>
                <span className="inline-block mt-2 text-[10px] font-semibold uppercase tracking-wider text-[#C8102E] bg-[#C8102E]/10 px-2 py-0.5 rounded-full">
                  {category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/brands"
            className="btn-arrow group inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#A00D24] text-white font-semibold px-8 py-3 rounded-md transition-all hover:scale-[1.02]"
          >
            View All Brands
            <ArrowRight className="w-4 h-4 arrow-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}
