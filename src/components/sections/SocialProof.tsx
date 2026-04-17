import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';

export const SocialProof = () => (
  <section id="recenzie" className="bg-bg-secondary">
    <div className="container">
      <div className="text-center mb-32 space-y-6">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl"
        >
            Hovoria za nás <br /> <span className="text-gradient">vaše príbehy.</span>
        </motion.h2>
        <div className="flex justify-center gap-1 text-accent-gold">
          {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: "Veronika K.", content: "Neskutočná kvalita! Prstene nosím denne, umývam s nimi riad a stále sú ako nové. Odporúčam všetkými desiatimi.", date: "Pred 2 dňami" },
          { name: "Lucia M.", content: "Balenie bolo také krásne, že som ho ani nechcela otvoriť. Šperky sú v skutočnosti ešte krajšie ako na fotkách.", date: "Pred týždňom" },
          { name: "Jana S.", content: "Rýchle dodanie a komunikácia na jednotku. Určite si čoskoro objednám ďalšie kúsky do mojej zbierky.", date: "Pred 3 dňami" },
        ].map((r, i) => (
          <GlassCard key={i} delay={i * 0.1}>
            <Quote className="absolute top-10 right-10 w-12 h-12 text-white/5" />
            <p className="text-xl leading-relaxed italic font-light mb-8">"{r.content}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold font-bold text-xs">{r.name[0]}</div>
              <div>
                <div className="font-bold uppercase tracking-widest text-[10px]">{r.name}</div>
                <div className="text-[10px] text-text-dim uppercase tracking-widest">{r.date}</div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);
