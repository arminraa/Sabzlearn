import prisma from "@/lib/prisma";
import RoadmapCard from "./RoadmapCard";

export default async function Roadmaps() {
  const categories = await prisma.category.findMany({
    include: {
      courses: true,
    },
  });

  const gradientArray = [
    "orange-red-gradient",
    "green-blue-gradient",
    "blue-purple-gradient",
    "pink-purple-gradient",
  ];

  return (
    <section className="mt-14">
      <div className="container lg:px-10">
        <div className="flexCenter flex-col gap-6">
          <div className="flexCenter flex-col gap-4 sm:items-start sm:self-start">
            <h3 className="flexCenter flex-row-reverse gap-2 text-2xl font-semibold sm:text-3xl sm:font-bold">
              <span className="text-black dark:text-white">نقشه راه ها</span>
              <div className="orange-red-gradient hidden h-4 w-4 sm:block" />
            </h3>
            <h4 className="text-lightGray sm:text-lg">
              نقشه های راه برای شروع اصولی یادگیری
            </h4>
          </div>
          <div className="gridCols1 mt-7 w-full grid-cols-2 gap-4 sm:grid-cols-3 md:mt-8 lg:mt-14 lg:grid-cols-4">
            {categories &&
              categories.map((category, index) =>
                index < 4 ? (
                  <RoadmapCard
                    key={category.id}
                    title={category.title}
                    quantity={`${category.courses.length}`}
                    color={gradientArray[index]}
                    icon="bi bi-shield-check"
                    slug={category.slug}
                  />
                ) : null
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
