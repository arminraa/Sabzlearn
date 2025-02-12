import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="flexCenter w-full flex-col gap-8 text-center">
      <img
        className="h-[48px] w-[300px] lg:h-[58px] lg:w-[350px]"
        src="/images/svgexport-2.svg"
        alt=""
      />
      <div className="flexCenter h-[300px] flex-col justify-between gap-4 rounded-lg bg-white p-6 text-white md:px-8 md:py-5 dark:bg-cardDark">
        <h3 className="text-xl font-semibold text-black dark:text-white">
          ورود با موبایل
        </h3>
        <h4 className="text-black lg:text-lg dark:text-white">
          حساب کاربری ندارید ؟{" "}
          <span className="text-lightGreen">ثبت نام کنید</span>
        </h4>
        <LoginForm />
        <div className="flexRow w-full text-[.9rem] text-lightGray/90">
          <span>ورود با ایمیل</span>
          <span>
            <u>حریم خصوصی</u>
          </span>
        </div>
      </div>
      <p className="text-black dark:text-white">
        با عضویت در سایت، تمامی قوانین و شرایط استفاده
        <br /> از خدمات
        <span className="text-lightGreen"> سبزلرن</span> را پذیرفته اید .
      </p>
    </main>
  );
}
