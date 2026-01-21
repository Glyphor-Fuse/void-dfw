import { motion } from 'framer-motion';

const GlyphorBadge = () => {
  return (
    <motion.a
      href="https://glyphor.com"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, backgroundColor: "#8b5cf6" }}
      className="fixed bottom-6 right-6 z-[200] bg-zinc-900 border border-white/10 px-4 py-2 rounded-full flex items-center gap-3 transition-colors shadow-2xl backdrop-blur-md"
    >
      <div className="w-2 h-2 rounded-full bg-brand-violet animate-pulse" />
      <span className="font-mono text-[9px] tracking-[0.2em] text-white uppercase font-bold">
        Made with <span className="text-brand-violet group-hover:text-white">Glyphor Fuse</span>
      </span>
    </motion.a>
  );
};

export default GlyphorBadge;