import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 px-[5vw] py-6 flex justify-between items-center glass">
    <div className="text-xl font-bold tracking-[0.2em] uppercase">TALISMAN<span className="text-accent-gold">.</span></div>
    <div className="hidden lg:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary">
      <a href="#kolekcie" className="hover:text-white transition-colors">Kolekcie</a>
      <a href="#kvalita" className="hover:text-white transition-colors">Prečo my</a>
      <a href="#recenzie" className="hover:text-white transition-colors">Recenzie</a>
      <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
    </div>
    <div className="flex items-center gap-6">
       <button className="text-text-secondary hover:text-white transition-colors"><Instagram size={18} /></button>
       <Button variant="primary" className="scale-90">Kúpiť šperk</Button>
    </div>
  </nav>
);
