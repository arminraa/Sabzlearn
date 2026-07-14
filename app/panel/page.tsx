import prisma from "@/lib/prisma";
import StatCard from "@/components/admin/StatCard";
import Link from "next/link";

export default async function AdminDashboard() {
  const [
    totalCategories,
    totalCourses,
    publishedCourses,
    totalChapters,
    totalVideos,
    latestCourses,
  ] = await Promise.all([
    prisma.category.count(),
    prisma.course.count(),
    prisma.course.count({ where: { published: true } }),
    prisma.chapter.count(),
    prisma.video.count(),
    prisma.course.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
      include: { category: true },
    }),
  ]);

  return (
    <div className="flex flex-col gap-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="دسته‌بندی‌ها"
          value={totalCategories}
          icon="bi-tags-fill"
          color="blue"
        />
        <StatCard
          title="کل دوره‌ها"
          value={totalCourses}
          icon="bi-book-fill"
          color="green"
        />
        <StatCard
          title="دوره‌های منتشر شده"
          value={publishedCourses}
          icon="bi-check-circle-fill"
          color="orange"
        />
        <StatCard
          title="ویدیوها"
          value={totalVideos}
          icon="bi-play-circle-fill"
          color="purple"
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Link
          href="/panel/categories/create"
          className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:border-lightBlue/30 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lightBlue/10 text-lightBlue transition-colors group-hover:bg-lightBlue group-hover:text-white">
            <i className="bi bi-plus-circle text-xl"></i>
          </div>
          <div>
            <p className="font-bold text-gray-800 dark:text-white">
              دسته‌بندی جدید
            </p>
            <p className="text-xs text-lightGray">افزودن دسته‌بندی جدید</p>
          </div>
        </Link>
        <Link
          href="/panel/courses/create"
          className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:border-lightGreen/30 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lightGreen/10 text-lightGreen transition-colors group-hover:bg-lightGreen group-hover:text-white">
            <i className="bi bi-plus-circle text-xl"></i>
          </div>
          <div>
            <p className="font-bold text-gray-800 dark:text-white">
              دوره جدید
            </p>
            <p className="text-xs text-lightGray">افزودن دوره جدید</p>
          </div>
        </Link>
        <Link
          href="/panel/courses"
          className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:border-lightOrange/30 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lightOrange/10 text-lightOrange transition-colors group-hover:bg-lightOrange group-hover:text-white">
            <i className="bi bi-list-ul text-xl"></i>
          </div>
          <div>
            <p className="font-bold text-gray-800 dark:text-white">
              مدیریت دوره‌ها
            </p>
            <p className="text-xs text-lightGray">مشاهده و ویرایش دوره‌ها</p>
          </div>
        </Link>
      </div>

      {/* Latest Courses */}
      <div className="rounded-2xl border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white">
            آخرین دوره‌ها
          </h2>
          <Link
            href="/panel/courses"
            className="text-sm font-medium text-lightBlue hover:text-darkBlue"
          >
            مشاهده همه
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50 dark:border-gray-700 dark:bg-gray-700/50">
                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-lightGray">
                  عنوان
                </th>
                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-lightGray">
                  دسته‌بندی
                </th>
                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-lightGray">
                  قیمت
                </th>
                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-lightGray">
                  وضعیت
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-gray-700">
              {latestCourses.map((course) => (
                <tr
                  key={course.id}
                  className="transition-colors hover:bg-gray-50/50 dark:hover:bg-gray-700/50"
                >
                  <td className="px-6 py-4 font-medium text-gray-800 dark:text-white">
                    {course.title}
                  </td>
                  <td className="px-6 py-4 text-lightGray">
                    {course.category?.title || "-"}
                  </td>
                  <td className="px-6 py-4 text-lightGreen">
                    {course.price.toLocaleString("fa-IR")} تومان
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
