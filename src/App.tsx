import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle,
  Star, 
  ChevronDown,
  TrendingUp,
  Play,
  Heart,
  Sparkles,
  ShieldCheck,
  Truck,
  RotateCcw,
  Quote,
  Instagram,
  CreditCard,
  Package
} from 'lucide-react';

// --- Global Components ---

const Navbar = () => (
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
       <button className="pill-button pill-button-primary scale-90">Kúpiť šperk</button>
    </div>
  </nav>
);

// --- Sections (1 to 12) ---

/** 1/ Above the fold (Hero + Proof bar) */
const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-32">
    <div className="container relative z-10 text-center md:text-left">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
          <Sparkles size={12} className="text-accent-gold" /> Detaily tvoria celok
        </div>
        <h1 className="text-5xl md:text-8xl lg:text-[7vw] mb-10 leading-[0.95] font-black uppercase tracking-tighter">
          Váš osobný <br /> <span className="text-gradient">Talisman.</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mb-14 leading-relaxed font-light uppercase tracking-wide">
          Prémiové šperky, ktoré zachytávajú momenty. Chirurgická oceľ pozlátená 18K zlatom pre nekonečný lesk and štýl.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 mb-24 justify-center md:justify-start">
          <button className="pill-button pill-button-primary px-10 py-4 text-base">
            Objaviť kolekciu <ArrowRight size={18} />
          </button>
          <button className="pill-button pill-button-secondary px-10 py-4 text-base">
            Naše bestsellery
          </button>
        </div>
      </motion.div>
      
      {/* Proof Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="pt-12 border-t border-white/10 flex flex-wrap gap-x-12 gap-y-8 items-center justify-center md:justify-start"
      >
        <div className="flex items-center gap-8">
           <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 text-accent-gold">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <div className="text-[10px] font-black tracking-widest uppercase">20,000+ Žien nás miluje</div>
           </div>
        </div>
        <div className="h-6 w-px bg-white/10 hidden md:block" />
        <div className="flex items-center gap-8 opacity-60">
           <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><Truck size={16} /> Doprava nad 1500 Kč Zdarma</div>
           <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><RotateCcw size={16} /> 14 dní na vrátenie</div>
           <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><ShieldCheck size={16} /> Hypoalergénne</div>
        </div>
      </motion.div>
    </div>
    
    {/* Floating Visual Element */}
    <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[35vw] h-[50vh] hidden lg:block rounded-3xl overflow-hidden glass p-4 rotate-3">
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800" 
          alt="Luxury Jewellery" 
          className="w-full h-full object-cover rounded-2xl opacity-80"
        />
    </div>

    <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-accent-gold/5 rounded-full blur-[150px] -z-10" />
  </section>
);

