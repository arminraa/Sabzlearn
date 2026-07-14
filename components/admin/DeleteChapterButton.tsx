"use client";

import { deleteChapter } from "@/actions/chapters";

export default function DeleteChapterButton({
  chapterId,
  courseId,
}: {
  chapterId: string;
  courseId: string;
}) {
  return (
    <form
      action={async () => {
        if (confirm("آیا از حذف این فصل اطمینان دارید؟")) {
          await deleteChapter(chapterId, courseId);
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
