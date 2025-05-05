// src/app/role/detail/[id]/page.js

'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function DetailRolePage() {
  const { id } = useParams();
  const router = useRouter();
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/role/${id}`);
        if (!res.ok) {
          throw new Error('Role not found');
        }
        const data = await res.json();
        setRole(data);
      } catch (err) {
        console.error(err);
        alert('Gagal mengambil data role.');
        router.push('/role');
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchRole();
  }, [id]);

  if (loading) return <p className="p-10">Memuat data role...</p>;

  if (!role) return <p className="p-10">Data role tidak ditemukan.</p>;

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-2xl font-bold mb-6">Detail Role</h1>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md">
        <p className="mb-4"><strong>ID:</strong> {role.role_id}</p>
        <p className="mb-4"><strong>Nama Role:</strong> {role.role_name}</p>
        <button
          onClick={() => router.push('/role')}
          className="mt-6 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
        >
          Kembali
        </button>
      </div>
    </div>
  );
}
