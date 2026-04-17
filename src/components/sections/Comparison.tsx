import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Comparison = () => (
  <section id="kvalita" className="bg-bg-secondary/30">
    <div className="container">
      <div className="u-text-center mb-24">
        <h2 className="text-4xl md:text-7xl">Prečo <span className="text-gradient">Talisman?</span></h2>
        <p className="mt-4 opacity-60 uppercase tracking-widest text-[10px] font-bold">Porovnanie kvality a hodnoty</p>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-x-auto no-scrollbar"
      >
        <table className="u-w-full text-left border-separate border-spacing-y-2 min-w-[700px]">
          <thead>
            <tr className="text-white font-bold">
              <th className="py-8 px-6 text-[10px] uppercase tracking-[0.3em] opacity-40">Vlastnosť</th>
              <th className="py-8 px-6 text-accent-gold text-[10px] uppercase tracking-[0.3em] bg-white/5 rounded-t-2xl">Talisman Jewellery</th>
              <th className="py-8 px-6 text-[10px] uppercase tracking-[0.3em] opacity-40">Bežná Bižutéria</th>
              <th className="py-8 px-6 text-[10px] uppercase tracking-[0.3em] opacity-40">Predražený Luxus</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {[
              ["Hypoalergénne", true, false, true],
              ["Vodeodolné (18K Zlato)", true, false, "Čiastočne"],
              ["Sčernanie / Oxidácia", "Nikdy", "Vždy", "Nikdy"],
              ["Pomer Cena / Kvalita", "Bezkonkurenčný", "Nízky", "Veľmi nízky"],
              ["Udržateľné balenie", true, false, true],
            ].map((row, i) => (
              <tr key={i} className="group">
                <td className="py-8 px-6 font-bold uppercase tracking-tight text-xs border-b border-white/5">{row[0]}</td>
                <td className="py-8 px-6 text-accent-gold bg-white/5 border-b border-white/10">
                   <div className="u-flex u-items-center u-gap-3">
                    {row[1] === true ? <CheckCircle2 size={20} className="text-accent-gold" /> : <span className="font-black uppercase text-[10px] tracking-widest">{row[1]}</span>}
                   </div>
                </td>
                <td className="py-8 px-6 opacity-30 border-b border-white/5">
                   {row[2] === true ? <CheckCircle2 size={20} /> : row[2] === false ? <XCircle size={20} /> : <span className="uppercase text-[10px] tracking-widest font-bold">{row[2]}</span>}
                </td>
                <td className="py-8 px-6 opacity-30 border-b border-white/5">
                   {row[3] === true ? <CheckCircle2 size={20} /> : row[3] === false ? <XCircle size={20} /> : <span className="uppercase text-[10px] tracking-widest font-bold">{row[3]}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  </section>
);
