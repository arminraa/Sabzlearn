"use client";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import DropDownItem from "./DropDownItem";
import { useState } from "react";
import SearchInput from "../SearchInput";
import DarkModeButton from "../DarkModeButton";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  type Items = {
    id: number;
    name: string;
    sub: string[];
  }[];

  const items: Items = [
    {
      id: 1,
      name: "فرانت اند",
      sub: ["HTML", "CSS", "JS"],
    },
    {
      id: 2,
      name: "بک اند",
      sub: ["PHP", "NestJs", ".Net"],
    },
    {
      id: 3,
      name: "اندروید",
      sub: ["Kotlin", "React Native", "Java"],
    },
  ];
  const open = (id: number) => {
    setOpenDropdown(id);
  };
  const close = () => {
    setOpenDropdown(null);
  };
  return (
    <>
      <header className="bg-white dark:bg-gray-900 sticky top-0 right-0 left-0 w-screen shadow-md dark:shadow-xl py-4 z-20">
        <div className="container lg:max-w-[1790px]">
          <div className="flexRow gap-2">
            <div className="lg:hidden w-5 h-5 flexCenter bg-lightGray/10 p-6 rounded-full">
              <Menu />
            </div>

            <Link href="#" className="sm:mx-auto lg:mx-0">
              <Image
                src="/images/logo.webp"
                width={90}
                height={300}
                alt="Logo"
                priority
              />
            </Link>
            <div className="hidden lg:flexCenter gap-4 lg:ml-auto lg:pr-4">
              {items &&
                items.map((item) => (
                  <DropDownItem
                    key={item.id}
                    item={item}
                    onMouseEnter={() => open(item.id)}
                    onMouseLeave={close}
                    isOpen={openDropdown === item.id ? true : false}
                  />
                ))}
            </div>

            <div className="flexCenter gap-4">
              <SearchInput styles="hidden lg:block" />
              <DarkModeButton styles="hidden lg:flexCenter" />
              <div className="w-5 h-5 flexCenter p-6 bg-lightGray/10 rounded-full">
                <Link href="#" className="text-2xl text-lightGray dark:text-white">
                  <i className="bi bi-bag"></i>
                </Link>
              </div>
              <div className="lg:hidden w-5 h-5 flexCenter p-6 bg-lightGray/10 rounded-full">
                <Link href="#" className="text-2xl text-lightGray dark:text-white">
                  <i className="bi bi-box-arrow-right"></i>
                </Link>
              </div>
              <button className="hidden lg:flexCenter bg-lightBlue text-white px-5 font-bold py-[10px] rounded-3xl gap-1">
                <i className="bi bi-person text-2xl"></i>
                ورود / عضویت
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
