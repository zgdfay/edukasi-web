export default function KelolaLokasiPage() {
  // TODO: Integrate with database/API
  const lokasi = [
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
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Kelola Lokasi Vaksinasi</h1>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Tambah Lokasi
          </button>
        </div>

        <div className="space-y-4">
          {lokasi.map((item) => (
            <div key={item.id} className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-2">{item.nama}</h2>
                  <div className="space-y-1 text-gray-700 dark:text-gray-300">
                    <p><strong>Alamat:</strong> {item.alamat}</p>
                    <p><strong>Telepon:</strong> {item.telepon}</p>
                    <p><strong>Jam Operasional:</strong> {item.jamOperasional}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Edit
                  </button>
                  <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

