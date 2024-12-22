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
    "black"
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
            className={`flexCenter gap-2 cursor-pointer transition-colors ${
              selectedColor === "green" ? "text-lightGreen dark:text-lightGreen" : "text-black dark:text-white"
            }`}
          >
            <span>{item.name}</span>
            <i className="bi bi-chevron-down"></i>
          </li>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 dropdown-menu-content dark:bg-black" align="end">
          <ul className="w-full flexCenter flex-col items-end gap-4 px-3 py-4">
            {item.sub &&
              item.sub.map((subItem: any) => (
                <li
                  className="hover:text-lightGreen transition-colors cursor-pointer"
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
