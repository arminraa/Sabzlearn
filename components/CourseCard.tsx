import Link from "next/link";

export default function CourseCard() {
  return (
    <Link href="/course/eng-course">
      <article className="bg-white dark:bg-cardDark w-full rounded-xl">
        <img
          src="/images/English22-1-768x432.webp"
          className="rounded-xl h-[168px] w-full object-cover"
          alt="Card-Image"
        />
        <div className="p-4 flex flex-col gap-4">
          <h3 className="font-semibold w-full text-right dark:text-white text-black">
            آموزش جامع زبان انگلیسی
          </h3>
          <p className="w-full text-right text-superLightGray/90 dark:text-white/70 text-sm leading-7">
            با دوره جامع آموزش زبان انگلیسی سبزلرن، زبان انگلیسی را برای پیشرفت
            در برنامه‌نویسی حرفه‌ای یاد بگیرید و مهارت‌های خود…
          </p>
          <div className="flexRow">
            <div className="text-superLightGray dark:text-white/70 text-sm flexCenter gap-1">
              <i className="bi bi-person text-xl"></i>
              <span>بهادر عرب</span>
            </div>
            <div className="text-lightOrange text-sm flexCenter gap-1">
              <span>۵.۰</span>
              <i className="bi bi-star-fill text-xl"></i>
            </div>
          </div>
          <div className="w-[95%] mx-auto h-[1px] rounded-md overflow-hidden bg-superLightGray dark:bg-white/70"></div>
          <div className="flexRow relative">
            <del className="text-superLightGray dark:text-white/70 pl-2 absolute -top-4 left-4">
              ۳۷‍‍,۰۰۰
            </del>
            <div className="text-superLightGray dark:text-white/70 flexCenter gap-1">
              <i className="bi bi-people text-xl"></i>
              <span>۶۸</span>
            </div>
            <div className="text-lightGreen flexCenter gap-1">
              <span className="font-semibold text-lg">۳۷‍‍,۰۰۰</span>

              <img
                className="w-3.5 h-3.5"
                src="/images/svgexport-21.svg"
                alt="Toman"
              />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
