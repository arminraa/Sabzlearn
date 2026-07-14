"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getAllCourses() {
  const courses = await prisma.course.findMany({
    include: {
      category: true,
      _count: {
        select: { chapters: true },
      },
      chapters: {
        include: {
          _count: {
            select: { videos: true },
          },
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return courses.map((course) => ({
    ...course,
    _count: {
      ...course._count,
      videos: course.chapters.reduce((acc, ch) => acc + ch._count.videos, 0),
    },
  }));
}

export async function getCourseById(id: string) {
  return prisma.course.findUnique({
    where: { id },
    include: {
      category: true,
      chapters: {
        include: {
          videos: true,
        },
        orderBy: { order: "asc" },
      },
    },
  });
}

export async function createCourse(data: {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  author: string;
  authorProfileImageUrl: string;
  price: number;
  salePrice?: number | null;
  published?: boolean;
  preSale?: boolean;
  courseLength: number;
  prerequisite: string;
  categoryId?: string | null;
}) {
  await prisma.course.create({
    data: {
      title: data.title,
      slug: data.slug,
      shortDescription: data.shortDescription,
      description: data.description,
      imageUrl: data.imageUrl,
      author: data.author,
      authorProfileImageUrl: data.authorProfileImageUrl,
      price: data.price,
      salePrice: data.salePrice ?? null,
      published: data.published ?? true,
      preSale: data.preSale ?? false,
      courseLength: data.courseLength,
      prerequisite: data.prerequisite,
      progressPercent: 0,
      categoryId: data.categoryId ?? null,
    },
  });
  revalidatePath("/panel");
  revalidatePath("/panel/courses");
  redirect("/panel/courses");
}

export async function updateCourse(
  id: string,
  data: {
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    imageUrl: string;
    author: string;
    authorProfileImageUrl: string;
    price: number;
    salePrice?: number | null;
    published?: boolean;
    preSale?: boolean;
    courseLength: number;
    prerequisite: string;
    categoryId?: string | null;
  }
) {
  await prisma.course.update({
    where: { id },
    data: {
      title: data.title,
      slug: data.slug,
      shortDescription: data.shortDescription,
      description: data.description,
      imageUrl: data.imageUrl,
      author: data.author,
      authorProfileImageUrl: data.authorProfileImageUrl,
      price: data.price,
      salePrice: data.salePrice ?? null,
      published: data.published ?? true,
      preSale: data.preSale ?? false,
      courseLength: data.courseLength,
      prerequisite: data.prerequisite,
      categoryId: data.categoryId ?? null,
    },
  });
  revalidatePath("/panel");
  revalidatePath("/panel/courses");
  redirect("/panel/courses");
}

export async function incrementViewersCount(id: string) {
  await prisma.course.update({
    where: { id },
    data: {
      viewersCount: { increment: 1 },
    },
  });
  revalidatePath("/");
  revalidatePath("/course");
}

export async function deleteCourse(id: string) {
  await prisma.course.delete({
    where: { id },
  });
  revalidatePath("/panel");
  revalidatePath("/panel/courses");
}
