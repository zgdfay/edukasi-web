import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Users } from 'lucide-react';

// TODO: Integrate with database/API untuk data jadwal vaksinasi
const jadwalVaksinasi = [
  {
    id: 1,
    lokasi: 'Puskesmas Jakarta Pusat',
    tanggal: '2024-01-15',
    waktu: '09:00 - 12:00',
    kuota: 50,
    tersedia: 30,
  },
  {
    id: 2,
    lokasi: 'Rumah Sakit Umum Daerah',
    tanggal: '2024-01-16',
    waktu: '10:00 - 14:00',
    kuota: 100,
    tersedia: 75,
  },
  {
    id: 3,
    lokasi: 'Puskesmas Jakarta Pusat',
    tanggal: '2024-01-20',
    waktu: '09:00 - 12:00',
    kuota: 50,
    tersedia: 50,
  },
  {
    id: 4,
    lokasi: 'Klinik Kesehatan Sejahtera',
    tanggal: '2024-01-22',
    waktu: '08:00 - 11:00',
    kuota: 30,
    tersedia: 0,
  },
];

export default function JadwalPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 sm:py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-primary">Jadwal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Jadwal Vaksinasi HPV
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lihat jadwal vaksinasi tersedia dan pilih waktu yang sesuai untuk
            Anda
          </p>
        </div>

        {/* Jadwal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jadwalVaksinasi.map((jadwal) => {
            const formattedDate = new Date(jadwal.tanggal).toLocaleDateString(
              'id-ID',
              {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }
            );

            return (
              <Card
                key={jadwal.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-transform">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {jadwal.lokasi}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-muted-foreground shrink-0" />
                      <p className="text-muted-foreground">{formattedDate}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-muted-foreground shrink-0" />
                      <p className="text-muted-foreground">{jadwal.waktu}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-muted-foreground shrink-0" />
                      <p className="text-muted-foreground">
                        {jadwal.kuota} slot
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}
