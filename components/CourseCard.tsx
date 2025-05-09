import Link from "next/link";

export default function CourseCard() {
  return (
    <Link href="/course/eng-course">
      <article className="w-full rounded-xl bg-white dark:bg-cardDark">
        <img
          src="/images/English22-1-768x432.webp"
          className="h-[168px] w-full rounded-xl object-cover"
          alt="Card-Image"
        />
        <div className="flex flex-col gap-4 p-4">
          <h3 className="h-[24px] w-full overflow-hidden text-right font-semibold text-black dark:text-white">
            آموزش جامع زبان انگلیسی
          </h3>
          <p className="h-[50px] w-full overflow-hidden text-right text-sm leading-7 text-superLightGray/90 dark:text-white/70">
            ا دوره جامع آموزش زبان انگلیسی سبزلرن، زبان انگلیسی را برای پیشرفت
            در برنامه‌نویسی حرفه‌ای یاد بگیرید و مهارت‌های خود…
          </p>
          <div className="flexRow">
            <div className="flexCenter gap-1 text-sm text-superLightGray dark:text-white/70">
              <i className="bi bi-person text-xl"></i>
              <span>بهادر عرب</span>
            </div>
            <div className="flexCenter gap-1 text-sm text-lightOrange">
              <span>۵.۰</span>
              <i className="bi bi-star-fill text-xl"></i>
            </div>
          </div>
          <div className="mx-auto h-[1px] w-[95%] overflow-hidden rounded-md bg-superLightGray dark:bg-white/70"></div>
          <div className="flexRow relative">
            <del className="absolute -top-4 left-4 pl-2 text-superLightGray dark:text-white/70">
              ۳۷,۰۰۰
            </del>
            <div className="flexCenter gap-1 text-superLightGray dark:text-white/70">
              <i className="bi bi-people text-xl"></i>
              <span>۶۸</span>
            </div>
            <div className="flexCenter gap-1 text-lightGreen">
              <span className="text-lg font-semibold">۳۷,۰۰۰</span>

              <img
                className="h-3.5 w-3.5"
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
