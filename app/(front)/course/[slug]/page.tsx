"use client";
import Breadcrumb from "@/components/course/Breadcrumb";
import CopyLink from "@/components/course/CopyLink";
import CourseDescription from "@/components/course/CourseDescription";
import SaleBanner from "@/components/course/SaleBanner";
import GreenBorderButton from "@/components/layout/GreenBorderButton";
import { useState } from "react";

export default function CoursePage() {
  const [showAccordionContent, setShowAccordionContent] = useState<number[]>(
    [],
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
  return (
    <section className="min-h-screen w-screen">
      <div className="container mt-10 xl:max-w-[95%] 2xl:max-w-[75%] 3xl:max-w-[70%] 4xl:max-w-[40%]">
        <Breadcrumb />
        <div className="mx-auto mt-6 w-full rounded-md bg-white p-4 sm:p-6 lg:mt-20 lg:bg-transparent lg:p-0">
          <div className="grid grid-cols-1 gap-6 lg:grid lg:grid-cols-12">
            <img
              src="/images/php-ex.webp"
              alt=""
              className="my-auto h-[80%] w-full rounded-md object-cover lg:order-1 lg:col-span-6 xl:h-[100%]"
            />
            <div className="flexCenter lg:order-0 flex-col justify-start gap-5 lg:col-span-6 lg:items-start lg:justify-between lg:gap-7">
              <div className="flexCenter flex-col items-start gap-4">
                <h2 className="self-start text-2xl font-semibold sm:text-3xl lg:self-auto">
                  آموزش جامع PHP از صفر + پروژه محور
                </h2>
                <p className="text-justify leading-7 sm:text-lg lg:leading-8">
                  دوره آموزش PHP یک برنامه جامع و کاربردیست و برای افرادی طراحی
                  شده که میخواهند مهارت‌های خود را در زمینه برنامه‌نویسی با زبان
                  PHP به سطح حرفه‌ای برسانند و وارد بازارکار شوند.
                </p>
              </div>
              <SaleBanner />
              <div className="flexCenter mt-10 flex-col gap-2 sm:flex-row-reverse lg:mt-0 lg:w-full lg:justify-between">
                <div className="flexCenter gap-2 whitespace-nowrap font-semibold">
                  <del className="text-xl text-lightGray">۵,۰۰۰,۰۰۰</del>
                  <span className="text-2xl">۲,۵۰۰,۰۰۰ تومان</span>
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
          <div className="col-span-12 grid grid-cols-2 place-content-center content-stretch gap-5 sm:grid-cols-3 lg:col-span-9">
            <article className="flexCenter flex-col gap-2 rounded-md bg-white p-4 md:flex-row md:justify-start md:px-6">
              <i className="bi bi-clock text-3xl text-lightGreen sm:text-4xl"></i>
              <div className="flexCenter flex-col gap-2 md:items-start">
                <h5 className="whitespace-nowrap text-sm font-semibold sm:text-[1rem]">
                  مدت زمان دوره
                </h5>
                <h6 className="text-sm text-lightGray">۴۳ ساعت</h6>
              </div>
            </article>
            <article className="flexCenter flex-col gap-2 rounded-md bg-white p-4 md:flex-row md:justify-start md:px-6">
              <i className="bi bi-info-circle text-3xl text-lightGreen sm:text-4xl"></i>
              <div className="flexCenter flex-col gap-2 md:items-start">
                <h5 className="whitespace-nowrap text-sm font-semibold sm:text-[1rem]">
                  وضعیت دوره
                </h5>
                <h6 className="text-sm text-lightGray">تکمیل شده</h6>
              </div>
            </article>
            <article className="flexCenter flex-col gap-2 rounded-md bg-white p-4 md:flex-row md:justify-start md:px-6 lg:px-4">
              <i className="bi bi-calendar3 text-3xl text-lightGreen sm:text-4xl"></i>
              <div className="flexCenter flex-col gap-2 md:items-start">
                <h5 className="whitespace-nowrap text-sm font-semibold sm:text-[1rem]">
                  آخرین به روز رسانی
                </h5>
                <h6 className="text-sm text-lightGray">۱۴۰۱/۰۷/۲۹</h6>
              </div>
            </article>
            <article className="flexCenter flex-col gap-2 rounded-md bg-white p-4 md:flex-row md:justify-start md:px-6">
              <i className="bi bi-person text-3xl text-lightGreen sm:text-4xl"></i>
              <div className="flexCenter flex-col gap-2 md:items-start">
                <h5 className="whitespace-nowrap text-sm font-semibold sm:text-[1rem]">
                  روش پشتیبانی
                </h5>
                <h6 className="text-sm text-lightGray">آنلاین</h6>
              </div>
            </article>
            <article className="sm:flexCenter hidden flex-col gap-2 rounded-md bg-white p-4 md:flex-row md:justify-start md:px-6">
              <i className="bi bi-briefcase text-3xl text-lightGreen sm:text-4xl"></i>
              <div className="flexCenter flex-col gap-2 md:items-start">
                <h5 className="whitespace-nowrap text-sm font-semibold sm:text-[1rem]">
                  پیش نیاز
                </h5>
                <h6 className="text-sm text-lightGray">شبکه و لینوکس</h6>
              </div>
            </article>
            <article className="sm:flexCenter hidden flex-col gap-2 rounded-md bg-white p-4 md:flex-row md:justify-start md:px-6">
              <i className="bi bi-camera-video text-3xl text-lightGreen sm:text-4xl"></i>
              <div className="flexCenter flex-col gap-2 md:items-start">
                <h5 className="whitespace-nowrap text-sm font-semibold sm:text-[1rem]">
                  نوع مشاهده
                </h5>
                <h6 className="text-sm text-lightGray">دانلودی / آنلاین</h6>
              </div>
            </article>
          </div>
          <div className="hidden rounded-md bg-white p-4 lg:col-span-3 lg:block">
            <div className="flexCenter w-full gap-3">
              <article className="flexCenter w-1/2 flex-row justify-start gap-2 rounded-md bg-gray-200 p-4 px-6">
                <i className="bi bi-person-fill text-3xl text-lightGreen sm:text-4xl"></i>
                <div className="flexCenter flex-col gap-2 md:items-start">
                  <h5 className="whitespace-nowrap text-sm font-semibold sm:text-[1rem]">
                    ۸۷۹
                  </h5>
                  <h6 className="text-sm text-lightGray">دانشجو</h6>
                </div>
              </article>
              <article className="flexCenter w-1/2 flex-grow-[2] flex-col gap-2 rounded-md bg-gray-200 p-4 md:flex-row md:justify-start md:px-6">
                <i className="bi bi-star-fill text-3xl text-lightOrange sm:text-4xl"></i>
                <div className="flexCenter flex-col gap-2 md:items-start">
                  <h5 className="whitespace-nowrap text-sm font-semibold sm:text-[1rem]">
                    ۵.۰
                  </h5>
                  <h6 className="text-sm text-lightGray">رضایت</h6>
                </div>
              </article>
            </div>
            <div className="mt-6">
              <div className="flexRow font-semibold">
                <span>درصد تکمیل دوره</span>
                <span>۱۰۰٪</span>
              </div>
              <div className="mr-auto mt-4 h-3 w-[100%] rounded-xl bg-lightGreen"></div>
            </div>
          </div>
          <CourseDescription />
          <div className="w-full lg:col-span-3">
            <div className="lg:flexCenter hidden h-[250px] w-full rounded-md bg-white p-2 lg:flex-col lg:gap-3">
              <img
                src="/images/50db59beddbfed36a1646dae99ca7b2d.png"
                alt=""
                className="h-[100px] w-[100px] rounded-full object-cover"
              />
              <span className="text-lg font-semibold">
                محمد امین سعیدی راد |‌ مدرس دوره
              </span>
              <GreenBorderButton title="مشاهده پروفایل من" />
            </div>
            <CopyLink />
          </div>
          <div className="flexCol col-span-12 flex items-stretch gap-2 rounded-md bg-white p-4 lg:col-span-9 lg:gap-4">
            <h3 className="flexCenter my-4 flex-row-reverse justify-end gap-2 text-xl font-semibold text-black sm:text-2xl sm:font-bold dark:text-white">
              <span className="text-black">سرفصل ها</span>
              <div className="hidden h-4 w-4 bg-lightBlue sm:block" />
            </h3>
            <article>
              <button
                onClick={() => handleAccordion(1)}
                className={`${showAccordionContent.includes(1) ? "rounded-t-md bg-gray-500 text-white" : "rounded-md bg-gray-200"} flexRow w-full p-5 transition-all`}
              >
                <span>فصل دوم</span>
                <div className="flexCenter gap-2">
                  <span
                    className={`${showAccordionContent.includes(1) ? "text-white" : "text-lightGray"} hidden text-sm lg:inline`}
                    dir="ltr"
                  >
                    22 lesson . 5h 15m
                  </span>
                  <i
                    className={`${showAccordionContent.includes(1) ? "bi bi-chevron-up" : "bi bi-chevron-down"} text-lg`}
                  ></i>
                </div>
              </button>
              <div
                className={`${showAccordionContent.includes(1) ? "h-[250px]" : "h-0"} box-border overflow-auto rounded-b-md bg-gray-100 transition-all`}
              >
                <ul className="h-full w-full">
                  <li className="flexCenter flexRow w-full flex-col gap-6 p-2 xs:flex-row">
                    <div className="flexCenter w-full justify-start gap-4">
                      <span className="flexCenter h-[12px] w-[12px] rounded-md bg-white p-4 text-black md:p-5">
                        ۱
                      </span>
                      <p className="text-sm md:text-[1rem]">
                        معرفی دوره + نگاه کلی به پروژه دوره
                      </p>
                    </div>
                    <div className="flexCenter ml-2 gap-2 self-end md:gap-3">
                      <span className="text-sm md:text-[1rem]">۲۰:۲۷</span>
                      <i className="bi bi-play-circle text-xl md:text-2xl"></i>
                    </div>
                  </li>
                  <div className="h-[1px] w-full bg-gray-200" />
                </ul>
              </div>
            </article>
            <article>
              <button
                onClick={() => handleAccordion(2)}
                className={`${showAccordionContent.includes(2) ? "rounded-t-md bg-gray-500 text-white" : "rounded-md bg-gray-200"} flexRow w-full p-5 transition-all`}
              >
                <span>فصل دوم</span>
                <div className="flexCenter gap-2">
                  <span
                    className={`${showAccordionContent.includes(2) ? "text-white" : "text-lightGray"} hidden text-sm lg:inline`}
                    dir="ltr"
                  >
                    22 lesson . 5h 15m
                  </span>
                  <i
                    className={`${showAccordionContent.includes(2) ? "bi bi-chevron-up" : "bi bi-chevron-down"} text-lg`}
                  ></i>
                </div>
              </button>
              <div
                className={`${showAccordionContent.includes(2) ? "h-[250px]" : "h-0"} box-border overflow-auto rounded-b-md bg-gray-100 transition-all`}
              >
                <ul className="h-full w-full">
                  <li className="flexCenter flexRow w-full flex-col gap-6 p-2 xs:flex-row">
                    <div className="flexCenter w-full justify-start gap-4">
                      <span className="flexCenter h-[12px] w-[12px] rounded-md bg-white p-4 text-black md:p-5">
                        ۱
                      </span>
                      <p className="text-sm md:text-[1rem]">
                        معرفی دوره + نگاه کلی به پروژه دوره
                      </p>
                    </div>
                    <div className="flexCenter ml-2 gap-2 self-end md:gap-3">
                      <span className="text-sm md:text-[1rem]">۲۰:۲۷</span>
                      <i className="bi bi-play-circle text-xl md:text-2xl"></i>
                    </div>
                  </li>
                  <div className="h-[1px] w-full bg-gray-200" />
                </ul>
              </div>
            </article>
            <article>
              <button
                onClick={() => handleAccordion(3)}
                className={`${showAccordionContent.includes(3) ? "rounded-t-md bg-gray-500 text-white" : "rounded-md bg-gray-200"} flexRow w-full p-5 transition-all`}
              >
                <span>فصل دوم</span>
                <div className="flexCenter gap-2">
                  <span
                    className={`${showAccordionContent.includes(3) ? "text-white" : "text-lightGray"} hidden text-sm lg:inline`}
                    dir="ltr"
                  >
                    22 lesson . 5h 15m
                  </span>
                  <i
                    className={`${showAccordionContent.includes(3) ? "bi bi-chevron-up" : "bi bi-chevron-down"} text-lg`}
                  ></i>
                </div>
              </button>
              <div
                className={`${showAccordionContent.includes(3) ? "h-[250px]" : "h-0"} box-border overflow-auto rounded-b-md bg-gray-100 transition-all`}
              >
                <ul className="h-full w-full">
                  <li className="flexCenter flexRow w-full flex-col gap-6 p-2 xs:flex-row">
                    <div className="flexCenter w-full justify-start gap-4">
                      <span className="flexCenter h-[12px] w-[12px] rounded-md bg-white p-4 text-black md:p-5">
                        ۱
                      </span>
                      <p className="text-sm md:text-[1rem]">
                        معرفی دوره + نگاه کلی به پروژه دوره
                      </p>
                    </div>
                    <div className="flexCenter ml-2 gap-2 self-end md:gap-3">
                      <span className="text-sm md:text-[1rem]">۲۰:۲۷</span>
                      <i className="bi bi-play-circle text-xl md:text-2xl"></i>
                    </div>
                  </li>
                  <div className="my-2 h-[1px] w-full bg-gray-200" />
                  <li className="flexCenter flexRow w-full flex-col gap-6 p-2 xs:flex-row">
                    <div className="flexCenter w-full justify-start gap-4">
                      <span className="flexCenter h-[12px] w-[12px] rounded-md bg-white p-4 text-black md:p-5">
                        ۱
                      </span>
                      <p className="text-sm md:text-[1rem]">
                        معرفی دوره + نگاه کلی به پروژه دوره
                      </p>
                    </div>
                    <div className="flexCenter ml-2 gap-2 self-end md:gap-3">
                      <span className="text-sm md:text-[1rem]">۲۰:۲۷</span>
                      <i className="bi bi-play-circle text-xl md:text-2xl"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
