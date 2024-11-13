"use client";

import { useState } from "react";

function Counter() {
  // Khởi tạo state `count` với giá trị ban đầu là 0
  const [count, setCount] = useState(0);

  // Hàm để tăng giá trị của count khi gọi
//   const increment = () => {
//     setCount(count + 1); // Cập nhật count với giá trị mới
//   };

  return (
    <div>
      <p>Giá trị count hiện tại là: {count}</p>
      <button onClick = {() => setCount(count+1)}>Tăng Count</button>
    </div>
  );
}

export default Counter;
