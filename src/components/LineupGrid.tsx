import { motion } from 'framer-motion';

const artists = [
  { name: "RESONANCE", role: "Industrial Hardcore", img: "<span className="block"><img src="https://images.pexels.com/photos/30341205/pexels-photo-30341205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="A dark, narrow warehouse aisle with shelves filled with boxes and goods, illuminated by overhead lights." loading="lazy" /><a href="https://www.pexels.com/photo/dimly-lit-warehouse-aisle-with-tall-shelves-30341205/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Othmane Ettalbi on Pexels</a></span>" },
  { name: "KINETIC", role: "Techno / Acid", img: "<span className="block"><img src="https://images.pexels.com/photos/12789661/pexels-photo-12789661.png?auto=compress&cs=tinysrgb&h=650&w=940" alt="Stylish woman in vibrant purple dress with neon lights embracing retro-futuristic vibes." loading="lazy" /><a href="https://www.pexels.com/photo/portrait-of-a-young-brunette-wearing-a-purple-dress-12789661/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Marvin Corea on Pexels</a></span>" },
  { name: "NULL POINT", role: "Experimental Bass", img: "<span className="block"><img src="https://images.pexels.com/photos/4031381/pexels-photo-4031381.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Black and white photo of swirling incense stick smoke creating an artistic pattern." loading="lazy" /><a href="https://www.pexels.com/photo/scent-fume-of-burning-incense-stick-against-black-background-4031381/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Murtaza Saifee on Pexels</a></span>" },
  { name: "STASIS", role: "Dark Ambient", img: "<span className="block"><img src="https://images.pexels.com/photos/34192646/pexels-photo-34192646.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Unique Brutalist architecture with an abstract concrete sculpture on an exterior wall." loading="lazy" /><a href="https://www.pexels.com/photo/brutalist-building-with-concrete-sculpture-detail-34192646/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by eevnull on Pexels</a></span>" },
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