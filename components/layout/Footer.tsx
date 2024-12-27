export default function Footer() {
  return (
    <footer className="mt-10 w-full bg-white py-8 dark:bg-cardDark">
      <div className="container">
        <div className="flexRow">
          <div className="flexCenter gap-3">
            <img
              src="/images/logo.webp"
              className="h-[55px] w-[55px] object-contain sm:h-[70px] sm:w-[70px]"
              alt="Logo"
            />
            <img
              src="/images/svgexport-37.svg"
              className="h-[55px] w-[55px] object-contain sm:h-[100px] sm:w-[100px] dark:mix-blend-screen"
              alt="Text-Logo"
            />
          </div>
          <ul className="flexCenter gap-2">
            <li className="flexCenter h-[30px] w-[30px] rounded-full bg-superLightGray/40 text-white sm:h-[40px] sm:w-[40px] dark:bg-white/90 dark:text-black">
              <i className="bi bi-linkedin sm:text-xl"></i>
            </li>
            <li className="flexCenter h-[30px] w-[30px] rounded-full bg-superLightGray/40 text-white sm:h-[40px] sm:w-[40px] dark:bg-white/90 dark:text-black">
              <i className="bi bi-instagram sm:text-xl"></i>
            </li>
            <li className="flexCenter h-[30px] w-[30px] rounded-full bg-superLightGray/40 text-white sm:h-[40px] sm:w-[40px] dark:bg-white/90 dark:text-black">
              <i className="bi bi-telegram sm:text-xl"></i>
            </li>
          </ul>
        </div>
        <div className="mt-8 flex w-full flex-wrap items-center justify-start gap-x-12 gap-y-2 text-black sm:justify-between sm:px-6 md:justify-start dark:text-white">
          <div className="flex-grow-1 flexCenter justify-start gap-1">
            <i className="bi bi-phone text-lg sm:text-xl"></i>
            <span className="text-sm sm:text-[1rem]">02191030926</span>
          </div>
          <div className="flex-grow-1 flexCenter justify-start gap-1">
            <i className="bi bi-envelope text-lg sm:text-xl"></i>
            <span className="text-sm sm:text-[1rem]">info@sabzlearn.ir</span>
          </div>
          <div className="flex-grow-2 flexCenter justify-start gap-1">
            <i className="bi bi-telegram text-lg sm:text-xl"></i>
            <span className="text-sm sm:text-[1rem]">
              https://t.me/sabzlearn_support
            </span>
          </div>
        </div>
        <div className="mx-auto my-4 h-[1px] w-[95%] bg-superLightGray/40 sm:w-[98%]" />
        <div className="flexCol mt-8 items-start gap-4 sm:flex-row sm:flex-wrap">
          <div className="sm:w-[60%] lg:w-[40%]">
            <h3 className="w-full text-start font-bold text-black sm:text-2xl dark:text-white">
              درباره سبز لرن
            </h3>

            <p className="w-full text-start text-lightGray sm:text-lg lg:mt-4 dark:text-white/70">
              شروع هرچیزی سخته، ولی وقتی مسیر درستی رو انتخاب کنی با خیال راحت و
              بدون استرس میتونی از مسیر لذت ببری. ما در سبزلرن، توی سفر به دنیای
              برنامه نویسی کنارت هستیم تا باهم رشد کنیم و از نتیجه زحمات مون لذت
              ببریم.
            </p>
          </div>

          <div className="flexCenter mt-6 items-start gap-12 lg:mt-0 lg:gap-4">
            <ul className="flex flex-col items-start justify-center gap-2 lg:gap-4">
              <li className="font-bold text-black sm:text-2xl dark:text-white">
                دوره های پرطرفدار
              </li>
              <li className="text-sm text-lightGray sm:text-[1rem] lg:text-lg dark:text-white/70">
                آموزش پایتون
              </li>
              <li className="text-sm text-lightGray sm:text-[1rem] lg:text-lg dark:text-white/70">
                آموزش Html
              </li>
              <li className="text-sm text-lightGray sm:text-[1rem] lg:text-lg dark:text-white/70">
                آموزش Css
              </li>
              <li className="text-sm text-lightGray sm:text-[1rem] lg:text-lg dark:text-white/70">
                پروژه های خلاقانه با Html و Css
              </li>
            </ul>
            <ul className="flex flex-col items-start justify-center gap-2 lg:gap-4">
              <li className="font-bold text-black sm:text-2xl dark:text-white">
                دسترسی سریع
              </li>
              <li className="whitespace-nowrap text-sm text-lightGray sm:text-[1rem] dark:text-white/70">
                قوانین و مقررات
              </li>
              <li className="text-sm text-lightGray sm:text-[1rem] lg:text-lg dark:text-white/70">
                ارسال تیکت
              </li>
              <li className="text-sm text-lightGray sm:text-[1rem] lg:text-lg dark:text-white/70">
                همه دوره ها
              </li>
            </ul>
          </div>
          <img
            src="/images/enamad.png"
            className="h-[150px] w-[150px] object-contain sm:h-[170px] sm:w-[170px]"
            alt="Enamad"
          />
        </div>

        <div className="flexCenter mt-8 flex-col gap-3 text-black sm:flex-row sm:justify-between dark:text-white">
          <span className="inline-block w-full text-center">
            کلیه حقوق مادی و معنوی سایت برای سبز لرن محفوظ است.
          </span>
          <span className="inline-block w-full text-center">
            ساخته شده با ❤️ توسط آرمین
          </span>
        </div>
      </div>
    </footer>
  );
}
