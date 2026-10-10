import React from 'react';
import { motion } from 'motion/react';

interface AnimatedHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
  id?: string;
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  title,
  subtitle,
  eyebrow,
  className = '',
  id,
}) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-8 md:mb-12 ${className}`}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs uppercase tracking-[0.25em] text-[#1E3A8A] font-semibold mb-2 font-sans-ui"
        >
          {eyebrow}
        </motion.div>
      )}

      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#0F2544] text-balance">
          {title}
        </h2>
      </div>

      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-[#475569] font-serif-body max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Elegant blue-to-beige hairline expander rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'left' }}
        className="mt-4 h-[1px] w-full bg-gradient-to-r from-[#1E3A8A]/50 via-[#CFC1A8]/60 to-transparent"
      />
    </motion.div>
  );
};
