export default function HelpCard({
  color,
  icon,
  textColor
}: Readonly<{
  color: string;
  icon: string;
  textColor : string
}>) {
  return (
    <article className="w-full lg:h-[140px] rounded-xl p-5 overflow-y-hidden bg-white dark:bg-cardDark">
      <div className="flexCenter flex-col lg:flex-row gap-4">
        {/* <div className="w-[40%] flexCenter mb-6 lg:mb-0"> */}
        <div className="lg:min-w-[75px] lg:max-w-[90px]">
          <span
            className={`relative rounded-full inline-block w-[85px] lg:w-[55px] lg:h-[85px] h-[55px] ${color}`}
          >
            <i
              className={`absolute ${icon} text-4xl ${textColor} -bottom-5 lg:top-1/2 lg:bottom-0 lg:-left-5 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2`}
            ></i>
          </span>
        </div>

        {/* </div> */}
        <div className="flexCenter text-center lg:text-start lg:items-start flex-col gap-1">
          <h3 className="font-bold lg:text-lg dark:text-white text-black">تضمین کاملترین محتوا</h3>
          <p className="text-sm lg:text-[1rem] leading-7 text-superLightGray dark:text-white/70">
            بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز
            دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری.
          </p>
        </div>
      </div>
    </article>
  );
}
