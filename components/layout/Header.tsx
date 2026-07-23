"use client";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import DropDownItem from "../header/DropDownItem";
import Menu from "../header/Menu";
import SearchInput from "../header/SearchInput";
import DarkModeButton from "../header/DarkModeButton";
import { Category, Course } from "@prisma/client";

export default function Header({
  categories,
}: {
  categories: ({
    courses: Course[];
  } & Category)[];
}) {
  return (
    <>
      <header className="sticky left-0 right-0 top-0 z-20 w-screen bg-white py-4 shadow-md dark:bg-gray-900 dark:shadow-xl">
        <div className="container lg:max-w-[1790px]">
          <div className="flexRow gap-2">
            <div className="flexCenter h-5 w-5 rounded-full bg-lightGray/10 p-6 lg:hidden">
              <Menu categories={categories} />
            </div>

            <Link href="/" className="sm:mx-auto lg:mx-0">
              <Image
                src="/images/logo.webp"
                width={90}
                height={300}
                alt="Logo"
                priority
              />
            </Link>
            <div className="lg:flexCenter hidden gap-4 lg:ml-auto lg:pr-4">
              {categories &&
                categories.map((category, index) =>
                  index < 7 && category.slug !== "all" && category.courses.length > 0 ? (
                    <DropDownItem
                      key={category.id}
                      category={category}
                    />
                  ) : undefined
                )}
            </div>

            <div className="flexCenter gap-4">
              <Suspense>
                <SearchInput
                  styles="hidden lg:block"
                  inputStyles="rounded-2xl lg:rounded-3xl py-2 lg:py-[12px] px-4"
                />
              </Suspense>
              <DarkModeButton styles="hidden lg:flexCenter" />
              <div className="flexCenter h-5 w-5 rounded-full bg-lightGray/10 p-6">
                <Link
                  href="#"
                  className="text-2xl text-lightGray dark:text-white"
                >
                  <i className="bi bi-bag"></i>
                </Link>
              </div>
              <div className="flexCenter h-5 w-5 rounded-full bg-lightGray/10 p-6 lg:hidden">
                <Link
                  href="#"
                  className="text-2xl text-lightGray dark:text-white"
                >
                  <i className="bi bi-box-arrow-right"></i>
                </Link>
              </div>
              <button
                type="button"
                className="lg:flexCenter hidden gap-1 rounded-3xl bg-lightBlue px-5 py-[10px] font-bold text-white"
              >
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
