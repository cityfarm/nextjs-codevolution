import { users } from "../route";

export async function GET(
  _request: Request,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  const user = users.find((user) => user.id === id);

  return Response.json(user);
  
}
