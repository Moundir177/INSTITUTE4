import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-light-gold text-gold',
        navy: 'bg-navy-blue/10 text-navy-blue',
        red: 'bg-red/10 text-red',
        silver: 'bg-light-silver text-gray-600',
        gold: 'bg-gradient-gold text-charcoal',
        outline: 'bg-transparent border border-current',
      },
      size: {
        sm: 'text-xs px-2 py-0.5',
        md: 'text-xs px-3 py-1',
        lg: 'text-sm px-4 py-1.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  className?: string;
}

const Badge = ({ className, variant, size, ...props }: BadgeProps) => {
  return (
    <div className={cn(badgeVariants({ variant, size, className }))} {...props} />
  );
};

export { Badge, badgeVariants }; 