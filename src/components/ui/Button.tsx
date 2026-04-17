import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ children, variant = 'primary', icon: Icon, onClick, className = '' }: ButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`pill-button pill-button-${variant} ${className}`}
  >
    {children}
    {Icon && <Icon size={18} />}
  </motion.button>
);
