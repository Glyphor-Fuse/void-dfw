import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Liquid Mesh Simulation */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-40 liquid-mesh"
      />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4"
          >
            <span className="font-mono text-brand-violet tracking-[0.4em] uppercase text-xs">Dallas Subterranean // Est. 2024</span>
          </motion.div>
          
          <motion.h1 
            style={{ y: y1, scale }}
            className="text-[15vw] md:text-[12vw] font-display font-black leading-[0.8] tracking-tighter uppercase italic"
          >
            <motion.span 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="block"
            >
              Absolute
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="block text-outline"
            >
              Frequency
            </motion.span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-col md:flex-row gap-8 items-start md:items-center w-full"
          >
            <button className="group relative flex items-center gap-4 bg-white text-black px-8 py-5 rounded-full font-display font-bold uppercase text-sm overflow-hidden transition-all hover:pr-12">
              <span className="relative z-10">Secure Entry</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" size={18} />
              <div className="absolute inset-0 bg-brand-violet translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Play size={16} fill="white" />
              </div>
              <span className="font-mono text-[10px] tracking-widest uppercase">Hear the Void (Live Stream)</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 right-10 hidden lg:block"
      >
        <div className="flex flex-col gap-2 items-end">
            <div className="w-32 h-[1px] bg-brand-violet" />
            <p className="font-mono text-[10px] text-zinc-500">32.7767° N, 96.7970° W</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;