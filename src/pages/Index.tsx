import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import LineupGrid from '../components/LineupGrid';
import BentoVIP from '../components/BentoVIP';
import Footer from '../components/Footer';
import GlyphorBadge from '../utils/GlyphorBadge';

const Index = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative bg-black">
      <Navbar />
      
      <section className="relative z-10">
        <Hero />
      </section>

      <section className="relative z-20 -mt-20 md:-mt-40">
        <Marquee text="TICKET DROP LIVE — PHASE 02 SOLD OUT — JOIN THE VOID" />
      </section>

      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter uppercase leading-none"
          >
            THE <span className="text-brand-violet">LINEUP</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-xs font-mono text-zinc-500 uppercase text-xs leading-relaxed"
          >
            A curated selection of industrial pioneers and subterranean bass architects. Resetting the Dallas frequency.
          </motion.p>
        </div>
        
        <LineupGrid />
      </section>

      <section className="py-32 bg-zinc-950">
        <div className="px-6 md:px-12 lg:px-24">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="mb-16"
          >
            <h3 className="text-4xl font-display font-bold mb-4 uppercase italic">Vessel Access</h3>
            <p className="font-mono text-brand-violet">SELECT YOUR LEVEL OF IMMERSION</p>
          </motion.div>
          <BentoVIP />
        </div>
      </section>

      <Footer />
      <GlyphorBadge />
    </div>
  );
};

export default Index;