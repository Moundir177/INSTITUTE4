import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const sectionVariants = cva(
  'w-full',
  {
    variants: {
      variant: {
        default: 'bg-white',
        gray: 'bg-gray-50',
        navy: 'bg-gradient-navy text-white',
        gold: 'bg-gradient-gold text-charcoal',
        light: 'bg-cream',
        pattern: 'bg-union-jack bg-cover bg-center bg-opacity-5',
      },
      padding: {
        none: '',
        sm: 'py-8 md:py-12',
        md: 'py-12 md:py-16',
        lg: 'py-16 md:py-24',
        xl: 'py-24 md:py-32',
      },
      container: {
        none: '',
        sm: 'max-w-3xl mx-auto px-4 sm:px-6',
        md: 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8',
        lg: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
        full: 'w-full px-4 sm:px-6 lg:px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
      container: 'lg',
    },
  }
);

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: React.ElementType;
  className?: string;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant, padding, container, as = 'section', ...props }, ref) => {
    const Component = as;
    
    return (
      <Component
        ref={ref}
        className={cn(sectionVariants({ variant, padding, container, className }))}
        {...props}
      />
    );
  }
);

Section.displayName = 'Section';

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, subtitle, description, align = 'center', ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn(
          'mb-12',
          {
            'text-left': align === 'left',
            'text-center': align === 'center',
            'text-right': align === 'right',
          },
          className
        )}
        {...props}
      >
        {subtitle && (
          <p className="text-sm font-medium uppercase tracking-wider text-gold mb-2">{subtitle}</p>
        )}
        <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">{title}</h2>
        {description && (
          <p className="max-w-2xl text-gray-600 mx-auto text-base md:text-lg">{description}</p>
        )}
        <div className="mt-6 w-24 h-1 bg-gradient-gold rounded-full mx-auto"></div>
      </div>
    );
  }
);

SectionHeader.displayName = 'SectionHeader';

export { Section, SectionHeader, sectionVariants }; 