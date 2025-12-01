import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
