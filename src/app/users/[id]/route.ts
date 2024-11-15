import { users } from "../route";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id  = (await params).id;
  const user = users.find((user) => user.id === parseInt(id));
  return Response.json(user);
}

/*
export default async function Page({
  params,
}: {  params: Promise<{ slug: string }>})
 {
  const slug = (await params).slug
  return 
  <div>My Post: {slug}</div>
}
*/