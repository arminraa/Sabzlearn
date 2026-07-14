"use client";

import { Grid2x2, X } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
export default function FilterMenuItems({
  setFilterMenuShow,
}: Readonly<{
  setFilterMenuShow: (value: boolean) => void;
}>) {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const router = useRouter();
  const handleFreeCourseSlider = () => {
    setIsChecked1((prev) => !prev);
    if (isChecked1) {
      params.set("only_free_courses", "false");
      router.push(`?${params.toString()}`);
      setFilterMenuShow(false);
    } else {
      params.set("only_free_courses", "true");
      router.push(`?${params.toString()}`);
      setFilterMenuShow(false);
    }
  };
  const handlePreSaleSlider = () => {
    setIsChecked2((prev) => !prev);
    if (isChecked2) {
      params.set("only_pre_sale_courses", "false");
      router.push(`?${params.toString()}`);
      setFilterMenuShow(false);
    } else {
      params.set("only_pre_sale_courses", "true");
      router.push(`?${params.toString()}`);
      setFilterMenuShow(false);
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
              <li className="flexRowStart gap-2">
                <Checkbox className="bg-[#e0dfdf] p-2 border-transparent" />
                <span className="text-sm self-center">HTML & CSS</span>
              </li>
              <li className="flexRowStart gap-2">
                <Checkbox className="bg-[#e0dfdf] p-2 border-transparent" />
                <span className="text-sm self-center">HTML & CSS</span>
              </li>
              <li className="flexRowStart gap-2">
                <Checkbox className="bg-[#e0dfdf] p-2 border-transparent" />
                <span className="text-sm self-center">HTML & CSS</span>
              </li>
              <li className="flexRowStart gap-2">
                <Checkbox className="bg-[#e0dfdf] p-2 border-transparent" />
                <span className="text-sm self-center">HTML & CSS</span>
              </li>
              <li className="flexRowStart gap-2">
                <Checkbox className="bg-[#e0dfdf] p-2 border-transparent" />
                <span className="text-sm self-center">HTML & CSS</span>
              </li>
              <li className="flexRowStart gap-2">
                <Checkbox className="bg-[#e0dfdf] p-2 border-transparent" />
                <span className="text-sm self-center">HTML & CSS</span>
              </li>
              <li className="flexRowStart gap-2">
                <Checkbox className="bg-[#e0dfdf] p-2 border-transparent" />
                <span className="text-sm self-center">HTML & CSS</span>
              </li>
              <li className="flexRowStart gap-2">
                <Checkbox className="bg-[#e0dfdf] p-2 border-transparent" />
                <span className="text-sm self-center">HTML & CSS</span>
              </li>
              <li className="flexRowStart gap-2">
                <Checkbox className="bg-[#e0dfdf] p-2 border-transparent" />
                <span className="text-sm self-center">HTML & CSS</span>
              </li>
            </ul>
          </div>
          <div className="h-[.5px] w-[95%] mx-auto bg-lightGray/40" />
          <div className="w-full px-[1rem] py-4">
            <div className="flexRow">
              <span>فقط دوره های رایگان</span>
              <span>
                <div
                  className="checkbox-wrapper-2 flexCol"
                  onClick={() => handleFreeCourseSlider()}
                >
                  <input type="checkbox" className="sc-gJwTLC ikxBAC" />
                </div>
              </span>
            </div>
          </div>
          <div className="h-[1px] w-[95%] mx-auto bg-lightGray/40" />
          <div className="w-full px-[1rem] py-4">
            <div className="flexRow">
              <span>در حال پیش فروش</span>
              <span>
                <div
                  onClick={() => handlePreSaleSlider()}
                  className="checkbox-wrapper-2 flexCol"
                >
                  <input type="checkbox" className="sc-gJwTLC ikxBAC" />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
