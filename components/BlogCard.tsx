"use client";

import { useState } from "react";

export default function BlogCard() {
  const [textGreen, setTextGreen] = useState(false);
  return (
    <article className="bg-white dark:bg-cardDark w-full rounded-xl">
      <div className="h-[168px] w-full relative">
        <img
          src="/images/English22-1-768x432.webp"
          className="rounded-t-xl rounded-b-none object-cover w-full h-full"
          alt="Card-Image"
        />
        <div className="dark:hidden absolute inset-0 w-full h-full bg-gradient-to-t from-white/100 to-white/0" />
      </div>
      <div className="topShadow p-4 flex flex-col gap-4">
        <h3 className="font-semibold w-full text-right">
          آموزش جامع زبان انگلیسی
        </h3>
        <p className="w-full text-right text-superLightGray dark:text-white/70 text-sm leading-7">
          با دوره جامع آموزش زبان انگلیسی سبزلرن، زبان انگلیسی را برای پیشرفت در
          برنامه‌نویسی حرفه‌ای یاد بگیرید و مهارت‌های خود…
        </p>
        <div className="flexRow">
          <div className="text-superLightGray text-sm flexCenter gap-1 dark:text-white/70">
            <i className="bi bi-person text-xl"></i>
            <span>بهادر عرب</span>
          </div>
          <div className="text-superLightGray text-sm flexCenter gap-1 dark:text-white/70">
            <i className="bi bi-calendar text-lg"></i>
            <span>۱۴۰۳/۰۹/۲۲</span>
          </div>
        </div>
        <div className="w-[95%] mx-auto h-[1px] rounded-md overflow-hidden bg-superLightGray"></div>
        <div
          className={`${textGreen ? "text-lightGreen" : "text-black dark:text-white"} transition-colors flexCenter gap-1 cursor-pointer`}
          onMouseEnter={() => setTextGreen(true)}
          onMouseLeave={() => setTextGreen(false)}
        >
          <span className="font-semibold">مطالعه مقاله</span>
          <span
            className={`${
              textGreen ? "bg-lightGreen" : "bg-black dark:bg-white"
            } transition-colors rounded-full h-[20px] w-[20px] flexCenter`}
          >
            <i className="bi bi-arrow-left text-white dark:text-black" />
          </span>
        </div>
      </div>
    </article>
  );
}
