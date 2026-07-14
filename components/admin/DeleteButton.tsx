"use client";

import { useRef } from "react";

export default function DeleteButton({
  action,
}: {
  action: (formData: FormData) => Promise<void>;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={action}
      onSubmit={(e) => {
        if (!confirm("آیا از حذف این آیتم اطمینان دارید؟")) {
          e.preventDefault();
        }
      }}
    >
      <button
        type="submit"
        className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-red-500 transition-colors hover:bg-red-50 dark:hover:bg-red-500/10"
      >
        <i className="bi bi-trash3"></i>
        حذف
      </button>
    </form>
  );
}
