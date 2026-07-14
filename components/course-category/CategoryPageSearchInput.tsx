"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoryPageSearchInput({
  styles,
  placeholder,
  inputStyles,
}: Readonly<{
  styles?: string;
  placeholder?: string;
  inputStyles?: string;
}>) {
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("query") ?? ""
  );
  const router = useRouter();
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (searchValue) {
      params.set("query", searchValue);
    } else {
      params.delete("query");
    }
    router.push(`?${params.toString()}`);
  }, [searchValue]);
  return (
    <div className={`${styles} relative`}>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        name="searchValue"
        className={`${inputStyles} w-full bg-lightGray/10 focus:outline-none`}
        placeholder={placeholder ? placeholder : "چیو میخوای یادبگیری ؟"}
      />
      <span className="absolute left-[10px] top-1/2 -translate-y-1/2 text-lg text-black/50 dark:text-white">
        <i className="bi bi-search" />
      </span>
    </div>
  );
}
