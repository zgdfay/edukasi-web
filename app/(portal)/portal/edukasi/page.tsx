import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertCircle, Syringe, Heart, BookOpen, CheckCircle2 } from 'lucide-react';

const educationTopics = [
  {
    id: 1,
    icon: Shield,
    title: 'Apa itu HPV?',
    description: 'Human Papillomavirus (HPV) adalah virus yang sangat umum dan dapat menyebabkan berbagai jenis kanker, termasuk kanker serviks.',
    content: 'Sebagian besar infeksi HPV tidak menimbulkan gejala dan hilang dengan sendirinya, tetapi beberapa jenis HPV dapat menyebabkan kanker serviks. HPV ditularkan melalui kontak kulit ke kulit, terutama melalui aktivitas seksual.',
    color: 'primary',
  },
  {
    id: 2,
    icon: AlertCircle,
    title: 'Kanker Serviks',
    description: 'Kanker serviks adalah kanker yang terjadi pada leher rahim (serviks).',
    content: 'Kanker ini biasanya berkembang perlahan dan dapat dideteksi melalui skrining rutin seperti Pap smear atau tes HPV. Vaksinasi HPV adalah cara terbaik untuk mencegah kanker serviks sebelum terjadi.',
    color: 'accent',
  },
  {
    id: 3,
    icon: Syringe,
    title: 'Pentingnya Vaksinasi',
    description: 'Vaksinasi HPV dapat mencegah infeksi dari jenis HPV yang paling berisiko menyebabkan kanker serviks.',
    content: 'Vaksin ini paling efektif jika diberikan sebelum seseorang terpapar virus, idealnya pada usia remaja atau dewasa muda. Vaksinasi HPV direkomendasikan untuk remaja berusia 11-12 tahun dan dapat diberikan mulai usia 9 tahun.',
    color: 'primary',
  },
  {
    id: 4,
    icon: Heart,
    title: 'Gejala dan Tanda',
    description: 'Kebanyakan infeksi HPV tidak menimbulkan gejala, tetapi beberapa dapat menyebabkan kutil kelamin.',
    content: 'Gejala kanker serviks pada tahap awal mungkin tidak terlihat. Gejala yang mungkin muncul termasuk pendarahan abnormal, nyeri panggul, atau keputihan yang tidak normal. Penting untuk melakukan skrining rutin.',
    color: 'accent',
  },
  {
    id: 5,
    icon: BookOpen,
    title: 'Pencegahan',
    description: 'Selain vaksinasi, ada beberapa cara untuk mengurangi risiko infeksi HPV.',
    content: 'Gunakan kondom saat berhubungan seksual, lakukan skrining rutin (Pap smear), dan hindari merokok. Kombinasi vaksinasi dan skrining rutin adalah cara terbaik untuk mencegah kanker serviks.',
    color: 'primary',
  },
  {
    id: 6,
    icon: CheckCircle2,
    title: 'Skrining Rutin',
    description: 'Skrining rutin sangat penting untuk mendeteksi perubahan sel serviks sejak dini.',
    content: 'Wanita berusia 21-65 tahun disarankan melakukan Pap smear setiap 3 tahun, atau tes HPV setiap 5 tahun. Deteksi dini dapat membantu mencegah perkembangan kanker serviks.',
    color: 'accent',
  },
];

export default function EdukasiPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 sm:py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Edukasi HPV dan Kanker Serviks
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pelajari informasi penting tentang HPV, kanker serviks, dan cara pencegahannya melalui vaksinasi
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationTopics.map((topic) => {
            const Icon = topic.icon;
            const isPrimary = topic.color === 'primary';
            
            return (
              <Card
                key={topic.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    isPrimary 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-accent/10 text-accent'
                  } group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {topic.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {topic.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {topic.content}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}

