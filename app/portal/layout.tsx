import type { Metadata } from 'next';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'HPVInsight',
  description:
    'Portal informasi dan edukasi tentang HPV dan kanker serviks, lokasi dan jadwal vaksinasi',
};

export default function PortalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}
