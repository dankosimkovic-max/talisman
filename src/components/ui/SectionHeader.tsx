import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeader = ({ label, title, description, align = 'left' }: SectionHeaderProps) => (
  <div className={`space-y-6 ${align === 'center' ? 'text-center' : ''}`}>
    {label && (
      <motion.div 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-accent-gold text-[10px] font-black uppercase tracking-[0.5em]"
      >
        {label}
      </motion.div>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-7xl"
    >
      {title}
    </motion.h2>
    {description && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-xl text-text-secondary max-w-2xl font-light"
      >
        {description}
      </motion.p>
    )}
  </div>
);
