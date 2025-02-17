import Breadcrumb from "@/components/course/Breadcrumb";
import CopyLink from "@/components/course/CopyLink";
import CourseDescription from "@/components/course/CourseDescription";
import SaleBanner from "@/components/course/SaleBanner";
import GreenBorderButton from "@/components/layout/GreenBorderButton";


export default function CoursePage() {
  return (
    <section className="min-h-screen w-screen">
      <div className="container mt-10 xl:max-w-[95%] 2xl:max-w-[75%] 3xl:max-w-[70%] 4xl:max-w-[40%]">
        <Breadcrumb />
        <div className="mx-auto mt-6 w-full rounded-md bg-white p-4 sm:p-6 lg:mt-20 lg:bg-transparent lg:p-0">
          <div className="grid grid-cols-1 gap-6 lg:grid lg:grid-cols-12">
            <img
              src="/images/php-ex.webp"
              alt=""
              className="my-auto h-[80%] w-full rounded-md object-cover lg:order-1 lg:col-span-6 xl:h-[100%]"
            />
            <div className="flexCenter lg:order-0 flex-col justify-start gap-5 lg:col-span-6 lg:items-start lg:justify-between lg:gap-7">
              <div className="flexCenter flex-col items-start gap-4">
                <h2 className="self-start text-2xl font-semibold sm:text-3xl lg:self-auto">
                  آموزش جامع PHP از صفر + پروژه محور
                </h2>
                <p className="text-justify leading-7 sm:text-lg lg:leading-8">
                  دوره آموزش PHP یک برنامه جامع و کاربردیست و برای افرادی طراحی
                  شده که میخواهند مهارت‌های خود را در زمینه برنامه‌نویسی با زبان
                  PHP به سطح حرفه‌ای برسانند و وارد بازارکار شوند.
                </p>
              </div>
              <SaleBanner />
              <div className="flexCenter mt-10 flex-col gap-2 sm:flex-row-reverse lg:mt-0 lg:w-full lg:justify-between">
                <div className="flexCenter gap-2 whitespace-nowrap font-semibold">
                  <del className="text-xl text-lightGray">۵,۰۰۰,۰۰۰</del>
                  <span className="text-2xl">۲,۵۰۰,۰۰۰ تومان</span>
                </div>
                <button className="flexCenter w-full gap-1 rounded-md bg-lightGreen px-4 py-2 text-sm text-white sm:px-5 sm:text-lg lg:w-[200px] lg:whitespace-nowrap lg:text-[1rem]">
                  <i></i>
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 grid w-full grid-cols-12 place-content-center gap-6 lg:mt-32">
          <div className="col-span-12 grid grid-cols-2 place-content-center content-stretch gap-5 sm:grid-cols-3 lg:col-span-9">
            <article className="flexCenter flex-col gap-2 rounded-md bg-white p-4 md:flex-row md:justify-start md:px-6">
              <i className="bi bi-clock text-3xl text-lightGreen sm:text-4xl"></i>
              <div className="flexCenter flex-col gap-2 md:items-start">
                <h5 className="whitespace-nowrap text-sm font-semibold sm:text-[1rem]">
                  مدت زمان دوره
                </h5>
                <h6 className="text-sm text-lightGray">۴۳ ساعت</h6>
              </div>
            </article>
            <article className="flexCenter flex-col gap-2 rounded-md bg-white p-4 md:flex-row md:justify-start md:px-6">
              <i className="bi bi-info-circle text-3xl text-lightGreen sm:text-4xl"></i>
              <div className="flexCenter flex-col gap-2 md:items-start">
                <h5 className="whitespace-nowrap text-sm font-semibold sm:text-[1rem]">
                  وضعیت دوره
                </h5>
                <h6 className="text-sm text-lightGray">تکمیل شده</h6>
              </div>
            </article>
            <article className="flexCenter flex-col gap-2 rounded-md bg-white p-4 md:flex-row md:justify-start md:px-6 lg:px-4">
              <i className="bi bi-calendar3 text-3xl text-lightGreen sm:text-4xl"></i>
              <div className="flexCenter flex-col gap-2 md:items-start">
                <h5 className="whitespace-nowrap text-sm font-semibold sm:text-[1rem]">
                  آخرین به روز رسانی
                </h5>
                <h6 className="text-sm text-lightGray">۱۴۰۱/۰۷/۲۹</h6>
              </div>
            </article>
            <article className="flexCenter flex-col gap-2 rounded-md bg-white p-4 md:flex-row md:justify-start md:px-6">
              <i className="bi bi-person text-3xl text-lightGreen sm:text-4xl"></i>
              <div className="flexCenter flex-col gap-2 md:items-start">
                <h5 className="whitespace-nowrap text-sm font-semibold sm:text-[1rem]">
                  روش پشتیبانی
                </h5>
                <h6 className="text-sm text-lightGray">آنلاین</h6>
              </div>
            </article>
            <article className="sm:flexCenter hidden flex-col gap-2 rounded-md bg-white p-4 md:flex-row md:justify-start md:px-6">
              <i className="bi bi-briefcase text-3xl text-lightGreen sm:text-4xl"></i>
              <div className="flexCenter flex-col gap-2 md:items-start">
                <h5 className="whitespace-nowrap text-sm font-semibold sm:text-[1rem]">
                  پیش نیاز
                </h5>
                <h6 className="text-sm text-lightGray">شبکه و لینوکس</h6>
              </div>
            </article>
            <article className="sm:flexCenter hidden flex-col gap-2 rounded-md bg-white p-4 md:flex-row md:justify-start md:px-6">
              <i className="bi bi-camera-video text-3xl text-lightGreen sm:text-4xl"></i>
              <div className="flexCenter flex-col gap-2 md:items-start">
                <h5 className="whitespace-nowrap text-sm font-semibold sm:text-[1rem]">
                  نوع مشاهده
                </h5>
                <h6 className="text-sm text-lightGray">دانلودی / آنلاین</h6>
              </div>
            </article>
          </div>
          <div className="hidden rounded-md bg-white p-4 lg:col-span-3 lg:block">
            <div className="flexCenter w-full gap-3">
              <article className="flexCenter w-1/2 flex-row justify-start gap-2 rounded-md bg-gray-200 p-4 px-6">
                <i className="bi bi-person-fill text-3xl text-lightGreen sm:text-4xl"></i>
                <div className="flexCenter flex-col gap-2 md:items-start">
                  <h5 className="whitespace-nowrap text-sm font-semibold sm:text-[1rem]">
                    ۸۷۹
                  </h5>
                  <h6 className="text-sm text-lightGray">دانشجو</h6>
                </div>
              </article>
              <article className="flexCenter w-1/2 flex-grow-[2] flex-col gap-2 rounded-md bg-gray-200 p-4 md:flex-row md:justify-start md:px-6">
                <i className="bi bi-star-fill text-3xl text-lightOrange sm:text-4xl"></i>
                <div className="flexCenter flex-col gap-2 md:items-start">
                  <h5 className="whitespace-nowrap text-sm font-semibold sm:text-[1rem]">
                    ۵.۰
                  </h5>
                  <h6 className="text-sm text-lightGray">رضایت</h6>
                </div>
              </article>
            </div>
            <div className="mt-6">
              <div className="flexRow font-semibold">
                <span>درصد تکمیل دوره</span>
                <span>۱۰۰٪</span>
              </div>
              <div className="mr-auto mt-4 h-3 w-[100%] rounded-xl bg-lightGreen"></div>
            </div>
          </div>
          <CourseDescription />
          <div className="w-full lg:col-span-3">
            <div className="lg:flexCenter hidden h-[250px] w-full rounded-md bg-white p-2 lg:flex-col lg:gap-3">
              <img
                src="/images/50db59beddbfed36a1646dae99ca7b2d.png"
                alt=""
                className="h-[100px] w-[100px] rounded-full object-cover"
              />
              <span className="text-lg font-semibold">
                محمد امین سعیدی راد |‌ مدرس دوره
              </span>
              <GreenBorderButton title="مشاهده پروفایل من" />
            </div>
            <CopyLink />

          </div>
        </div>
      </div>
    </section>
  );
}
