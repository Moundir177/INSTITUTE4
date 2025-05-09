import React from 'react';
import { cn } from '@/lib/utils';

type GradientProps = {
  variant?: 'navy' | 'gold' | 'red' | 'silver' | 'rainbow';
  className?: string;
  opacity?: number;
  angle?: number;
  as?: React.ElementType;
};

export const Gradient = ({
  variant = 'navy',
  className,
  opacity = 1,
  angle = 135,
  as: Component = 'div',
  ...props
}: GradientProps & React.HTMLAttributes<HTMLElement>) => {
  const variants = {
    navy: `bg-gradient-to-r from-navy-blue to-royal-blue`,
    gold: `bg-gradient-to-r from-gold to-light-gold`,
    red: `bg-gradient-to-r from-red via-red to-red/70`,
    silver: `bg-gradient-to-r from-silver to-light-silver`,
    rainbow: `bg-gradient-to-r from-navy-blue via-red to-gold`,
  };

  return (
    <Component
      className={cn(variants[variant], `opacity-${opacity * 100}`, className)}
      style={{ 
        backgroundImage: variants[variant].includes('bg-gradient-to-r') 
          ? `linear-gradient(${angle}deg, ${getColors(variant)})` 
          : undefined
      }}
      {...props}
    />
  );
};

// Helper function to extract colors for custom angles
function getColors(variant: string): string {
  switch (variant) {
    case 'navy':
      return 'var(--navy-blue), var(--royal-blue)';
    case 'gold':
      return 'var(--gold), var(--light-gold)';
    case 'red':
      return 'var(--red), var(--red), rgba(207, 20, 43, 0.7)';
    case 'silver':
      return 'var(--silver), var(--light-silver)';
    case 'rainbow':
      return 'var(--navy-blue), var(--red), var(--gold)';
    default:
      return '';
  }
}

export const GradientText = ({ 
  children, 
  variant = 'navy', 
  className 
}: { 
  children: React.ReactNode;
  variant?: 'navy' | 'gold' | 'red' | 'rainbow';
  className?: string;
}) => {
  const gradients = {
    navy: 'from-navy-blue to-royal-blue',
    gold: 'from-gold to-light-gold',
    red: 'from-red to-red/70',
    rainbow: 'from-navy-blue via-red to-gold',
  };

  return (
    <span className={cn(
      'bg-gradient-to-r bg-clip-text text-transparent',
      gradients[variant],
      className
    )}>
      {children}
    </span>
  );
}; 