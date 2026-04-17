import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Truck, RotateCcw, ShieldCheck, Star } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-32">
    <div className="container relative z-10 text-center md:text-left">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[10px] font-bold uppercase tracking-[0.3em] mb-8"
        >
          <Sparkles size={12} className="text-accent-gold" /> Detaily tvoria celok
        </motion.div>
        <h1 className="text-5xl md:text-8xl lg:text-[7vw] mb-10 text-gradient">
          Váš osobný <br /> Talisman.
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mb-14 uppercase tracking-wide">
          Prémiové šperky, ktoré zachytávajú momenty. Chirurgická oceľ pozlátená 18K zlatom pre nekonečný lesk.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 mb-24 justify-center md:justify-start">
          <Button variant="primary" icon={ArrowRight} className="px-10 py-4 text-base">
            Objaviť kolekciu
          </Button>
          <Button variant="secondary" className="px-10 py-4 text-base">
            Naše bestsellery
          </Button>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="pt-12 border-t border-white/10 flex flex-wrap gap-x-12 gap-y-8 items-center justify-center md:justify-start"
      >
        <div className="flex items-center gap-8">
           <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 text-accent-gold">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <div className="text-[10px] font-black tracking-widest uppercase">20,000+ Žien nás miluje</div>
           </div>
        </div>
        <div className="h-6 w-px bg-white/10 hidden md:block" />
        <div className="flex items-center gap-8 opacity-60">
           <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><Truck size={16} /> Doprava nad 1500 Kč Zdarma</div>
           <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><RotateCcw size={16} /> 14 dní na vrátenie</div>
           <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><ShieldCheck size={16} /> Hypoalergénne</div>
        </div>
      </motion.div>
    </div>
    
    <motion.div 
      initial={{ opacity: 0, x: 50, rotate: 0 }}
      animate={{ opacity: 1, x: 0, rotate: 3 }}
      transition={{ duration: 1.5, delay: 0.3 }}
      className="absolute top-1/2 right-0 -translate-y-1/2 w-[35vw] h-[50vh] hidden lg:block rounded-3xl overflow-hidden glass p-4"
    >
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800" 
          alt="Luxury Jewellery" 
          className="w-full h-full object-cover rounded-2xl opacity-80"
        />
    </motion.div>

    <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-accent-gold/5 rounded-full blur-[150px] -z-10" />
  </section>
);
