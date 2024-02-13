"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import NavbarItem from "@/components/NavbarItem";

type NavbarProps = {
  username?: string;
};

enum NavbarLinks {
  "/home" = "Головна",
  "/movies" = "Фільми",
  "/favorites" = "Улюблені",
}

const Navbar: React.FC<NavbarProps> = ({ username }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (newPath: string) => {
    router.push(newPath);
  };
  return (
    <nav className="w-full fixed  z-40 ">
      {username ? (
        <div className="px-4 md:px-16 py-6 flex items-center justify-between transition duration-500">
          <Image
            src={"/images/logo.svg"}
            className="h-24 w-36 cursor-pointer"
            width={100}
            height={100}
            alt="logo"
            onClick={() => router.push("/home")}
          />
          <ul className="ml-8 gap-6 hidden lg:flex">
            {Object.entries(NavbarLinks).map(([path, label]) => (
              <NavbarItem
                key={path}
                label={label}
                path={path}
                active={pathname === path}
                handleClick={handleNavClick}
              />
            ))}
          </ul>
          <div className="flex ml-auto gap-7 items-center">
            <div className="flex  items-center gap-4">
              <Image
                className="h-12 w-12 rounded-full"
                src="/images/devbro.png"
                width={75}
                height={75}
                alt="avatar"
              />
              <button
                className="flex items-center bg-red-600 py-1 px-4 text-white font-semibold rounded-[4px]"
                onClick={() => {
                  console.log("Logged out");
                }}
              >
                Вийти
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-4 md:px-16 py-6 flex items-center justify-between transition duration-500">
          <Image
            src={"/images/logo.svg"}
            className="h-24 w-36 "
            width={100}
            height={100}
            alt="logo"
          />
          <button
            className="flex items-center bg-red-600 py-1 px-4 text-white font-semibold hover:bg-red-700 transition"
            onClick={() => router.push("/auth")}
          >
            Увійти
          </button>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
