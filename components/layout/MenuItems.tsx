"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SearchInput from "../SearchInput";
import DarkModeButton from "../DarkModeButton";

export default function MenuItems({
  setMenuShow,
}: Readonly<{
  setMenuShow: (value: boolean) => void;
}>) {
  return (
    <div className="container py-4 relative">
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
              className="w-3 h-3 flexCenter p-6 bg-lightGray/10 rounded-full text-xl text-lightGray dark:text-white"
              onClick={() => setMenuShow(false)}
            >
              <i className="bi bi-x"></i>
            </button>
          </div>
        </div>
        <div className="bg-lightGray/40 w-full h-[1px]" />
        <SearchInput />
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="focus-within:outline-0">
              فرانت اند
            </AccordionTrigger>
            <AccordionContent>
              <ul className="bg-lightGray/15 rounded-lg px-4 py-2 flex flex-col justify-center gap-6">
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
