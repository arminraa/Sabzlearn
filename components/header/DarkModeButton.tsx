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
      className={`${styles} flexCenter h-3 w-3 rounded-full bg-lightGray/10 p-6 text-xl text-lightGray lg:h-5 lg:w-5 lg:text-2xl dark:text-white`}
      type="button"
      onClick={() => handleDarkMode()}
    >
      <i className="bi bi-moon"></i>
    </button>
  );
}
