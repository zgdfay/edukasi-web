'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  FileText,
  MapPin,
  Calendar,
  HelpCircle,
  LogOut,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/user', label: 'Manajemen User', icon: Users },
  { href: '/konten', label: 'Manajemen Konten', icon: FileText },
  { href: '/lokasi', label: 'Manajemen Lokasi', icon: MapPin },
  { href: '/jadwal', label: 'Manajemen Jadwal', icon: Calendar },
  { href: '/faq', label: 'Manajemen FAQ', icon: HelpCircle },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-card border-r border-border min-h-screen fixed left-0 top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <Link href="/admin/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <LayoutDashboard className="h-5 w-5 text-primary" />
          </div>
          <span className="text-lg font-bold text-foreground">Admin Panel</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const fullPath = `${item.href}`;
          const isActive =
            pathname === fullPath ||
            (item.href !== '/dashboard' && pathname?.startsWith(fullPath));

          return (
            <Link
              key={item.href}
              href={`${item.href}`}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-accent/50 text-white'
                  : 'text-muted-foreground hover:bg-primary/10 hover:text-primary'
              )}>
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <Link
          href="/portal"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors">
          <LogOut className="h-5 w-5" />
          Kembali ke Portal
        </Link>
      </div>
    </aside>
  );
}
