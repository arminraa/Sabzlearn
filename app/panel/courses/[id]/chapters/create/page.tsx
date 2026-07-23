import { getChaptersByCourseId } from "@/actions/chapters";
import { createChapter } from "@/actions/chapters";
import AdminFormInput from "@/components/admin/AdminFormInput";
import AdminFormTextarea from "@/components/admin/AdminFormTextarea";
import Link from "next/link";

export default async function CreateChapterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const chapters = await getChaptersByCourseId(id);
  const nextOrder = chapters.length + 1;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex flex-wrap items-center gap-1 text-sm text-lightGray">
          <Link href="/panel/courses" className="shrink-0 hover:text-lightBlue">
            دوره‌ها
          </Link>
          <i className="bi bi-chevron-left shrink-0 text-xs"></i>
          <Link
            href={`/panel/courses/${id}/chapters`}
            className="shrink-0 hover:text-lightBlue"
          >
            فصل‌ها
          </Link>
          <i className="bi bi-chevron-left shrink-0 text-xs"></i>
          <span className="text-gray-800 dark:text-white">افزودن فصل</span>
        </div>
        <h1 className="mt-2 text-xl font-bold text-gray-800 dark:text-white sm:text-2xl">
          افزودن فصل جدید
        </h1>
      </div>

      <div className="max-w-2xl rounded-2xl border border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <form
          action={async (data: FormData) => {
            "use server";
            await createChapter({
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
            placeholder="مثال: مقدمات React"
            required
          />
          <AdminFormInput
            label="ترتیب نمایش"
            name="order"
            type="number"
            defaultValue={nextOrder}
            required
          />
          <AdminFormTextarea
            label="توضیحات (اختیاری)"
            name="description"
            placeholder="توضیحات فصل"
            rows={3}
          />

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-lightBlue px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-darkBlue"
            >
              <i className="bi bi-check-lg text-lg"></i>
              ذخیره فصل
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
