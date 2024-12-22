import Link from "next/link";
import CourseCard from "./CourseCard";

export default function LastCourses() {
  return (
    <section className="mt-14">
      <div className="container">
        <div className="flexCenter flex-col gap-6  sm:flex-row sm:justify-between">
          <div className="flexCenter flex-col items-start gap-4">
            <h3 className="dark:text-white text-black font-semibold sm:font-bold text-2xl sm:text-3xl flexCenter flex-row-reverse gap-2">
              <span className="dark:text-white text-black">آخرین دوره های سبزلرن</span>
              <div className="hidden sm:block w-4 h-4 bg-lightOrange" />
            </h3>
            <h4 className="text-lightGray sm:text-lg">
              سکوی پرتاپ شما به سمت موفقیت
            </h4>
          </div>
          <Link href="#" className="text-lightGreen flexCenter gap-2 text-lg">
            <span>مشاهده همه دوره ها</span>
            <i className="bi bi-arrow-left"></i>
          </Link>
        </div>
        <div className="gridCols1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-14">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </section>
  );
}
