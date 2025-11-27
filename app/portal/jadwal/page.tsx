export default function JadwalPage() {
  // TODO: Integrate with database/API untuk data jadwal vaksinasi
  const jadwalVaksinasi = [
    {
      id: 1,
      lokasi: "Puskesmas Jakarta Pusat",
      tanggal: "2024-01-15",
      waktu: "09:00 - 12:00",
      kuota: 50,
      tersedia: 30,
    },
    {
      id: 2,
      lokasi: "Rumah Sakit Umum Daerah",
      tanggal: "2024-01-16",
      waktu: "10:00 - 14:00",
      kuota: 100,
      tersedia: 75,
    },
    {
      id: 3,
      lokasi: "Puskesmas Jakarta Pusat",
      tanggal: "2024-01-20",
      waktu: "09:00 - 12:00",
      kuota: 50,
      tersedia: 50,
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Jadwal Vaksinasi HPV</h1>
        
        <div className="space-y-6">
          {jadwalVaksinasi.map((jadwal) => (
            <div key={jadwal.id} className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{jadwal.lokasi}</h2>
                  <div className="space-y-1 text-gray-700 dark:text-gray-300">
                    <p><strong>Tanggal:</strong> {new Date(jadwal.tanggal).toLocaleDateString('id-ID', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</p>
                    <p><strong>Waktu:</strong> {jadwal.waktu}</p>
                    <p><strong>Kuota:</strong> {jadwal.tersedia} / {jadwal.kuota} tersedia</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    jadwal.tersedia > 0 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {jadwal.tersedia > 0 ? 'Tersedia' : 'Penuh'}
                  </span>
                </div>
              </div>
              {jadwal.tersedia > 0 && (
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                  Daftar Vaksinasi
                </button>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

