import { motion } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';

const PRODUCTS = [
  {
    id: 1,
    name: "Kvarteto",
    price: "649 Kč",
    desc: "Set štyroch prsteňov s trblietavými kameňmi.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Masívne",
    price: "329 Kč",
    desc: "Zlatý prsteň s organickou 'pokrčenou' textúrou.",
    image: "https://images.unsplash.com/photo-1603561591411-071c4f753934?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Rubín",
    price: "349 Kč",
    desc: "Jemný zlatý prsteň so sýto červeným kameňom.",
    image: "https://images.unsplash.com/photo-1626784215021-2e39ccf541e5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Zlatíčko",
    price: "329 Kč",
    desc: "Organicky tvarovaný prsteň s vysokým leskom.",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&q=80&w=800"
  }
];

export const Products = () => (
  <section id="produkty" className="py-32">
    <div className="container">
      <SectionHeader 
        title={<>Naše <span className="text-gradient">Bestsellery</span></>}
        description="Objavte kúsky, ktoré si podmanili stovky žien. Nadčasový dizajn a dostupný luxus."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {PRODUCTS.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group glass rounded-3xl overflow-hidden flex flex-col h-full"
          >
            <div className="relative aspect-square overflow-hidden bg-white/5">
              <img 
                src={p.image} 
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-accent-gold">
                Populárne
              </div>
            </div>
            
            <div className="p-8 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold uppercase tracking-wider">{p.name}</h3>
                <span className="text-accent-gold font-bold">{p.price}</span>
              </div>
              <p className="text-sm text-text-secondary font-light mb-8 flex-grow leading-relaxed">
                {p.desc}
              </p>
              
              <div className="flex items-center gap-1 mb-6 text-accent-gold/40">
                {[1,2,3,4,5].map(star => <Star key={star} size={12} fill="currentColor" />)}
                <span className="text-[10px] ml-2 text-text-dim">(4.9/5)</span>
              </div>
              
              <Button 
                variant="secondary" 
                className="w-full py-4 text-xs group-hover:bg-accent-gold group-hover:text-black transition-all"
                icon={ShoppingBag}
                onClick={() => window.dispatchEvent(new CustomEvent('add-to-cart'))}
              >
                Pridať do košíka
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <p className="text-text-dim text-sm uppercase tracking-[0.3em] font-light mb-8">
          A ďalších 150+ šperkov v plnej ponuke
        </p>
        <Button variant="primary" className="px-12">Pozrieť celú kolekciu</Button>
      </div>
    </div>
  </section>
);
