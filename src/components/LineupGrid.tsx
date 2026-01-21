import { motion } from 'framer-motion';

const artists = [
  { name: "RESONANCE", role: "Industrial Hardcore", img: "https://images.pexels.com/photos/30341205/pexels-photo-30341205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
  { name: "KINETIC", role: "Techno / Acid", img: "https://images.pexels.com/photos/12789661/pexels-photo-12789661.png?auto=compress&cs=tinysrgb&h=650&w=940" },
  { name: "NULL POINT", role: "Experimental Bass", img: "https://images.pexels.com/photos/4031381/pexels-photo-4031381.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
  { name: "STASIS", role: "Dark Ambient", img: "https://images.pexels.com/photos/34192646/pexels-photo-34192646.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
];

const LineupGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {artists.map((artist, idx) => (
        <motion.div 
          key={artist.name}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          whileHover={{ y: -10 }}
          className={`relative group h-[500px] overflow-hidden bg-zinc-900 ${idx % 2 !== 0 ? 'mt-0 md:mt-24' : ''}`}
        >
          <img 
            src={artist.img} 
            alt={artist.name}
            className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
          
          <div className="absolute bottom-8 left-8">
            <p className="font-mono text-brand-violet text-[10px] tracking-widest uppercase mb-1">{artist.role}</p>
            <h4 className="text-3xl font-display font-black text-white italic">{artist.name}</h4>
          </div>
          
          <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-10 h-10 border border-white/50 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-brand-violet rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default LineupGrid;