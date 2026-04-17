import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Comparison = () => (
  <section>
    <div className="container">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-7xl">Prečo <span className="text-gradient">Talisman?</span></h2>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="overflow-x-auto"
      >
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-white/10 text-white font-bold">
              <th className="py-8 text-[10px] uppercase tracking-[0.3em] opacity-40 text-sm">Vlastnosť</th>
              <th className="py-8 text-accent-gold text-[10px] uppercase tracking-[0.3em] text-sm">Talisman Jewellery</th>
              <th className="py-8 text-[10px] uppercase tracking-[0.3em] opacity-40 text-sm">Mass Market</th>
              <th className="py-8 text-[10px] uppercase tracking-[0.3em] opacity-40 text-sm">Luxusné Značky</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {[
              ["Hypoalergénne", true, false, true],
              ["Vodeodolné", true, false, "Väčšinou"],
              ["Sčernanie po čase", "Nikdy", "Vždy", "Nikdy"],
              ["Dostupná cena", true, true, false],
              ["Udržateľné balenie", true, false, true],
            ].map((row, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-8 font-bold uppercase tracking-tight text-sm">{row[0]}</td>
                <td className="py-8 text-accent-gold">
                  {row[1] === true ? <CheckCircle2 size={24} /> : <span className="font-black uppercase text-[10px] tracking-widest">{row[1]}</span>}
                </td>
                <td className="py-8 opacity-30">
                   {row[2] === true ? <CheckCircle2 size={24} /> : row[2] === false ? <XCircle size={24} /> : <span className="uppercase text-[10px] tracking-widest">{row[2]}</span>}
                </td>
                <td className="py-8 opacity-30">
                   {row[3] === true ? <CheckCircle2 size={24} /> : row[3] === false ? <XCircle size={24} /> : <span className="uppercase text-[10px] tracking-widest">{row[3]}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  </section>
);
