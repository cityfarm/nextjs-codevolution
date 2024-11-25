export default async function UsersPage() {
    const response = await fetch(`${process.env.SERVER_URL}/api/auth`, {
      cache: 'no-store', // Luôn lấy dữ liệu mới
    });
  
    if (!response.ok) {
      return <div>Lỗi khi tải danh sách người dùng</div>;
    }
  
    const users = await response.json();
    console.log(users);
  
    return (
      <div>
        <h1>Danh sách người dùng</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  