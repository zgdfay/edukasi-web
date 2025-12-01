import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    id: 1,
    question: 'Apa itu vaksinasi HPV dan mengapa penting?',
    answer:
      'Vaksinasi HPV adalah cara terbaik untuk mencegah infeksi Human Papillomavirus (HPV) yang dapat menyebabkan kanker serviks. Vaksin ini paling efektif jika diberikan sebelum seseorang terpapar virus, idealnya pada usia remaja atau dewasa muda. Vaksinasi HPV dapat mencegah hingga 90% kasus kanker serviks.',
  },
  {
    id: 2,
    question: 'Siapa yang sebaiknya mendapatkan vaksinasi HPV?',
    answer:
      'Vaksinasi HPV direkomendasikan untuk remaja berusia 11-12 tahun dan dapat diberikan mulai usia 9 tahun. Vaksin juga dapat diberikan kepada orang dewasa hingga usia 26 tahun. Wanita dan pria dapat menerima vaksinasi HPV untuk mencegah berbagai jenis kanker yang terkait dengan HPV.',
  },
  {
    id: 3,
    question: 'Berapa kali vaksinasi HPV harus dilakukan?',
    answer:
      'Vaksinasi HPV biasanya diberikan dalam 2-3 dosis tergantung usia. Untuk remaja berusia 9-14 tahun, biasanya diberikan 2 dosis dengan jarak 6-12 bulan. Untuk usia 15 tahun ke atas, diberikan 3 dosis dengan jadwal 0, 1-2 bulan, dan 6 bulan.',
  },
  {
    id: 4,
    question: 'Apakah vaksinasi HPV aman?',
    answer:
      'Ya, vaksinasi HPV sangat aman dan telah digunakan di seluruh dunia selama bertahun-tahun. Vaksin ini telah melalui uji klinis yang ketat dan disetujui oleh badan kesehatan internasional. Efek samping yang mungkin terjadi biasanya ringan, seperti nyeri di tempat suntikan, kemerahan, atau demam ringan.',
  },
  {
    id: 5,
    question: 'Berapa biaya vaksinasi HPV?',
    answer:
      'Biaya vaksinasi HPV bervariasi tergantung lokasi dan fasilitas kesehatan. Beberapa program pemerintah menyediakan vaksinasi gratis atau bersubsidi untuk kelompok tertentu. Hubungi fasilitas kesehatan terdekat untuk informasi lebih lanjut tentang biaya dan program yang tersedia.',
  },
  {
    id: 6,
    question: 'Apakah vaksinasi HPV menggantikan skrining rutin?',
    answer:
      'Tidak, vaksinasi HPV tidak menggantikan skrining rutin seperti Pap smear atau tes HPV. Vaksinasi dan skrining rutin bekerja bersama untuk memberikan perlindungan terbaik. Bahkan setelah vaksinasi, wanita tetap disarankan untuk melakukan skrining rutin sesuai rekomendasi dokter.',
  },
  {
    id: 7,
    question: 'Di mana saya bisa mendapatkan vaksinasi HPV?',
    answer:
      'Vaksinasi HPV tersedia di berbagai fasilitas kesehatan seperti puskesmas, rumah sakit, klinik, dan praktik dokter. Anda dapat menggunakan fitur "Lokasi Vaksinasi" di portal ini untuk menemukan fasilitas kesehatan terdekat yang menyediakan vaksinasi HPV.',
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="text-sm font-medium text-primary">
              Frequently Asked Questions
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Intro */}
          <div className="lg:sticky lg:top-24">
            {/* Title */}
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground leading-tight">
              Pertanyaan tentang Vaksinasi HPV
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Semua pertanyaan Anda tentang vaksinasi HPV, kanker serviks, dan
              pencegahannya dijawab di sini. Jika masih ada pertanyaan lain atau
              butuh bantuan lebih lanjut, jangan ragu untuk{' '}
              <span className="text-primary font-semibold">hubungi kami</span>.
            </p>
          </div>

          {/* Right Column - FAQ List */}
          <div className="lg:pl-8">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={`item-${faq.id}`}
                  className="border-b border-border py-4">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-2 pr-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pr-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
