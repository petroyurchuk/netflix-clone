"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BsFillArrowLeftSquareFill as LeftArrowIcon } from "react-icons/bs";

const GoBack: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <LeftArrowIcon
        className="w-4 md:w-10 text-white text-4xl cursor-pointer hover:opacity-80 transition"
        onClick={() => {
          router.back();
        }}
      />
    </>
  );
};
export default GoBack;
