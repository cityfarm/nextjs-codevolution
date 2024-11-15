import { NextResponse } from "next/server";

const url = "https://6737476eaafa2ef22233436e.mockapi.io/users"
const response = await fetch(url);
const users = await response.json();

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
