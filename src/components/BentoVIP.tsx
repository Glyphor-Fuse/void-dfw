import { motion } from 'framer-motion';

const BentoVIP = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-4 h-auto md:h-[600px]">
      <motion.div 
        whileHover={{ scale: 0.99 }}
        className="md:col-span-3 md:row-span-2 bg-zinc-900 p-10 flex flex-col justify-between border border-white/5 hover:border-brand-violet/50 transition-colors"
      >
        <div>
          <h4 className="text-5xl font-display font-black mb-4">THE CORE</h4>
          <p className="font-mono text-zinc-500 text-sm max-w-xs">Full access to the main deck, mezzanine, and subterranean chill-out zones. Unlimited frequency exposure.</p>
        </div>
        <div className="text-6xl font-display font-black text-zinc-800">$45</div>
      </motion.div>

      <motion.div 
        whileHover={{ scale: 0.99 }}
        className="md:col-span-3 md:row-span-1 bg-brand-violet p-10 flex items-center justify-between group cursor-pointer"
      >
        <h4 className="text-3xl font-display font-black text-black">MEZZANINE VIP</h4>
        <div className="text-black/50 group-hover:text-black font-mono text-xl transition-colors">→</div>
      </motion.div>

      <motion.div 
        whileHover={{ scale: 0.99 }}
        className="md:col-span-1 md:row-span-1 bg-zinc-900 border border-white/5 p-6 flex items-end"
      >
        <span className="font-mono text-xs uppercase text-zinc-500">Bottle Service</span>
      </motion.div>

      <motion.div 
        whileHover={{ scale: 0.99 }}
        className="md:col-span-2 md:row-span-1 bg-zinc-100 p-8 flex flex-col justify-center"
      >
        <h4 className="text-2xl font-display font-bold text-black uppercase leading-tight">Private Vessel Cabin</h4>
        <p className="text-zinc-500 text-[10px] font-mono mt-2 uppercase">Capacity: 12 Guests</p>
      </motion.div>
    </div>
  );
};

export default BentoVIP;