import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, Calendar, BookOpen } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-background pt-16 pb-32 sm:pt-24 sm:pb-40 lg:pt-32 lg:pb-48">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 text-left">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-8">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground mr-2">
                <Shield className="h-3 w-3" />
              </span>
              <span className="text-sm font-medium text-primary tracking-wide">
                Layanan Kesehatan Terpercaya
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6 leading-[1.15]">
              Lindungi Diri dari <br className="hidden lg:block" />
              Kanker Serviks <br className="hidden lg:block" />
              dengan Vaksinasi HPV
            </h1>

            {/* Subtext */}
            <p className="mt-4 max-w-lg text-lg text-muted-foreground sm:max-w-2xl mb-10 leading-relaxed">
              Edukasi tentang HPV dan vaksinasi untuk mencegah kanker serviks.
              Temukan lokasi dan jadwal vaksinasi terdekat Anda.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="shadow-sm">
                <Link href="/portal/jadwal" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Cari Jadwal Vaksinasi
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <Link
                  href="/portal/edukasi"
                  className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Pelajari Lebih Lanjut
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Blob with Image Overlay */}
          <div className="relative mt-16 lg:col-span-6 lg:mt-0 xl:col-span-6">
            <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none aspect-square lg:aspect-auto min-h-[500px]">
              {/* Multiple Blob Backgrounds - Refined */}
              <div className="absolute inset-0 overflow-visible">
                {/* Blob 1 - Top Left - Soft */}
                <div className="absolute top-0 left-0 w-64 h-64 opacity-15 blur-2xl">
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full">
                    <path
                      fill="oklch(0.65 0.12 180)"
                      d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.2,22.9,71.3,34.3C60.4,45.7,49.9,54.9,38.3,62.8C26.7,70.7,14,77.3,0.6,76.3C-12.8,75.2,-24.8,66.6,-36.4,58.3C-48,50,-59.1,42,-68.3,31.4C-77.5,20.8,-84.8,7.6,-83.5,-5.1C-82.2,-17.8,-72.3,-30,-61.7,-40.1C-51.1,-50.2,-39.8,-58.1,-27.9,-66.8C-16,-75.5,-3.5,-85,10,-86.6C23.5,-88.2,30.5,-83.6,44.7,-76.4Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>

                {/* Blob 2 - Top Right - Medium */}
                <div className="absolute top-10 right-10 w-80 h-80 opacity-12 blur-xl">
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full">
                    <path
                      fill="oklch(0.6 0.15 160)"
                      d="M78.5,-89.2C99.1,-70.3,112.1,-42.1,115.8,-13.5C119.5,15.1,113.9,43.1,100.2,64.8C86.5,86.5,64.7,101.9,41.8,110.3C18.9,118.7,-5.1,120.1,-28.1,114.2C-51.1,108.3,-73.1,95.1,-88.2,77.2C-103.3,59.3,-111.5,36.7,-112.1,13.8C-112.7,-9.1,-105.7,-32.3,-94.1,-51.8C-82.5,-71.3,-66.3,-87.1,-47.8,-98.5C-29.3,-109.9,-8.5,-116.9,11.5,-120.1C31.5,-123.3,55.1,-108.1,78.5,-89.2Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>

                {/* Blob 3 - Bottom Left - Small */}
                <div className="absolute bottom-20 left-10 w-56 h-56 opacity-18 blur-2xl">
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full">
                    <path
                      fill="oklch(0.65 0.12 180)"
                      d="M35.2,-58.1C45.1,-50.2,52.4,-39.8,58.1,-28.7C63.8,-17.6,67.9,-5.8,66.2,5.2C64.5,16.2,57,26.4,48.1,35.1C39.2,43.8,28.9,51,17.8,56.2C6.7,61.4,-5.2,64.6,-17.1,63.1C-29,61.6,-40.9,55.4,-50.8,46.5C-60.7,37.6,-68.6,26,-72.8,12.8C-77,-0.4,-77.5,-15.2,-73.4,-27.6C-69.3,-40,-60.6,-50,-50.1,-58.1C-39.6,-66.2,-27.3,-72.4,-14.3,-75.1C-1.3,-77.8,12.3,-77,35.2,-58.1Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>

                {/* Blob 4 - Bottom Right - Large */}
                <div className="absolute bottom-0 right-0 w-72 h-72 opacity-10 blur-3xl">
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full">
                    <path
                      fill="oklch(0.6 0.15 160)"
                      d="M52.3,-72.1C67.1,-63.5,78.1,-50.1,83.8,-35.2C89.5,-20.3,89.9,-3.9,85.5,11.1C81.1,26.1,71.9,39.7,60.2,50.8C48.5,61.9,34.3,70.5,19.1,74.2C3.9,77.9,-12.3,76.7,-27.1,72.1C-41.9,67.5,-55.3,59.5,-65.2,48.5C-75.1,37.5,-81.5,23.5,-82.1,9.1C-82.7,-5.3,-77.5,-20.1,-69.1,-32.3C-60.7,-44.5,-49.1,-54.1,-36.2,-61.1C-23.3,-68.1,-9.1,-72.5,4.8,-75.1C18.7,-77.7,36.5,-78.5,52.3,-72.1Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>

                {/* Blob 5 - Center Back - Subtle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-8 blur-3xl">
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full">
                    <path
                      fill="oklch(0.65 0.12 180)"
                      d="M41.1,-63.2C53.1,-55.8,62.8,-44.9,69.2,-32.5C75.6,-20.1,78.7,-6.2,77.1,7.1C75.5,20.4,69.2,33.1,60.1,43.2C51,53.3,39.1,60.8,26.2,65.1C13.3,69.4,-0.6,70.5,-14.3,68.2C-28,65.9,-41.5,60.2,-52.8,52.1C-64.1,44,-73.2,33.5,-77.5,21.4C-81.8,9.3,-81.3,-4.4,-76.8,-17.1C-72.3,-29.8,-63.8,-41.5,-52.8,-50.2C-41.8,-58.9,-28.3,-64.6,-14.2,-66.8C-0.1,-69,14.6,-67.7,41.1,-63.2Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>
              </div>

              {/* PNG Image Overlay */}
              <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                <img
                  src="/hero/hero-image.svg"
                  alt="Healthcare illustration"
                  className="w-full h-auto object-contain max-h-[500px] drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
