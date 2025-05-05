// app/layout.tsx
import './globals.css'; // Pastikan CSS global di-import di sini

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Si Masjid',
  description: 'Sistem Informasi Tempat Ibadah',
};

// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <Header />
        {/* Main Layout: Konten kiri + Sidebar kanan */}
        <div className="flex flex-1">
          {/* Sidebar kanan */}
          <Navbar />
          {/* Konten kiri */}
          <main className="flex-1 p-4 bg-white text-gray-800">
            {children}
          </main>
        </div>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

