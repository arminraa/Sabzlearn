import { createCourse } from "@/actions/courses";
import { getAllCategories } from "@/actions/categories";
import AdminFormInput from "@/components/admin/AdminFormInput";
import AdminFormTextarea from "@/components/admin/AdminFormTextarea";
import AdminFormSelect from "@/components/admin/AdminFormSelect";
import AdminFormCheckbox from "@/components/admin/AdminFormCheckbox";
import AdminFormFile from "@/components/admin/AdminFormFile";

export default async function CreateCoursePage() {
  const categories = await getAllCategories();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white sm:text-2xl">
          افزودن دوره جدید
        </h1>
      </div>

      <form
        action={async (data: FormData) => {
          "use server";
          await createCourse({
            title: data.get("title") as string,
            slug: data.get("slug") as string,
            shortDescription: data.get("shortDescription") as string,
            description: data.get("description") as string,
            imageUrl: data.get("imageUrl") as string,
            author: data.get("author") as string,
            authorProfileImageUrl: data.get("authorProfileImageUrl") as string,
            price: Number(data.get("price")),
            salePrice: data.get("salePrice")
              ? Number(data.get("salePrice"))
              : null,
            published: data.get("published") === "on",
            preSale: data.get("preSale") === "on",
            courseLength: 0,
            prerequisite: data.get("prerequisite") as string,
            categoryId: (data.get("categoryId") as string) || null,
          });
        }}
      >
        <div className="flex flex-col gap-6">
          {/* Basic Info */}
          <div className="rounded-2xl border border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6">
            <h3 className="mb-4 text-lg font-bold text-gray-800 dark:text-white">
              <i className="bi bi-info-circle ml-2 text-lightBlue"></i>
              اطلاعات پایه
            </h3>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <AdminFormInput
                label="عنوان دوره"
                name="title"
                placeholder="عنوان دوره را وارد کنید"
                required
              />
              <AdminFormInput
                label="Slug"
                name="slug"
                placeholder="مثال: react-complete-course"
                dir="ltr"
                required
              />
              <AdminFormInput
                label="نام استاد"
                name="author"
                placeholder="نام استاد دوره"
                required
              />
              <AdminFormFile
                label="عکس پروفایل استاد"
                name="authorProfileImageUrl"
                accept="image/*"
                folder="images/authors"
                required
              />
              <AdminFormFile
                label="عکس دوره"
                name="imageUrl"
                accept="image/*"
                folder="images/courses"
                required
              />
              <AdminFormSelect
                label="دسته‌بندی"
                name="categoryId"
                options={categories.map((c) => ({
                  value: c.id,
                  label: c.title,
                }))}
              />
            </div>
            <div className="mt-5">
              <AdminFormTextarea
                label="توضیحات کوتاه"
                name="shortDescription"
                placeholder="توضیحات کوتاه درباره دوره"
                rows={2}
                required
              />
            </div>
            <div className="mt-5">
              <AdminFormTextarea
                label="توضیحات کامل"
                name="description"
                placeholder="توضیحات کامل درباره دوره"
                rows={6}
                required
              />
            </div>
          </div>

          {/* Pricing */}
          <div className="rounded-2xl border border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6">
            <h3 className="mb-4 text-lg font-bold text-gray-800 dark:text-white">
              <i className="bi bi-currency-dollar ml-2 text-lightGreen"></i>
              قیمت‌گذاری
            </h3>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <AdminFormInput
                label="قیمت (تومان)"
                name="price"
                type="number"
                placeholder="0"
                required
              />
              <AdminFormInput
                label="قیمت با تخفیف (تومان)"
                name="salePrice"
                type="number"
                placeholder="اختیاری"
              />
            </div>
          </div>

          {/* Course Info */}
          <div className="rounded-2xl border border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6">
            <h3 className="mb-4 text-lg font-bold text-gray-800 dark:text-white">
              <i className="bi bi-gear ml-2 text-lightOrange"></i>
              تنظیمات دوره
            </h3>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <AdminFormInput
                label="پیش‌نیاز"
                name="prerequisite"
                placeholder="پیش‌نیاز دوره"
                required
              />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  مدت دوره (ساعت)
                </label>
                <p className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400">
                  به صورت خودکار از ویدیوها محاسبه می‌شود
                </p>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-6">
              <AdminFormCheckbox
                label="منتشر شده"
                name="published"
                defaultChecked={true}
              />
              <AdminFormCheckbox label="پیش‌فروش" name="preSale" />
            </div>
          </div>

          {/* Submit */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-lightBlue px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-darkBlue"
            >
              <i className="bi bi-check-lg text-lg"></i>
              ذخیره دوره
            </button>
            <a
              href="/panel/courses"
              className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              انصراف
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
