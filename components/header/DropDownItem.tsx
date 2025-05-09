"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
export default function DropDownItem({
  item,
  onMouseEnter,
  onMouseLeave,
  isOpen,
}: Readonly<{
  item: { id: number; name: string; sub: string[] };
  onMouseLeave: () => void;
  onMouseEnter: () => void;
  isOpen: boolean;
}>) {
  const [selectedColor, setSelectedColor] = useState<"green" | "black">(
    "black",
  );
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
      <DropdownMenu key={item.id} open={isOpen}>
        <DropdownMenuTrigger className="outline-none">
          <li
            className={`flexCenter cursor-pointer gap-2 transition-colors ${
              selectedColor === "green"
                ? "text-lightGreen dark:text-lightGreen"
                : "text-black dark:text-white"
            }`}
          >
            <span>{item.name}</span>
            <i className="bi bi-chevron-down"></i>
          </li>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="dropdown-menu-content w-48 dark:bg-black"
          align="end"
        >
          <ul className="flexCenter w-full flex-col items-end gap-4 px-3 py-4">
            {item.sub &&
              item.sub.map((subItem: any) => (
                <li
                  className="cursor-pointer transition-colors hover:text-lightGreen"
                  key={subItem}
                >
                  {subItem}
                </li>
              ))}
          </ul>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
