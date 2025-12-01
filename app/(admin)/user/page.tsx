'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Plus, Edit, Trash2 } from 'lucide-react';

// TODO: Integrate with database/API untuk data user
const users = [
  {
    id: 1,
    nama: 'Ahmad Rizki',
    email: 'ahmad.rizki@email.com',
    role: 'User',
    status: 'Aktif',
    tanggalDaftar: '2024-01-15',
  },
  {
    id: 2,
    nama: 'Siti Nurhaliza',
    email: 'siti.nurhaliza@email.com',
    role: 'User',
    status: 'Aktif',
    tanggalDaftar: '2024-01-14',
  },
  {
    id: 3,
    nama: 'Budi Santoso',
    email: 'budi.santoso@email.com',
    role: 'Admin',
    status: 'Aktif',
    tanggalDaftar: '2024-01-10',
  },
  {
    id: 4,
    nama: 'Dewi Lestari',
    email: 'dewi.lestari@email.com',
    role: 'User',
    status: 'Nonaktif',
    tanggalDaftar: '2024-01-08',
  },
  {
    id: 5,
    nama: 'Eko Prasetyo',
    email: 'eko.prasetyo@email.com',
    role: 'User',
    status: 'Aktif',
    tanggalDaftar: '2024-01-05',
  },
];

export default function ManajemenUserPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = users.filter(
    (user) =>
      user.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <main className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Manajemen User
            </h1>
            <p className="text-muted-foreground">
              Kelola data pengguna dan akses mereka ke sistem
            </p>
          </div>
          <Button className="font-semibold">
            <Plus className="h-4 w-4 mr-2" />
            Tambah User
          </Button>
        </div>

        {/* Search and Filter */}
        <Card className="mb-6 border-border">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Cari user berdasarkan nama atau email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Daftar User ({filteredUsers.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                      Nama
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                      Email
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                      Role
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                      Tanggal Daftar
                    </th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-foreground">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="border-b border-border">
                      <td className="py-3 px-4 text-sm text-foreground font-medium">
                        {user.nama}
                      </td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">
                        {user.email}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            user.role === 'Admin'
                              ? 'bg-primary/10 text-primary'
                              : 'bg-muted text-muted-foreground'
                          }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            user.status === 'Aktif'
                              ? 'bg-accent/10 text-accent'
                              : 'bg-destructive/10 text-destructive'
                          }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">
                        {new Date(user.tanggalDaftar).toLocaleDateString(
                          'id-ID',
                          {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          }
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 hover:bg-amber-100 hover:text-amber-600">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

