"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getChaptersByCourseId(courseId: string) {
  return prisma.chapter.findMany({
    where: { courseId },
    include: {
      videos: true,
    },
    orderBy: { order: "asc" },
  });
}

export async function getChapterById(id: string) {
  return prisma.chapter.findUnique({
    where: { id },
    include: {
      videos: true,
      course: true,
    },
  });
}

export async function createChapter(data: {
  title: string;
  order: number;
  description?: string;
  courseId: string;
}) {
  await prisma.chapter.create({
    data: {
      title: data.title,
      order: data.order,
      description: data.description ?? null,
      courseId: data.courseId,
    },
  });
  revalidatePath("/panel");
  revalidatePath("/panel/courses");
  redirect(`/panel/courses/${data.courseId}/chapters`);
}

export async function updateChapter(
  id: string,
  data: {
    title: string;
    order: number;
    description?: string;
    courseId: string;
  }
) {
  await prisma.chapter.update({
    where: { id },
    data: {
      title: data.title,
      order: data.order,
      description: data.description ?? null,
    },
  });
  revalidatePath("/panel");
  revalidatePath("/panel/courses");
  redirect(`/panel/courses/${data.courseId}/chapters`);
}

export async function deleteChapter(id: string, courseId: string) {
  await prisma.chapter.delete({
    where: { id },
  });
  revalidatePath("/panel");
  revalidatePath("/panel/courses");
  redirect(`/panel/courses/${courseId}/chapters`);
}
