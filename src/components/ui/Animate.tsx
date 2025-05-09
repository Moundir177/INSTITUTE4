import React from 'react';
import { motion } from 'framer-motion';

type AnimateProps = {
  children: React.ReactNode;
  type?: 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scale' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
};

const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  none: {
    hidden: {},
    visible: {},
  },
};

export const Animate = ({
  children,
  type = 'fadeInUp',
  delay = 0,
  duration = 0.5,
  className = '',
  once = true,
}: AnimateProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={animations[type]}
      transition={{ 
        duration, 
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({
  children,
  className = '',
  staggerDelay = 0.1,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={className}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const fadeIn = (delay: number = 0, duration: number = 0.5) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: 'easeOut',
    },
  },
});

export const fadeInUp = (delay: number = 0, duration: number = 0.5) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: 'easeOut',
    },
  },
}); 