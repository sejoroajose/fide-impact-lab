'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'font-medium cursor-pointer relative overflow-hidden group w-fit';
    
    const sizes = {
      sm: 'h-[48px]',
      md: 'h-[56px]',
      lg: 'h-[64px]',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizes[size], className)}
        {...props}
      >
        <div className="flex items-center transition-transform duration-300 ease-in-out translate-x-0 group-hover:translate-x-[56px]">
          {/* Left circle - hidden initially, slides in from left */}
          <span className="w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center text-primary-dark flex-shrink-0 -ml-[56px]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="ml-1">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>

          {/* Rectangle part with text */}
          <span className="bg-white text-primary-dark px-8 h-[56px] flex items-center rounded-full flex-shrink-0">
            {children}
          </span>

          {/* Right circle - visible initially, slides out to right */}
          <span className="w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center text-primary-dark flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="ml-1">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };