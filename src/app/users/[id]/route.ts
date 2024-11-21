export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const url = "https://6737476eaafa2ef22233436e.mockapi.io/users";
  const response = await fetch(url);
  const users = await response.json();
  
  const id = (await params).id; // 'a', 'b', or 'c'
  const user = users.find((user: { id: string }) => user.id === id);
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
