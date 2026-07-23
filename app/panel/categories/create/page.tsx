import { createCategory } from "@/actions/categories";
import AdminFormInput from "@/components/admin/AdminFormInput";

export default function CreateCategoryPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white sm:text-2xl">
          افزودن دسته‌بندی جدید
        </h1>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <form
          action={async (data: FormData) => {
            "use server";
            await createCategory({
              title: data.get("title") as string,
              slug: data.get("slug") as string,
            });
          }}
          className="flex flex-col gap-5"
        >
          <AdminFormInput
            label="عنوان دسته‌بندی"
            name="title"
            placeholder="مثال: فرانت اند"
            required
          />
          <AdminFormInput
            label="Slug"
            name="slug"
            placeholder="مثال: frontend"
            dir="ltr"
            required
          />

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-lightBlue px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-darkBlue"
            >
              <i className="bi bi-check-lg text-lg"></i>
              ذخیره دسته‌بندی
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
