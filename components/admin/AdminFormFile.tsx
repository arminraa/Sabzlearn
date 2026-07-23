"use client";

import { useRef, useState } from "react";

export default function AdminFormFile({
  label,
  name,
  defaultValue,
  accept,
  folder,
  required,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  accept?: string;
  folder?: string;
  required?: boolean;
}) {
  const [preview, setPreview] = useState(defaultValue || "");
  const [uploading, setUploading] = useState(false);
  const [hiddenValue, setHiddenValue] = useState(defaultValue || "");
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    if (folder) formData.append("folder", folder);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.url) {
        setHiddenValue(data.url);
        setPreview(data.url);
      }
    } catch {
      alert("آپلود فایل با خطا مواجه شد");
    } finally {
      setUploading(false);
    }
  }

  const isVideo = accept?.includes("video");

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input type="hidden" name={name} value={hiddenValue} />
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center" dir="ltr">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="flex shrink-0 items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 transition-colors hover:bg-gray-50 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
        >
          {uploading ? (
            <>
              <i className="bi bi-arrow-repeat animate-spin"></i>
              در حال آپلود...
            </>
          ) : (
            <>
              <i className="bi bi-upload"></i>
              انتخاب فایل
            </>
          )}
        </button>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className="hidden"
          required={required && !hiddenValue}
        />
        {preview && !uploading && (
          <span className="truncate text-xs text-lightGray">
            {preview.split("/").pop()}
          </span>
        )}
      </div>
      {preview && (
        <div className="mt-2">
          {isVideo ? (
            <video
              src={preview}
              controls
              className="h-40 w-full max-w-[320px] rounded-xl object-cover"
            />
          ) : (
            <img
              src={preview}
              alt={label}
              className="h-24 w-32 rounded-xl object-cover"
            />
          )}
        </div>
      )}
    </div>
  );
}
