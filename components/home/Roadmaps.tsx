import RoadmapCard from "./RoadmapCard";

export default function Roadmaps() {
  return (
    <section className="mt-14">
      <div className="container">
        <div className="flexCenter flex-col gap-6">
          <div className="flexCenter flex-col sm:items-start gap-4 sm:self-start">
            <h3 className="font-semibold sm:font-bold text-2xl sm:text-3xl flexCenter flex-row-reverse gap-2">
              <span className="dark:text-white text-black">نقشه راه ها</span>
              <div className="hidden sm:block w-4 h-4 orange-red-gradient" />
            </h3>
            <h4 className="text-lightGray sm:text-lg">
              نقشه های راه برای شروع اصولی یادگیری
            </h4>
          </div>
          <div className="gridCols1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:mt-14 md:mt-8 mt-7 w-full">
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
