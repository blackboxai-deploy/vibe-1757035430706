import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TACO, Safi - Authentic Mexican Restaurant',
  description: 'Experience the finest authentic Mexican cuisine in the heart of Safi, Morocco. Fresh tacos, traditional flavors, and warm hospitality await you at TACO, Safi.',
  keywords: 'Mexican restaurant, tacos, Safi, Morocco, authentic Mexican food, carnitas, carne asada',
  openGraph: {
    title: 'TACO, Safi - Authentic Mexican Restaurant',
    description: 'Experience the finest authentic Mexican cuisine in the heart of Safi, Morocco.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}