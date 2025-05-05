// 'use client';

// import { useEffect, useState } from 'react';

// export default function RolePage() {
//   const [roles, setRoles] = useState([]);

//   useEffect(() => {
//     fetch('/api/role')
//       .then((res) => res.json())
//       .then((data) => {
//         console.log('Data role yang diterima:', data);
//         if (Array.isArray(data)) {
//           setRoles(data);
//         } else {
//           console.error('Data bukan array:', data);
//         }
//       })
//       .catch((error) => console.error('Error fetching roles:', error));
//   }, []);

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Daftar Role</h2>
//       <ul className="list-disc pl-6">
//         {roles.length > 0 ? (
//           roles.map((role) => (
//             <li key={role.role_id}>
//               {role.role_id} - {role.role_name}
//             </li>
//           ))
//         ) : (
//           <p>No roles found.</p>
//         )}
//       </ul>
//     </div>
//   );
// }

// src/app/role/page.js
'use client';

import { useEffect, useState } from 'react';
import { Eye, Pencil, Trash } from 'lucide-react';
import DataTable from '@/components/DataTable';
import Link from 'next/link';

export default function RolePage() {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/role')
      .then((res) => res.json())
      .then((data) => setRoles(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  // const handleDelete = (id) => {
  //   if (confirm('Yakin ingin menghapus role ini?')) {
  //     // logika hapus
  //     console.log('Hapus user id:', id);
  //   }
  // };

  const columns = [
    { header: 'Id', accessor: 'role_id'},
    { header: 'Nama', accessor: 'role_name' },
    {
      header: 'Aksi',
      accessor: (role) => (
        <div className="flex items-center  gap-3">
          <Link
            href={`/role/detail/${role.role_id}`}
            className="flex items-center text-gray-500 hover:text-gray-800 text-sm gap-1"
          >
            <Eye size={16} /> Detail
          </Link>
          <Link
            href={`/role/edit/${role.role_id}`}
            className="flex items-center text-green-500 hover:text-green-700 text-sm gap-1"
          >
            <Pencil size={16} /> Edit
          </Link>
          <button
            onClick={() => handleDelete(role.role_id)}
            className="flex items-center text-red-400 hover:text-red-600 text-sm gap-1"
          >
            <Trash size={16} /> Hapus
          </button>
        </div>
      ),
    },
  ];

   return (
    
      <div className="min-h-screen p-10 rounded-lg shadow-xl" >
        <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Role</h1>
      <Link
        href="/role/create"
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
      >
        + Tambah Role
      </Link>
    </div>
        <table className="min-w-full">
          <h1 className="text-2xl font-bold mb-4">Role</h1>
          {loading ? (
            <p className="text-gray-500">Memuat data...</p>
          ) : (
            <DataTable data={roles} columns={columns} />
          )}
        </table>
      </div>
    );
}
