import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BookOpen, MapPin, Calendar } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Edukasi',
    description:
      'Pelajari tentang HPV, kanker serviks, dan pentingnya vaksinasi untuk pencegahan dini',
    href: '/portal/edukasi',
    icon: BookOpen,
    color: 'primary',
  },
  {
    id: 2,
    title: 'Lokasi Vaksinasi',
    description:
      'Temukan lokasi vaksinasi terdekat dari rumah atau tempat kerja Anda',
    href: '/portal/lokasi',
    icon: MapPin,
    color: 'accent',
  },
  {
    id: 3,
    title: 'Jadwal Vaksinasi',
    description:
      'Lihat jadwal vaksinasi tersedia dan daftar untuk mendapatkan vaksinasi HPV',
    href: '/portal/jadwal',
    icon: Calendar,
    color: 'primary',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-primary">Layanan</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Layanan Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Akses informasi lengkap tentang HPV dan vaksinasi kanker serviks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const isPrimary = service.color === 'primary';

            return (
              <Link key={service.id} href={service.href}>
                <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border cursor-pointer">
                  <CardHeader>
                    <div
                      className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${
                        isPrimary
                          ? 'bg-primary/10 text-primary group-hover:bg-primary/20'
                          : 'bg-accent/10 text-accent group-hover:bg-accent/20'
                      } transition-colors group-hover:scale-110`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle
                      className={`group-hover:transition-colors ${
                        isPrimary
                          ? 'group-hover:text-primary'
                          : 'group-hover:text-accent'
                      }`}>
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
