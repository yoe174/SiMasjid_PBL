// app/layout.tsx
import './globals.css'; // Pastikan CSS global di-import di sini

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Sistem Informasi',
  description: 'Aplikasi Next.js + Laravel',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        {/* Header */}
        <Header />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 p-4">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
