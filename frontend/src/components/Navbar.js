// src/components/Navbar.tsx
// import { FaHome, FaCalendarAlt, FaMoneyBill, FaInfoCircle, FaComments, FaVideo } from 'react-icons/fa';

export default function Navbar() {
  return (
    <aside className="w-64 bg-white border-r border-green-700 min-h-screen px-4 py-6">
      {/* Logo */}
      <div className="mb-8 text-center font-bold text-xl text-blue-900">Si Masjid</div>

      {/* Menu */}
      <nav className="space-y-4 text-gray-700">
        {/* <MenuItem icon={<FaHome />} label="Dashboard" active />
        <MenuItem icon={<FaCalendarAlt />} label="Jadwal dan acara" />
        <MenuItem icon={<FaMoneyBill />} label="Keuangan" />
        <MenuItem icon={<FaInfoCircle />} label="Informasi" />
        <MenuItem icon={<FaComments />} label="Forum Diskusi" />
        <MenuItem icon={<FaVideo />} label="Live Streaming" badge="LIVE" /> */}
      </nav>
    </aside>
  );
}

// function MenuItem({ icon, label, active = false, badge }) {
//   return (
//     <div
//       className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer ${
//         active ? 'bg-green-100 text-green-700 font-semibold' : 'hover:bg-gray-100'
//       }`}
//     >
//       <span className="text-lg">{icon}</span>
//       <span className="flex-1">{label}</span>
//       {badge && (
//         <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
//           {badge}
//         </span>
//       )}
//     </div>
//   );
// }
