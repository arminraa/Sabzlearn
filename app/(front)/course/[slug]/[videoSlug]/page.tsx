import CourseVideoPageClient from "@/components/course/CourseVideoPageClient";
import prisma from "@/lib/prisma";

export default async function CourseVideoPage({
  params,
}: {
  params: Promise<{ slug: string; videoSlug: string }>;
}) {
  const { slug, videoSlug } = await params;

  const video = await prisma.video.findUnique({
    where: { slug: videoSlug },
  });

  if (!video) {
    return (
      <section className="h-[500px] flexCenter text-2xl">
        ویدیو یافت نشد !
      </section>
    );
  }

  const course = await prisma.course.findUnique({
    where: { slug },
    include: {
      chapters: {
        orderBy: { order: "asc" },
        include: {
          videos: {
            orderBy: { order: "asc" },
          },
        },
      },
      category: true,
    },
  });

  if (!course) {
    return (
      <section className="h-[500px] flexCenter text-2xl">
        دوره یافت نشد !
      </section>
    );
  }

  return (
    <CourseVideoPageClient
      video={video}
      course={course}
      category={course.category!}
      chapters={course.chapters}
    />
  );
}
