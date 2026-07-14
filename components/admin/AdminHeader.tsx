"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AdminHeader() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-700 dark:bg-gray-800/80">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 dark:bg-gray-700 lg:flex">
            <i className="bi bi-search text-lightGray"></i>
            <input
              type="text"
              placeholder="جستجو..."
              className="bg-transparent text-sm text-gray-700 outline-none placeholder:text-lightGray dark:text-white"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-lightGray transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
            <i className="bi bi-bell text-lg"></i>
            <span className="absolute left-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* Dark mode toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-lightGray transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <i
                className={`bi ${
                  theme === "dark" ? "bi-sun-fill" : "bi-moon-fill"
                } text-lg`}
              ></i>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
