"use client";
import Breadcrumb from "@/components/course/Breadcrumb";
import { useEffect, useState } from "react";
import { ToPersianNumber } from "topersiannumber";

export default function CoursePage() {
  const [second, setSecond] = useState(12);
  const [minute, setMinute] = useState(1);
  const [hour, setHour] = useState(24);
  const [day, setDay] = useState(10);
  useEffect(() => {
    const timer = setInterval(() => {
      setSecond(second - 1);
      if (second == 0) {
        setSecond(60);
        setMinute(minute - 1);
        if (minute == 0) {
          setMinute(60);
          setHour(hour - 1);
          if (hour == 0) {
            setHour(24);
            setDay(day - 1);
          }
        }
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [second]);
  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => console.log("Text copied to clipboard!"))
      .catch((err) => console.error("Failed to copy text", err));
  };
  return (
    <section className="min-h-screen w-screen">
      <div className="container mt-10 xl:max-w-[95%] 2xl:max-w-[78%] 3xl:max-w-[70%]">
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
              <div className="flexCenter w-full flex-col gap-4 rounded-md bg-gray-200 px-3 py-4 sm:justify-between lg:bg-white xl:flex-row">
                <span className="whitespace-nowrap text-[1rem] font-bold text-red-600 sm:text-lg">
                  ۵۰ ٪ پیشنهاد شگفت انگیز
                </span>
                <div className="flexCenter gap-3 font-[300] sm:text-lg">
                  <span className="flexCenter flex-col gap-1 whitespace-nowrap border-l-[1px] border-gray-300 pl-3 sm:flex-row">
                    <strong className="text-lg font-semibold sm:text-2xl">
                      {day < 10 && day !== 0
                        ? `۰${ToPersianNumber(day)}`
                        : ToPersianNumber(day)}
                    </strong>{" "}
                    روز
                  </span>
                  <span className="flexCenter flex-col gap-1 whitespace-nowrap border-l-[1px] border-gray-300 pl-3 sm:flex-row">
                    <strong className="text-lg font-semibold sm:text-2xl">
                      {hour < 10 && hour !== 0
                        ? `۰${ToPersianNumber(hour)}`
                        : ToPersianNumber(hour)}
                    </strong>{" "}
                    ساعت
                  </span>
                  <span className="flexCenter flex-col gap-1 whitespace-nowrap border-l-[1px] border-gray-300 pl-3 sm:flex-row">
                    <strong className="text-lg font-semibold sm:text-2xl">
                      {minute < 10 && minute !== 0
                        ? `۰${ToPersianNumber(minute)}`
                        : ToPersianNumber(minute)}
                    </strong>{" "}
                    دقیقه
                  </span>
                  <span className="flexCenter flex-col gap-1 whitespace-nowrap sm:flex-row">
                    <strong className="text-lg font-semibold text-red-600 sm:text-2xl">
                      {second < 10 && second !== 0
                        ? `۰${ToPersianNumber(second)}`
                        : ToPersianNumber(second)}
                    </strong>{" "}
                    ثانیه
                  </span>
                </div>
              </div>

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
          <div className="col-span-12 grid grid-cols-2 place-content-center content-stretch gap-5 sm:grid-cols-3 lg:col-span-8">
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
          <div className="hidden rounded-md bg-white p-4 lg:col-span-4 lg:block">
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
          <div className="col-span-12 w-full rounded-md bg-white p-4 leading-8 lg:col-span-8">
            <h3 className="flexCenter my-4 flex-row-reverse justify-end gap-2 text-xl font-semibold text-black sm:text-2xl sm:font-bold dark:text-white">
              <span className="text-black">توضیحات</span>
              <div className="hidden h-4 w-4 bg-lightOrange sm:block" />
            </h3>
            <p className="text-start">
              NEXT.Js یا NEXT طی چندسال اخیر برای تکمیل و تقویت تکنولوژی React
              وارد میدون شد و سعی کرد تمام نواقص یا محدودیت های اون رو پوشش بده
              تا هیچ شک و شبهه ای در قدرت ری اکت برای طراحی صفحات وب باقی نمونه.
              به عبارتی اومده تا با ویژگی فول استک بودن، React رو فراتر از یک
              تکنولوژی فرانت اند جا بندازه و از طریق ترکیب اون با Node Js در بک
              اند، به شما کمک کنه یک پروژه کامل و صفر تا صد وب رو به بهترین شکل
              طراحی و پیاده سازی کنید.
            </p>
            <img
              src="/images/next.webp"
              className="my-4 min-h-[150px] w-full rounded-md object-cover"
              alt=""
            />
            <p className="text-start">
              اگر در برنامه نویسی دنبال کاهش کدهای برنامه، سرعت اجرای فوق العاده
              وب سایت، فول استک بودن تکنولوژی و همینطور پشتیبانی اون هستید، NEXT
              یکی از بهترین گزینه های موجود روی میز شما خواهد بود چون علاوه بر
              داشتن تمام مزایای ری اکت، اکثر ایراداتی که توسعه دهنده های
              تکنولوژی های رقیب به اون وارد میکردن رو پوشش داده و حتی فراتر از
              اونها عمل کرده.
            </p>
          </div>
          <div className="w-full lg:col-span-4">
            <div className="lg:flexCenter hidden h-[250px] w-full rounded-md bg-white lg:flex-col lg:gap-3">
              <img
                src="/images/50db59beddbfed36a1646dae99ca7b2d.png"
                alt=""
                className="h-[100px] w-[100px] rounded-full object-cover"
              />
              <span className="text-lg font-semibold">
                محمد امین سعیدی راد |‌ مدرس دوره
              </span>
              <button className="rounded-md border border-lightGreen bg-white p-2 text-sm text-lightGreen">
                مشاهده پروفایل من
              </button>
            </div>
            <div className="lg:flexCenter mt-6 hidden h-[160px] w-full rounded-md bg-white p-4 lg:flex-col lg:gap-3">
              <span className="text-lg font-semibold">لینک کوتاه آموزش</span>
              <button
                onClick={() => handleCopy("sabzlearn.ir/?p=138")}
                className="flexRow w-full rounded-md border border-dashed border-lightBlue bg-blue-50 p-4 text-end text-lg text-lightBlue"
              >
                <i className="bi bi-copy text-xl"></i>
                sabzlearn.ir/?p=۱۳۸
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// lg:mt-32
{
  /* <mt-8></mt-8> */
}
