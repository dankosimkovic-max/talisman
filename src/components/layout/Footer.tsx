export const Footer = () => (
    <footer className="py-20 text-center border-t border-white/5 bg-bg-secondary">
      <div className="text-xl font-bold tracking-[0.3em] uppercase mb-10">TALISMAN<span className="text-accent-gold">.</span></div>
      <div className="flex flex-wrap justify-center gap-12 text-[10px] font-bold uppercase tracking-widest text-text-dim mb-12">
        <a href="#" className="hover:text-white transition-colors">Obchodné podmienky</a>
        <a href="#" className="hover:text-white transition-colors">Ochrana osobných údajov</a>
        <a href="#" className="hover:text-white transition-colors">Doprava a platba</a>
      </div>
      <p className="text-[10px] uppercase tracking-[0.5em] text-text-dim">&copy; 2024 Talisman Jewellery. Vytvorené pre emócie.</p>
    </footer>
);
