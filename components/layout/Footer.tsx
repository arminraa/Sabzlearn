export default function Footer() {
  return (
    <footer className="w-full bg-white mt-10 pb-28 pt-8">
      <div className="container">
        <div className="flexRow">
          <div className="flexCenter gap-3">
            <img
              src="/images/logo.webp"
              className="w-[55px] sm:w-[70px] h-[55px] sm:h-[70px] object-contain"
              alt="Logo"
            />
            <img
              src="/images/svgexport-37.svg"
              className="w-[55px] sm:w-[100px] h-[55px] sm:h-[100px] object-contain"
              alt="Text-Logo"
            />
          </div>
          <ul className="flexCenter gap-2">
            <li className="bg-superLightGray/40 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-full flexCenter text-white">
              <i className="bi bi-linkedin sm:text-xl"></i>
            </li>
            <li className="bg-superLightGray/40 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-full flexCenter text-white">
              <i className="bi bi-instagram sm:text-xl"></i>
            </li>
            <li className="bg-superLightGray/40 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-full flexCenter text-white">
              <i className="bi bi-telegram sm:text-xl"></i>
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-start md:justify-start sm:justify-between sm:px-6 gap-x-12 gap-y-2 items-center flex-wrap mt-8">
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
        <div className=" bg-superLightGray/40 w-[95%] sm:w-[98%] h-[1px] mx-auto my-4" />
        <div className="lg:flexCenter lg:gap-4">
          <div className="sm:w-[60%] lg:w-[39%] lg:py-3">
            <h3 className="font-bold sm:text-2xl w-full text-start">
              درباره سبز لرن
            </h3>

            <p className="w-full sm:text-lg text-start text-lightGray lg:mt-4">
              شروع هرچیزی سخته، ولی وقتی مسیر درستی رو انتخاب کنی با خیال راحت و
              بدون استرس میتونی از مسیر لذت ببری. ما در سبزلرن، توی سفر به دنیای
              برنامه نویسی کنارت هستیم تا باهم رشد کنیم و از نتیجه زحمات مون لذت
              ببریم.
            </p>
          </div>
          <div className="flex flex-col lg:w-[60%] sm:flex-row sm:items-center lg:self-start items-start justify-center sm:justify-between gap-4 sm:gap-2 lg:gap-4">
            <div className="flexCenter mt-6 lg:mt-0 gap-12 lg:gap-4 items-start">
              <ul className="flex flex-col justify-center items-start gap-2 lg:gap-4">
                <li className="font-bold sm:text-2xl">دوره های پرطرفدار</li>
                <li className="text-lightGray text-sm sm:text-[1rem] lg:text-lg">
                  آموزش پایتون
                </li>
                <li className="text-lightGray text-sm sm:text-[1rem] lg:text-lg">
                  آموزش Html
                </li>
                <li className="text-lightGray text-sm sm:text-[1rem] lg:text-lg">
                  آموزش Css
                </li>
                <li className="text-lightGray text-sm sm:text-[1rem] lg:text-lg">
                  پروژه های خلاقانه با Html و Css
                </li>
              </ul>
              <ul className="flex flex-col justify-center items-start gap-2 lg:gap-4">
                <li className="font-bold sm:text-2xl">دسترسی سریع</li>
                <li className="text-lightGray text-sm sm:text-[1rem] whitespace-nowrap">
                  قوانین و مقررات
                </li>
                <li className="text-lightGray text-sm sm:text-[1rem] lg:text-lg">
                  ارسال تیکت
                </li>
                <li className="text-lightGray text-sm sm:text-[1rem] lg:text-lg">
                  همه دوره ها
                </li>
              </ul>
            </div>
            <img
              src="/images/enamad.png"
              className="w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] object-contain"
              alt="Enamad"
            />
          </div>
        </div>

        <div className="flexCenter flex-col mt-6 gap-3">
          <span className="w-full text-center inline-block">
            کلیه حقوق مادی و معنوی سایت برای سبز لرن محفوظ است.
          </span>
          <span className="text-center w-full inline-block">
            ساخته شده با ❤️ توسط آرمین
          </span>
        </div>
      </div>
    </footer>
  );
}
