// src/app/role/edit/[id]/page.js

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

export default function EditRolePage() {
  const [roleName, setRoleName] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/role/${id}`);
        if (!res.ok) {
          throw new Error('Role not found');
        }
        const data = await res.json();
        setRoleName(data.role_name);
      } catch (error) {
        console.error(error);
        alert('Gagal mengambil data role.');
      }
    };
    fetchRole();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/role/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role_name: roleName }),
      });

      if (res.ok) {
        alert('Role berhasil diperbarui!');
        router.push('/role');
      } else {
        const error = await res.json();
        alert('Gagal memperbarui role: ' + error.message);
      }
    } catch (err) {
      console.error(err);
      alert('Terjadi kesalahan.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-10 rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-6">Edit Role</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Nama Role
          </label>
          <input
            type="text"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Contoh: Admin, Petugas"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? 'Menyimpan...' : 'Simpan'}
        </button>
      </form>
    </div>
  );
}
