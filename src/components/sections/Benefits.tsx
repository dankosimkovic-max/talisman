import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

export const Benefits = () => (
  <section id="kvalita">
    <div className="container space-y-48">
      {[
        {
          title: "Luxus, ktorý s vami žije.",
          desc: "Zabudnite na šperky, ktoré po mesiaci sčernejú. Naša chirurgická oceľ 316L s prémiovým PVD pozlátením je odolná voči vode, potu aj času.",
          label: "Trvanlivosť",
          img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1000&q=80"
        },
        {
          title: "Nežné k vašej pokožke.",
          desc: "Každý kúsok je 100% hypoalergénny. Žiadny nikel, žiadne podráždenie. Len čistý komfort aj pre tú najcitlivejšiu pleť.",
          label: "Bezpečnosť",
          img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1000&q=80"
        }
      ].map((b, i) => (
        <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-24 items-center`}>
          <div className="flex-1">
            <SectionHeader 
              label={b.label}
              title={b.title}
              description={b.desc}
            />
            <div className="pt-10">
               <Button variant="secondary">Zistiť viac o materiáloch</Button>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="flex-1 w-full aspect-square rounded-[3rem] overflow-hidden glass relative group"
          >
            <img src={b.img} alt={b.title} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[2s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60" />
          </motion.div>
        </div>
      ))}
    </div>
  </section>
);
