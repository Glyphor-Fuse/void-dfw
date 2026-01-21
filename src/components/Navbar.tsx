import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] p-6 md:p-10 flex justify-between items-center mix-blend-difference">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-2xl font-display font-black tracking-[0.2em] text-white"
      >
        VOID<span className="text-brand-violet">DFW</span>
      </motion.div>

      <div className="hidden md:flex gap-12 font-mono text-[10px] tracking-widest uppercase text-white/70">
        {['Experience', 'Lineup', 'VIP', 'Archive'].map((item) => (
          <motion.a 
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ scale: 1.1, color: "#fff" }}
            className="cursor-pointer transition-colors"
          >
            {item}
          </motion.a>
        ))}
      </div>

      <motion.button 
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
        className="bg-white text-black p-3 rounded-full hover:bg-brand-violet hover:text-white transition-colors"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </motion.button>
    </nav>
  );
};

export default Navbar;