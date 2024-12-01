"use client";
import { useState } from "react";

export default function LoginPage() {
  // const url = process.env.SERVER_URL;
  // const url = "localhost:3000/api/auth/token";
  const url = "http://localhost:3000/api/auth";

  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("12345678");
  // const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    console.log("POST = ", username, password);

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.result.token); // Lưu token vào localStorage
      alert("Đăng nhập thành công");
    } else {
      alert(data.message || "Đăng nhập thất bại");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
      <h1 className="text-2xl font-semibold text-center mb-6">Đăng Nhập</h1>

      <p className="text-red-500 text-center mb-4">ERROR</p>

      <form>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          onClick={handleLogin}
          className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Log in
        </button>
      </form>
    </div>
  );
}
