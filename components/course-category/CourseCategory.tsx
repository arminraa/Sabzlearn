"use client";
import { useEffect, useState } from "react";
import SearchInput from "../header/SearchInput";
import CourseCard from "../CourseCard";
import { Course } from "@/types/prisma";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function CourseCategory({ courses }: { courses: Course[] }) {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isActive, setIsActive] = useState(0);
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  useEffect(() => {
    const sortType = searchParams.get("sort_by");
    if (sortType === "normal") {
      setIsActive(0);
    }
    if (sortType === "price_lowest") {
      setIsActive(1);
    }
    if (sortType === "price_highest") {
      setIsActive(2);
    }
    if (sortType === "popular") {
      setIsActive(3);
    }
  }, []);
  const handeFreeCourseSlider = () => {
    setIsChecked1((prev) => !prev);
    if (isChecked1) {
      params.set("only_free_courses", "false");
      router.push(`?${params.toString()}`);
    } else {
      params.set("only_free_courses", "true");
      router.push(`?${params.toString()}`);
    }
  };
  return (
    <section className="lg:px-10">
      <div className="mx-auto min-h-screen w-full max-w-[425px] px-[1rem] sm:max-w-[unset] sm:px-[1.5rem] md:max-w-[640px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] 3xl:max-w-[2000px]">
        <div className="lg:pb-3 lg:mt-4 flexCenter flex-col gap-6 pt-6 sm:flex-row sm:justify-between">
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
                inputStyles="bg-white dark:bg-cardDark placeholder:sm:text-lg rounded-xl px-3 py-2 lg:py-4 lg:px-4"
                styles="w-full"
              />
              <div className="md:flexRow hidden w-full rounded-xl bg-white px-3 py-2 lg:py-4 lg:px-4 dark:bg-cardDark">
                <span className="font-[600] text-black dark:text-white">
                  فقط دوره های رایگان
                </span>
                <div className="flexCenter h-full cursor-pointer">
                  <div
                    className="checkbox-wrapper-2 flexCol"
                    onClick={() => handeFreeCourseSlider()}
                  >
                    <input type="checkbox" className="sc-gJwTLC ikxBAC" />
                  </div>
                </div>
              </div>
              <div className="md:flexRow hidden w-full rounded-xl bg-white px-3 py-2 lg:py-4 lg:px-4 dark:bg-cardDark">
                <span className="font-[600] text-black dark:text-white">
                  در حال پیش فروش{" "}
                </span>
                <div className="flexCenter h-full cursor-pointer">
                  <div
                    className="checkbox-wrapper-2 flexCol"
                    onClick={() => setIsChecked2((prev) => !prev)}
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
                    onClick={() => {
                      setIsActive(0);
                      params.set("sort_by", "normal");
                      router.push(`?${params.toString()}`);
                    }}
                  >
                    همه دوره ها
                  </span>
                  <span
                    className={`${
                      isActive === 1 ? "sort-active" : ""
                    } flexCenter my-auto h-full cursor-pointer transition`}
                    onClick={() => {
                      setIsActive(1);
                      params.set("sort_by", "price_lowest");
                      router.push(`?${params.toString()}`);
                    }}
                  >
                    ارزان ترین
                  </span>
                  <span
                    className={`${
                      isActive === 2 ? "sort-active" : ""
                    } flexCenter h-full cursor-pointer transition`}
                    onClick={() => {
                      setIsActive(2);
                      params.set("sort_by", "price_highest");
                      router.push(`?${params.toString()}`);
                    }}
                  >
                    گران ترین
                  </span>
                  <span
                    className={`${
                      isActive === 3 ? "sort-active" : ""
                    } flexCenter h-full cursor-pointer transition`}
                    onClick={() => {
                      setIsActive(3);
                      params.set("sort_by", "popular");
                      router.push(`?${params.toString()}`);
                    }}
                  >
                    پرمخاطب ها
                  </span>
                </div>
              </div>
              <div className="gridCols1 mt-6 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {courses.map((course, index) => (
                  <CourseCard
                    key={course.id}
                    index={index}
                    id={course.id}
                    title={course.title}
                    description={course.shortDescription}
                    author={course.author}
                    price={course.price}
                    salePrice={course.salePrice}
                    score={course.score}
                    viewersCount={course.viewersCount}
                    imageUrl={course.imageUrl}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
