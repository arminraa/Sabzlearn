import CourseCategory from "@/components/course-category/CourseCategory";
import SearchInput from "@/components/header/SearchInput";
import prisma from "@/lib/prisma";
import { Course } from "@/types/prisma";

export default async function CourseCategoryPage({
  params,
  searchParams,
}: Readonly<{
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ sort_by?: string; only_free_courses?: string }>;
}>) {
  const { sort_by, only_free_courses } = await searchParams;
  const { slug } = await params;

  const where: any = {
    published: true,
  };

  if (only_free_courses === "true") {
    where.price = 0;
  }

  let orderBy: any = {
    createdAt: "desc", // default
  };

  switch (sort_by) {
    case "popular":
      orderBy = {
        viewersCount: "desc",
      };
      break;

    case "price_lowest":
      orderBy = {
        price: "asc",
      };
      break;

    case "price_highest":
      orderBy = {
        price: "desc",
      };
      break;

    case "normal":
    default:
      orderBy = {
        createdAt: "desc",
      };
  }

  const courses = await prisma.course.findMany({
    where,
    orderBy,
  });

  if (slug === "/all") {
    return (
      <>
        <CourseCategory courses={courses} />
      </>
    );
  } else {
    return (
      <section className="lg:px-10">
        <div className="mx-auto min-h-screen w-full max-w-[425px] px-[1rem] sm:max-w-[unset] sm:px-[1.5rem] md:max-w-[640px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] 3xl:max-w-[2000px]">
          <div className="lg:pb-3 lg:mt-4 flexCenter flex-col gap-6 pt-6 sm:flex-row sm:justify-between">
            <h3 className="flexCenter flex-row-reverse gap-2 text-2xl font-semibold text-black sm:text-3xl sm:font-bold dark:text-white">
              <span className="text-black dark:text-white">
                دوره های فرانت اند
              </span>
              <div className="hidden h-4 w-4 bg-lightOrange sm:block" />
            </h3>

            <span className="text-lightGray lg:text-xl">۲۹ عنوان آموزشی</span>
          </div>
          <div className="mt-6 w-full lg:mt-10">
            <div className="flexCenter w-full flex-wrap gap-4 sm:gap-5 lg:flex-nowrap lg:items-start xl:gap-10">
              <div className="flexCenter w-full flex-wrap gap-4 sm:gap-5 lg:w-[30%] xl:w-[25%]">
                <SearchInput
                  placeholder="جستجو بین دوره ها"
                  inputStyles="bg-white dark:bg-cardDark placeholder:sm:text-lg rounded-xl px-3 py-2 lg:py-4 lg:px-4"
                  styles="w-full"
                />
                <div className="md:flexRow hidden w-full rounded-xl bg-white px-3 py-2 lg:py-4 lg:px-4 dark:bg-cardDark">
                  <span className="font-[600] text-black dark:text-white">
                    فقط دوره های رایگان
                  </span>
                  <div className="flexCenter h-full cursor-pointer">
                    <div
                      className="checkbox-wrapper-2 flexCol"
                      // onClick={() => handeFreeCourseSlider()}
                    >
                      <input type="checkbox" className="sc-gJwTLC ikxBAC" />
                    </div>
                  </div>
                </div>
                <div className="md:flexRow hidden w-full rounded-xl bg-white px-3 py-2 lg:py-4 lg:px-4 dark:bg-cardDark">
                  <span className="font-[600] text-black dark:text-white">
                    در حال پیش فروش{" "}
                  </span>
                  <div className="flexCenter h-full cursor-pointer">
                    <div
                      className="checkbox-wrapper-2 flexCol"
                      // onClick={() => setIsChecked2((prev) => !prev)}
                    >
                      <input type="checkbox" className="sc-gJwTLC ikxBAC" />
                    </div>
                  </div>
                </div>
              </div>
              <button className="flexCenter flex-grow-[1] basis-0 gap-2 rounded-lg bg-white px-4 py-3 text-black md:hidden dark:bg-cardDark dark:text-white">
                <i className="bi bi-funnel sm:text-lg"></i>
                <span className="text-sm sm:text-[1rem]">فیلتر</span>
              </button>
              <button className="flexCenter flex-grow-[1] basis-0 gap-2 rounded-lg bg-white px-4 py-3 text-black md:hidden dark:bg-cardDark dark:text-white">
                <i className="bi bi-arrow-down-up sm:text-lg"></i>
                <span className="text-sm sm:text-[1rem]">همه دوره ها</span>
              </button>
              <div className="w-full lg:w-[70%] xl:w-[75%]">
                <div className="md:flexRow hidden h-[78px] w-full rounded-xl bg-white text-black dark:bg-cardDark dark:text-white">
                  <div className="flexCenter h-full w-full justify-start gap-4 px-3">
                    <div className="flexCenter gap-4 font-[600]">
                      <i className="bi bi-arrow-down-up text-xl"></i>
                      <span>مرتب سازی براساس :‌</span>
                    </div>
                    <span
                      className={"flexCenter h-full cursor-pointer transition"}
                    >
                      همه دوره ها
                    </span>
                    <span
                      className={"flexCenter h-full cursor-pointer transition"}

                    >
                      ارزان ترین
                    </span>
                    <span
                      className={"flexCenter h-full cursor-pointer transition"}

                    >
                      گران ترین
                    </span>
                    <span
                      className={"flexCenter h-full cursor-pointer transition"}

                    >
                      پرمخاطب ها
                    </span>
                  </div>
                </div>
                <div className="gridCols1 mt-6 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  sex
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
