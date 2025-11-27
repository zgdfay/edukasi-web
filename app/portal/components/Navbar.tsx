'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/portal', label: 'Beranda' },
  { href: '/portal/edukasi', label: 'Edukasi' },
  { href: '/portal/lokasi', label: 'Lokasi' },
  { href: '/portal/jadwal', label: 'Jadwal' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Left */}
          <Link
            href="/portal"
            className="flex items-center transition-opacity hover:opacity-80">
            <span className="text-xl font-bold text-foreground">
              HPVInsight
            </span>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== '/portal' && pathname?.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-200',
                    isActive
                      ? 'text-primary font-semibold'
                      : 'text-muted-foreground hover:text-primary'
                  )}>
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Action Buttons - Right */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="px-6 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
              <Link href="/login">Log In</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/portal' && pathname?.startsWith(link.href));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'text-sm font-medium transition-colors duration-200',
                      isActive
                        ? 'text-primary font-semibold'
                        : 'text-muted-foreground hover:text-primary'
                    )}
                    onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                );
              })}
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full mt-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  Log In
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
