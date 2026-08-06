import React from 'react';
import { motion } from 'framer-motion';

const SandTitle = ({ children, className = '', subtitle = '', badge = '', badgeIcon: BadgeIcon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-center max-w-3xl mx-auto mb-16 relative ${className}`}
    >
      {/* Badge Superior */}
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-egypt-card border border-gold-500/30 text-xs font-semibold uppercase tracking-wider text-gold-400 mb-3 shadow-gold-glow/20">
          {BadgeIcon && <BadgeIcon className="w-4 h-4 text-gold-300" />}
          <span>{badge}</span>
        </div>
      )}

      {/* Título Principal Limpo & Elegante */}
      <h2 className="text-3xl sm:text-5xl font-bold font-cinzel text-white">
        {children}
      </h2>

      {/* Subtítulo Opcional */}
      {subtitle && (
        <p className="text-sm sm:text-base text-egypt-sand/80 mt-2 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}

      {/* Divisória Dourada */}
      <div className="w-24 h-1 bg-gold-gradient mx-auto mt-4 rounded-full shadow-gold-glow"></div>
    </motion.div>
  );
};

export default SandTitle;
