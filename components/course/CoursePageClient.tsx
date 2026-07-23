"use client";
import Breadcrumb from "@/components/course/Breadcrumb";
import Comment from "@/components/course/Comment";
import CopyLink from "@/components/course/CopyLink";
import CourseDescription from "@/components/course/CourseDescription";
import SaleBanner from "@/components/course/SaleBanner";
import GreenBorderButton from "@/components/layout/GreenBorderButton";
import { Category, Course } from "@prisma/client";
import { useEffect, useState } from "react";
import { ToPersianNumber } from "topersiannumber";
import Chapters from "./Chapters";
import { CourseWithChaptersAndVideosAndCategory } from "@/types/prisma";

export default function CoursePageClient({
  course,
}: {
  course: CourseWithChaptersAndVideosAndCategory;
}) {
  const [persianDate, setPersianDate] = useState<any>();

  useEffect(() => {
    const PersianDate = require("persian-date");
    const newPersianDate = new PersianDate(course!.updatedAt);
    setPersianDate(newPersianDate);
  }, [course!.updatedAt]);
  return (
    <section className="min-h-screen w-screen">
      <div className="container mt-10 xl:max-w-[95%] 2xl:max-w-[75%] 3xl:max-w-[70%] 4xl:max-w-[40%]">
        <Breadcrumb course={course} category={course.category!} />
        <div className="mx-auto mt-6 w-full rounded-md bg-white p-4 sm:p-6 lg:mt-20 lg:bg-transparent lg:p-0">
          <div className="grid grid-cols-1 gap-6 lg:grid lg:grid-cols-12">
            <img
              src={course.imageUrl}
              draggable={false}
              alt="Course-Image"
              className="my-auto h-[80%] w-full rounded-md object-cover lg:order-1 lg:col-span-6 xl:h-[100%]"
            />
            <div className="flexCenter lg:order-0 flex-col justify-start gap-5 lg:col-span-6 lg:items-start lg:justify-between lg:gap-7">
              <div className="flexCenter flex-col items-start gap-4 text-black dark:text-white">
                <h2 className="self-start text-2xl font-semibold sm:text-3xl lg:self-auto">
                  {course.title}
                </h2>
                <p className="text-justify leading-7 sm:text-lg lg:leading-8">
                  {course && course.shortDescription}
                </p>
              </div>
              <SaleBanner />
              <div className="flexCenter mt-10 flex-col gap-2 sm:flex-row-reverse lg:mt-0 lg:w-full lg:justify-between">
                <div className="flexCenter gap-2 whitespace-nowrap font-semibold">
                  <del className="text-xl text-lightGray">
                    {course.salePrice && ToPersianNumber(course.salePrice)}
                  </del>
                  <span className="text-2xl text-black dark:text-white">
                    {ToPersianNumber(course.price)}
                    تومان
                  </span>
                </div>
                <button className="flexCenter w-full gap-1 rounded-md bg-lightGreen px-4 py-2 text-sm text-white sm:px-5 sm:text-lg lg:w-[200px] lg:whitespace-nowrap lg:text-[1rem]">
                  <i></i>
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 grid w-full grid-cols-12 place-content-center gap-6 lg:mt-32">
          <div className="col-span-12 grid grid-cols-2 place-content-center content-stretch gap-5 sm:grid-cols-3 lg:col-span-8">
            <article className="flexCenter flex-col gap-2 rounded-md bg-white p-4 md:flex-row md:justify-start md:px-6 dark:bg-cardDark">
              <i className="bi bi-clock text-3xl text-lightGreen sm:text-4xl"></i>
              <div className="flexCenter flex-col gap-2 md:items-start">
                <h5 className="whitespace-nowrap text-sm font-semibold sm:text-[1rem] text-black dark:text-white">
                  مدت زمان دوره
                </h5>
                <h6 className="text-sm text-lightGray">
                  {ToPersianNumber(course.courseLength)} ساعت
                </h6>
              </div>
            </article>
            <article className="flexCenter flex-col gap-2 rounded-md bg-white p-4 md:flex-row md:justify-start md:px-6 dark:bg-cardDark">
              <i className="bi bi-info-circle text-3xl text-lightGreen sm:text-4xl"></i>
              <div className="flexCenter flex-col gap-2 md:items-start">
                <h5 className="whitespace-nowrap text-sm font-semibold sm:text-[1rem] text-black dark:text-white">
                  وضعیت دوره
                </h5>
                <h6 className="text-sm text-lightGray">تکمیل شده</h6>
              </div>
            </article>
            <article className="flexCenter flex-col gap-2 rounded-md bg-white p-4 md:flex-row md:justify-start md:px-6 lg:px-4 dark:bg-cardDark">
              <i className="bi bi-calendar3 text-3xl text-lightGreen sm:text-4xl"></i>
              <div className="flexCenter flex-col gap-2 md:items-start">
                <h5 className="whitespace-nowrap text-sm font-semibold sm:text-[1rem] text-black dark:text-white">
                  آخرین به روز رسانی
                </h5>
                <h6 className="text-sm text-lightGray">
                  {persianDate && String(persianDate.format())}
                </h6>
              </div>
            </article>
            <article className="flexCenter flex-col gap-2 rounded-md bg-white p-4 md:flex-row md:justify-start md:px-6 dark:bg-cardDark">
              <i className="bi bi-person text-3xl text-lightGreen sm:text-4xl"></i>
              <div className="flexCenter flex-col gap-2 md:items-start">
                <h5 className="whitespace-nowrap text-sm font-semibold sm:text-[1rem] text-black dark:text-white">
                  روش پشتیبانی
                </h5>
                <h6 className="text-sm text-lightGray">آنلاین</h6>
              </div>
            </article>
            <article className="sm:flexCenter hidden flex-col gap-2 rounded-md bg-white p-4 md:flex-row md:justify-start md:px-6 dark:bg-cardDark">
              <i className="bi bi-briefcase text-3xl text-lightGreen sm:text-4xl"></i>
              <div className="flexCenter flex-col gap-2 md:items-start">
                <h5 className="whitespace-nowrap text-sm font-semibold sm:text-[1rem] text-black dark:text-white">
                  پیش نیاز
                </h5>
                <h6 className="text-sm text-lightGray">
                  {course.prerequisite}
                </h6>
              </div>
            </article>
            <article className="sm:flexCenter hidden flex-col gap-2 rounded-md bg-white p-4 md:flex-row md:justify-start md:px-6 dark:bg-cardDark">
              <i className="bi bi-camera-video text-3xl text-lightGreen sm:text-4xl"></i>
              <div className="flexCenter flex-col gap-2 md:items-start">
                <h5 className="whitespace-nowrap text-sm font-semibold sm:text-[1rem] text-black dark:text-white">
                  نوع مشاهده
                </h5>
                <h6 className="text-sm text-lightGray">دانلودی / آنلاین</h6>
              </div>
            </article>
          </div>
          <div className="order-2 col-span-12 rounded-md bg-white p-4 lg:order-none lg:col-span-4 dark:bg-cardDark">
            <div className="flexCenter w-full gap-3">
              <article className="flexCenter w-1/2 flex-col justify-start gap-2 rounded-md bg-gray-100 p-4 px-6 sm:flex-row dark:bg-gray-700">
                <i className="bi bi-person-fill text-4xl text-lightGreen"></i>
                <div className="flexCenter flex-col gap-2 md:items-start">
                  <h5 className="whitespace-nowrap font-semibold sm:text-[1rem] text-black dark:text-white">
                    {course.viewersCount}
                  </h5>
                  <h6 className="text-lightGray dark:text-gray-300">دانشجو</h6>
                </div>
              </article>
              <article className="flexCenter w-1/2 flex-col gap-2 rounded-md bg-gray-100 p-4 sm:flex-row md:flex-row md:justify-start md:px-6 dark:bg-gray-700">
                <i className="bi bi-star-fill text-4xl text-lightOrange"></i>
                <div className="flexCenter flex-col gap-2 md:items-start">
                  <h5 className="whitespace-nowrap font-semibold sm:text-[1rem] text-black dark:text-white">
                    {course.score}
                  </h5>
                  <h6 className="text-lightGray dark:text-gray-300">رضایت</h6>
                </div>
              </article>
            </div>
            <div className="mt-6">
              <div className="flexRow font-semibold text-black dark:text-white">
                <span>درصد تکمیل دوره</span>
                <span>{ToPersianNumber(course.progressPercent)}%</span>
              </div>
              <div
                className={`mr-auto mt-4 h-3 w-[${course.progressPercent}%] rounded-xl bg-lightGreen`}
              ></div>
            </div>
          </div>

          <div className="col-span-12 w-full rounded-md bg-white p-4 leading-8 lg:col-span-8 dark:bg-cardDark">
            <CourseDescription course={course} />
          </div>
          <div className="order-3 col-span-12 w-full lg:order-none lg:col-span-4 self-start lg:row-span-2">
            <div className="flexCenter h-[250px] w-full flex-col gap-3 rounded-md bg-white p-2 dark:bg-cardDark">
              <img
                src={
                  course.authorProfileImageUrl
                    ? course.authorProfileImageUrl
                    : ""
                }
                alt="Profile-Image"
                className="h-[100px] w-[100px] rounded-full object-cover"
              />
              <span className="text-lg font-semibold text-black dark:text-white">
                {course.author} |‌ مدرس دوره
              </span>
              <GreenBorderButton title="مشاهده پروفایل من" />
            </div>
            <CopyLink />
          </div>
          <Chapters course={course} />
          {/* <div className="flexCol col-span-12 flex items-stretch gap-2 rounded-md bg-white dark:bg-cardDark p-4 lg:col-span-8 lg:gap-4">
            <div className="flexRow">
              <h3 className="flexCenter my-4 flex-row-reverse justify-end gap-2 text-xl font-semibold text-black sm:text-2xl sm:font-bold dark:text-white">
                <span className="text-black dark:text-white">نظرات</span>
                <div className="hidden h-4 w-4 bg-red-500 sm:block" />
              </h3>
              <button className="flexCenter gap-2 rounded-md bg-lightGreen p-2 px-3 text-sm text-white transition-colors hover:bg-green-700/95">
                ایجاد نظر جدید
                <i className="bi bi-chat-square-text text-lg"></i>
              </button>
            </div>
            <div className="mt-2 rounded-md bg-green-50 dark:bg-green-500/10 px-4 py-4 text-sm leading-7 text-lightGreen">
              دانشجوی عزیز؛ سوالات مرتبط به پشتیبانی دوره در قسمت نظرات تایید
              نخواهد شد، لطفا در بخش مشاهده آنلاین هر ویدیو سوالات خود را مطرح
              کنید.
            </div>
            <Comment />
          </div> */}
        </div>
      </div>
    </section>
  );
}
