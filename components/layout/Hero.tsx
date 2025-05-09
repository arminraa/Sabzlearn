import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-screen">
      <div className="container">
        <div className="flex flex-col justify-center gap-4 text-center md:gap-8 lg:mt-20 lg:flex-row-reverse lg:items-center lg:justify-center">
          <img
            src="/images/hero-light.svg"
            alt="Hero-Image"
            className="max-h-[450px] w-full lg:ml-break-out lg:max-h-[700px] lg:w-[55%] xl:w-[70%] 3xl:ml-auto dark:mix-blend-screen"
          />
          <div className="flex flex-col gap-4 md:gap-8">
            <h1 className="text-3xl leading-10 text-black sm:text-4xl sm:leading-[3rem] md:text-5xl md:leading-[3.5rem] lg:text-start lg:text-[3.2rem] lg:leading-[4rem] dark:text-white">
              <strong className="md:font-extrabold lg:font-[1000]">
                آکادمی آموزش <br />
                برنامه نویسی سبزلرن
              </strong>
            </h1>
            <p className="text-lg text-black sm:text-xl md:text-2xl lg:text-start dark:text-white">
              با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با خیال راحت یاد بگیر
              و پیشرفت کن
            </p>
            <div className="flexCenter gap-4 lg:justify-start">
              <button className="flexCenter rounded-3xl bg-lightBlue px-2 py-[10px] font-bold text-white lg:px-4">
                <i className="bi bi-person text-2xl"></i>
                از این مسیر ها شروع کن
              </button>
              <div className="flexCenter gap-2">
                <div className="flexCenter h-6 w-6 rounded-full bg-lightGreen p-6">
                  <Link
                    href="#"
                    className="grid place-content-center text-center text-3xl text-white"
                  >
                    <i className="bi bi-play"></i>
                  </Link>
                </div>
                <span className="hidden whitespace-nowrap text-black sm:inline dark:text-white">
                  دوره های رایگان
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
