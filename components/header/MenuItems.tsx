"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DarkModeButton from "./DarkModeButton";
import SearchInput from "./SearchInput";
import { Category, Course } from "@prisma/client";
import { useRouter } from "next/navigation";
export default function MenuItems({
  setMenuShow,
  categories,
}: Readonly<{
  setMenuShow: (value: boolean) => void;
  categories: ({
    courses: Course[];
  } & Category)[];
}>) {
  const router = useRouter();
  return (
    <div className="container relative py-4 h-full">
      <div className="flex flex-col justify-center gap-6">
        <div className="flexRow">
          <Link href="#">
            <Image
              src="/images/logo.webp"
              width={60}
              height={200}
              alt="Logo"
              priority
            />
          </Link>
          <div className="flexCenter gap-1">
            <DarkModeButton />
            <button
              className="flexCenter h-3 w-3 rounded-full bg-lightGray/10 p-6 text-xl text-lightGray dark:text-white"
              onClick={() => setMenuShow(false)}
            >
              <i className="bi bi-x"></i>
            </button>
          </div>
        </div>
        <div className="h-[1px] w-full bg-lightGray/40" />
        <SearchInput inputStyles="rounded-2xl lg:rounded-3xl py-2 lg:py-[12px] px-4" />
        {categories.map((category, index) => {
          return category.slug === "all" ? undefined : category.courses.length >
            0 ? (
            <Accordion
              key={category.id}
              type="single"
              collapsible
              className="w-full dark:text-white text-black"
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="focus-within:outline-0">
                  {category.title}
                </AccordionTrigger>
                <AccordionContent>
                  {
                    <ul className="flex flex-col justify-center gap-6 rounded-lg bg-lightGray/15 px-4 py-2">
                      {category.courses.map((course) => (
                        <li
                          onClick={() => {
                            router.push(`/course/${course.slug}`);
                            setMenuShow(false);
                          }}
                          key={course.id}
                        >
                          {course.title}
                        </li>
                      ))}
                    </ul>
                  }
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : undefined;
        })}
        {/* <ul className="flex flex-col justify-between gap-6">
          <li className="flexRow">
            <span>فرانت اند</span>
            <button onClick={() => handleSubMenu("فرانت اند")}>
              <i className="bi bi-chevron-left text-black text-sm"></i>
            </button>
          </li>
          <li className="flexRow">
            <span>امنیت</span>
            <i className="bi bi-chevron-left text-black text-sm"></i>
          </li>
          <li className="flexRow">
            <span>پایتون</span>
            <i className="bi bi-chevron-left text-black text-sm"></i>
          </li>
          <li className="flexRow">
            <span>مقالات</span>
            <i className="bi bi-chevron-left text-black text-sm"></i>
          </li>
        </ul> */}
      </div>
    </div>
  );
}
