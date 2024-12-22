"use client";

import Link from "next/link";
import { useState } from "react";
import MenuItems from "./MenuItems";

export default function Menu() {
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
        } right-0 left-0 -bottom-[1000%] top-0 bg-black/40`}
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
        } transition-all absolute bg-white dark:bg-gray-900 z-[50] top-0 h-screen w-[80%] max-w-[250px]`}
      >
        <MenuItems setMenuShow={setMenuShow} />
      </div>
    </>
  );
}
