export default function EdukasiPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Edukasi HPV dan Kanker Serviks</h1>
        
        <div className="space-y-8">
          <section className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Apa itu HPV?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Human Papillomavirus (HPV) adalah virus yang sangat umum dan dapat menyebabkan berbagai jenis kanker, 
              termasuk kanker serviks. Sebagian besar infeksi HPV tidak menimbulkan gejala dan hilang dengan sendirinya, 
              tetapi beberapa jenis HPV dapat menyebabkan kanker serviks.
            </p>
          </section>

          <section className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Kanker Serviks</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Kanker serviks adalah kanker yang terjadi pada leher rahim (serviks). Kanker ini biasanya berkembang 
              perlahan dan dapat dideteksi melalui skrining rutin. Vaksinasi HPV adalah cara terbaik untuk mencegah 
              kanker serviks.
            </p>
          </section>

          <section className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Pentingnya Vaksinasi</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Vaksinasi HPV dapat mencegah infeksi dari jenis HPV yang paling berisiko menyebabkan kanker serviks. 
              Vaksin ini paling efektif jika diberikan sebelum seseorang terpapar virus, idealnya pada usia remaja 
              atau dewasa muda.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

