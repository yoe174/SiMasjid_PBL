// 'use client';

// import { Eye, Pencil, Trash } from 'lucide-react';
// import { useEffect, useState } from 'react';

// export default function UsersPage() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('/api/user')
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data)) {
//           setUsers(data);
//         } else {
//           console.error('Data bukan array:', data);
//         }
//       })
//       .catch((error) => console.error('Error fetching data:', error))
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <div className="p-6 bg-green text-gray-800 rounded-md shadow-xl min-h-screen">
//       <h1 className="text-3xl font-semibold mb-6">Admin</h1>

//       {loading ? (
//         <p className="text-gray-500">Memuat data...</p>
//       ) : users.length > 0 ? (
//         <div className="overflow-x-auto rounded-lg shadow">
//           <table className="min-w-full bg-white border border-gray-100 shadow-xl">
//             <thead className="bg-gray-200 text-gray-600 ">
//               <tr>
//                 <th className="py-3 px-4 text-left">id</th>
//                 <th className="py-3 px-4 text-left">Username</th>  
//                 <th className="py-3 px-4 text-left">Role</th>  
//                 <th className="py-3 px-4 text-left">Email</th>
//                 <th className="py-3 px-4 text-left">Password</th>
//                 <th className="py-3 px-4 text-left">Aksi</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, index) => (
//                 <tr
//                   key={user.user_id}
//                   className="hover:bg-gray-100 transition-colors duration-200"
//                 >
//                   <td className="py-2 px-4 border-t">{index + 1}</td>
//                   <td className="py-2 px-4 border-t">{user.name}</td>
//                   <td className="py-2 px-4 border-t">{user.role?.role_name}</td>
//                   <td className="py-2 px-4 border-t">{user.email}</td>
//                   <td className="py-2 px-4 border-t">{user.password}</td>
//                   <td className="py-2 px-4 border-t">
//                     <div className="flex gap-4 items-center">
//                       {/* Detail */}
//                       <button
//                         onClick={() => handleDetail(user.user_id)}
//                         className="flex items-center gap-1 text-gray-400 hover:text-gray-600"
//                         title="Detail"
//                       >
//                         <Eye className="w-4 h-4" />
//                         <span>detail</span>
//                       </button>

//                       {/* Edit */}
//                       <button
//                         onClick={() => handleEdit(user.user_id)}
//                         className="flex items-center gap-1 text-green-400 hover:text-green-600"
//                         title="Edit"
//                       >
//                         <Pencil className="w-4 h-4" />
//                         <span>edit</span>
//                       </button>

//                       {/* Hapus */}
//                       <button
//                         onClick={() => handleDelete(user.user_id)}
//                         className="flex items-center gap-1 text-red-400 hover:text-red-700"
//                         title="Hapus"
//                       >
//                         <Trash className="w-4 h-4" />
//                         <span>hapus</span>
//                       </button>
//                     </div>
//                   </td>

//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <p className="text-gray-500">Tidak ada pengguna ditemukan.</p>
//       )}
//     </div>
//   );
// }

// src/app/user/page.js
'use client';

import { useEffect, useState } from 'react';
import { Eye, Pencil, Trash } from 'lucide-react';
import DataTable from '@/components/DataTable';
import Link from 'next/link';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/user')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = (id) => {
    if (confirm('Yakin ingin menghapus user ini?')) {
      // logika hapus
      console.log('Hapus user id:', id);
    }
  };

  const columns = [
    { header: 'Id', accessor: 'user_id'},
    { header: 'Nama', accessor: 'name' },
    { header: 'Role', accessor: (user) => user.role?.role_name || '-' },
    { header: 'Email', accessor: 'email' },
    {
      header: 'Aksi',
      accessor: (user) => (
        <div className="flex items-center gap-3">
          <Link
            href={`/user/${user.user_id}`}
            className="flex items-center text-gray-500 hover:text-gray-800 text-sm gap-1"
          >
            <Eye size={16} /> Detail
          </Link>
          <Link
            href={`/user/edit/${user.user_id}`}
            className="flex items-center text-green-500 hover:text-green-700 text-sm gap-1"
          >
            <Pencil size={16} /> Edit
          </Link>
          <button
            onClick={() => handleDelete(user.user_id)}
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
      <table className="min-w-full">
        <h1 className="text-2xl font-bold mb-4">Admin</h1>
        {loading ? (
          <p className="text-gray-500">Memuat data...</p>
        ) : (
          <DataTable data={users} columns={columns} />
        )}
      </table>
    </div>
  );
}
