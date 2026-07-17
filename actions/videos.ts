"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function recalculateCourseLength(courseId: string) {
  const chapters = await prisma.chapter.findMany({
    where: { courseId },
    include: { videos: true },
  });
  const totalSeconds = chapters.reduce(
    (sum: number, ch: { videos: { duration: number }[] }) =>
      sum + ch.videos.reduce((s: number, v: { duration: number }) => s + v.duration, 0),
    0
  );
  const totalHours = Math.round(totalSeconds / 3600 * 10) / 10;
  await prisma.course.update({
    where: { id: courseId },
    data: { courseLength: totalHours },
  });
}

export async function getVideosByChapterId(chapterId: string) {
  return prisma.video.findMany({
    where: { chapterId },
    orderBy: { order: "asc" },
  });
}

export async function getVideoById(id: string) {
  return prisma.video.findUnique({
    where: { id },
    include: {
      chapter: {
        include: {
          course: true,
        },
      },
    },
  });
}

export async function createVideo(data: {
  title: string;
  slug: string;
  videoUrl: string;
  duration: number;
  order: number;
  isFree?: boolean;
  chapterId: string;
}) {
  await prisma.video.create({
    data: {
      title: data.title,
      slug: data.slug,
      videoUrl: data.videoUrl,
      duration: data.duration,
      order: data.order,
      isFree: data.isFree ?? false,
      chapterId: data.chapterId,
    },
  });
  const chapter = await prisma.chapter.findUnique({
    where: { id: data.chapterId },
  });
  if (chapter) {
    await recalculateCourseLength(chapter.courseId);
    revalidatePath("/panel");
    revalidatePath("/panel/courses");
    revalidatePath("/course");
    redirect(`/panel/courses/${chapter.courseId}/chapters`);
  }
}

export async function updateVideo(
  id: string,
  data: {
    title: string;
    slug: string;
    videoUrl: string;
    duration: number;
    order: number;
    isFree?: boolean;
    chapterId: string;
  }
) {
  await prisma.video.update({
    where: { id },
    data: {
      title: data.title,
      slug: data.slug,
      videoUrl: data.videoUrl,
      duration: data.duration,
      order: data.order,
      isFree: data.isFree ?? false,
    },
  });
  const chapter = await prisma.chapter.findUnique({
    where: { id: data.chapterId },
  });
  if (chapter) {
    await recalculateCourseLength(chapter.courseId);
    revalidatePath("/panel");
    revalidatePath("/panel/courses");
    revalidatePath("/course");
    redirect(`/panel/courses/${chapter.courseId}/chapters`);
  }
}

export async function deleteVideo(id: string) {
  const video = await prisma.video.findUnique({
    where: { id },
    include: { chapter: true },
  });
  if (video) {
    await prisma.video.delete({ where: { id } });
    await recalculateCourseLength(video.chapter.courseId);
    revalidatePath("/panel");
    revalidatePath("/panel/courses");
    revalidatePath("/course");
    redirect(`/panel/courses/${video.chapter.courseId}/chapters`);
  }
}
