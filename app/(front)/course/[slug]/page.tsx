import CoursePageClient from "@/components/course/CoursePageClient";
import prisma from "@/lib/prisma";
import { CourseWithChaptersAndVideosAndCategory } from "@/types/prisma";
import { Prisma } from "@prisma/client";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const course: CourseWithChaptersAndVideosAndCategory | null =
    await prisma.course.findUnique({
      where: {
        slug,
      },
      include: {
        chapters: {
          orderBy: {
            order: "asc",
          },
          include: {
            videos: {
              orderBy: {
                order: "asc",
              },
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

  // Auto-increment viewers count
  await prisma.course.update({
    where: { id: course.id },
    data: { viewersCount: { increment: 1 } },
  });

  return <CoursePageClient course={{ ...course, viewersCount: course.viewersCount + 1 }} />;
}
