import type { Metadata } from 'next';
import Sidebar from './components/Sidebar';

export const metadata: Metadata = {
  title: 'Admin - HPVInsight',
  description:
    'Panel administrasi untuk mengelola konten, lokasi, dan jadwal vaksinasi',
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        {children}
      </div>
    </div>
  );
}

