"use client";

import { useState } from "react";

export default function BlogCard() {
  const [textGreen, setTextGreen] = useState(false);
  return (
    <article className="w-full rounded-xl bg-white dark:bg-cardDark">
      <div className="relative h-[168px] w-full">
        <img
          src="/images/English22-1-768x432.webp"
          className="h-full w-full rounded-b-none rounded-t-xl object-cover"
          alt="Card-Image"
        />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-white/100 to-white/0 dark:hidden" />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <h3 className="w-full text-right font-semibold">
          آموزش جامع زبان انگلیسی
        </h3>
        <p className="w-full text-right text-sm leading-7 text-superLightGray dark:text-white/70">
          با دوره جامع آموزش زبان انگلیسی سبزلرن، زبان انگلیسی را برای پیشرفت در
          برنامه‌نویسی حرفه‌ای یاد بگیرید و مهارت‌های خود…
        </p>
        <div className="flexRow">
          <div className="flexCenter gap-1 text-sm text-superLightGray dark:text-white/70">
            <i className="bi bi-person text-xl"></i>
            <span>بهادر عرب</span>
          </div>
          <div className="flexCenter gap-1 text-sm text-superLightGray dark:text-white/70">
            <i className="bi bi-calendar text-lg"></i>
            <span>۱۴۰۳/۰۹/۲۲</span>
          </div>
        </div>
        <div className="mx-auto h-[1px] w-[95%] overflow-hidden rounded-md bg-superLightGray"></div>
        <div
          className={`${textGreen ? "text-lightGreen" : "text-black dark:text-white"} flexCenter cursor-pointer gap-1 transition-colors`}
          onMouseEnter={() => setTextGreen(true)}
          onMouseLeave={() => setTextGreen(false)}
        >
          <span className="font-semibold">مطالعه مقاله</span>
          <span
            className={`${
              textGreen ? "bg-lightGreen" : "bg-black dark:bg-white"
            } flexCenter h-[20px] w-[20px] rounded-full transition-colors`}
          >
            <i className="bi bi-arrow-left text-white dark:text-black" />
          </span>
        </div>
      </div>
    </article>
  );
}
