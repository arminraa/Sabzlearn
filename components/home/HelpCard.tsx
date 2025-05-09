export default function HelpCard({
  color,
  icon,
  textColor,
}: Readonly<{
  color: string;
  icon: string;
  textColor: string;
}>) {
  return (
    <article className="w-full overflow-y-hidden rounded-xl bg-white p-5 lg:h-[140px] dark:bg-cardDark">
      <div className="flexCenter flex-col gap-4 lg:flex-row">
        {/* <div className="w-[40%] flexCenter mb-6 lg:mb-0"> */}
        <div className="lg:min-w-[75px] lg:max-w-[90px]">
          <span
            className={`relative inline-block h-[55px] w-[85px] rounded-full lg:h-[85px] lg:w-[55px] ${color}`}
          >
            <i
              className={`absolute ${icon} text-4xl ${textColor} -bottom-5 left-1/2 -translate-x-1/2 lg:-left-5 lg:bottom-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0`}
            ></i>
          </span>
        </div>

        {/* </div> */}
        <div className="flexCenter flex-col gap-1 text-center lg:items-start lg:text-start">
          <h3 className="font-bold text-black lg:text-lg dark:text-white">
            تضمین کاملترین محتوا
          </h3>
          <p className="text-sm leading-7 text-superLightGray lg:text-[1rem] dark:text-white/70">
            بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز
            دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری.
          </p>
        </div>
      </div>
    </article>
  );
}
