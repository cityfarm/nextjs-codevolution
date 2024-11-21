const url = "https://jsonplaceholder.typicode.com/todos";
const getTodoList = async () => {
  const res = await fetch(url);

  return res.json();
};

export default async function Todos() {
  const todoList = await getTodoList();
  return (
    <div>
      <h1>This is To Do page</h1>
      {todoList.map((todo: { id: string; title: string }) => (
        <h3>{todo.id}. {todo.title}</h3>
      ))}
    </div>
  );
}
