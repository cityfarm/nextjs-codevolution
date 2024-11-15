import { NextResponse } from "next/server";

export const users = [
  { id: 1, name: "John" },
  { id: 2, name: "James" },
];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const user = await request.json();
  const newUser = {
    id: users.length + 1,
    name: user.name,
  };

  users.push(newUser);

  return NextResponse.json(newUser, { status: 201 });
}
