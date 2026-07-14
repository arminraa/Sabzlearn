import { Category, Course } from "@/types/prisma";
import Link from "next/link";

export default function Breadcrumb({
  course,
  category,
}: {
  course: Course;
  category: Category;
}) {
  return (
    <div className="scroll-hidden flex overflow-x-auto">
      <Link
        href="/"
        className="flexCenter relative ml-[8px] h-[50px] rounded-md bg-white dark:bg-cardDark"
      >
        <div className="left-chevron absolute -left-[29px] top-0 z-10 h-full w-[30px] bg-white dark:bg-cardDark" />
        <div className="flexCenter h-full w-full whitespace-nowrap pl-2 pr-4 text-xl text-black dark:text-white">
          <i className="bi bi-house-door"></i>
        </div>
      </Link>
      <Link
        href="/course-cat/all"
        className="flexCenter relative ml-[8px] h-[50px] bg-white dark:bg-cardDark"
      >
        <div className="right-chevron absolute -right-[1px] top-0 h-full w-[30px] bg-gray-200 dark:bg-gray-900" />
        <div className="flexCenter h-full w-full whitespace-nowrap pl-[4px] pr-[36px] text-black dark:text-white">
          دوره ها
        </div>
        <div className="left-chevron absolute -left-[29px] top-0 z-10 h-full w-[30px] bg-white dark:bg-cardDark" />
      </Link>
      <div className="flexCenter relative ml-[8px] h-[50px] bg-white dark:bg-cardDark">
        <div className="right-chevron absolute -right-[1px] top-0 h-full w-[30px] bg-gray-200 dark:bg-gray-900" />
        <Link
          href={`/course-cat/${category.slug}`}
          className="flexCenter h-full w-full whitespace-nowrap pl-[4px] pr-[36px] text-black dark:text-white"
        >
          {category.title}
        </Link>
        <div className="left-chevron absolute -left-[29px] top-0 z-10 h-full w-[30px] bg-white dark:bg-cardDark" />
      </div>
      <div className="flexCenter relative ml-[8px] h-[50px] flex-grow-[2] rounded-md bg-white dark:bg-cardDark">
        <div className="right-chevron absolute -right-[1px] top-0 h-full w-[30px] bg-gray-200 dark:bg-gray-900" />
        <div className="flexCenter h-full w-full justify-start whitespace-nowrap pl-[4px] pr-[36px] font-semibold text-black dark:text-white">
          {course.title}
        </div>
        {/* <div className="left-chevron absolute -left-[29px] top-0 h-full w-[30px] bg-white" /> */}
      </div>
    </div>
  );
} 
