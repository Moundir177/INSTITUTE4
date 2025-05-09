import React from 'react';
import NextLink from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-navy text-white hover:shadow-navy focus:ring-navy-blue',
        secondary: 'bg-white text-navy-blue border border-navy-blue hover:bg-navy-blue hover:text-white focus:ring-navy-blue',
        gold: 'bg-gradient-gold text-charcoal hover:shadow-gold focus:ring-gold',
        outline: 'bg-transparent text-navy-blue border border-navy-blue/30 hover:border-navy-blue focus:ring-navy-blue',
        ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 hover:text-navy-blue',
        link: 'bg-transparent underline-offset-4 hover:underline text-navy-blue hover:text-royal-blue',
        'link-gold': 'bg-transparent underline-offset-4 hover:underline text-gold',
      },
      size: {
        xs: 'text-xs px-2.5 py-1.5',
        sm: 'text-sm px-3 py-2',
        md: 'text-sm px-6 py-3',
        lg: 'text-base px-8 py-3.5',
        xl: 'text-lg px-10 py-4',
      },
      hover: {
        lift: 'hover:-translate-y-1',
        grow: 'hover:scale-105',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      hover: 'grow',
    },
  }
);

interface ButtonBaseProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
}

interface ButtonProps 
  extends ButtonBaseProps, 
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {}

const ButtonComponent = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, hover, icon, iconPosition = 'left', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, hover, className }))}
        {...props}
      >
        {icon && iconPosition === 'left' && (
          <span className="inline-flex mr-2">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className="inline-flex ml-2">{icon}</span>
        )}
      </button>
    );
  }
);

ButtonComponent.displayName = 'Button';

interface LinkProps 
  extends ButtonBaseProps, 
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'href'> {
  href: string;
}

const LinkComponent = ({ 
  className, 
  children, 
  href, 
  variant, 
  size, 
  hover, 
  icon, 
  iconPosition = 'left',
  ...props 
}: LinkProps) => {
  return (
    <NextLink 
      href={href}
      className={cn(buttonVariants({ variant, size, hover, className }))}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="inline-flex mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="inline-flex ml-2">{icon}</span>
      )}
    </NextLink>
  );
};

LinkComponent.displayName = 'ButtonLink';

const Button = ButtonComponent as typeof ButtonComponent & {
  Link: typeof LinkComponent;
};

Button.Link = LinkComponent;

export { Button, buttonVariants }; 