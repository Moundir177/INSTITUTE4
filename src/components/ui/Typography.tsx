import React from 'react';
import { cn } from '@/lib/utils';

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  font?: 'sans' | 'serif';
  color?: 'default' | 'muted' | 'primary' | 'accent' | 'white';
  className?: string;
  children: React.ReactNode;
};

const headingSizes = {
  xs: 'text-sm',
  sm: 'text-base',
  md: 'text-lg',
  lg: 'text-xl md:text-2xl',
  xl: 'text-2xl md:text-3xl',
  '2xl': 'text-3xl md:text-4xl',
  '3xl': 'text-4xl md:text-5xl',
  '4xl': 'text-5xl md:text-6xl',
};

const headingWeights = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const fontStyles = {
  sans: 'font-sans',
  serif: 'font-playfair',
};

const textColors = {
  default: 'text-charcoal',
  muted: 'text-gray-600',
  primary: 'text-navy-blue',
  accent: 'text-gold',
  white: 'text-white',
};

export const Heading = ({
  as: Component = 'h2',
  size = 'xl',
  weight = 'bold',
  font = 'serif',
  color = 'default',
  className,
  children,
  ...props
}: HeadingProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <Component
      className={cn(
        headingSizes[size],
        headingWeights[weight],
        fontStyles[font],
        textColors[color],
        'leading-tight tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

type TextProps = {
  as?: 'p' | 'span' | 'div';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'default' | 'muted' | 'primary' | 'accent' | 'white';
  leading?: 'tight' | 'normal' | 'relaxed';
  tracking?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider';
  className?: string;
  children: React.ReactNode;
};

const textSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

const leadingOptions = {
  tight: 'leading-tight',
  normal: 'leading-normal',
  relaxed: 'leading-relaxed',
};

const trackingOptions = {
  tighter: 'tracking-tighter',
  tight: 'tracking-tight',
  normal: 'tracking-normal',
  wide: 'tracking-wide',
  wider: 'tracking-wider',
};

export const Text = ({
  as: Component = 'p',
  size = 'md',
  weight = 'normal',
  color = 'default',
  leading = 'normal',
  tracking = 'normal',
  className,
  children,
  ...props
}: TextProps & React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <Component
      className={cn(
        'font-sans',
        textSizes[size],
        headingWeights[weight],
        textColors[color],
        leadingOptions[leading],
        trackingOptions[tracking],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const Subtitle = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cn(
        'text-sm font-medium uppercase tracking-wider text-gold',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}; 