import { ShieldCheck, CreditCard, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const FinalCTA = () => (
  <section className="py-48 text-center relative overflow-hidden bg-bg-primary">
    <div className="container relative z-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <h2 className="text-6xl md:text-[10vw] max-w-5xl mx-auto">Váš detail <br /> <span className="text-gradient">čaká.</span></h2>
        <h2 className="text-6xl md:text-[10vw] max-w-5xl mx-auto">Váš detail <br /> <span className="text-gradient">čaká.</span></h2>
        <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto font-light uppercase tracking-widest leading-relaxed">
          Zmeňte obyčajný moment na výnimočný príbeh. Vyberte si svoj Talisman ešte dnes.
        </p>
        <div className="pt-8">
          <Button variant="primary" className="px-16 py-6 text-xl">Kúpiť teraz so zľavou 10%</Button>
        </div>
        
        <div className="pt-32 flex flex-wrap justify-center gap-12 border-t border-white/10 opacity-40 text-[9px] font-black tracking-[0.4em] uppercase">
           <div className="flex items-center gap-2"><ShieldCheck size={16} /> Bezpečný nákup</div>
           <div className="flex items-center gap-2"><CreditCard size={16} /> Apple / Google Pay</div>
           <div className="flex items-center gap-2"><Truck size={16} /> Rýchle doručenie</div>
        </div>
      </motion.div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-accent-gold/10 to-transparent pointer-events-none" />
  </section>
);
