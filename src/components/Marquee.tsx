import { motion } from 'framer-motion';

const Marquee = ({ text }: { text: string }) => {
  return (
    <div className="relative overflow-hidden bg-brand-violet py-4 border-y border-white/10 whitespace-nowrap rotate-[-1deg] scale-105 z-20 shadow-2xl">
      <motion.div 
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex"
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-4xl md:text-6xl font-display font-black uppercase mx-8 text-black tracking-tighter">
            {text} — {text} —
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;