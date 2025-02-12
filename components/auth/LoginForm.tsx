export default function LoginForm() {
  return (
    <form action="" className="flexCenter flex-col gap-3 w-full">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="شماره موبایل"
          className="w-full rounded-lg bg-lightGray/10 p-3 text-black outline-none placeholder:text-sm placeholder:lg:text-[1rem] dark:bg-lightGray/30 dark:text-white"
        />
        <i className="bi bi-telephone absolute left-[8px] top-1/2 -translate-y-1/2 text-lg text-lightGray/90 lg:text-xl"></i>
      </div>
      <button type="submit" className="w-full rounded-lg bg-lightGreen p-2 text-white dark:text-white">
        ادامه
      </button>
    </form>
  );
}
