import { motion } from 'framer-motion';

export const ImageStrip = () => (
  <section className="py-0 px-0">
    <div className="grid grid-cols-2 lg:grid-cols-4 h-[500px]">
      {[
        "https://images.unsplash.com/photo-1573408302185-9127ff5f6d33?w=800&q=80",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
        "https://images.unsplash.com/photo-1611085583191-a3b13b24424a?w=800&q=80",
        "https://images.unsplash.com/photo-1620656715918-0883667c37ad?w=800&q=80"
      ].map((url, i) => (
        <motion.div 
            key={i} 
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden group border-r border-white/5 last:border-0"
        >
          <img src={url} alt="Luxury Detail" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
          <div className="absolute inset-0 bg-accent-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
      ))}
    </div>
  </section>
);
