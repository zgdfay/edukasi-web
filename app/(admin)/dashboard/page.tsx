import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Users,
  FileText,
  MapPin,
  Calendar,
  TrendingUp,
  Activity,
} from 'lucide-react';

const stats = [
  {
    id: 1,
    title: 'Total User',
    value: '1,234',
    change: '+12%',
    icon: Users,
    color: 'primary',
  },
  {
    id: 2,
    title: 'Total Konten',
    value: '48',
    change: '+5',
    icon: FileText,
    color: 'accent',
  },
  {
    id: 3,
    title: 'Total Lokasi',
    value: '12',
    change: '+2',
    icon: MapPin,
    color: 'primary',
  },
  {
    id: 4,
    title: 'Jadwal Aktif',
    value: '28',
    change: '+8',
    icon: Calendar,
    color: 'accent',
  },
];

const recentActivities = [
  {
    id: 1,
    action: 'Konten baru ditambahkan',
    item: 'Apa itu HPV?',
    time: '2 jam yang lalu',
  },
  {
    id: 2,
    action: 'Lokasi baru ditambahkan',
    item: 'Puskesmas Jakarta Pusat',
    time: '5 jam yang lalu',
  },
  {
    id: 3,
    action: 'Jadwal diperbarui',
    item: 'Rumah Sakit Umum Daerah',
    time: '1 hari yang lalu',
  },
  {
    id: 4,
    action: 'User baru terdaftar',
    item: '15 user',
    time: '2 hari yang lalu',
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Dashboard
          </h1>
          <p className="text-muted-foreground">
            Selamat datang kembali! Berikut ringkasan aktivitas Anda.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            const isPrimary = stat.color === 'primary';

            return (
              <Card
                key={stat.id}
                className="hover:shadow-lg transition-shadow border-border">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isPrimary
                        ? 'bg-primary/10 text-primary'
                        : 'bg-accent/10 text-accent'
                    }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <TrendingUp className="h-3 w-3 text-accent" />
                    {stat.change} dari bulan lalu
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Aktivitas Terkini
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        {activity.action}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {activity.item}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Aksi Cepat</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="/admin/konten"
                  className="p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors group">
                  <FileText className="h-6 w-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-foreground">
                    Kelola Konten
                  </p>
                </a>
                <a
                  href="/admin/lokasi"
                  className="p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors group">
                  <MapPin className="h-6 w-6 text-accent mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-foreground">
                    Kelola Lokasi
                  </p>
                </a>
                <a
                  href="/admin/jadwal"
                  className="p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors group">
                  <Calendar className="h-6 w-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-foreground">
                    Kelola Jadwal
                  </p>
                </a>
                <a
                  href="/admin/faq"
                  className="p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors group">
                  <Activity className="h-6 w-6 text-accent mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-foreground">
                    Kelola FAQ
                  </p>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
