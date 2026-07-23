"use client";

import { useState } from "react";
import MenuItems from "./MenuItems";
import { Category, Course } from "@prisma/client";

export default function Menu({
  categories,
}: {
  categories: ({
    courses: Course[];
  } & Category)[];
}) {
  const [menuShow, setMenuShow] = useState(false);
  const handleMenu = () => {
    setMenuShow(true);
  };
  return (
    <>
      <div
        className={`${
          menuShow ? "absolute" : "hidden"
          // Check after finish
        } -bottom-[1000%] left-0 right-0 top-0 bg-black/40`}
        onClick={() => setMenuShow(false)}
      />
      <button
        type="button"
        className="text-2xl text-lightGray dark:text-white"
        onClick={(e) => {
          e.preventDefault();
          handleMenu();
        }}
        id="menu-btn"
      >
        <i className="bi bi-list"></i>
      </button>
      {/* Menu */}
      <div
        id="menu"
        className={`${
          menuShow ? "right-0" : "-right-full"
        } fixed overflow-y-auto top-0 z-[50] h-screen w-[80%] max-w-[250px] bg-white transition-all dark:bg-gray-900`}
      >
        <MenuItems categories={categories} setMenuShow={setMenuShow} />
      </div>
    </>
  );
}
