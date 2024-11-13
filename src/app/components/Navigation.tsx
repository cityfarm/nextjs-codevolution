"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav>
      <Link
        href="/"
        className={pathname === "/" ? "font-bold mr-4" : "mr-4 text-blue-500"}
      >
        Home
      </Link>

      <Link
        href="/products"
        className={
          pathname === "/products" ? "font-bold mr-4" : "mr-4 text-blue-500"
        }
      >
        Product
      </Link>

      <Link
        href="/about"
        className={
          pathname === "/about" ? "font-bold mr-4" : "mr-4 text-blue-500"
        }
      >
        About
      </Link>

      <Link
        href="/login"
        className={
          pathname === "/login" ? "font-bold mr-4" : "mr-4 text-blue-500"
        }
      >
        Login
      </Link>
    </nav>
  );
};
