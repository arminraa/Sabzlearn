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
      <div className="min-h-screen container">
        <div className="flexCenter flex-col gap-6 pt-6 sm:flex-row sm:justify-between">
          <h3 className="flexCenter flex-row-reverse gap-2 text-2xl font-semibold text-black sm:text-3xl sm:font-bold dark:text-white">
            <span className="text-black dark:text-white">
              دوره های فرانت اند
            </span>
            <div className="hidden h-4 w-4 bg-lightOrange sm:block" />
          </h3>

          <span className="text-lightGray lg:text-xl">۲۹ عنوان آموزشی</span>
        </div>
        <div className="mt-6 w-full lg:mt-10">
          <div className="flexCenter w-full flex-wrap gap-4 sm:gap-5 lg:flex-nowrap lg:items-start xl:gap-10">
            <div className="flexCenter w-full flex-wrap gap-4 sm:gap-5 lg:w-[30%] xl:w-[25%]">
              <SearchInput
                placeholder="جستجو بین دوره ها"
                inputStyles="py-4 md:py-6 bg-white dark:bg-cardDark placeholder:sm:text-lg rounded-xl px-3 py-2 lg:py-6"
                styles="w-full"
              />
              <div className="md:flexRow hidden w-full rounded-xl bg-white px-3 py-6 dark:bg-cardDark">
                <span className="font-[600] text-black dark:text-white">
                  فقط دوره های رایگان
                </span>
                <div className="flexCenter h-full">
                  <div
                    className="checkbox-wrapper-2"
                    onClick={() => setIsChecked1(!isChecked1)}
                  >
                    <input type="checkbox" className="sc-gJwTLC ikxBAC" />
                  </div>
                </div>
              </div>
              <div className="md:flexRow hidden w-full rounded-xl bg-white px-3 py-6 dark:bg-cardDark">
                <span className="font-[600] text-black dark:text-white">
                  در حال پیش فروش{" "}
                </span>
                <div className="flexCenter h-full">
                  <div
                    className="checkbox-wrapper-2"
                    onClick={() => setIsChecked2(!isChecked2)}
                  >
                    <input type="checkbox" className="sc-gJwTLC ikxBAC" />
                  </div>
                </div>
              </div>
            </div>
            <button className="flexCenter flex-grow-[1] basis-0 gap-2 rounded-lg bg-white px-4 py-3 text-black md:hidden dark:bg-cardDark dark:text-white">
              <i className="bi bi-funnel sm:text-lg"></i>
              <span className="text-sm sm:text-[1rem]">فیلتر</span>
            </button>
            <button className="flexCenter flex-grow-[1] basis-0 gap-2 rounded-lg bg-white px-4 py-3 text-black md:hidden dark:bg-cardDark dark:text-white">
              <i className="bi bi-arrow-down-up sm:text-lg"></i>
              <span className="text-sm sm:text-[1rem]">همه دوره ها</span>
            </button>
            <div className="w-full lg:w-[70%] xl:w-[75%]">
              <div className="md:flexRow hidden h-[78px] w-full rounded-xl bg-white text-black dark:bg-cardDark dark:text-white">
                <div className="flexCenter h-full w-full justify-start gap-4 px-3">
                  <div className="flexCenter gap-4 font-[600]">
                    <i className="bi bi-arrow-down-up text-xl"></i>
                    <span>مرتب سازی براساس :‌</span>
                  </div>
                  <span
                    className={`${
                      isActive === 0 ? "sort-active" : ""
                    } flexCenter h-full cursor-pointer transition`}
                    onClick={() => setIsActive(0)}
                  >
                    همه دوره ها
                  </span>
                  <span
                    className={`${
                      isActive === 1 ? "sort-active" : ""
                    } flexCenter my-auto h-full cursor-pointer transition`}
                    onClick={() => setIsActive(1)}
                  >
                    ارزان ترین
                  </span>
                  <span
                    className={`${
                      isActive === 2 ? "sort-active" : ""
                    } flexCenter h-full cursor-pointer transition`}
                    onClick={() => setIsActive(2)}
                  >
                    گران ترین
                  </span>
                  <span
                    className={`${
                      isActive === 3 ? "sort-active" : ""
                    } flexCenter h-full cursor-pointer transition`}
                    onClick={() => setIsActive(3)}
                  >
                    پرمخاطب ها
                  </span>
                </div>
              </div>
              <div className="gridCols1 mt-6 gap-6 sm:grid-cols-2 xl:grid-cols-3">
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
