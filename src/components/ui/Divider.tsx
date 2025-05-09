import React from 'react';
import { cn } from '@/lib/utils';

type DividerProps = {
  className?: string;
  variant?: 'gold' | 'navy' | 'silver' | 'light' | 'dark';
  orientation?: 'horizontal' | 'vertical';
  withIcon?: React.ReactNode;
};

export const Divider = ({
  className,
  variant = 'gold',
  orientation = 'horizontal',
  withIcon,
}: DividerProps) => {
  const variantClasses = {
    gold: 'bg-gradient-to-r from-transparent via-gold to-transparent',
    navy: 'bg-gradient-to-r from-transparent via-navy-blue to-transparent',
    silver: 'bg-gradient-to-r from-transparent via-silver to-transparent',
    light: 'bg-gradient-to-r from-transparent via-gray-200 to-transparent',
    dark: 'bg-gradient-to-r from-transparent via-gray-700 to-transparent',
  };

  if (withIcon) {
    return (
      <div className={cn('flex items-center justify-center w-full my-8', className)}>
        <div className={cn('flex-grow h-px', variantClasses[variant])}></div>
        <div className="flex-shrink-0 mx-4">{withIcon}</div>
        <div className={cn('flex-grow h-px', variantClasses[variant])}></div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        orientation === 'horizontal' ? 'h-px w-full my-8' : 'w-px h-full mx-8',
        variantClasses[variant],
        className
      )}
    ></div>
  );
}; 