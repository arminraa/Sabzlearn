import { getAllCategories } from "@/actions/categories";
import DataTable from "@/components/admin/DataTable";
import DeleteCategoryButton from "@/components/admin/DeleteCategoryButton";
import Link from "next/link";

export default async function CategoriesPage() {
  const categories = await getAllCategories();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white sm:text-2xl">
          مدیریت دسته‌بندی‌ها
        </h1>
      </div>

      <DataTable
        title="لیست دسته‌بندی‌ها"
        href="/panel/categories/create"
        hrefLabel="افزودن دسته‌بندی"
        columns={["عنوان", "slug", "تعداد دوره‌ها", "عملیات"]}
        mobileCards={
          categories.length === 0 ? (
            <div className="flex flex-col items-center py-12">
              <i className="bi bi-tags text-4xl text-lightGray"></i>
              <p className="mt-2 text-sm text-lightGray">
                هنوز دسته‌بندی‌ای وجود ندارد
              </p>
            </div>
          ) : (
            categories.map((category) => (
              <div key={category.id} className="flex items-center justify-between px-4 py-4">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">
                    {category.title}
                  </p>
                  <div className="mt-1 flex items-center gap-3">
                    <span className="text-xs text-lightGray">{category.slug}</span>
                    <span className="inline-flex items-center rounded-full bg-lightBlue/10 px-2 py-0.5 text-[10px] font-medium text-lightBlue">
                      {category._count.courses} دوره
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Link
                    href={`/panel/categories/${category.id}/edit`}
                    className="flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-medium text-lightBlue transition-colors hover:bg-lightBlue/10"
                  >
                    <i className="bi bi-pencil"></i>
                  </Link>
                  <DeleteCategoryButton id={category.id} />
                </div>
              </div>
            ))
          )
        }
      >
        {categories.length === 0 ? (
          <tr>
            <td colSpan={4} className="px-6 py-12 text-center">
              <div className="flex flex-col items-center">
                <i className="bi bi-tags text-4xl text-lightGray"></i>
                <p className="mt-2 text-sm text-lightGray">
                  هنوز دسته‌بندی‌ای وجود ندارد
                </p>
              </div>
            </td>
          </tr>
        ) : (
          categories.map((category) => (
            <tr
              key={category.id}
              className="transition-colors hover:bg-gray-50/50 dark:hover:bg-gray-700/50"
            >
              <td className="px-6 py-4 font-medium text-gray-800 dark:text-white">
                {category.title}
              </td>
              <td className="px-6 py-4 text-lightGray">{category.slug}</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center rounded-full bg-lightBlue/10 px-2.5 py-0.5 text-xs font-medium text-lightBlue">
                  {category._count.courses} دوره
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-1">
                  <Link
                    href={`/panel/categories/${category.id}/edit`}
                    className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-lightBlue transition-colors hover:bg-lightBlue/10"
                  >
                    <i className="bi bi-pencil"></i>
                    ویرایش
                  </Link>
                  <DeleteCategoryButton id={category.id} />
                </div>
              </td>
            </tr>
          ))
        )}
      </DataTable>
    </div>
  );
}
