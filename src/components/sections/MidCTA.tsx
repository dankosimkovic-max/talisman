import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const MidCTA = () => {
  return (
  <section className="relative overflow-hidden">
    <div className="container">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-[4rem] p-16 md:p-32 text-center space-y-12 relative z-10"
      >
        <div className="flex justify-center gap-1 text-accent-gold">
          {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
        </div>
        <h2 className="text-4xl md:text-8xl">
          Získajte 10% zľavu <br /> <span className="text-gradient">na prvý nákup.</span>
        </h2>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto font-light uppercase tracking-wide">
          Staňte sa súčasťou našej komunity a buďte prvou, kto sa dozvie o nových limitovaných kolekciách.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          <input 
            type="email" 
            placeholder="Váš e-mail" 
            className="bg-white/5 border border-white/20 rounded-full px-8 py-4 text-sm focus:outline-none focus:border-accent-gold transition-colors min-w-[300px]"
          />
          <Button variant="primary">Chcem zľavu</Button>
        </div>
      </motion.div>
    </div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] bg-accent-gold/5 rounded-full blur-[200px] -z-10" />
  </section>
  );
};