/** 2/ The transformation */
const Transformation = () => (
  <section id="transformacia" className="bg-bg-secondary py-32">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-10">
          <div className="text-accent-gold text-[10px] font-black uppercase tracking-[0.4em]">Premena vzťahu k sebe</div>
          <h2 className="text-4xl md:text-7xl uppercase leading-none font-black tracking-tighter">Šperk nie je len <br /> doplnok. Je to pocit.</h2>
          <p className="text-xl text-text-secondary leading-relaxed">
            Sledovali ste niekedy, ako malý detail dokáže zmeniť celú vašu auru? Talisman šperky sú navrhnuté tak, aby zvýraznili vašu prirodzenú krásu a dodali vám sebavedomie, ktoré vyžaruje zvnútra.
          </p>
          <div className="space-y-6">
            {[
              { t: "Obyčajný deň", s: "Bez iskry and detailov, ktoré vás definujú." },
              { t: "Váš Talisman", s: "Jemný dotyk luxusu, ktorý priťahuje pohľady." },
              { t: "Vaša Aura", s: "Nekompromisné sebavedomie v každom geste." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-8 h-8 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold font-bold text-xs shrink-0">{i+1}</div>
                <div>
                  <div className="font-bold uppercase tracking-widest text-sm mb-1">{item.t}</div>
                  <div className="text-sm text-text-dim">{item.s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
           <div className="aspect-[3/4] rounded-3xl overflow-hidden glass mt-12">
              <img src="https://images.unsplash.com/photo-1620656715918-0883667c37ad?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-70" alt="Detail" />
           </div>
           <div className="aspect-[3/4] rounded-3xl overflow-hidden glass">
              <img src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-70" alt="Elegance" />
           </div>
        </div>
      </div>
    </div>
  </section>
);

/** 3/ Benefits (deep, visual, outcome-led) */
const Benefits = () => (
  <section id="kvalita" className="py-40">
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
          <div className="flex-1 space-y-10">
            <div className="text-accent-gold text-[10px] font-black uppercase tracking-[0.5em]">{b.label}</div>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">{b.title}</h2>
            <p className="text-xl text-text-secondary leading-relaxed font-light">{b.desc}</p>
            <div className="pt-6">
               <button className="pill-button pill-button-secondary uppercase text-[10px] tracking-widest">Zistiť viac o materiáloch</button>
            </div>
          </div>
          <div className="flex-1 w-full aspect-square rounded-[3rem] overflow-hidden glass relative group">
            <img src={b.img} alt={b.title} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[2s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60" />
          </div>
        </div>
      ))}
    </div>
  </section>
);

/** 4/ Features (scannable layer) */
const Features = () => (
  <section className="bg-bg-secondary py-24 border-y border-white/5">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          { title: "Chirurgická oceľ", desc: "Základ, ktorý nikdy nezhrdzavie.", icon: <ShieldCheck /> },
          { title: "18K Pozlátenie", desc: "Autentický odtieň pravého zlata.", icon: <Sparkles /> },
          { title: "Vodeodolné", desc: "Šperky, ktoré nemusíte skladať.", icon: <TrendingUp /> },
          { title: "Bez niklu", desc: "Vhodné pre alergikov.", icon: <Heart /> },
        ].map((item, i) => (
          <div key={i} className="space-y-5 text-center md:text-left">
            <div className="text-accent-gold flex md:justify-start justify-center">{item.icon}</div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em]">{item.title}</h4>
            <p className="text-xs text-text-dim leading-relaxed uppercase tracking-widest">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/** 5/ Mid-page CTA + proof */
const MidCTA = () => (
  <section className="relative overflow-hidden py-40">
    <div className="container glass rounded-[4rem] p-16 md:p-32 text-center space-y-12 relative z-10 border border-white/10">
      <div className="flex justify-center gap-1 text-accent-gold">
        {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
      </div>
      <h2 className="text-4xl md:text-8xl font-black max-w-5xl mx-auto leading-[0.9] uppercase tracking-tighter">
        Získajte 10% zľavu <br /> na váš prvý nákup.
      </h2>
      <p className="text-xl text-text-secondary max-w-2xl mx-auto font-light uppercase tracking-wide">
        Staňte sa súčasťou našej komunity and buďte prvou, kto sa dozvie o nových limitovaných kolekciách.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
        <input 
          type="email" 
          placeholder="Váš e-mail" 
          className="bg-white/5 border border-white/20 rounded-full px-8 py-4 text-sm focus:outline-none focus:border-accent-gold transition-colors min-w-[300px]"
        />
        <button className="pill-button pill-button-primary px-12 py-4">Chcem zľavu</button>
      </div>
    </div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] bg-accent-gold/5 rounded-full blur-[200px] -z-10" />
  </section>
);

/** 6/ What’s included */
const Inclusions = () => (
  <section className="py-40">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <div className="space-y-10">
          <h2 className="text-4xl md:text-[6vw] uppercase leading-none font-black tracking-tighter">Viac než <br /> len šperk.</h2>
          <p className="text-xl text-text-secondary font-light">Záleží nám na celkovom zážitku. Každá objednávka je zabalená tak, aby bol moment otvárania výnimočný.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { t: "Prémiová krabička", d: "Elegantné balenie pre bezpečné uloženie.", i: <Package /> },
            { t: "Čistiaca handrička", d: "Udržujte váš šperk v dokonalom lesku.", i: <Sparkles /> },
            { t: "Karta starostlivosti", d: "Tipy, ako predĺžiť životnosť šperku.", i: <ShieldCheck /> },
            { t: "Bezpečné doprava", d: "Zásilkovna alebo kuriér priamo k vám.", i: <Truck /> }
          ].map((item, i) => (
            <div key={i} className="p-10 glass rounded-3xl space-y-6 hover:bg-white/5 transition-colors border border-white/5">
              <div className="text-accent-gold">{item.i}</div>
              <h4 className="text-sm font-bold uppercase tracking-widest">{item.t}</h4>
              <p className="text-xs text-text-dim uppercase tracking-wide leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/** 7/ Social proof (layered) */
const SocialProof = () => (
  <section id="recenzie" className="bg-bg-secondary py-40">
    <div className="container">
      <div className="text-center mb-32 space-y-6">
        <h2 className="text-4xl md:text-7xl uppercase font-black tracking-tighter">Hovoria za nás <br /> vaše príbehy.</h2>
        <div className="flex justify-center gap-1 text-accent-gold">
          {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: "Veronika K.", content: "Neskutočná kvalita! Prstene nosím denne, umývam s nimi riad and stále sú ako nové. Odporúčam všetkými desiatimi.", date: "Pred 2 dňami" },
          { name: "Lucia M.", content: "Balenie bolo také krásne, že som ho ani nechcela otvoriť. Šperky sú v skutočnosti ešte krajšie ako na fotkách.", date: "Pred týždňom" },
          { name: "Jana S.", content: "Rýchle dodanie and komunikácia na jednotku. Určite si čoskoro objednám ďalšie kúsky do mojej zbierky.", date: "Pred 3 dňami" },
        ].map((r, i) => (
          <div key={i} className="p-12 glass rounded-[2.5rem] space-y-8 border border-white/5 relative">
            <Quote className="absolute top-10 right-10 w-12 h-12 text-white/5" />
            <p className="text-xl leading-relaxed italic font-light">"{r.content}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold font-bold text-xs">{r.name[0]}</div>
              <div>
                <div className="font-bold uppercase tracking-widest text-[10px]">{r.name}</div>
                <div className="text-[10px] text-text-dim uppercase tracking-widest">{r.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/** 8/ UGC / video content strip */
const UGCStrip = () => (
  <section className="py-20 overflow-hidden bg-bg-primary">
    <div className="container">
      <div className="flex justify-between items-end mb-12">
        <div className="space-y-2">
          <div className="text-accent-gold text-[10px] font-black uppercase tracking-[0.4em]">Instagram</div>
          <h3 className="text-3xl uppercase font-black tracking-tighter">Žijeme s vami.</h3>
        </div>
        <button className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-accent-gold pb-1 hover:text-accent-gold transition-colors">Sledovať nás</button>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar">
        {[
          "https://images.unsplash.com/photo-1620656715918-0883667c37ad?auto=format&fit=crop&q=80&w=400",
          "https://images.unsplash.com/photo-1611085583191-a3b13b24424a?auto=format&fit=crop&q=80&w=400",
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400",
          "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=400",
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=400",
          "https://images.unsplash.com/photo-1599643477877-530eb83ad8ec?auto=format&fit=crop&q=80&w=400"
        ].map((url, i) => (
          <div key={i} className="min-w-[240px] aspect-[9/16] rounded-[2rem] bg-bg-secondary relative group overflow-hidden shrink-0 border border-white/5">
             <img src={url} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700" alt="Instagram Story" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform">
                   <Play size={20} fill="currentColor" />
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/** 9/ Comparison table */
const Comparison = () => (
  <section className="py-40">
    <div className="container">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-7xl uppercase font-black tracking-tighter">Prečo Talisman?</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-8 text-text-dim uppercase tracking-[0.3em] text-[10px]">Vlastnosť</th>
              <th className="py-8 text-accent-gold uppercase tracking-[0.3em] text-[10px]">Talisman Jewellery</th>
              <th className="py-8 text-text-dim uppercase tracking-[0.3em] text-[10px]">Mass Market (Zliatiny)</th>
              <th className="py-8 text-text-dim uppercase tracking-[0.3em] text-[10px]">Luxusné Značky</th>
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
                <td className="py-8">
                  {row[1] === true ? <CheckCircle2 className="text-accent-gold" size={24} /> : <span className="text-white font-black uppercase text-[10px] tracking-widest">{row[1]}</span>}
                </td>
                <td className="py-8 text-text-dim">
                   {row[2] === true ? <CheckCircle2 size={24} /> : row[2] === false ? <XCircle size={24} opacity={0.2} /> : <span className="uppercase text-[10px] tracking-widest">{row[2]}</span>}
                </td>
                <td className="py-8 text-text-dim">
                   {row[3] === true ? <CheckCircle2 size={24} /> : row[3] === false ? <XCircle size={24} opacity={0.2} /> : <span className="uppercase text-[10px] tracking-widest">{row[3]}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

/** 10/ FAQ */
const FAQ = () => {
  const [open, setOpen] = useState(0);
  const faqs = [
    { q: "Môžem sa so šperkami sprchovať?", a: "Áno, naše šperky z chirurgickej ocele s PVD pozlátením sú vysoko odolné voči vode and potu. Odporúčame však vyhnúť sa silným chemikáliám and bazénom s chlórom pre zachovanie maximálneho lesku." },
    { q: "Sú šperky vhodné pre alergikov?", a: "Absolútne. Používame chirurgickú oceľ 316L, ktorá je známa svojou hypoalergénnosťou and bezpečnosťou aj pre veľmi citlivú pokožku. Neobsahujú žiaden nikel." },
    { q: "Aká je doba dodania?", a: "Objednávky odosielame obvykle do 24-48 hodín. Doručenie cez Zásilkovnu trvá väčšinou 2-3 pracovné dni." },
    { q: "Čo ak mi šperk nesadne?", a: "Ponúkame 14-dňovú lehotu na vrátenie alebo výmenu nenoseného tovaru bez udania dôvodu." }
  ];

  return (
    <section id="faq" className="bg-bg-secondary py-40">
      <div className="container max-w-4xl">
        <h2 className="text-4xl md:text-7xl uppercase mb-24 text-center font-black tracking-tighter">Časté otázky.</h2>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="border border-white/10 rounded-[2rem] overflow-hidden glass transition-all">
              <button 
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full p-10 flex justify-between items-center text-left"
              >
                <span className="text-lg md:text-xl font-black uppercase tracking-tight">{f.q}</span>
                <ChevronDown className={`transition-transform duration-700 ${open === i ? 'rotate-180 text-accent-gold' : ''}`} />
              </button>
              {open === i && (
                <div className="px-10 pb-10 text-text-secondary leading-relaxed font-light text-lg">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/** 11/ Image strip / product visuals */
const ImageStrip = () => (
  <section className="py-0 px-0">
    <div className="grid grid-cols-2 lg:grid-cols-4 h-[500px]">
      {[
        "https://images.unsplash.com/photo-1573408302185-9127ff5f6d33?w=800&q=80",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
        "https://images.unsplash.com/photo-1611085583191-a3b13b24424a?w=800&q=80",
        "https://images.unsplash.com/photo-1620656715918-0883667c37ad?w=800&q=80"
      ].map((url, i) => (
        <div key={i} className="relative overflow-hidden group">
          <img src={url} alt="Luxury Detail" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
          <div className="absolute inset-0 bg-accent-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
      ))}
    </div>
  </section>
);

/** 12/ Final CTA (emotive close) */
const FinalCTA = () => (
  <section className="py-48 text-center relative overflow-hidden bg-bg-primary">
    <div className="container relative z-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="space-y-12"
      >
        <h2 className="text-6xl md:text-[10vw] font-black uppercase leading-none tracking-tighter">Váš detail <br /> <span className="text-gradient">čaká.</span></h2>
        <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto font-light uppercase tracking-widest leading-relaxed">
          Zmeňte obyčajný moment na výnimočný príbeh. Vyberte si svoj Talisman ešte dnes.
        </p>
        <div className="pt-8">
          <button className="pill-button pill-button-primary px-16 py-6 text-xl">Kúpiť teraz so zľavou 10%</button>
        </div>
        
        <div className="pt-32 flex flex-wrap justify-center gap-12 border-t border-white/10 opacity-40 text-[9px] font-black tracking-[0.4em] uppercase">
           <div className="flex items-center gap-2"><ShieldCheck size={16} /> Bezpečný nákup</div>
           <div className="flex items-center gap-2"><CreditCard size={16} /> Apple / Google Pay</div>
           <div className="flex items-center gap-2"><Truck size={16} /> Rýchle doručenie</div>
        </div>
      </motion.div>
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-accent-gold/10 to-transparent pointer-events-none" />
  </section>
);

// --- Main App ---

const App = () => (
  <div className="selection:bg-accent-gold selection:text-bg-primary">
    <Navbar />
    <Hero />
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
    
    <footer className="py-20 text-center border-t border-white/5 bg-bg-secondary">
      <div className="text-xl font-bold tracking-[0.3em] uppercase mb-10">TALISMAN<span className="text-accent-gold">.</span></div>
      <div className="flex justify-center gap-12 text-[10px] font-bold uppercase tracking-widest text-text-dim mb-12">
        <a href="#" className="hover:text-white transition-colors">Obchodné podmienky</a>
        <a href="#" className="hover:text-white transition-colors">Ochrana osobných údajov</a>
        <a href="#" className="hover:text-white transition-colors">Doprava a platba</a>
      </div>
      <p className="text-[10px] uppercase tracking-[0.5em] text-text-dim">&copy; 2024 Talisman Jewellery. Vytvorené pre emócie.</p>
    </footer>
  </div>
);

export default App;
