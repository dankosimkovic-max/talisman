import { Instagram, ShoppingBag, Menu } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar = ({ cartCount = 0 }: { cartCount?: number }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 px-[5vw] py-6 flex justify-between items-center glass backdrop-blur-3xl">
    <div className="text-xl font-bold tracking-[0.2em] uppercase cursor-pointer" onClick={() => window.scrollTo(0,0)}>
      TALISMAN<span className="text-accent-gold">.</span>
    </div>
    
    <div className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary">
      <a href="#produkty" className="hover:text-white transition-colors">Produkty</a>
      <a href="#kolekcie" className="hover:text-white transition-colors">Kolekcie</a>
      <a href="#kvalita" className="hover:text-white transition-colors">Kvalita</a>
      <a href="#recenzie" className="hover:text-white transition-colors">Recenzie</a>
    </div>

    <div className="flex items-center gap-4 md:gap-8">
       <button className="text-text-secondary hover:text-white transition-colors hidden sm:block">
         <Instagram size={18} />
       </button>
       
       <button className="relative text-white hover:text-accent-gold transition-colors">
         <ShoppingBag size={20} />
         {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
       </button>
       
       <Button variant="primary" className="scale-90 hidden sm:flex" onClick={() => document.getElementById('produkty')?.scrollIntoView()}>
         Kúpiť šperk
       </Button>
       
       <button className="lg:hidden text-white">
         <Menu size={24} />
       </button>
    </div>
  </nav>
);
