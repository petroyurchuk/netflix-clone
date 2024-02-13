"use client";
import React from "react";

type NavbarItemProps = {
  label: string;
  active: boolean;
  path: string;
  handleClick: (newPath: string) => void;
};
const NavbarItem: React.FC<NavbarItemProps> = ({
  label,
  path,
  active,
  handleClick,
}) => {
  return (
    <li
      onClick={() => handleClick(path)}
      className={`font-bold ${active ? "cursor-default border-b-2 pb-[1px]" : "text-gray-100/75 hover:text-white cursor-pointer transition"}`}
    >
      {label}
    </li>
  );
};
export default NavbarItem;
