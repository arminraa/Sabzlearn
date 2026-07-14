"use client";
import Breadcrumb from "@/components/course/Breadcrumb";
import Comment from "@/components/course/Comment";
import CopyLink from "@/components/course/CopyLink";
import CourseDescription from "@/components/course/CourseDescription";
import SaleBanner from "@/components/course/SaleBanner";
import GreenBorderButton from "@/components/layout/GreenBorderButton";
import { Category, Chapter, Course, Video } from "@prisma/client";
import { useEffect, useState } from "react";
import { ToPersianNumber } from "topersiannumber";
import NumberBox from "./NumberBox";
import { MoveLeft, MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { CourseWithChaptersAndVideosAndCategory } from "@/types/prisma";
import { handleNextVideo, handlePreviousVideo } from "@/actions/video";

function formatDuration(seconds: number) {
  if (seconds >= 3600) {
    return `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m`;
  }
  return `${Math.floor(seconds / 60)}m`;
}

export default function CourseVideoPageClient({
  video,
  course,
  category,
  chapters,
}: {
  video: Video;
  course: CourseWithChaptersAndVideosAndCategory;
  category: Category;
  chapters: (Chapter & { videos: Video[] })[];
}) {
  const [showAccordionContent, setShowAccordionContent] = useState<number[]>(
    []
  );
  const [persianDate, setPersianDate] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    const PersianDate = require("persian-date");
    const newPersianDate = new PersianDate(course.updatedAt);
    setPersianDate(newPersianDate);
  }, [course.updatedAt]);

  // Auto-expand the chapter containing the current video
  useEffect(() => {
    const activeChapterIndex = chapters.findIndex((ch) =>
      ch.videos.some((v) => v.id === video.id)
    );
    if (
      activeChapterIndex !== -1 &&
      !showAccordionContent.includes(activeChapterIndex)
    ) {
      setShowAccordionContent([activeChapterIndex]);
    }
  }, [video.id]);

  const handleAccordion = (index: number) => {
    let temp: number[] = [];
    if (showAccordionContent.includes(index)) {
      temp = showAccordionContent.filter((item: number) => item !== index);
      setShowAccordionContent(temp);
    } else {
      setShowAccordionContent([...showAccordionContent, index]);
    }
  };

  return (
    <section className="min-h-screen w-screen">
      <div className="container mt-10 xl:max-w-[95%] 2xl:max-w-[75%] 3xl:max-w-[70%] 4xl:max-w-[40%]">
        <Breadcrumb course={course} category={category} />
        <div className="mx-auto mt-6 w-full rounded-md sm:p-6 lg:mt-20 lg:bg-transparent lg:p-0">
          <div className="grid grid-cols-1 gap-6 lg:grid lg:grid-cols-12">
            <video
              src={video.videoUrl}
              draggable={false}
              controls
              className="my-auto h-[100%] w-full rounded-md object-cover lg:order-1 lg:col-span-12 xl:h-[100%]"
            />
          </div>
        </div>
        <div className="mt-8 grid w-full grid-cols-12 place-content-center gap-6 lg:mt-10">
          {/* Video info + navigation */}
          <div className="lg:col-span-8 col-span-12 bg-white rounded-md p-4">
            <div className="flexCenter flex-col">
              <div className="w-full flex justify-center flex-col gap-4 lg:gap-6">
                <div className="flexRowStart gap-2 self-start">
                  <NumberBox number={video.order} className="border" />
                  <span className="font-[500]">{video.title}</span>
                </div>
                <div className="flexCenter flex-col gap-2 lg:flex-row">
                  <button
                    onClick={async () => {
                      const next = await handleNextVideo(video.slug);
                      if (next) {
                        router.push(`/course/${course.slug}/${next.slug}`);
                      }
                    }}
                    type="button"
                    className="hover:bg-superLightGray/10 transition-colors flexCenter gap-1 border p-1 w-full rounded-md"
                  >
                    <MoveRight width={20} height={20} />
                    بعدی
                  </button>
                  <button
                    onClick={async () => {
                      const prev = await handlePreviousVideo(video.slug);
                      if (prev) {
                        router.push(`/course/${course.slug}/${prev.slug}`);
                      }
                    }}
                    type="button"
                    className="hover:bg-superLightGray/10 transition-colors flexCenter gap-1 border p-1 w-full rounded-md"
                  >
                    قبلی
                    <MoveLeft width={20} height={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - student count & score */}
          <div className="order-2 col-span-12 rounded-md bg-white p-4 lg:order-none lg:col-span-4 dark:bg-cardDark">
            <div className="flexCenter w-full gap-3">
              <article className="flexCenter w-1/2 flex-col justify-start gap-2 rounded-md bg-gray-100 p-4 px-6 sm:flex-row dark:bg-gray-700">
                <i className="bi bi-person-fill text-4xl text-lightGreen"></i>
                <div className="flexCenter flex-col gap-2 md:items-start">
                  <h5 className="whitespace-nowrap font-semibold sm:text-[1rem] text-black dark:text-white">
                    {ToPersianNumber(course.viewersCount)}
                  </h5>
                  <h6 className="text-lightGray dark:text-gray-300">دانشجو</h6>
                </div>
              </article>
              <article className="flexCenter w-1/2 flex-col gap-2 rounded-md bg-gray-100 p-4 sm:flex-row md:flex-row md:justify-start md:px-6 dark:bg-gray-700">
                <i className="bi bi-star-fill text-4xl text-lightOrange"></i>
                <div className="flexCenter flex-col gap-2 md:items-start">
                  <h5 className="whitespace-nowrap font-semibold sm:text-[1rem] text-black dark:text-white">
                    {ToPersianNumber(course.score)}
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
                className="mr-auto mt-4 h-3 rounded-xl bg-lightGreen"
                style={{ width: `${course.progressPercent}%` }}
              ></div>
            </div>
          </div>

          {/* Course info cards */}
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
          </div>

          {/* Course description */}
          <div className="col-span-12 w-full rounded-md bg-white p-4 leading-8 lg:col-span-8 dark:bg-cardDark">
            <CourseDescription course={course} />
          </div>

          {/* Author profile */}
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
                {course.author} | مدرس دوره
              </span>
              <GreenBorderButton title="مشاهده پروفایل من" />
            </div>
            <CopyLink />
          </div>

          {/* Real chapters accordion */}
          <div className="flexCol col-span-12 flex items-stretch gap-2 rounded-md bg-white p-4 lg:col-span-8 lg:gap-4 dark:bg-cardDark">
            <h3 className="flexCenter my-4 flex-row-reverse justify-end gap-2 text-xl font-semibold text-black sm:text-2xl sm:font-bold dark:text-white">
              <span className="text-black dark:text-white">سرفصل ها</span>
              <div className="hidden h-4 w-4 bg-lightBlue sm:block" />
            </h3>
            {chapters.map((chapter, index) => (
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
                      {formatDuration(
                        chapter.videos.reduce(
                          (sum, video) => sum + video.duration,
                          0
                        )
                      )}
                    </span>
                    <i
                      className={`${showAccordionContent.includes(index) ? "bi bi-chevron-up" : "bi bi-chevron-down text-black dark:text-white"} text-lg`}
                    ></i>
                  </div>
                </button>
                <ul className="h-full w-full">
                  {chapter.videos.map((chVideo, idx) => (
                    <div
                      key={chVideo.id}
                      className={`${showAccordionContent.includes(index) ? "max-h-[250px]" : "max-h-0"} box-border overflow-hidden rounded-b-md bg-gray-100 transition-all dark:bg-gray-700`}
                    >
                      <li className="flexCenter flexRow w-full flex-col gap-6 p-2 xs:flex-row">
                        <button
                          onClick={() =>
                            router.push(
                              `/course/${course.slug}/${chVideo.slug}`
                            )
                          }
                          className={`flexCenter w-full justify-start gap-4 ${
                            chVideo.id === video.id
                              ? "text-lightGreen font-semibold"
                              : ""
                          }`}
                        >
                          <NumberBox number={idx + 1} />
                          <p className="text-sm md:text-[1rem]">
                            {chVideo.title}
                          </p>
                        </button>
                        <div className="flexCenter text-nowrap ml-2 gap-2 self-end md:gap-3">
                          <span className="text-xs">
                            {formatDuration(chVideo.duration)}
                          </span>
                          {chVideo.isFree && (
                            <span className="rounded bg-lightGreen/20 px-1.5 py-0.5 text-xs text-lightGreen">
                              رایگان
                            </span>
                          )}
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

          {/* Comments */}
          <div className="flexCol col-span-12 flex items-stretch gap-2 rounded-md bg-white dark:bg-cardDark p-4 lg:col-span-8 lg:gap-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}
