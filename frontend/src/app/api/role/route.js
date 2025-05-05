// src/app/api/role/route.js

  export async function GET() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/role`);
      const roles = await res.json();
  
      return new Response(JSON.stringify(roles), {
        headers: { 'Content-Type': 'application/json' },
      });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Gagal mengambil data role' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  // route untuk tambah data
  export async function POST(request) {
    try {
      const body = await request.json();
  
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/role`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error('Error response from server:', errorData);
        throw new Error(errorData.error || 'Failed to add role');
      }
  
      const data = await res.json();
  
      return new Response(JSON.stringify(data), {
        status: res.status,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Error POST role:', error);
      return new Response(JSON.stringify({ error: 'Gagal menambahkan role' }), {
        status: 500,
      });
    }
  }

  // Route untuk update data
  export async function PUT(request, { params }) {
    try {
      const body = await request.json();
      const { id } = params;

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/role/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error('Error response from server:', errorData);
        throw new Error(errorData.error || 'Failed to update role');
      }

      const data = await res.json();

      return new Response(JSON.stringify(data), {
        status: res.status,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Error PUT role:', error);
      return new Response(JSON.stringify({ error: 'Gagal mengupdate role' }), {
        status: 500,
      });
    }
  }
  
  