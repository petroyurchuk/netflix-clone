"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BgProvider from "@/components/BgProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Input from "@/components/Input";

type VariantType = "login" | "register";
type FormFieldsType = {
  name: string;
  email: string;
  password: string;
};

const AuthPage: React.FC = () => {
  const router = useRouter();
  const [variant, setVariant] = React.useState<VariantType>("login");
  const [formFields, setFormFields] = React.useState<FormFieldsType>({
    name: "",
    email: "",
    password: "",
  });

  const handleVariantChange = () => {
    setVariant((prevVariant) =>
      prevVariant === "login" ? "register" : "login"
    );
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      };
    });
  };
  const login = () => {};
  const register = () => {};

  return (
    <BgProvider removeBgOnMobile>
      <nav className="px-4 mg:px-16 py-6">
        <Image
          src={"/images/logo.svg"}
          className="h-24 w-36 cursor-pointer"
          width={100}
          height={100}
          alt="logo"
          onClick={() => router.push("/")}
        />
      </nav>

      <div className="flex justify-center">
        <div className="bg-black/70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
          <h2>{variant === "login" ? "Увійти" : "Зареєструватися"}</h2>
          <form className="flex flex-col gap-4">
            {variant === "register" && (
              <Input
                id="name"
                type="text"
                label="Ім'я"
                name="name"
                value={formFields.name}
                onChange={handleChange}
              />
            )}
            <Input
              id="email"
              type="email"
              label="Email"
              name="email"
              value={formFields?.email}
              onChange={handleChange}
            />
            <Input
              id="pass"
              type="password"
              label="Пароль"
              name="password"
              value={formFields?.password}
              onChange={handleChange}
            />
            <button
              className="bg-red-600 text-white rounded-md w-full mt-2 hover:bg-red-700 transition py-3"
              type="submit"
            >
              {variant === "login" ? "Увійти" : "Зареєструватися"}
            </button>
          </form>
          <div className="flex items-center gap-4 mt-8 justify-center">
            <div
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              onClick={() => {
                console.log("Google signed in");
              }}
            >
              <FaGoogle size={32} />
            </div>
            <div
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              onClick={() => {
                console.log("Google signed in");
              }}
            >
              <FaGithub size={32} />
            </div>
          </div>
          <p className="text-neutral-500 mt-12 text-center">
            {variant === "login" ? "Уперше на Netflix?" : "Уже маєш акаунт?"}
            <span
              className="text-white ml-1 cursor-pointer hover:underline transition"
              onClick={handleVariantChange}
            >
              {variant === "login" ? "Зареєструватися" : "Увійти"}
            </span>
          </p>
        </div>
      </div>
    </BgProvider>
  );
};
export default AuthPage;
