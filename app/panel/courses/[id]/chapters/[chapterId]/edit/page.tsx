import { getChapterById, updateChapter } from "@/actions/chapters";
import AdminFormInput from "@/components/admin/AdminFormInput";
import AdminFormTextarea from "@/components/admin/AdminFormTextarea";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function EditChapterPage({
  params,
}: {
  params: Promise<{ id: string; chapterId: string }>;
}) {
  const { id, chapterId } = await params;
  const chapter = await getChapterById(chapterId);

  if (!chapter) notFound();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex items-center gap-2 text-sm text-lightGray">
          <Link href="/panel/courses" className="hover:text-lightBlue">
            دوره‌ها
          </Link>
          <i className="bi bi-chevron-left text-xs"></i>
          <Link
            href={`/panel/courses/${id}/chapters`}
            className="hover:text-lightBlue"
          >
            فصل‌ها
          </Link>
          <i className="bi bi-chevron-left text-xs"></i>
          <span className="text-gray-800 dark:text-white">ویرایش فصل</span>
        </div>
        <h1 className="mt-2 text-2xl font-bold text-gray-800 dark:text-white">
          ویرایش فصل: {chapter.title}
        </h1>
      </div>

      <div className="max-w-2xl rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <form
          action={async (data: FormData) => {
            "use server";
            await updateChapter(chapterId, {
              title: data.get("title") as string,
              order: Number(data.get("order")),
              description: (data.get("description") as string) || undefined,
              courseId: id,
            });
          }}
          className="flex flex-col gap-5"
        >
          <AdminFormInput
            label="عنوان فصل"
            name="title"
            defaultValue={chapter.title}
            required
          />
          <AdminFormInput
            label="ترتیب نمایش"
            name="order"
            type="number"
            defaultValue={chapter.order}
            required
          />
          <AdminFormTextarea
            label="توضیحات (اختیاری)"
            name="description"
            defaultValue={chapter.description || ""}
            rows={3}
          />

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-lightBlue px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-darkBlue"
            >
              <i className="bi bi-check-lg text-lg"></i>
              ذخیره تغییرات
            </button>
            <Link
              href={`/panel/courses/${id}/chapters`}
              className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              انصراف
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
