import { getCourseById, updateCourse } from "@/actions/courses";
import { getAllCategories } from "@/actions/categories";
import AdminFormInput from "@/components/admin/AdminFormInput";
import AdminFormTextarea from "@/components/admin/AdminFormTextarea";
import AdminFormSelect from "@/components/admin/AdminFormSelect";
import AdminFormCheckbox from "@/components/admin/AdminFormCheckbox";
import AdminFormFile from "@/components/admin/AdminFormFile";
import { notFound } from "next/navigation";

export default async function EditCoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [course, categories] = await Promise.all([
    getCourseById(id),
    getAllCategories(),
  ]);

  if (!course) notFound();

  const currentCourseLength = course!.courseLength;

  async function handleUpdate(data: FormData) {
    "use server";
    await updateCourse(id, {
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
      courseLength: currentCourseLength,
      prerequisite: data.get("prerequisite") as string,
      categoryId: (data.get("categoryId") as string) || null,
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          ویرایش دوره: {course.title}
        </h1>
      </div>

      <form action={handleUpdate}>
        <div className="flex flex-col gap-6">
          {/* Basic Info */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-4 text-lg font-bold text-gray-800 dark:text-white">
              <i className="bi bi-info-circle ml-2 text-lightBlue"></i>
              اطلاعات پایه
            </h3>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <AdminFormInput
                label="عنوان دوره"
                name="title"
                defaultValue={course.title}
                required
              />
              <AdminFormInput
                label="Slug"
                name="slug"
                defaultValue={course.slug}
                dir="ltr"
                required
              />
              <AdminFormInput
                label="نام استاد"
                name="author"
                defaultValue={course.author}
                required
              />
              <AdminFormFile
                label="عکس پروفایل استاد"
                name="authorProfileImageUrl"
                defaultValue={course.authorProfileImageUrl}
                accept="image/*"
                folder="images/authors"
                required
              />
              <AdminFormFile
                label="عکس دوره"
                name="imageUrl"
                defaultValue={course.imageUrl}
                accept="image/*"
                folder="images/courses"
                required
              />
              <AdminFormSelect
                label="دسته‌بندی"
                name="categoryId"
                defaultValue={course.categoryId || ""}
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
                defaultValue={course.shortDescription}
                rows={2}
                required
              />
            </div>
            <div className="mt-5">
              <AdminFormTextarea
                label="توضیحات کامل"
                name="description"
                defaultValue={course.description}
                rows={6}
                required
              />
            </div>
          </div>

          {/* Pricing */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-4 text-lg font-bold text-gray-800 dark:text-white">
              <i className="bi bi-currency-dollar ml-2 text-lightGreen"></i>
              قیمت‌گذاری
            </h3>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <AdminFormInput
                label="قیمت (تومان)"
                name="price"
                type="number"
                defaultValue={course.price}
                required
              />
              <AdminFormInput
                label="قیمت با تخفیف (تومان)"
                name="salePrice"
                type="number"
                defaultValue={course.salePrice || ""}
              />
            </div>
          </div>

          {/* Course Info */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-4 text-lg font-bold text-gray-800 dark:text-white">
              <i className="bi bi-gear ml-2 text-lightOrange"></i>
              تنظیمات دوره
            </h3>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  مدت دوره (ساعت)
                </label>
                <p className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300">
                  {course.courseLength} ساعت (خودکار)
                </p>
              </div>
              <AdminFormInput
                label="پیش‌نیاز"
                name="prerequisite"
                defaultValue={course.prerequisite}
                required
              />
            </div>
            <div className="mt-5 flex items-center gap-6">
              <AdminFormCheckbox
                label="منتشر شده"
                name="published"
                defaultChecked={course.published}
              />
              <AdminFormCheckbox
                label="پیش‌فروش"
                name="preSale"
                defaultChecked={course.preSale}
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-lightBlue px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-darkBlue"
            >
              <i className="bi bi-check-lg text-lg"></i>
              ذخیره تغییرات
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
