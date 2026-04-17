import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Products } from './components/sections/Products';
import { Transformation } from './components/sections/Transformation';
import { Benefits } from './components/sections/Benefits';
import { Features } from './components/sections/Features';
import { MidCTA } from './components/sections/MidCTA';
import { Inclusions } from './components/sections/Inclusions';
import { SocialProof } from './components/sections/SocialProof';
import { UGCStrip } from './components/sections/UGCStrip';
import { Comparison } from './components/sections/Comparison';
import { FAQ } from './components/sections/FAQ';
import { ImageStrip } from './components/sections/ImageStrip';
import { FinalCTA } from './components/sections/FinalCTA';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [toasts, setToasts] = useState<{id: number, msg: string}[]>([]);

  const addToast = (msg: string) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, msg }]);
    setCartCount(prev => prev + 1);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  useEffect(() => {
    // Listen for custom events from product buttons
    const handleAddToCart = () => addToast("Produkt bol pridaný do košíka");
    window.addEventListener('add-to-cart', handleAddToCart);
    return () => window.removeEventListener('add-to-cart', handleAddToCart);
  }, []);

  return (
    <div className="bg-bg-primary min-h-screen selection:bg-accent-gold selection:text-bg-primary">
      <Navbar cartCount={cartCount} />

      <main>
        <Hero />
        
        {/* Core Product Offering */}
        <Products />

        <Transformation />
        <Benefits />
        <Features />
        <MidCTA />
        <Inclusions />
        <SocialProof />
        <UGCStrip />
        <Comparison />
        <FAQ />
        <ImageStrip />
        <FinalCTA />
      </main>

      <Footer />

      {/* Mocked Toast System */}
      <div className="toast-container">
        <AnimatePresence>
          {toasts.map(toast => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
              className="glass px-6 py-4 rounded-2xl border-accent-gold/50 flex items-center gap-4 min-w-[300px]"
            >
              <div className="w-2 h-2 rounded-full bg-accent-gold animate-ping" />
              <p className="text-xs font-bold uppercase tracking-widest">{toast.msg}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
