import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: "Môžem sa so šperkami sprchovať?", a: "Áno, naše šperky z chirurgickej ocele s PVD pozlátením sú vysoko odolné voči vode a potu. Odporúčame však vyhnúť sa silným chemikáliám a bazénom s chlórom pre zachovanie maximálneho lesku." },
  { q: "Sú šperky vhodné pre alergikov?", a: "Absolútne. Používame chirurgickú oceľ 316L, ktorá je známa svojou hypoalergénnosťou a bezpečnosťou aj pre veľmi citlivú pokožku. Neobsahujú žiaden nikel." },
  { q: "Aká je doba dodania?", a: "Objednávky odosielame obvykle do 24-48 hodín. Doručenie cez Zásilkovnu trvá väčšinou 2-3 pracovné dni." },
  { q: "Čo ak mi šperk nesadne?", a: "Ponúkame 14-dňovú lehotu na vrátenie alebo výmenu nenoseného tovaru bez udania dôvodu." }
];

export const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-bg-secondary">
      <div className="container max-w-4xl">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl mb-24 text-center"
        >
            Časté otázky.
        </motion.h2>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="border border-white/10 rounded-[2.5rem] overflow-hidden glass transition-all">
              <button 
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full p-10 flex justify-between items-center text-left"
              >
                <span className="text-lg md:text-xl font-black uppercase tracking-tight">{f.q}</span>
                <ChevronDown className={`transition-transform duration-700 ${open === i ? 'rotate-180 text-accent-gold' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-10 pb-10 text-text-secondary leading-relaxed font-light text-lg">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
