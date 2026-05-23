import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Partners from '@/sections/Partners';
import Products from '@/sections/Products';
import Brands from '@/sections/Brands';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function Home() {
  useScrollReveal();

  return (
    <main className="min-h-screen bg-[#1A1A1A]">
      <Navbar />
      <Hero />
      <About />
      <Partners />
      <Products />
      <Brands />
      <Contact />
      <Footer />
    </main>
  );
}
