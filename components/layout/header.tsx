'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { mainNavigation } from '@/lib/constants/navigation';

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-heading font-bold">
            <Image src="/images/fide-white.png" width={100} height={100} alt="fide logo" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {mainNavigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => 'children' in item && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={item.href} className="text-sm font-medium hover:text-accent-cyan text-white">
                  {item.label}
                </Link>

                {'children' in item && item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-[10px] shadow-lg p-4 min-w-[200px]">
                    {item.children.map((child: { label: string; href: string }) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm hover:bg-neutral-light rounded-md transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="primary" size="sm">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
}