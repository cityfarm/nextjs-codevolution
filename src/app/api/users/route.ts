import { NextResponse } from 'next/server';

export async function GET(request) {
  const token = request.cookies.get('token');

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const response = await fetch('https://backend.example.com/api/users', {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Không thể lấy danh sách người dùng' }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: 'Lỗi server' }, { status: 500 });
  }
}
