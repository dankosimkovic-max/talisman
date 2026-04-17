import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

export const UGCStrip = () => (
  <section className="bg-bg-primary overflow-hidden">
    <div className="container">
      <div className="flex justify-between items-end mb-12">
        <div className="space-y-2">
          <div className="text-accent-gold text-[10px] font-black uppercase tracking-[0.4em]">Instagram</div>
          <h3 className="text-3xl uppercase font-black tracking-tighter">Žijeme s vami.</h3>
        </div>
        <button className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-accent-gold pb-1 hover:text-accent-gold transition-colors">Sledovať nás</button>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar">
        {[
          "https://images.unsplash.com/photo-1620656715918-0883667c37ad?auto=format&fit=crop&q=80&w=400",
          "https://images.unsplash.com/photo-1611085583191-a3b13b24424a?auto=format&fit=crop&q=80&w=400",
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400",
          "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=400",
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=400",
          "https://images.unsplash.com/photo-1599643477877-530eb83ad8ec?auto=format&fit=crop&q=80&w=400"
        ].map((url, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.05 }}
            className="min-w-[240px] aspect-[9/16] rounded-[2rem] bg-bg-secondary relative group overflow-hidden shrink-0 border border-white/5"
          >
             <img src={url} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700" alt="Instagram Story" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform">
                   <Play size={20} fill="currentColor" />
                </div>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
