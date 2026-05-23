import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/lib/productsData';

const featured = categories.flatMap((c) => c.products.slice(0, 2)).slice(0, 8);
const totalProducts = categories.reduce((sum, c) => sum + c.products.length, 0);

export default function Products() {
  return (
    <section id="products" className="py-12 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Banner */}
        <div className="scroll-reveal mb-4">
          <div className="red-accent-line mx-auto mb-4" />
          <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#C8102E] mb-6 block text-center">
            Our Products
          </span>
        </div>
        <div className="scroll-reveal">
          <div className="relative rounded-2xl overflow-hidden mb-16 h-64 sm:h-80">
            <img
              src="/products-hero.jpg"
              alt="Security products collection"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 to-transparent" />
            <div className="absolute inset-0 flex items-center p-8 sm:p-12">
              <div className="max-w-md">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Complete Security Solutions
                </h3>
                <p className="text-white/70 mb-4">
                  From consultation to installation, we provide end-to-end security
                  systems tailored to your requirements.
                </p>
                <a
                  href="#contact"
                  className="btn-arrow group inline-flex items-center gap-2 text-[#C8102E] font-semibold transition-colors"
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4 arrow-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="scroll-reveal">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featured.map((p) => (
              <div
                key={p.img}
                className="card-hover group bg-white border border-gray-200 rounded-xl overflow-hidden hover:bg-[#C8102E] hover:border-[#C8102E] transition-all duration-300"
              >
                <div className="aspect-square bg-gray-50 group-hover:bg-[#A00D24] p-5 flex items-center justify-center transition-colors duration-300">
                  <img
                    src={`/Product Images/products/${p.img}`}
                    alt={p.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 border-t border-gray-100 group-hover:border-white/20">
                  <p className="text-xs font-semibold text-[#1A1A1A] group-hover:text-white truncate">{p.name}</p>
                  <p className="text-[11px] text-[#1A1A1A]/45 group-hover:text-white/80 mt-0.5 truncate">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="btn-arrow group inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#A00D24] text-white font-semibold px-8 py-3 rounded-md transition-all hover:scale-[1.02]"
            >
              View All {totalProducts} Products
              <ArrowRight className="w-4 h-4 arrow-icon" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
