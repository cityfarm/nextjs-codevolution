"use client";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <div>
      <h1>About page</h1>
      <button onClick={()=>router.push("/")} className="btn btn-primary">Go Home</button>
    </div>
  );
}
