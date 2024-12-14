import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-screen">
      <div className="container">
        <div className="flex flex-col text-center justify-center lg:justify-center lg:items-center lg:flex-row-reverse gap-4 md:gap-8 lg:mt-20">
          <img
            src="/images/hero-light.svg"
            alt="Hero-Image"
            className="w-full max-h-[450px] lg:w-[55%] xl:w-[70%] lg:max-h-[700px] lg:ml-break-out 3xl:ml-auto"
          />
          <div className=" flex flex-col gap-4 md:gap-8">
            <h1 className="text-3xl sm:text-4xl sm:leading-[3rem] leading-10 md:leading-[3.5rem] md:text-5xl lg:text-[3.2rem] lg:leading-[4rem] lg:text-start">
              <strong className="md:font-extrabold lg:font-[1000]">
                آکادمی آموزش <br />
                برنامه نویسی سبزلرن
              </strong>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-start">
              با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با خیال راحت یاد بگیر
              و پیشرفت کن
            </p>
            <div className="flexCenter gap-4 lg:justify-start">
              <button className="flexCenter bg-lightBlue text-white px-2 lg:px-4 font-bold py-[10px] rounded-3xl">
                <i className="bi bi-person text-2xl"></i>
                از این مسیر ها شروع کن
              </button>
              <div className="flexCenter gap-2">
                <div className="w-6 h-6 flexCenter p-6 bg-lightGreen rounded-full">
                  <Link
                    href="#"
                    className="text-3xl text-center text-white grid place-content-center"
                  >
                    <i className="bi bi-play"></i>
                  </Link>
                </div>
                <span className="hidden sm:inline whitespace-nowrap">
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
