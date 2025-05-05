// src/app/role/create/page.js

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateRolePage() {
  const [roleName, setRoleName] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/role`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role_name: roleName }),
      });

      if (res.ok) {
        alert('Role berhasil ditambahkan!');
        router.push('/role');
      } else {
        const error = await res.json();
        alert('Gagal menambahkan role: ' + error.message);
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
      <h1 className="text-2xl font-bold mb-6">Tambah Role Baru</h1>
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
