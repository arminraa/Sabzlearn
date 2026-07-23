"use client";

import { Grid2x2, X } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { useRouter, useSearchParams } from "next/navigation";
import { Category, Course } from "@prisma/client";
import { ChangeEvent } from "react";
export default function FilterMenuItems({
  setFilterMenuShow,
  onlyFreeCourses,
  onlyPreSaleCourses,
  categories,
}: Readonly<{
  setFilterMenuShow: (value: boolean) => void;
  onlyFreeCourses: string | undefined;
  onlyPreSaleCourses: string | undefined;
  categories: (Category & {
    courses: Course[];
  })[];
}>) {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const handleCheckedChange = (checked: boolean, categorySlug: string) => {
    console.log(checked, categorySlug);
    if (checked) {
      params.append("category", categorySlug);
      router.push(`?${params.toString()}`);
    } else {
      params.delete("category", categorySlug);
      router.push(`?${params.toString()}`);
    }
  };
  const router = useRouter();
  const handleFreeCourseSlider = () => {
    if (onlyFreeCourses === "true") {
      params.set("only_free_courses", "false");
      router.push(`?${params.toString()}`);
    } else {
      params.set("only_free_courses", "true");
      router.push(`?${params.toString()}`);
    }
  };
  const handlePreSaleSlider = () => {
    if (onlyPreSaleCourses === "true") {
      params.set("only_pre_sale_courses", "false");
      router.push(`?${params.toString()}`);
    } else {
      params.set("only_pre_sale_courses", "true");
      router.push(`?${params.toString()}`);
    }
  };
  return (
    <div className="container p-0 relative">
      <div className="flex flex-col justify-center">
        <div className="px-[1rem] py-4 flexRow">
          <span className="text-lg">فیلتر نتایج</span>
          <button className="text-xl" onClick={() => setFilterMenuShow(false)}>
            <X width={20} height={20} />
          </button>
        </div>
        <div className="h-[1px] w-[95%] mx-auto bg-lightGray/40" />
        <div className="w-full mt-3">
          <div className="py-1 px-2">
            <div className="flexRowStart gap-2">
              <span>
                <Grid2x2 className="" />
              </span>
              <span className="text-lg">دسته بندی ها</span>
            </div>
            <ul className="w-full px-4 py-4 flexCol items-start gap-3">
              {categories.map((category) => (
                <li key={category.id} className="flexRowStart gap-2">
                  <Checkbox
                    onCheckedChange={(checked) =>
                      handleCheckedChange(Boolean(checked), category.slug)
                    }
                    className="bg-[#e0dfdf] p-2 border-transparent"
                  />
                  <span className="text-sm self-center">{category.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-[.5px] w-[95%] mx-auto bg-lightGray/40" />
          <div className="w-full px-[1rem] py-4">
            <div className="flexRow">
              <span>فقط دوره های رایگان</span>
              <span>
                <Checkbox
                  className="p-2"
                  checked={onlyFreeCourses === "true"}
                  onCheckedChange={handleFreeCourseSlider}
                />
              </span>
            </div>
          </div>
          <div className="h-[1px] w-[95%] mx-auto bg-lightGray/40" />
          <div className="w-full px-[1rem] py-4">
            <div className="flexRow">
              <span>در حال پیش فروش</span>
              <span>
                <Checkbox
                  className="p-2"
                  checked={onlyPreSaleCourses === "true"}
                  onCheckedChange={handlePreSaleSlider}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
