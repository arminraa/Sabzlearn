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
export default function MenuItems({
  setMenuShow,
}: Readonly<{
  setMenuShow: (value: boolean) => void;
}>) {
  return (
    <div className="container relative py-4">
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
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="focus-within:outline-0">
              فرانت اند
            </AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col justify-center gap-6 rounded-lg bg-lightGray/15 px-4 py-2">
                <li>آموزش HTML</li>
                <li>آموزش CSS</li>
                <li>آموزش JS</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
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
