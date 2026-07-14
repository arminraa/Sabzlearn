"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { SubmitEvent, useEffect, useRef, useState } from "react";

export default function SearchInput({
  styles,
  placeholder,
  inputStyles,
}: Readonly<{
  styles?: string;
  placeholder?: string;
  inputStyles?: string;
}>) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleSearchSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchValue) {
      params.set("query", searchValue);
    } else {
      params.delete("query");
    }
    inputRef.current!.value = "";
    router.push(`/course-cat/all?${params.toString()}`);
  };
  return (
    <form
      onSubmit={(e) => handleSearchSubmit(e)}
      className={`${styles} relative`}
    >
      <input
        ref={inputRef}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        name="searchValue"
        className={`${inputStyles} w-full bg-lightGray/10 focus:outline-none`}
        placeholder={placeholder ? placeholder : "چیو میخوای یادبگیری ؟"}
      />
      <button
        type="submit"
        className="absolute left-[10px] top-1/2 -translate-y-1/2 text-lg text-black/50 dark:text-white"
      >
        <i className="bi bi-search" />
      </button>
    </form>
  );
}
