import { Package, Sparkles, ShieldCheck, Truck } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';

export const Inclusions = () => (
  <section>
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <SectionHeader 
            title={<>Viac než <br /> len šperk.</>}
            description="Záleží nám na celkovom zážitku. Každá objednávka je zabalená tak, aby bol moment otvárania výnimočný."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { t: "Prémiová krabička", d: "Elegantné balenie pre bezpečné uloženie.", icon: Package },
            { t: "Čistiaca handrička", d: "Udržujte váš šperk v dokonalom lesku.", icon: Sparkles },
            { t: "Karta starostlivosti", d: "Tipy, ako predĺžiť životnosť šperku.", icon: ShieldCheck },
            { t: "Zásilkovna", d: "Doručenie priamo k vám.", icon: Truck }
          ].map((item, i) => (
            <GlassCard key={i} delay={i * 0.1}>
              <div className="text-accent-gold mb-6">
                <item.icon size={24} />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4">{item.t}</h4>
              <p className="text-xs text-text-dim uppercase tracking-wide leading-relaxed">{item.d}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  </section>
);
