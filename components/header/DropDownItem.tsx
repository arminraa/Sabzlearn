"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Category, Course } from "@/types/prisma";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function DropDownItem({
  category,
  onMouseEnter,
  onMouseLeave,
  isOpen,
}: Readonly<{
  category: {
    courses: Course[];
  } & Category;
  onMouseLeave: () => void;
  onMouseEnter: () => void;
  isOpen: boolean;
}>) {
  const [selectedColor, setSelectedColor] = useState<"green" | "black">(
    "black"
  );
  const router = useRouter();
  return (
    <div
      className="h-[30px]"
      onMouseEnter={() => {
        onMouseEnter();
        setSelectedColor("green");
      }}
      onMouseLeave={() => {
        onMouseLeave();
        setSelectedColor("black");
      }}
    >
      <DropdownMenu key={category.id} open={isOpen}>
        <DropdownMenuTrigger className="outline-none">
          <li
            className={`flexCenter cursor-pointer gap-2 transition-colors ${
              selectedColor === "green"
                ? "text-lightGreen dark:text-lightGreen"
                : "text-black dark:text-white"
            }`}
          >
            <span
              className="cursor-pointer"
              onClick={() => router.push(`/course-cat/${category.slug}`)}
            >
              {category.title}
            </span>
            {category.courses.length > 0 && (
              <i className="bi bi-chevron-down"></i>
            )}
          </li>
        </DropdownMenuTrigger>
        {category.courses.length > 0 && (
          <DropdownMenuContent
            className="dropdown-menu-content w-48 dark:bg-black"
            align="end"
          >
            <ul
              dir="rtl"
              className="flexCenter w-full flex-col items-end gap-4 px-3 py-4"
            >
              {category.courses &&
                category.courses.map((categoryCourse) => (
                  <li
                    className="cursor-pointer transition-colors hover:text-lightGreen"
                    key={categoryCourse.id}
                    onClick={() =>
                      router.push(`/course/${categoryCourse.slug}`)
                    }
                  >
                    {categoryCourse.title}
                  </li>
                ))}
            </ul>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
}
