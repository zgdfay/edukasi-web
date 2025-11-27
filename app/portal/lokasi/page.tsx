export default function LokasiPage() {
  // TODO: Integrate with database/API untuk data lokasi vaksinasi
  const lokasiVaksinasi = [
    {
      id: 1,
      nama: "Puskesmas Jakarta Pusat",
      alamat: "Jl. Kesehatan No. 123, Jakarta Pusat",
      telepon: "021-12345678",
      jamOperasional: "08:00 - 16:00",
    },
    {
      id: 2,
      nama: "Rumah Sakit Umum Daerah",
      alamat: "Jl. Rumah Sakit No. 456, Jakarta Selatan",
      telepon: "021-87654321",
      jamOperasional: "24 Jam",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Lokasi Vaksinasi HPV</h1>
        
        <div className="space-y-6">
          {lokasiVaksinasi.map((lokasi) => (
            <div key={lokasi.id} className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold mb-2">{lokasi.nama}</h2>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Alamat:</strong> {lokasi.alamat}</p>
                <p><strong>Telepon:</strong> {lokasi.telepon}</p>
                <p><strong>Jam Operasional:</strong> {lokasi.jamOperasional}</p>
              </div>
              <a 
                href={`/portal/jadwal?lokasi=${lokasi.id}`}
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Lihat Jadwal
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

