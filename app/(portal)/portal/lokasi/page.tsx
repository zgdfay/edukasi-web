import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Calendar } from 'lucide-react';

// TODO: Integrate with database/API untuk data lokasi vaksinasi
const lokasiVaksinasi = [
  {
    id: 1,
    nama: 'Puskesmas Jakarta Pusat',
    alamat: 'Jl. Kesehatan No. 123, Jakarta Pusat',
    telepon: '021-12345678',
    jamOperasional: '08:00 - 16:00',
  },
  {
    id: 2,
    nama: 'Rumah Sakit Umum Daerah',
    alamat: 'Jl. Rumah Sakit No. 456, Jakarta Selatan',
    telepon: '021-87654321',
    jamOperasional: '24 Jam',
  },
  {
    id: 3,
    nama: 'Klinik Kesehatan Sejahtera',
    alamat: 'Jl. Klinik No. 789, Jakarta Barat',
    telepon: '021-11223344',
    jamOperasional: '09:00 - 17:00',
  },
  {
    id: 4,
    nama: 'Rumah Sakit Cipto Mangunkusumo',
    alamat: 'Jl. Diponegoro No. 71, Jakarta Pusat',
    telepon: '021-1500136',
    jamOperasional: '24 Jam',
  },
];

export default function LokasiPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 sm:py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-primary">Lokasi</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Lokasi Vaksinasi HPV
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Temukan lokasi vaksinasi terdekat dari rumah atau tempat kerja Anda
          </p>
        </div>

        {/* Lokasi Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lokasiVaksinasi.map((lokasi) => (
            <Card
              key={lokasi.id}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-transform">
                  <MapPin className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {lokasi.nama}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      {lokasi.alamat}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground shrink-0" />
                    <p className="text-muted-foreground">{lokasi.telepon}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground shrink-0" />
                    <p className="text-muted-foreground">
                      {lokasi.jamOperasional}
                    </p>
                  </div>
                </div>
                <Button
                  asChild
                  variant="default"
                  className="w-full font-semibold mt-4">
                  <Link
                    href={`/portal/jadwal?lokasi=${lokasi.id}`}
                    className="flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Lihat Jadwal
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
