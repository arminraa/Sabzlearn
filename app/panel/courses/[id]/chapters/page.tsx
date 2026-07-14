import { getChaptersByCourseId } from "@/actions/chapters";
import { getCourseById } from "@/actions/courses";
import DeleteChapterButton from "@/components/admin/DeleteChapterButton";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ChaptersPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [course, chapters] = await Promise.all([
    getCourseById(id),
    getChaptersByCourseId(id),
  ]);

  if (!course) notFound();

  const formatDuration = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    if (h > 0) return `${h} ساعت ${m} دقیقه`;
    return `${m} دقیقه`;
  };

  const totalDuration = chapters.reduce(
    (acc, ch) => acc + ch.videos.reduce((a, v) => a + v.duration, 0),
    0
  );

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm text-lightGray">
            <Link href="/panel/courses" className="hover:text-lightBlue">
              دوره‌ها
            </Link>
            <i className="bi bi-chevron-left text-xs"></i>
            <span className="text-gray-800 dark:text-white">
              {course.title}
            </span>
          </div>
          <h1 className="mt-2 text-2xl font-bold text-gray-800 dark:text-white">
            مدیریت فصل‌ها
          </h1>
        </div>
        <Link
          href={`/panel/courses/${id}/chapters/create`}
          className="flex items-center gap-2 rounded-xl bg-lightBlue px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-darkBlue"
        >
          <i className="bi bi-plus-lg"></i>
          افزودن فصل
        </Link>
      </div>

      {/* Course Summary */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
          <p className="text-xs text-lightGray">تعداد فصل‌ها</p>
          <p className="mt-1 text-2xl font-bold text-gray-800 dark:text-white">
            {chapters.length}
          </p>
        </div>
        <div className="rounded-xl border border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
          <p className="text-xs text-lightGray">تعداد ویدیوها</p>
          <p className="mt-1 text-2xl font-bold text-gray-800 dark:text-white">
            {chapters.reduce((acc, ch) => acc + ch.videos.length, 0)}
          </p>
        </div>
        <div className="rounded-xl border border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
          <p className="text-xs text-lightGray">مدت کل</p>
          <p className="mt-1 text-2xl font-bold text-gray-800 dark:text-white">
            {formatDuration(totalDuration)}
          </p>
        </div>
      </div>

      {/* Chapters List */}
      <div className="flex flex-col gap-4">
        {chapters.length === 0 ? (
          <div className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white py-16 dark:border-gray-700 dark:bg-gray-800">
            <i className="bi bi-list-nested text-4xl text-lightGray"></i>
            <p className="mt-3 text-sm text-lightGray">
              هنوز فصلی اضافه نشده است
            </p>
            <Link
              href={`/panel/courses/${id}/chapters/create`}
              className="mt-4 flex items-center gap-2 rounded-xl bg-lightBlue px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-darkBlue"
            >
              <i className="bi bi-plus-lg"></i>
              افزودن فصل
            </Link>
          </div>
        ) : (
          chapters.map((chapter, index) => (
            <div
              key={chapter.id}
              className="rounded-2xl border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              {/* Chapter Header */}
              <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-lightBlue/10 text-sm font-bold text-lightBlue">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white">
                      {chapter.title}
                    </h3>
                    {chapter.description && (
                      <p className="mt-0.5 text-xs text-lightGray">
                        {chapter.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Link
                    href={`/panel/courses/${id}/chapters/${chapter.id}/edit`}
                    className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-lightBlue transition-colors hover:bg-lightBlue/10"
                  >
                    <i className="bi bi-pencil"></i>
                    ویرایش
                  </Link>
                  <Link
                    href={`/panel/courses/${id}/chapters/${chapter.id}/videos/create`}
                    className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-lightGreen transition-colors hover:bg-lightGreen/10"
                  >
                    <i className="bi bi-plus-lg"></i>
                    ویدیو
                  </Link>
                  <DeleteChapterButton chapterId={chapter.id} courseId={id} />
                </div>
              </div>

              {/* Videos */}
              <div className="px-6 py-3">
                {chapter.videos.length === 0 ? (
                  <p className="py-4 text-center text-xs text-lightGray">
                    ویدیویی وجود ندارد
                  </p>
                ) : (
                  <div className="flex flex-col gap-1">
                    {chapter.videos.map((video) => (
                      <div
                        key={video.id}
                        className="flex items-center justify-between rounded-lg px-4 py-2.5 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gray-100 text-xs text-lightGray dark:bg-gray-700">
                            <i className="bi bi-play-fill"></i>
                          </div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {video.title}
                          </span>
                          {video.isFree && (
                            <span className="rounded-full bg-lightGreen/10 px-2 py-0.5 text-[10px] font-medium text-lightGreen">
                              رایگان
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-lightGray">
                            {formatDuration(video.duration)}
                          </span>
                          <Link
                            href={`/panel/courses/${id}/chapters/${chapter.id}/videos/${video.id}/edit`}
                            className="rounded p-1 text-lightGray transition-colors hover:bg-lightBlue/10 hover:text-lightBlue"
                          >
                            <i className="bi bi-pencil text-xs"></i>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
