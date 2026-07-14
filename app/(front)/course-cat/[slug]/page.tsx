import CourseCategory from "@/components/course-category/CourseCategory";
import prisma from "@/lib/prisma";

export default async function CourseCategoryPage({
  params,
  searchParams,
}: Readonly<{
  params: Promise<{ slug: string }>;
  searchParams: Promise<{
    sort_by?: string;
    only_free_courses?: string;
    only_pre_sale_courses?: string;
    query?: string;
  }>;
}>) {
  const { sort_by, only_free_courses, only_pre_sale_courses, query } =
    await searchParams;
  const { slug } = await params;
  console.log(query);
  const where: any = {
    published: true,
  };

  if (only_free_courses === "true") {
    where.price = 0;
  }
  if (only_pre_sale_courses === "true") {
    where.preSale = true;
  }
  if (query) {
    where.OR = [
      {
        title: {
          contains: query,
        },
      },
      {
        shortDescription: {
          contains: query,
        },
      },
    ];
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

  const categories = await prisma.category.findMany({
    include: {
      courses: {
        where,
        orderBy,
      },
    },
  });
  const allCourses = categories.flatMap((category) => category.courses);
  // if (slug === "all") {
  //   return <CourseCategory categories={categories} courses={courses} />;
  // } else {
  //   return "adasd";
  // }
  return (
    <>
      {categories.map((category) =>
        category.slug === slug ? (
          <CourseCategory key={category.id} category={category} allCourses={allCourses} />
        ) : (
          <div key={category.id} ></div>
        )
      )}
    </>
  );
}
