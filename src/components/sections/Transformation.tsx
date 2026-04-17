import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';

export const Transformation = () => (
  <section id="transformacia" className="bg-bg-secondary">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-10">
          <SectionHeader 
            label="Premena vzťahu k sebe" 
            title={<>Šperk nie je len <br /> doplnok. Je to pocit.</>}
            description="Talisman šperky sú navrhnuté tak, aby zvýraznili vašu prirodzenú krásu a dodali vám sebavedomie, ktoré vyžaruje zvnútra."
          />
          <div className="space-y-6">
            {[
              { t: "Obyčajný deň", s: "Bez iskry a detailov, ktoré vás definujú." },
              { t: "Váš Talisman", s: "Jemný dotyk luxusu, ktorý priťahuje pohľady." },
              { t: "Vaša Aura", s: "Nekompromisné sebavedomie v každom geste." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-6 items-start"
              >
                <div className="w-8 h-8 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold font-bold text-xs shrink-0">{i+1}</div>
                <div>
                  <div className="font-bold uppercase tracking-widest text-sm mb-1">{item.t}</div>
                  <div className="text-sm text-text-dim uppercase tracking-widest">{item.s}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
           <GlassCard className="aspect-[3/4] p-2 mt-12 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1620656715918-0883667c37ad?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-70" alt="Detail" />
           </GlassCard>
           <GlassCard className="aspect-[3/4] p-2 overflow-hidden" delay={0.2}>
              <img src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-70" alt="Elegance" />
           </GlassCard>
        </div>
      </div>
    </div>
  </section>
);
