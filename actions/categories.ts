"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getAllCategories() {
  return prisma.category.findMany({
    include: {
      _count: {
        select: { courses: true },
      },
    },
    orderBy: { title: "asc" },
  });
}

export async function getCategoryById(id: string) {
  return prisma.category.findUnique({
    where: { id },
    include: {
      courses: true,
    },
  });
}

export async function createCategory(data: {
  title: string;
  slug: string;
}) {
  await prisma.category.create({
    data: {
      title: data.title,
      slug: data.slug,
    },
  });
  revalidatePath("/panel");
  revalidatePath("/panel/categories");
  redirect("/panel/categories");
}

export async function updateCategory(
  id: string,
  data: {
    title: string;
    slug: string;
  }
) {
  await prisma.category.update({
    where: { id },
    data: {
      title: data.title,
      slug: data.slug,
    },
  });
  revalidatePath("/panel");
  revalidatePath("/panel/categories");
  redirect("/panel/categories");
}

export async function deleteCategory(id: string) {
  await prisma.category.delete({
    where: { id },
  });
  revalidatePath("/panel");
  revalidatePath("/panel/categories");
}
