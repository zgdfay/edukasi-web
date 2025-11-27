export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Dashboard Admin</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Total Lokasi</h3>
            <p className="text-3xl font-bold text-blue-600">12</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Jadwal Aktif</h3>
            <p className="text-3xl font-bold text-green-600">28</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Pendaftaran Hari Ini</h3>
            <p className="text-3xl font-bold text-purple-600">45</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Total Pendaftar</h3>
            <p className="text-3xl font-bold text-orange-600">1,234</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/admin/konten" className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">Kelola Konten</h2>
            <p className="text-gray-600 dark:text-gray-400">Kelola konten edukasi</p>
          </a>
          <a href="/admin/lokasi" className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">Kelola Lokasi</h2>
            <p className="text-gray-600 dark:text-gray-400">Tambah dan edit lokasi vaksinasi</p>
          </a>
          <a href="/admin/jadwal" className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">Kelola Jadwal</h2>
            <p className="text-gray-600 dark:text-gray-400">Tambah dan edit jadwal vaksinasi</p>
          </a>
        </div>
      </main>
    </div>
  );
}

