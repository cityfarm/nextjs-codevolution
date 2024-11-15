/*
  import { users } from "../route";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const user = users.find((user) => user.id === parseInt(id));

  return Response.json(user);
}
  */

import { users } from "../route";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params; // Không cần `await` vì `params` không phải Promise.

  // Tìm người dùng dựa trên ID
  const user = users.find((user) => user.id === parseInt(id, 10));

  if (!user) {
    // Nếu không tìm thấy người dùng, trả về lỗi 404
    return new Response(
      JSON.stringify({ error: "User not found" }),
      { status: 404, headers: { "Content-Type": "application/json" } }
    );
  }

  // Trả về thông tin người dùng
  return new Response(JSON.stringify(user), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

