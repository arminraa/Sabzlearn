import { getVideoById, updateVideo } from "@/actions/videos";
import AdminFormInput from "@/components/admin/AdminFormInput";
import AdminFormCheckbox from "@/components/admin/AdminFormCheckbox";
import AdminFormFile from "@/components/admin/AdminFormFile";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function EditVideoPage({
  params,
}: {
  params: Promise<{ id: string; chapterId: string; videoId: string }>;
}) {
  const { id, chapterId, videoId } = await params;
  const video = await getVideoById(videoId);

  if (!video) notFound();

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
          <span className="text-gray-800 dark:text-white">ویرایش ویدیو</span>
        </div>
        <h1 className="mt-2 text-2xl font-bold text-gray-800 dark:text-white">
          ویرایش ویدیو: {video.title}
        </h1>
      </div>

      <div className="max-w-2xl rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <form
          action={async (data: FormData) => {
            "use server";
            await updateVideo(videoId, {
              title: data.get("title") as string,
              slug: data.get("slug") as string,
              videoUrl: data.get("videoUrl") as string,
              duration: Number(data.get("duration")),
              order: Number(data.get("order")),
              isFree: data.get("isFree") === "on",
              chapterId: chapterId,
            });
          }}
          className="flex flex-col gap-5"
        >
          <AdminFormInput
            label="عنوان ویدیو"
            name="title"
            defaultValue={video.title}
            required
          />
          <AdminFormInput
            label="Slug"
            name="slug"
            defaultValue={video.slug}
            dir="ltr"
            required
          />
          <AdminFormFile
            label="فایل ویدیو"
            name="videoUrl"
            defaultValue={video.videoUrl}
            accept="video/*"
            folder="videos"
            required
          />
          <div className="grid grid-cols-2 gap-5">
            <AdminFormInput
              label="مدت (ثانیه)"
              name="duration"
              type="number"
              defaultValue={video.duration}
              required
            />
            <AdminFormInput
              label="ترتیب نمایش"
              name="order"
              type="number"
              defaultValue={video.order}
              required
            />
          </div>
          <AdminFormCheckbox
            label="ویدیوی رایگان"
            name="isFree"
            defaultChecked={video.isFree}
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
