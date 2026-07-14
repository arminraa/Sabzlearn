"use client";
import { CourseWithChaptersAndVideosAndCategory } from "@/types/prisma";
import { Course } from "@prisma/client";
import { Video } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import { ToPersianNumber } from "topersiannumber";
import NumberBox from "./NumberBox";

export default function Chapters({
  course,
}: {
  course: CourseWithChaptersAndVideosAndCategory;
}) {
  const [showAccordionContent, setShowAccordionContent] = useState<number[]>(
    []
  );
  const handleAccordion = (index: number) => {
    let temp: number[] = [];
    if (showAccordionContent.includes(index)) {
      temp = showAccordionContent.filter((item: number) => item !== index);
      setShowAccordionContent(temp);
    } else {
      setShowAccordionContent([...showAccordionContent, index]);
    }
  };
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="flexCol col-span-12 flex items-stretch gap-2 rounded-md bg-white p-4 lg:col-span-8 lg:gap-4 dark:bg-cardDark">
      <h3 className="flexCenter my-4 flex-row-reverse justify-end gap-2 text-xl font-semibold text-black sm:text-2xl sm:font-bold dark:text-white">
        <span className="text-black dark:text-white">سرفصل ها</span>
        <div className="hidden h-4 w-4 bg-lightBlue sm:block" />
      </h3>
      {course.chapters.map((chapter, index) => (
        <article key={chapter.id}>
          <button
            onClick={() => handleAccordion(index)}
            className={`${showAccordionContent.includes(index) ? "rounded-t-md bg-gray-500 text-white dark:bg-lightGreen" : "rounded-md bg-gray-200 dark:bg-gray-700 text-lightGray dark:text-white"} flexRow w-full p-5 transition-all`}
          >
            <span>{chapter.title}</span>
            <div className="flexCenter gap-2">
              <span
                className={`${showAccordionContent.includes(index) ? "text-white" : "text-lightGray dark:text-white"} hidden text-sm lg:inline`}
                dir="ltr"
              >
                {chapter.videos.length} lesson .{" "}
                {chapter.videos.reduce(
                  (sum, video) => sum + video.duration,
                  0
                ) >= 3600
                  ? `${Math.floor(chapter.videos.reduce((sum, video) => sum + video.duration, 0) / 3600)}h ${Math.floor((chapter.videos.reduce((sum, video) => sum + video.duration, 0) % 3600) / 60)}m`
                  : `${Math.floor(
                      chapter.videos.reduce(
                        (sum, video) => sum + video.duration,
                        0
                      ) / 60
                    )}m`}
              </span>
              <i
                className={`${showAccordionContent.includes(index) ? "bi bi-chevron-up" : "bi bi-chevron-down text-black dark:text-white"} text-lg`}
              ></i>
            </div>
          </button>
          <ul className="h-full w-full">
            {chapter.videos.map((video, idx) => (
              <div
                key={video.id}
                className={`${showAccordionContent.includes(index) ? "max-h-[250px]" : "max-h-0"} box-border overflow-hidden rounded-b-md bg-gray-100 transition-all dark:bg-gray-700`}
              >
                <li className="flexCenter flexRow w-full flex-col gap-6 p-2 xs:flex-row">
                  <Link
                    href={`${pathName}/${video.slug}`}
                    className="flexCenter w-full justify-start gap-4"
                  >
                    <NumberBox number={idx} />
                    <p className="text-sm md:text-[1rem]">{video.title}</p>
                  </Link>
                  <div className="flexCenter text-nowrap ml-2 gap-2 self-end md:gap-3">
                    <span className="text-xs">
                      {video.duration >= 3600
                        ? `${Math.floor(video.duration / 3600)}h ${Math.floor((video.duration % 3600) / 60)}m`
                        : `${Math.floor(video.duration / 60)}m`}
                    </span>
                    <i className="bi bi-play-circle text-xl md:text-2xl"></i>
                  </div>
                </li>
                <div className="h-[1px] w-full bg-gray-200 dark:bg-gray-600" />
              </div>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
