import HeroSection from './components/HeroSection';

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      {/* Features Section */}
      <main className="container mx-auto px-4 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Layanan Kami
          </h2>
          <p className="text-lg text-gray-600">
            Akses informasi lengkap tentang HPV dan vaksinasi kanker serviks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="/portal/edukasi"
            className="group p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-200">
            <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition">
              <svg
                className="w-8 h-8 text-teal-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-teal-600 transition">
              Edukasi
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Pelajari tentang HPV, kanker serviks, dan pentingnya vaksinasi
              untuk pencegahan dini
            </p>
          </a>

          <a
            href="/portal/lokasi"
            className="group p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-200">
            <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition">
              <svg
                className="w-8 h-8 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-emerald-600 transition">
              Lokasi Vaksinasi
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Temukan lokasi vaksinasi terdekat dari rumah atau tempat kerja
              Anda
            </p>
          </a>

          <a
            href="/portal/jadwal"
            className="group p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-200">
            <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition">
              <svg
                className="w-8 h-8 text-teal-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-teal-600 transition">
              Jadwal Vaksinasi
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Lihat jadwal vaksinasi tersedia dan daftar untuk mendapatkan
              vaksinasi HPV
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
