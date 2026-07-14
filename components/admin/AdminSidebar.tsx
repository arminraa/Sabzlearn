"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { logout } from "@/actions/auth";

const menuItems = [
  {
    title: "داشبورد",
    href: "/panel",
    icon: "bi-grid-1x2-fill",
  },
  {
    title: "دسته‌بندی‌ها",
    href: "/panel/categories",
    icon: "bi-tags-fill",
  },
  {
    title: "دوره‌ها",
    href: "/panel/courses",
    icon: "bi-book-fill",
  },
  {
    title: "بازگشت به سایت",
    href: "/",
    icon: "bi-arrow-right-circle-fill",
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/panel") return pathname === "/panel";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-xl bg-lightBlue text-white shadow-lg lg:hidden"
      >
        <i className={`bi ${mobileOpen ? "bi-x-lg" : "bi-list"} text-xl`}></i>
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed right-0 top-0 z-40 flex h-full w-[280px] flex-col border-l border-gray-200 bg-white transition-transform duration-300 dark:border-gray-700 dark:bg-gray-800",
          mobileOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 border-b border-gray-100 px-6 py-5 dark:border-gray-700">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-lightBlue to-lightGreen">
            <i className="bi bi-mortarboard-fill text-lg text-white"></i>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800 dark:text-white">
              سبزلرن
            </h1>
            <p className="text-xs text-lightGray">پنل مدیریت</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                    isActive(item.href)
                      ? "bg-lightBlue/10 text-lightBlue"
                      : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  )}
                >
                  <i className={`bi ${item.icon} text-lg`}></i>
                  <span>{item.title}</span>
                  {isActive(item.href) && (
                    <div className="mr-auto h-2 w-2 rounded-full bg-lightBlue"></div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-100 px-6 py-4 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-lightGreen/10">
              <i className="bi bi-person-fill text-lightGreen"></i>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800 dark:text-white">
                مدیر سایت
              </p>
              <p className="text-xs text-lightGray">admin@sabzlearn.ir</p>
            </div>
            <button
              onClick={() => logout()}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-500 transition-colors hover:bg-red-100 dark:bg-red-500/10 dark:text-red-400"
              title="خروج"
            >
              <i className="bi bi-box-arrow-left text-lg"></i>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
