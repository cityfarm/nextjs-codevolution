import { revalidatePath } from "next/cache";

type MockUser = {
  id: number;
  name: string;
};

export default async function MockUsers() {
  const url = "https://6737476eaafa2ef22233436e.mockapi.io/users";

  const response = await fetch(url);
  //const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const users = await response.json();

  async function addUser(formData: FormData) {
    "use server";

    const name = formData.get("name");
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //Authorization: "Bearer YOUR_TOKEN",
      },
      body: JSON.stringify({ name }),
    });
    revalidatePath("mock-users");
    const newUser = await res.json();
    console.log("succeed added: ",newUser);
  }

  return (
    <div className="py-10">
      <form action={addUser} className="mb-4">
        <input
          type="text"
          name="name"
          required
          className="border p-2 mr-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add user
        </button>
      </form>
      <div className="grid grid-cols-4 gap-4 py-10">
        {users.map((user: MockUser) => (
          <div
            key={user.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
}
