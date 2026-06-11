"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CourseCard from "../CourseCard";
import { useState } from "react";

export default function NewCourses() {
  const [swiperInstance, setSwiperInstance] = useState<null | any>(null);

  return (
    <section className="mt-14">
      <div className="container lg:px-10">
        <div className="md:flexRow">
          <div className="flexCenter flex-col gap-4 sm:items-start sm:self-start">
            <h3 className="flexCenter flex-row-reverse gap-2 text-2xl font-semibold sm:text-3xl sm:font-bold">
              <span className="text-black dark:text-white">
                پرطرفدار ترین دوره ها
              </span>
              <div className="hidden h-4 w-4 bg-lightGreen sm:block" />
            </h3>
            <h4 className="text-lightGray sm:text-lg">
              دوره های محبوب و پروژه محور سبزلرن
            </h4>
          </div>
          <div className="md:flexCenter hidden gap-2">
            <span
              onClick={() => swiperInstance.slidePrev()}
              className="swiperArrow"
            >
              <i className="bi bi-chevron-right text-xl"></i>
            </span>
            <span
              onClick={() => swiperInstance.slideNext()}
              className="swiperArrow"
            >
              <i className="bi bi-chevron-left text-xl"></i>
            </span>
          </div>
        </div>

        {/* <Swiper
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          className="mt-10"
          modules={[Autoplay]}
          loop={true}
          // navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          autoplay={{ delay: 4000 }}
        >
          <SwiperSlide>
            <CourseCard />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard />
          </SwiperSlide>
          <SwiperSlide>
            <CourseCard />
          </SwiperSlide>
        </Swiper> */}
        <div className="flexCenter mt-6 gap-2 md:hidden">
          <span
            onClick={() => swiperInstance.slidePrev()}
            className="swiperArrow"
          >
            <i className="bi bi-chevron-right text-xl"></i>
          </span>
          <span
            onClick={() => swiperInstance.slideNext()}
            className="swiperArrow"
          >
            <i className="bi bi-chevron-left text-xl"></i>
          </span>
        </div>
      </div>
    </section>
  );
}
