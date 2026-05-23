import { Award, Handshake, TrendingUp, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const logos = [
  { file: '01_PETROMIN_CORPORATION.png', name: 'PETROMIN Corporation' },
  { file: '02_Holiday_Inn_Makkah_Al_Aziziah.png', name: 'Holiday Inn Makkah' },
  { file: '03_Civil_Defense_Jeddah.png', name: 'Civil Defense Jeddah' },
  { file: '04_Jeddah_National_Hospital.png', name: 'Jeddah National Hospital' },
  { file: '05_Jeddah_Kandrah_Clinic_Hospital.png', name: 'Jeddah Kandrah Clinic' },
  { file: '06_Al_Abeer_Medical_Center.png', name: 'Al Abeer Medical Center' },
  { file: '07_Manuel_Super_Market.png', name: 'Manuel Super Market' },
  { file: '09_Advanced_Real_Estate.png', name: 'Advanced Real Estate' },
  { file: '10_Abdulla_Said_Binzagar.png', name: 'Abdulla Said Binzagar' },
  { file: '11_Rubaiyat.png', name: 'Rubaiyat' },
  { file: '12_Boucheron_Jewelry.png', name: 'Boucheron Jewellery' },
  { file: '13_Deewaniya_Burger.png', name: 'Deewaniya Burger' },
  { file: '14_Dujjajo.png', name: 'Dujjajo' },
  { file: '17_Alupco.png', name: 'Alupco' },
  { file: '19_Mize_Car.png', name: 'Mize Car' },
  { file: '20_Munief_Al_Nahdi_Group.png', name: 'Munief Al Nahdi Group' },
  { file: '21_National_Mechanical_Company.png', name: 'National Mechanical Co.' },
  { file: '22_Globe_Group.png', name: 'Globe Group' },
  { file: '23_Boulevard.png', name: 'Boulevard' },
  { file: '24_Al_Nahdi_Hotel_Group_Makkah.png', name: 'Al Nahdi Hotel Group' },
  { file: '25_National_Aquaculture_Naquaa.png', name: 'National Aquaculture' },
  { file: '27_Saudi_Holidays_Travel_Tourism.png', name: 'Saudi Holidays Travel' },
  { file: '28_Aramex.png', name: 'Aramex' },
  { file: '29_ABB.png', name: 'ABB' },
  { file: '30_Movenpick_Resorts.png', name: 'MÃ¶venpick Resorts' },
  { file: '31_Aims_Contracting.png', name: 'Aims Contracting' },
  { file: '32_Al_Khomasiah_Contracting.png', name: 'Al Khomasiah Contracting' },
  { file: '33_Holy_Quraan_Memorization_Jeddah.png', name: 'Holy Quran Memorization' },
  { file: '34_Al_Zouman_Swatch.png', name: 'Al Zouman Swatch' },
  { file: '35_Casablanca_Hotel.png', name: 'Casablanca Hotel' },
  { file: '36_Mouwad.png', name: 'Mouwad' },
  { file: '37_United_Gulf_Factory.png', name: 'United Gulf Factory' },
  { file: '38_Binladin_Group.png', name: 'Binladin Group' },
  { file: '39_Fone_Communication.png', name: 'Fone Communication' },
  { file: '40_Crystal_Ice.png', name: 'Crystal Ice' },
  { file: '41_North_Police_Station_Jeddah.png', name: 'North Police Station' },
  { file: 'Subway.png', name: 'Subway' },
  { file: 'Shawarmer.png', name: 'Shawarmer' },
  { file: 'Four_Points_by_Sheraton.png', name: 'Four Points by Sheraton' },
  { file: 'Armani_Exchange.png', name: 'Armani Exchange' },
  { file: 'Americana_Foods.png', name: 'Americana Foods' },
  { file: 'KFC.png', name: 'KFC' },
  { file: 'Hardees.png', name: 'Hardees' },
  { file: 'Krispy_Kreme.png', name: 'Krispy Kreme' },
  { file: 'Pizza_Hut.png', name: 'Pizza Hut' },
  { file: 'Reda_Fire.png', name: 'Reda Fire' },
  { file: 'Al_Gihaz_Holding.png', name: 'Al Gihaz Holding' },
  { file: 'Ajmal_Perfume.png', name: 'Ajmal Perfume' },
  { file: 'Saudi_Electricity_Company.png', name: 'Saudi Electricity Company' },
  { file: 'Sama_Energy.png', name: 'Sama Energy' },
  { file: 'Acciona.png', name: 'Acciona' },
  { file: 'Bin_Shaihoon_Group.png', name: 'Bin Shaihoon Group' },
  { file: 'Fakieh_Chicken.png', name: 'Fakieh Chicken' },
  { file: 'Tazaj.png', name: 'Tazaj' },
  { file: 'Herfy.png', name: 'Herfy' },
  { file: 'MBL.png', name: 'MBL' },
  { file: 'Ministry_of_Health.png', name: 'Ministry of Health' },
];

const src = (file: string) => encodeURI(`/Company Logos (2) (2)/Company Logos/${file}`);

const benefits = [
  { icon: MapPin, title: 'Saudi Arabia Focused', desc: 'Headquartered in Jeddah and serving clients across every corner of the Kingdom.' },
  { icon: Award, title: 'Exclusive Representation', desc: 'Authorized partners for leading global security brands in the Saudi market.' },
  { icon: Handshake, title: 'Trusted Partnerships', desc: 'Long-term relationships built on reliability, quality, and after-sales excellence.' },
  { icon: TrendingUp, title: 'Latest Technology', desc: 'Bringing cutting-edge international security innovations to Saudi Arabia.' },
];

export default function Partners() {
  return (
    <section id="partners" className="relative py-28 bg-[#1A1A1A] grid-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal text-center mb-14">
          <div className="red-accent-line mx-auto mb-6" />
          <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#C8102E] mb-4 block">
            Clients & Partners
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Trusted Across Saudi Arabia
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
            Proudly serving leading organizations across the Kingdom from government institutions and hospitals to retail chains and corporate giants. Our work is focused entirely on Saudi Arabia.
          </p>
        </div>

        <div className="scroll-reveal-scale mb-12">
          <div className="relative overflow-hidden glass-dark rounded-2xl px-8 py-7 text-center border-l-4 border-[#C8102E]">
            <div className="text-4xl text-[#C8102E]/20 font-serif absolute top-3 left-5 select-none">"</div>
            <p className="text-white/75 text-base italic leading-relaxed max-w-2xl mx-auto">
              Over two decades of securing lives, assets, and operations from government to enterprise, we are the name Saudi Arabia trusts.
            </p>
            <div className="mt-4 text-[10px] font-semibold tracking-widest uppercase text-[#C8102E]">
              Top Vision Security Company LLC
            </div>
            <div className="text-4xl text-[#C8102E]/20 font-serif absolute bottom-2 right-5 select-none rotate-180">"</div>
          </div>
        </div>

        <div
          className="scroll-reveal marquee-container relative mb-5 overflow-hidden"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)' }}
        >
          <div className="flex gap-5 animate-marquee">
            {[...logos, ...logos].map(({ file, name }, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-44 h-28 flex items-center justify-center p-4 rounded-2xl glass-dark hover:border-[#C8102E]/40 transition-all duration-400 group cursor-default"
              >
                <img
                  src={src(file)}
                  alt={name}
                  className="max-h-20 max-w-full object-contain brightness-60 group-hover:brightness-100 transition-all duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className="scroll-reveal marquee-container relative mb-16 overflow-hidden"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)' }}
        >
          <div className="flex gap-5 animate-marquee-reverse">
            {[...logos].reverse().concat([...logos].reverse()).map(({ file, name }, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-44 h-28 flex items-center justify-center p-4 rounded-2xl glass-dark hover:border-[#C8102E]/40 transition-all duration-400 group cursor-default"
              >
                <img
                  src={src(file)}
                  alt={name}
                  className="max-h-20 max-w-full object-contain brightness-60 group-hover:brightness-100 transition-all duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 stagger-children">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass-dark rounded-2xl p-6 card-hover group hover:border-[#C8102E]/25"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#C8102E]/10 flex items-center justify-center mb-5 group-hover:bg-[#C8102E]/20 group-hover:scale-110 transition-all duration-300">
                <Icon className="w-5 h-5 text-[#C8102E]" />
              </div>
              <h4 className="font-semibold text-white mb-2">{title}</h4>
              <p className="text-sm text-white/45 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="scroll-reveal text-center">
          <Link
            to="/companies"
            className="btn-arrow btn-primary group"
          >
            View All Companies
            <ArrowRight className="w-4 h-4 arrow-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}
