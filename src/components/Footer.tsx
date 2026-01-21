import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
        <div className="max-w-2xl">
          <h2 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter italic mb-8">
            Don't Resist <br />The <span className="text-brand-violet">Void.</span>
          </h2>
          <form className="flex w-full border-b border-white/20 pb-4 group focus-within:border-brand-violet transition-colors">
            <input 
              type="email" 
              placeholder="JOIN THE COMMUNION (EMAIL)" 
              className="bg-transparent w-full font-mono text-sm outline-none placeholder:text-zinc-700"
            />
            <button type="submit">
              <ArrowRight className="text-zinc-700 group-focus-within:text-brand-violet" />
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 font-mono text-[10px] tracking-widest uppercase">
          <div className="flex flex-col gap-4">
            <p className="text-zinc-600 mb-2">Location</p>
            <a href="#" className="hover:text-brand-violet transition-colors">Deep Ellum, TX</a>
            <a href="#" className="hover:text-brand-violet transition-colors">Commerce St.</a>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-zinc-600 mb-2">Social</p>
            <a href="#" className="hover:text-brand-violet transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-violet transition-colors">Soundcloud</a>
            <a href="#" className="hover:text-brand-violet transition-colors">Resident Advisor</a>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-zinc-600 mb-2">Privacy</p>
            <a href="#" className="hover:text-brand-violet transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-violet transition-colors">Safety</a>
          </div>
        </div>
      </div>
      
      <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 font-mono text-[8px] text-zinc-700 uppercase tracking-[0.3em]">
        <p>© 2024 VOID DFW INC. ALL RIGHTS RESERVED.</p>
        <p>DESIGNED BY GLYPHOR FUSE / ARCHITECTED FOR THE BASS</p>
      </div>
    </footer>
  );
};

export default Footer;