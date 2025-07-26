'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import React from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/shop', label: 'Our Courses' },
];

function StitchesIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
        <path d="M6 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
        <path d="M2 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
        <path d="M4 4.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
        <path d="m15.1 8.2-1.4 1.4" />
        <path d="M17.2 10.3 15.8 11.7" />
        <path d="M19.3 12.4 17.9 13.8" />
        <path d="m21.4 14.5-1.4 1.4" />
        <path d="m13.1 6.2-1.4 1.4" />
        <path d="M10.9 4.1 9.5 5.5" />
        <path d="M8.8 2 7.4 3.4" />
      </svg>
    );
  }

export function Header() {
  const pathname = usePathname();

  const Logo = () => (
    <Link href="/" className="flex items-center gap-2" aria-label="Waterwheel Academy Home">
      <StitchesIcon className="h-8 w-8 text-primary" />
      <span className="font-headline text-2xl font-bold text-primary">
        Waterwheel Academy
      </span>
    </Link>
  );

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn('flex items-center gap-6', className)}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'font-body text-lg font-medium text-primary/80 transition-colors hover:text-primary',
            pathname === link.href ? 'text-primary' : 'text-muted-foreground'
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />
        <div className="hidden items-center gap-4 md:flex">
          <NavLinks />
          <Button asChild>
            <Link href="/shop">View Catalogue</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="p-6">
                <Logo />
                <div className="mt-10 flex flex-col gap-6">
                  <NavLinks className="flex-col items-start" />
                  <Button asChild className="w-full">
                    <Link href="/shop">View Catalogue</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
