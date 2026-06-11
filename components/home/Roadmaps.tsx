import RoadmapCard from "./RoadmapCard";

export default function Roadmaps() {
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
            <RoadmapCard
              title="فرانت اند"
              quantity="۳۰ دوره"
              color="orange-red-gradient"
              icon="bi bi-code-slash"
            />
            <RoadmapCard
              title="امنیت"
              quantity="۲۰ دوره"
              color="green-blue-gradient"
              icon="bi bi-shield-check"
            />
            <RoadmapCard
              title="جاوا"
              quantity="۱۰ دوره"
              color="blue-purple-gradient"
              icon="bi bi-filetype-java"
            />
            <RoadmapCard
              title="اندروید"
              quantity="۵ دوره"
              color="pink-purple-gradient"
              icon="bi bi-android"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
