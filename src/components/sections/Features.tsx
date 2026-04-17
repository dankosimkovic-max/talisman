import { ShieldCheck, Sparkles, TrendingUp, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export const Features = () => (
  <section className="bg-bg-secondary border-y border-white/5">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          { title: "Chirurgická oceľ", desc: "Základ, ktorý nikdy nezhrdzavie.", icon: ShieldCheck },
          { title: "18K Pozlátenie", desc: "Autentický odtieň pravého zlata.", icon: Sparkles },
          { title: "Vodeodolné", desc: "Šperky, ktoré nemusíte skladať.", icon: TrendingUp },
          { title: "Bez niklu", desc: "Vhodné pre alergikov.", icon: Heart },
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="space-y-5 text-center md:text-left"
          >
            <div className="text-accent-gold flex md:justify-start justify-center">
                <item.icon size={24} />
            </div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em]">{item.title}</h4>
            <p className="text-xs text-text-dim leading-relaxed uppercase tracking-widest">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
