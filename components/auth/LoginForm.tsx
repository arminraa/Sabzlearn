"use client";

import { useState } from "react";
import { login } from "@/actions/auth";

export default function LoginForm() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <form
      action={async (formData) => {
        setLoading(true);
        setError("");
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;
        const result = await login(username, password);
        if (result?.error) {
          setError(result.error);
          setLoading(false);
        }
      }}
      className="flexCenter flex-col gap-3 w-full"
    >
      {error && (
        <div className="w-full rounded-lg bg-red-50 p-3 text-sm text-red-600 text-center">
          {error}
        </div>
      )}
      <div className="relative w-full">
        <input
          type="text"
          name="username"
          placeholder="نام کاربری"
          className="w-full rounded-lg bg-lightGray/10 p-3 text-black outline-none placeholder:text-sm placeholder:lg:text-[1rem] dark:bg-lightGray/30 dark:text-white"
        />
        <i className="bi bi-person absolute left-[8px] top-1/2 -translate-y-1/2 text-lg text-lightGray/90 lg:text-xl"></i>
      </div>
      <div className="relative w-full">
        <input
          type="password"
          name="password"
          placeholder="رمز عبور"
          className="w-full rounded-lg bg-lightGray/10 p-3 text-black outline-none placeholder:text-sm placeholder:lg:text-[1rem] dark:bg-lightGray/30 dark:text-white"
        />
        <i className="bi bi-lock absolute left-[8px] top-1/2 -translate-y-1/2 text-lg text-lightGray/90 lg:text-xl"></i>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-lightGreen p-2 text-white dark:text-white disabled:opacity-50"
      >
        {loading ? "در حال ورود..." : "ورود"}
      </button>
    </form>
  );
}
