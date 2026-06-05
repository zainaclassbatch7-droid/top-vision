import { useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import BrandMark from '@/components/BrandMark';

const logos = [
  { file: '01_PETROMIN_CORPORATION.png', name: 'PETROMIN Corporation', sector: 'Industrial' },
  { file: '02_Holiday_Inn_Makkah_Al_Aziziah.png', name: 'Holiday Inn Makkah', sector: 'Hospitality' },
  { file: '03_Civil_Defense_Jeddah.png', name: 'Civil Defense Jeddah', sector: 'Government' },
  { file: '04_Jeddah_National_Hospital.png', name: 'Jeddah National Hospital', sector: 'Healthcare' },
  { file: '05_Jeddah_Kandrah_Clinic_Hospital.png', name: 'Jeddah Kandrah Clinic', sector: 'Healthcare' },
  { file: '06_Al_Abeer_Medical_Center.png', name: 'Al Abeer Medical Center', sector: 'Healthcare' },
  { file: '07_Manuel_Super_Market.png', name: 'Manuel Super Market', sector: 'Retail' },
  { file: '09_Advanced_Real_Estate.png', name: 'Advanced Real Estate', sector: 'Real Estate' },
  { file: '10_Abdulla_Said_Binzagar.png', name: 'Abdulla Said Binzagar', sector: 'Corporate' },
  { file: '11_Rubaiyat.png', name: 'Rubaiyat', sector: 'Retail' },
  { file: '12_Boucheron_Jewelry.png', name: 'Boucheron Jewellery', sector: 'Retail' },
  { file: '13_Deewaniya_Burger.png', name: 'Deewaniya Burger', sector: 'F&B' },
  { file: '14_Dujjajo.png', name: 'Dujjajo', sector: 'F&B' },
  { file: '17_Alupco.png', name: 'Alupco', sector: 'Industrial' },
  { file: '19_Mize_Car.png', name: 'Mize Car', sector: 'Automotive' },
  { file: '20_Munief_Al_Nahdi_Group.png', name: 'Munief Al Nahdi Group', sector: 'Corporate' },
  { file: '21_National_Mechanical_Company.png', name: 'National Mechanical Co.', sector: 'Industrial' },
  { file: '22_Globe_Group.png', name: 'Globe Group', sector: 'Corporate' },
  { file: '23_Boulevard.png', name: 'Boulevard', sector: 'Retail' },
  { file: '24_Al_Nahdi_Hotel_Group_Makkah.png', name: 'Al Nahdi Hotel Group', sector: 'Hospitality' },
  { file: '25_National_Aquaculture_Naquaa.png', name: 'National Aquaculture', sector: 'Industrial' },
  { file: '27_Saudi_Holidays_Travel_Tourism.png', name: 'Saudi Holidays Travel', sector: 'Tourism' },
  { file: '28_Aramex.png', name: 'Aramex', sector: 'Logistics' },
  { file: '29_ABB.png', name: 'ABB', sector: 'Corporate' },
  { file: '30_Movenpick_Resorts.png', name: 'Mövenpick Resorts', sector: 'Hospitality' },
  { file: '31_Aims_Contracting.png', name: 'Aims Contracting', sector: 'Construction' },
  { file: '32_Al_Khomasiah_Contracting.png', name: 'Al Khomasiah Contracting', sector: 'Construction' },
  { file: '33_Holy_Quraan_Memorization_Jeddah.png', name: 'Holy Quran Memorization', sector: 'Government' },
  { file: '34_Al_Zouman_Swatch.png', name: 'Al Zouman Swatch', sector: 'Retail' },
  { file: '35_Casablanca_Hotel.png', name: 'Casablanca Hotel', sector: 'Hospitality' },
  { file: '36_Mouwad.png', name: 'Mouwad', sector: 'Retail' },
  { file: '37_United_Gulf_Factory.png', name: 'United Gulf Factory', sector: 'Industrial' },
  { file: '38_Binladin_Group.png', name: 'Binladin Group', sector: 'Construction' },
  { file: '39_Fone_Communication.png', name: 'Fone Communication', sector: 'Telecom' },
  { file: '40_Crystal_Ice.png', name: 'Crystal Ice', sector: 'Industrial' },
  { file: '41_North_Police_Station_Jeddah.png', name: 'North Police Station', sector: 'Government' },
  { file: 'Subway.png', name: 'Subway', sector: 'F&B' },
  { file: 'Shawarmer.png', name: 'Shawarmer', sector: 'F&B' },
  { file: 'Four_Points_by_Sheraton.png', name: 'Four Points by Sheraton', sector: 'Hospitality' },
  { file: 'Armani_Exchange.png', name: 'Armani Exchange', sector: 'Retail' },
  { file: 'Americana_Foods.png', name: 'Americana Foods', sector: 'F&B' },
  { file: 'KFC.png', name: 'KFC', sector: 'F&B' },
  { file: 'Hardees.png', name: 'Hardees', sector: 'F&B' },
  { file: 'Krispy_Kreme.png', name: 'Krispy Kreme', sector: 'F&B' },
  { file: 'Pizza_Hut.png', name: 'Pizza Hut', sector: 'F&B' },
  { file: 'Reda_Fire.png', name: 'Reda Fire', sector: 'Industrial' },
  { file: 'Al_Gihaz_Holding.png', name: 'Al Gihaz Holding', sector: 'Corporate' },
  { file: 'Ajmal_Perfume.png', name: 'Ajmal Perfume', sector: 'Retail' },
  { file: 'Saudi_Electricity_Company.png', name: 'Saudi Electricity Company', sector: 'Government' },
  { file: 'Sama_Energy.png', name: 'Sama Energy', sector: 'Industrial' },
  { file: 'Acciona.png', name: 'Acciona', sector: 'Construction' },
  { file: 'Bin_Shaihoon_Group.png', name: 'Bin Shaihoon Group', sector: 'Corporate' },
  { file: 'Fakieh_Chicken.png', name: 'Fakieh Chicken', sector: 'F&B' },
  { file: 'Tazaj.png', name: 'Tazaj', sector: 'F&B' },
  { file: 'Herfy.png', name: 'Herfy', sector: 'F&B' },
  { file: 'MBL.png', name: 'MBL', sector: 'Corporate' },
  { file: 'Ministry_of_Health.png', name: 'Ministry of Health', sector: 'Government' },
  { file: 'logo.jpg.png', name: 'Tuners Garage', sector: 'Automotive' },
];

const sectors = ['All', ...Array.from(new Set(logos.map((l) => l.sector))).sort()];
const src = (file: string) => encodeURI(`/Company Logos (2) (2)/Company Logos/${file}`);

import { useState } from 'react';

export default function AllCompanies() {
  const [active, setActive] = useState('All');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered = active === 'All' ? logos : logos.filter((l) => l.sector === active);

  return (
    <div className="min-h-screen bg-[#1A1A1A]">

      {/* Navbar */}
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

      {/* Hero */}
      <section className="pt-20 bg-[#1A1A1A] grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="red-accent-line mb-6" />
          <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#C8102E] mb-4 block">
            Our Valued Clients
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Companies We Work With
          </h1>
          <p className="text-white/60 leading-relaxed max-w-2xl">
            A proud portfolio of {logos.length}+ organizations across Saudi Arabia that trust Top Vision for their security needs — spanning healthcare, government, retail, hospitality, and more.
          </p>
        </div>
      </section>

      {/* Sticky sector filter */}
      <div className="sticky top-20 z-40 bg-[#111111] border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3" style={{ scrollbarWidth: 'none' }}>
            {sectors.map((s) => (
              <button
                key={s}
                onClick={() => setActive(s)}
                className={`flex-shrink-0 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  active === s ? 'bg-[#C8102E] text-white' : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                {s}
                {s === 'All' && (
                  <span className={`ml-1.5 text-[11px] px-1.5 py-0.5 rounded-full ${active === s ? 'bg-white/20 text-white' : 'bg-white/10 text-white/40'}`}>
                    {logos.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="red-accent-line mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">{active === 'All' ? 'All Companies' : active}</h2>
              <p className="text-sm text-[#1A1A1A]/45 mt-1">{filtered.length} companies</p>
            </div>
            <a href="/#contact" className="btn-arrow group hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] transition-all">
              Get In Touch <ArrowRight className="w-4 h-4 arrow-icon" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map(({ file, name, sector }) => (
              <div key={file} className="card-hover group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#C8102E]/30 hover:shadow-xl transition-all duration-300">
                <div className="h-44 bg-gray-50 flex items-center justify-center p-8">
                  <img
                    src={src(file)}
                    alt={name}
                    className="max-h-28 max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 border-t border-gray-100">
                  <p className="text-sm font-semibold text-[#1A1A1A] leading-tight">{name}</p>
                  <span className="inline-block mt-2 text-[10px] font-semibold uppercase tracking-wider text-[#C8102E] bg-[#C8102E]/8 px-2 py-0.5 rounded-full">
                    {sector}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer strip */}
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
