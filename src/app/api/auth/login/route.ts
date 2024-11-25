import { NextResponse } from 'next/server';

export async function POST(request) {
  const { username, password } = await request.json();

  try {
    const response = await fetch('https://backend.example.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const data = await response.json();
      return NextResponse.json({ error: data.message || 'Đăng nhập thất bại' }, { status: 401 });
    }

    const data = await response.json();

    const res = NextResponse.json({ message: 'Đăng nhập thành công' });
    res.cookies.set('token', data.token, { httpOnly: true, path: '/', secure: true });
    return res;
  } catch (err) {
    return NextResponse.json({ error: 'Lỗi server' }, { status: 500 });
  }
}
