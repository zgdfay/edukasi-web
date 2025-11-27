import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Edukasi HPV Kanker Serviks",
  description: "Panel administrasi untuk mengelola konten, lokasi, dan jadwal vaksinasi",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <nav className="bg-zinc-900 dark:bg-black border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/admin" className="text-2xl font-bold text-white">
              Admin Panel
            </a>
            <div className="flex gap-4">
              <a href="/admin" className="text-white hover:text-blue-400">Dashboard</a>
              <a href="/admin/konten" className="text-white hover:text-blue-400">Konten</a>
              <a href="/admin/lokasi" className="text-white hover:text-blue-400">Lokasi</a>
              <a href="/admin/jadwal" className="text-white hover:text-blue-400">Jadwal</a>
              <a href="/portal" className="text-white hover:text-blue-400">Portal</a>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}

