"use client";
import { useEffect, useState } from "react";
import CourseCard from "../CourseCard";
import { useRouter, useSearchParams } from "next/navigation";
import FilterMenuMobile from "./FilterMenuMobile";
import CategoryPageSearchInput from "./CategoryPageSearchInput";
import { ToPersianNumber } from "topersiannumber";
import { Category, Course } from "@prisma/client";
import { Checkbox } from "../ui/checkbox";

export default function CourseCategory({
  category,
  allCourses,
  onlyFreeCourses,
  onlyPreSaleCourses,
  categories,
}: {
  category: {
    courses: Course[];
  } & Category;
  allCourses: Course[];
  onlyFreeCourses: string | undefined;
  onlyPreSaleCourses: string | undefined;
  categories: (Category & {
    courses: Course[];
  })[];
}) {
  const [isActive, setIsActive] = useState(0);
  const router = useRouter();
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
  const handleFreeCourseSlider = () => {
    if (onlyFreeCourses === "true") {
      params.set("only_free_courses", "false");
      router.push(`?${params.toString()}`);
    } else {
      params.set("only_free_courses", "true");
      router.push(`?${params.toString()}`);
    }
  };
  const handlePreSaleCourseSlider = () => {
    if (onlyPreSaleCourses === "true") {
      params.set("only_pre_sale_courses", "false");
      router.push(`?${params.toString()}`);
    } else {
      params.set("only_pre_sale_courses", "true");
      router.push(`?${params.toString()}`);
    }
  };
  return (
    <section className="h-full lg:px-10">
      <div className=" mx-auto min-h-screen w-full max-w-[425px] px-[1rem] sm:max-w-[unset] sm:px-[1.5rem] md:max-w-[640px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] 3xl:max-w-[2000px]">
        <div className="lg:pb-3 lg:mt-4 flexCenter flex-col gap-6 pt-6 sm:flex-row sm:justify-between">
          <h3 className="flexCenter flex-row-reverse gap-2 text-2xl font-semibold text-black sm:text-3xl sm:font-bold dark:text-white">
            <span className="text-black dark:text-white">
              {category.slug === "all"
                ? "همه دوره ها"
                : ` ${category.title} دوره های`}
            </span>
            <div className="hidden h-4 w-4 bg-lightOrange sm:block" />
          </h3>

          <span className="text-lightGray lg:text-xl">
            {category.slug === "all"
              ? ToPersianNumber(allCourses.length)
              : ToPersianNumber(category.courses.length)}{" "}
            عنوان آموزشی
          </span>
        </div>
        <div className="mt-6 w-full lg:mt-10">
          <div className="flexCenter w-full flex-wrap gap-4 sm:gap-5 lg:flex-nowrap lg:items-start xl:gap-10">
            <div className="flexCenter w-full flex-wrap gap-4 sm:gap-5 lg:w-[30%] xl:w-[25%]">
              <CategoryPageSearchInput
                placeholder="جستجو بین دوره ها"
                inputStyles="bg-white dark:bg-cardDark placeholder:sm:text-lg rounded-xl px-3 py-2 lg:py-4 lg:px-4"
                styles="w-full"
              />
              <div className="md:flexRow hidden w-full rounded-xl bg-white px-3 py-2 lg:py-4 lg:px-4 dark:bg-cardDark">
                <span className="font-[600] text-black dark:text-white">
                  فقط دوره های رایگان
                </span>
                <div className="flexCenter h-full cursor-pointer">
                  <Checkbox
                    className="p-2"
                    checked={onlyFreeCourses === "true"}
                    onCheckedChange={handleFreeCourseSlider}
                  />
                </div>
              </div>
              <div className="md:flexRow hidden w-full rounded-xl bg-white px-3 py-2 lg:py-4 lg:px-4 dark:bg-cardDark">
                <span className="font-[600] text-black dark:text-white">
                  در حال پیش فروش{" "}
                </span>
                <div className="flexCenter h-full cursor-pointer">
                  <Checkbox
                    className="p-2"
                    checked={onlyPreSaleCourses === "true"}
                    onCheckedChange={handlePreSaleCourseSlider}
                  />
                </div>
              </div>
            </div>
            <FilterMenuMobile categories={categories} onlyFreeCourses={onlyFreeCourses} onlyPreSaleCourses={onlyPreSaleCourses} />
            <button className="flexCenter flex-grow-[1] basis-0 gap-2 rounded-lg bg-white px-4 py-3 text-black md:hidden dark:bg-cardDark dark:text-white">
              <i className="bi bi-arrow-down-up sm:text-lg"></i>
              <span
                className="text-sm sm:text-[1rem]"
                onClick={() => router.push("/course-cat/all")}
              >
                همه دوره ها
              </span>
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
                {category.slug === "all" ? (
                  allCourses.map((course, index) => (
                    <CourseCard
                      slug={course.slug}
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
                  ))
                ) : category.courses.length > 0 ? (
                  category.courses.map((course, index) => (
                    <CourseCard
                      key={course.id}
                      slug={course.slug}
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
                  ))
                ) : (
                  <div className="col-span-3  text-2xl">دوره ای یافت نشد !</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
