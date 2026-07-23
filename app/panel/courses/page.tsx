import { getAllCourses } from "@/actions/courses";
import DataTable from "@/components/admin/DataTable";
import DeleteCourseButton from "@/components/admin/DeleteCourseButton";
import Link from "next/link";

export default async function CoursesPage() {
  const courses = await getAllCourses();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white sm:text-2xl">
          مدیریت دوره‌ها
        </h1>
      </div>

      <DataTable
        title="لیست دوره‌ها"
        href="/panel/courses/create"
        hrefLabel="افزودن دوره"
        columns={["عنوان", "فصل‌ها / ویدیوها", "دسته‌بندی", "قیمت", "وضعیت", "عملیات"]}
        mobileCards={
          courses.length === 0 ? (
            <div className="flex flex-col items-center py-12">
              <i className="bi bi-book text-4xl text-lightGray"></i>
              <p className="mt-2 text-sm text-lightGray">
                هنوز دوره‌ای وجود ندارد
              </p>
            </div>
          ) : (
            courses.map((course) => (
              <div key={course.id} className="flex flex-col gap-3 px-4 py-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={course.imageUrl}
                      alt={course.title}
                      className="h-10 w-14 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">
                        {course.title}
                      </p>
                      <p className="mt-0.5 text-xs text-lightGray">
                        {course.category?.title || "-"}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${
                      course.published
                        ? "bg-lightGreen/10 text-lightGreen"
                        : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {course.published ? "منتشر شده" : "پیش‌نویس"}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-lightGray">
                  <span className="flex items-center gap-1">
                    <i className="bi bi-folder2 text-lightBlue"></i>
                    {course._count.chapters} فصل
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="bi bi-play-circle text-lightGreen"></i>
                    {course._count.videos} ویدیو
                  </span>
                  <span className="font-medium text-lightGreen">
                    {course.price.toLocaleString("fa-IR")} تومان
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Link
                    href={`/panel/courses/${course.id}/edit`}
                    className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-lightBlue transition-colors hover:bg-lightBlue/10"
                  >
                    <i className="bi bi-pencil"></i>
                    ویرایش
                  </Link>
                  <Link
                    href={`/panel/courses/${course.id}/chapters`}
                    className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-lightOrange transition-colors hover:bg-lightOrange/10"
                  >
                    <i className="bi bi-list-nested"></i>
                    فصل‌ها
                  </Link>
                  <DeleteCourseButton id={course.id} />
                </div>
              </div>
            ))
          )
        }
      >
        {courses.length === 0 ? (
          <tr>
            <td colSpan={6} className="px-6 py-12 text-center">
              <div className="flex flex-col items-center">
                <i className="bi bi-book text-4xl text-lightGray"></i>
                <p className="mt-2 text-sm text-lightGray">
                  هنوز دوره‌ای وجود ندارد
                </p>
              </div>
            </td>
          </tr>
        ) : (
          courses.map((course) => (
            <tr
              key={course.id}
              className="transition-colors hover:bg-gray-50/50 dark:hover:bg-gray-700/50"
            >
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="h-10 w-14 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {course.title}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3 text-xs text-lightGray">
                  <span className="flex items-center gap-1">
                    <i className="bi bi-folder2 text-lightBlue"></i>
                    {course._count.chapters} فصل
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="bi bi-play-circle text-lightGreen"></i>
                    {course._count.videos} ویدیو
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 text-lightGray">
                {course.category?.title || "-"}
              </td>
              <td className="px-6 py-4">
                <span className="font-medium text-lightGreen">
                  {course.price.toLocaleString("fa-IR")}
                </span>
                {course.salePrice && (
                  <span className="mr-2 text-xs text-lightGray line-through">
                    {course.salePrice.toLocaleString("fa-IR")}
                  </span>
                )}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    course.published
                      ? "bg-lightGreen/10 text-lightGreen"
                      : "bg-red-500/10 text-red-500"
                  }`}
                >
                  {course.published ? "منتشر شده" : "پیش‌نویس"}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-1">
                  <Link
                    href={`/panel/courses/${course.id}/edit`}
                    className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-lightBlue transition-colors hover:bg-lightBlue/10"
                  >
                    <i className="bi bi-pencil"></i>
                    ویرایش
                  </Link>
                  <Link
                    href={`/panel/courses/${course.id}/chapters`}
                    className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-lightOrange transition-colors hover:bg-lightOrange/10"
                  >
                    <i className="bi bi-list-nested"></i>
                    فصل‌ها
                  </Link>
                  <DeleteCourseButton id={course.id} />
                </div>
              </td>
            </tr>
          ))
        )}
      </DataTable>
    </div>
  );
}
