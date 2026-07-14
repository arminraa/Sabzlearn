import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="flexCenter w-full flex-col gap-8 text-center">
      <img
        className="h-[48px] w-[300px] lg:h-[58px] lg:w-[350px]"
        src="/images/svgexport-2.svg"
        alt=""
      />
      <div className="flexCenter h-[350px] flex-col justify-between gap-4 rounded-lg bg-white p-6 text-white md:px-8 md:py-5 dark:bg-cardDark">
        <h3 className="text-xl font-semibold text-black dark:text-white">
          ورود به پنل مدیریت
        </h3>
        <h4 className="text-black lg:text-lg dark:text-white">
          لطفا نام کاربری و رمز عبور خود را وارد کنید
        </h4>
        <LoginForm />
      </div>
      <p className="text-black dark:text-white">
        با ورود به سایت، تمامی قوانین و شرایط استفاد
        <br /> از خدمات
        <span className="text-lightGreen"> سبزلرن</span> را پذیرفته اید .
      </p>
    </main>
  );
}
