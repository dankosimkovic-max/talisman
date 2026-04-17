import { useState } from 'react';
import { Instagram, ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = ({ cartCount = 0 }: { cartCount?: number }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-[5vw] py-6 u-flex-between glass backdrop-blur-3xl">
        <div className="text-xl font-bold tracking-[0.2em] uppercase cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          TALISMAN<span className="text-accent-gold">.</span>
        </div>
        
        <div className="u-hide-mobile u-gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary">
          <a href="#produkty" className="hover:text-white transition-colors">Produkty</a>
          <a href="#kolekcie" className="hover:text-white transition-colors">Kolekcie</a>
          <a href="#kvalita" className="hover:text-white transition-colors">Kvalita</a>
          <a href="#recenzie" className="hover:text-white transition-colors">Recenzie</a>
        </div>

        <div className="u-items-center u-gap-8">
           <button className="text-text-secondary hover:text-white transition-colors u-hide-mobile">
             <Instagram size={18} />
           </button>
           
           <button className="relative text-white hover:text-accent-gold transition-colors u-flex">
             <ShoppingBag size={20} />
             {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
           </button>
           
           <Button variant="primary" className="scale-90 u-hide-mobile" onClick={() => document.getElementById('produkty')?.scrollIntoView()}>
             Kúpiť šperk
           </Button>
           
           <button className="u-hide-desktop text-white p-2" onClick={() => setIsMenuOpen(true)}>
             <Menu size={24} />
           </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="u-fixed-full z-[100] bg-bg-primary u-flex-column p-[10vw]"
          >
            <div className="u-flex justify-end u-items-center mb-20">
              <button className="text-white p-2" onClick={() => setIsMenuOpen(false)}>
                <X size={40} />
              </button>
            </div>

            <div className="u-flex-column u-gap-10 text-5xl font-black uppercase tracking-tighter">
              {['Produkty', 'Kolekcie', 'Kvalita', 'Recenzie', 'FAQ'].map((item) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-accent-gold transition-colors block"
                >
                  {item}<span className="text-accent-gold">.</span>
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-white/10">
               <Button variant="primary" className="u-w-full py-6 text-base" onClick={() => { setIsMenuOpen(false); document.getElementById('produkty')?.scrollIntoView(); }}>
                 Kúpiť teraz
               </Button>
               <div className="u-flex u-gap-6 mt-10 justify-center text-text-secondary">
                 <Instagram />
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em]">@talisman_jewellery</span>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
