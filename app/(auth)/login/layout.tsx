import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - HPVInsight',
  description: 'Masuk ke akun HPVInsight untuk mengakses layanan',
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      {children}
    </div>
  );
}

