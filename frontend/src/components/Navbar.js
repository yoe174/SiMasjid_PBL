// // src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Banknote, Building2, Calendar, HandCoins,House, Newspaper, Notebook, UserCircle, UserCog, Youtube } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const menuItems = [
    { icon: <House/>, label: 'Dashboard', href: '/' },
    { icon: <Banknote/>, label: 'Keuangan', href: '/keuangan' },
    { icon: <Newspaper/>, label: 'Informasi', href: '/informasi' },
    { icon: <Calendar/>, label: 'Kegiatan', href: '/kegiatan' },
    { icon: <Notebook/>, label: 'Reservasi', href: '/reservasi' },
    { icon: <Building2/>, label: 'Tempat Reservasi', href: '/tempat-reservasi' },
    { icon: <HandCoins/>, label: 'Donasi', href: '/donasi' },
    { icon: <Youtube/>, label: 'Tayangan', href: '/live', badge: 'LIVE' },
    { icon: <UserCircle/>, label: 'Admin', href: '/user' },
    { icon: <UserCog/>, label: 'Role', href: '/role' },
  ];

  return (
    <aside className="w-64 bg-white border-l border-green-700 min-h-full px-4 py-6">
      <div className="mb-8 text-center font-bold text-xl text-blue-900">Si Masjid</div>
      <nav className="space-y-2 text-gray-700">
        {menuItems.map((item) => (
          <MenuItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
            active={pathname === item.href}
            badge={item.badge}
          />
        ))}
      </nav>
    </aside>
  );
}

function MenuItem({ icon, label, href, active = false, badge }) {
  return (
    <Link href={href}>
      <div
        className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-colors ${
          active
            ? 'bg-green-100 text-green-700 font-semibold'
            : 'hover:bg-gray-100'
        }`}
      >
        <span className="text-lg">{icon}</span>
        <span className="flex-1">{label}</span>
        {badge && (
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </div>
    </Link>
  );
}
