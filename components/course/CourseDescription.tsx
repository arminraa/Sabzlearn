"use client";
import { useState } from "react";
import GreenBorderButton from "../layout/GreenBorderButton";
import { Course } from "@/types/prisma";

export default function CourseDescription({ course }: { course: Course }) {
  const [showText, setShowText] = useState(false);
  const handleClick = () => {
    setShowText(!showText);
  };
  return (
    <>
      <h3 className="flexCenter my-4 flex-row-reverse justify-end gap-2 text-xl font-semibold text-black sm:text-2xl sm:font-bold dark:text-white">
        <span className="text-black dark:text-white">توضیحات</span>
        <div className="hidden h-4 w-4 bg-lightOrange sm:block" />
      </h3>
      {/* <p className="text-start text-black dark:text-white">
        NEXT.Js یا NEXT طی چندسال اخیر برای تکمیل و تقویت تکنولوژی React وارد
        میدون شد و سعی کرد تمام نواقص یا محدودیت های اون رو پوشش بده تا هیچ شک و
        شبهه ای در قدرت ری اکت برای طراحی صفحات وب باقی نمونه. به عبارتی اومده
        تا با ویژگی فول استک بودن، React رو فراتر از یک تکنولوژی فرانت اند جا
        بندازه و از طریق ترکیب اون با Node Js در بک اند، به شما کمک کنه یک پروژه
        کامل و صفر تا صد وب رو به بهترین شکل طراحی و پیاده سازی کنید.
      </p> */}
      {/* <p className="text-start text-black dark:text-white"> */}

      {/* </p> */}
      {/* <img
        src="/images/next.webp"
        className="mx-auto my-4 max-h-[480px] min-h-[150px] w-full rounded-md object-cover"
        alt=""
      /> */}
      <div className="flex flex-col justify-center gap-4">
        <p
          className={`${showText ? "lg:max-h-[300px]" : "lg:max-h-[60px]"} relative h-auto self-start overflow-hidden text-start transition-all text-black dark:text-white`}
        >
          {course.description}
          <span
            className={`${showText ? "hidden" : "lg:block"} absolute inset-0 hidden h-full w-full bg-gradient-to-t from-white/70 to-white/0 dark:hidden`}
          />
        </p>

        <GreenBorderButton
          optStyles="self-center hidden lg:block"
          title={showText ? "مشاهده کمتر مطلب" : "مشاهده بیشتر مطلب"}
          onClick={handleClick}
        />
      </div>
    </>
  );
}
