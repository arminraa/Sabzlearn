"use client";
import { useEffect, useState } from "react";
import SearchInput from "../header/SearchInput";
import CourseCard from "../CourseCard";

export default function CourseCategory() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isActive, setIsActive] = useState(0);
  useEffect(() => {
    console.log(isChecked1);
    console.log(isChecked2);
    console.log("*********************");
  }, [isChecked1, isChecked2]);
  return (
    <section>
      <div className="w-full px-[1rem] sm:px-[1.5rem] mx-auto max-w-[425px] sm:max-w-[unset] md:max-w-[640px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] 3xl:max-w-[2000px] min-h-screen">
        <div className="pt-6 flexCenter flex-col gap-6  sm:flex-row sm:justify-between">
          <h3 className="dark:text-white text-black font-semibold sm:font-bold text-2xl sm:text-3xl flexCenter flex-row-reverse gap-2">
            <span className="dark:text-white text-black">
              دوره های فرانت اند
            </span>
            <div className="hidden sm:block w-4 h-4 bg-lightOrange" />
          </h3>

          <span className="lg:text-xl text-lightGray">۲۹ عنوان آموزشی</span>
        </div>
        <div className="w-full mt-6 lg:mt-10">
          <div className="w-full flexCenter lg:items-start flex-wrap lg:flex-nowrap gap-4 xl:gap-10 sm:gap-5">
            <div className="lg:w-[30%] xl:w-[25%] w-full flexCenter flex-wrap gap-4 sm:gap-5">
              <SearchInput
                placeholder="جستجو بین دوره ها"
                inputStyles="py-4 md:py-6 bg-white dark:bg-cardDark placeholder:sm:text-lg rounded-xl px-3 py-2 lg:py-6"
                styles="w-full"
              />
              <div className="hidden md:flexRow bg-white dark:bg-cardDark w-full rounded-xl py-6 px-3">
                <span className="font-[600] text-black dark:text-white">
                  فقط دوره های رایگان
                </span>
                <div className="h-full flexCenter">
                  <div
                    className="checkbox-wrapper-2"
                    onClick={() => setIsChecked1(!isChecked1)}
                  >
                    <input type="checkbox" className="sc-gJwTLC ikxBAC" />
                  </div>
                </div>
              </div>
              <div className="hidden md:flexRow bg-white dark:bg-cardDark w-full rounded-xl py-6 px-3">
                <span className="font-[600] text-black dark:text-white">در حال پیش فروش </span>
                <div className="h-full flexCenter">
                  <div
                    className="checkbox-wrapper-2"
                    onClick={() => setIsChecked2(!isChecked2)}
                  >
                    <input type="checkbox" className="sc-gJwTLC ikxBAC" />
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-white dark:bg-cardDark text-black dark:text-white flex-grow-[1] basis-0 rounded-lg px-4 py-3 flexCenter gap-2 md:hidden">
              <i className="bi bi-funnel sm:text-lg"></i>
              <span className="text-sm sm:text-[1rem]">فیلتر</span>
            </button>
            <button className="bg-white dark:bg-cardDark text-black dark:text-white flex-grow-[1] basis-0 rounded-lg px-4 py-3 flexCenter gap-2 md:hidden">
              <i className="bi bi-arrow-down-up sm:text-lg"></i>
              <span className="text-sm sm:text-[1rem]">همه دوره ها</span>
            </button>
            <div className="lg:w-[70%] xl:w-[75%] w-full">
              <div className="hidden md:flexRow bg-white dark:bg-cardDark w-full dark:text-white text-black rounded-xl h-[78px]">
                <div className="w-full h-full px-3 flexCenter justify-start gap-4">
                  <div className="flexCenter gap-4 font-[600]">
                    <i className="bi bi-arrow-down-up text-xl"></i>
                    <span>مرتب سازی براساس :‌</span>
                  </div>
                  <span
                    className={`${
                      isActive === 0 ? "sort-active" : ""
                    } h-full flexCenter cursor-pointer transition`}
                    onClick={() => setIsActive(0)}
                  >
                    همه دوره ها
                  </span>
                  <span
                    className={`${
                      isActive === 1 ? "sort-active" : ""
                    } h-full my-auto flexCenter cursor-pointer transition`}
                    onClick={() => setIsActive(1)}
                  >
                    ارزان ترین
                  </span>
                  <span
                    className={`${
                      isActive === 2 ? "sort-active" : ""
                    } h-full flexCenter cursor-pointer transition`}
                    onClick={() => setIsActive(2)}
                  >
                    گران ترین
                  </span>
                  <span
                    className={`${
                      isActive === 3 ? "sort-active" : ""
                    } h-full flexCenter cursor-pointer transition`}
                    onClick={() => setIsActive(3)}
                  >
                    پرمخاطب ها
                  </span>
                </div>
              </div>
              <div className="gridCols1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
