"use client";

import { useState } from "react";
import FilterMenuItems from "./FilterMenuItems";
import { Category, Course } from "@prisma/client";

export default function FilterMenuMobile({
  onlyFreeCourses,
  onlyPreSaleCourses,
  categories,
}: {
  onlyFreeCourses: string | undefined;
  onlyPreSaleCourses: string | undefined;
  categories: (Category & {
    courses: Course[];
  })[];
}) {
  const [filterMenuShow, setFilterMenuShow] = useState(false);
  const handleMenu = () => {
    setFilterMenuShow(true);
  };
  return (
    <>
      <div
        className={`${
          filterMenuShow ? "fixed" : "hidden"
          // Check after finish
        } bottom-0 z-20 left-0 right-0 top-0 bg-black/40 overflow-scroll`}
        onClick={() => setFilterMenuShow(false)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleMenu();
        }}
        className="outline-none flexCenter flex-grow-[1] basis-0 gap-2 rounded-lg bg-white px-4 py-3 text-black md:hidden dark:bg-cardDark dark:text-white"
      >
        <i className="outline-none bi bi-funnel sm:text-lg"></i>
        <span className="text-sm sm:text-[1rem]">فیلتر</span>
      </button>
      <div
        id="filter-menu"
        className={`${
          filterMenuShow ? "right-0" : "-right-full"
        } fixed top-0 z-[50] h-screen w-[80%] max-w-[250px] bg-white transition-all dark:bg-gray-900`}
      >
        <FilterMenuItems
          categories={categories}
          setFilterMenuShow={setFilterMenuShow}
          onlyFreeCourses={onlyFreeCourses}
          onlyPreSaleCourses={onlyPreSaleCourses}
        />
      </div>
    </>
  );
}
