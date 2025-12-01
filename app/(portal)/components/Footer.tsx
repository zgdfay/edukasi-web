import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const navLinks = [
  { href: '/portal', label: 'Beranda' },
  { href: '/portal/edukasi', label: 'Edukasi' },
  { href: '/portal/lokasi', label: 'Lokasi' },
  { href: '/portal/jadwal', label: 'Jadwal' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <Link
            href="/portal"
            className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <span className="text-lg font-semibold text-foreground">
              HPVInsight
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-semibold text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="font-semibold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
              Masuk
            </Link>
          </nav>

          {/* Privacy/Info Text */}
          <p className="text-sm text-muted-foreground max-w-3xl leading-relaxed px-4">
            HPVInsight mengumpulkan informasi tentang Anda ketika Anda
            menggunakan Website kami untuk mengakses layanan kami, dan produk
            serta layanan online lainnya (secara kolektif, "Layanan") dan
            melalui interaksi serta komunikasi lain yang Anda lakukan dengan
            kami.
          </p>
        </div>
      </div>
    </footer>
  );
}
