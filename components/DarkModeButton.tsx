"use client";

export default function DarkModeButton({
  styles,
}: Readonly<{
  styles?: string;
}>) {

  const handleDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "light");
      document.documentElement.className = "scroll-smooth";
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.className = "scroll-smooth dark";
    }
  };
  return (
    <button
      className={`${styles} lg:w-5 lg:h-5 w-3 flexCenter h-3 p-6 bg-lightGray/10 rounded-full text-xl lg:text-2xl text-lightGray dark:text-white`}
      type="button"
      onClick={() => handleDarkMode()}
    >
      <i className="bi bi-moon"></i>
    </button>
  );
}
