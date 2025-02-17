"use client";
import { useEffect, useState } from "react";
import { ToPersianNumber } from "topersiannumber";

export default function SaleBanner() {
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
  return (
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
  );
}
