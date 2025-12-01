'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, Shield, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login:', { email, password });
  };

  return (
    <div className="w-full max-w-md px-4">
      <Card className="border-border shadow-lg">
        <CardHeader className="space-y-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shield className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">
            Login Admin
          </CardTitle>
          <CardDescription className="text-base">
            Masuk ke dashboard admin untuk mengelola konten, lokasi, dan jadwal
            vaksinasi
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-foreground pb-2 block">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password" className="text-foreground pb-2 block">
                Kata Sandi
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Masukkan kata sandi"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            <Button type="submit" className="w-full font-semibold" size="lg">
              Masuk
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </form>
          <div className="mt-6 pt-6 border-t border-border">
            <Link
              href="/portal"
              className="flex items-center justify-center text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
              Kembali ke beranda
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
