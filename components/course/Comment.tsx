export default function Comment() {
  return (
    <div className="flexCenter mt-6 flex-col gap-4">
      <article className="rounded-md bg-gray-100 p-4 md:p-5 dark:bg-gray-700">
        <div className="flexRow w-full bg-transparent">
          <div className="flexCenter gap-6 py-2">
            <div
              className="relative hidden h-[50px] w-[50px] place-content-center rounded-full outline outline-1 outline-offset-[5px] outline-lightBlue sm:grid"
              id="avatar"
            >
              <span className="absolute -right-[10px] top-0 grid h-[20px] w-[20px] place-content-center rounded-full bg-lightBlue text-white">
                <i className="bi bi-check font-light"></i>
              </span>
            </div>
            <div className="flexCenter flex-col items-start gap-1">
              <span className="text-black dark:text-white">
                recone <strong>| دانشجو</strong>
              </span>
              <span className="text-sm text-lightGray">۱۴۰۳/۱۰/۰۵</span>
            </div>
          </div>

          <button className="grid h-[45px] w-[45px] place-content-center rounded-full border border-lightBlue bg-transparent transition-colors hover:bg-lightBlue/10">
            <i className="bi bi-arrow-90deg-left text-lg text-lightBlue"></i>
          </button>
        </div>
        <div className="mt-4 h-[1px] w-full rounded-md bg-gray-300 dark:bg-gray-500" />
        <p className="mt-4 text-start text-sm font-light leading-7 text-black/80 sm:text-[1rem] sm:leading-8 dark:text-white">
          سلام امیدوارم خوب باشید. دو مورد که میخواستم پیشنهاد بدم این هست که با
          توجه به اینکه من شخصا این دوره رو با هدف پیاده سازی بازی برای اهدافی
          چون جذب کاربر و مارکتینگ در وبسایت و اپ، خریداری کردم، اگر بخشی داشته
          باشه که در مورد بک اند یک بازی آنلاین هم آموزش بدین خیلی خوب میشه. یا
          حتی اگر بشه یک بازی ساده یا چیزی مثل گردونه شانس رو در سمت بک هم پیاده
          سازی کنید بطوری که کاربر شماره موبایل وارد کنه و otp ارسال بشه عالی
          میشه. مورد دیگه اینکه اگر توضیح داده بشه که آیا باتوجه به اینکه این
          بازی ها با js نوشته میشن امکان تقلب توسط افرادی که به js یا به حتی وب
          اسکرپینگ مسلط هستن، وجود داره یا نه؟ و اگر وجود داره راه جلوگیری چی
          هست؟ تشکر
        </p>
        <div className="mt-4 w-full rounded-md bg-gray-200 p-4 md:p-5 dark:bg-cardDark">
          <div className="flexRow w-full bg-transparent">
            <div className="flexCenter gap-6 py-2">
              <div
                className="relative hidden h-[50px] w-[50px] place-content-center rounded-full outline outline-1 outline-offset-[5px] outline-lightBlue sm:grid"
                id="avatar"
              >
                <span className="flexCenter absolute -right-[10px] top-0 h-[20px] w-[20px] rounded-full bg-lightBlue text-white">
                  <i className="bi bi-check font-light"></i>
                </span>
              </div>
              <div className="flexCenter flex-col items-start gap-1">
                <span className="text-black dark:text-white">
                  recone <strong>| دانشجو</strong>
                </span>
                <span className="text-sm text-lightGray">۱۴۰۳/۱۰/۰۵</span>
              </div>
            </div>
            <button className="grid h-[45px] w-[45px] place-content-center rounded-full border border-lightBlue bg-transparent transition-colors hover:bg-lightBlue/10">
              <i className="bi bi-arrow-90deg-left text-lg text-lightBlue"></i>
            </button>
          </div>
          <div className="mt-4 h-[1px] w-full rounded-md bg-white dark:bg-gray-500" />
          <p className="mt-4 text-start text-sm font-light leading-7 text-black/80 sm:text-[1rem] sm:leading-8 dark:text-white">
            سلام امیدوارم خوب باشید. دو مورد که میخواستم پیشنهاد بدم این هست که
            با توجه به اینکه من شخصا این دوره رو با هدف پیاده سازی بازی برای
            اهدافی چون جذب کاربر و مارکتینگ در وبسایت و اپ، خریداری کردم، اگر
            بخشی داشته
          </p>
        </div>
      </article>
    </div>
  );
}
