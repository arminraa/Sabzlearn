import { getCategoryById, updateCategory } from "@/actions/categories";
import AdminFormInput from "@/components/admin/AdminFormInput";
import { notFound } from "next/navigation";

export default async function EditCategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const category = await getCategoryById(id);

  if (!category) notFound();

  async function handleUpdate(data: FormData) {
    "use server";
    await updateCategory(id, {
      title: data.get("title") as string,
      slug: data.get("slug") as string,
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          ویرایش دسته‌بندی
        </h1>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <form action={handleUpdate} className="flex flex-col gap-5">
          <AdminFormInput
            label="عنوان دسته‌بندی"
            name="title"
            defaultValue={category.title}
            placeholder="مثال: فرانت اند"
            required
          />
          <AdminFormInput
            label="Slug"
            name="slug"
            defaultValue={category.slug}
            placeholder="مثال: frontend"
            dir="ltr"
            required
          />

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-lightBlue px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-darkBlue"
            >
              <i className="bi bi-check-lg text-lg"></i>
              ذخیره تغییرات
            </button>
            <a
              href="/panel/categories"
              className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              انصراف
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
