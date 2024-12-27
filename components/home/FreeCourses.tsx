import Link from "next/link";
import CourseCard from "../CourseCard";

export default function FreeCourses() {
  return (
    <section className="mt-14">
      <div className="container">
        <div className="flexCenter flex-col gap-6 sm:flex-row sm:justify-between">
          <div className="flexCenter flex-col items-start gap-4">
            <h3 className="flexCenter flex-row-reverse gap-2 text-2xl font-semibold sm:text-3xl sm:font-bold">
              <span>آخرین دوره های سبزلرن</span>
              <div className="hidden h-4 w-4 bg-lightOrange sm:block" />
            </h3>
            <h4 className="text-lightGray sm:text-lg">
              سکوی پرتاپ شما به سمت موفقیت
            </h4>
          </div>
          <Link href="#" className="flexCenter gap-2 text-lg text-lightGreen">
            <span>مشاهده همه دوره ها</span>
            <i className="bi bi-arrow-left"></i>
          </Link>
        </div>
        <div className="gridCols1 mt-14 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
