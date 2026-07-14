"use server";

import prisma from "@/lib/prisma";

export const handleNextVideo = async (videoSlug: string) => {
  const currentVideo = await prisma.video.findUnique({
    where: {
      slug: videoSlug,
    },
    include: {
      chapter: true,
    },
  });

  if (!currentVideo) return null;

  const nextVideo = await prisma.video.findFirst({
    where: {
      chapterId: currentVideo.chapterId,
      order: currentVideo.order + 1,
    },
  });

  if (nextVideo) return nextVideo;

  const nextChapter = await prisma.chapter.findFirst({
    where: {
      courseId: currentVideo.chapter.courseId,
      order: currentVideo.chapter.order + 1,
    },
    include: {
      videos: {
        orderBy: { order: "asc" },
        take: 1,
      },
    },
  });

  return nextChapter?.videos[0] || null;
};

export const handlePreviousVideo = async (videoSlug: string) => {
  const currentVideo = await prisma.video.findUnique({
    where: {
      slug: videoSlug,
    },
    include: {
      chapter: true,
    },
  });

  if (!currentVideo) return null;

  const prevVideo = await prisma.video.findFirst({
    where: {
      chapterId: currentVideo.chapterId,
      order: currentVideo.order - 1,
    },
  });

  if (prevVideo) return prevVideo;

  const prevChapter = await prisma.chapter.findFirst({
    where: {
      courseId: currentVideo.chapter.courseId,
      order: currentVideo.chapter.order - 1,
    },
    include: {
      videos: {
        orderBy: { order: "desc" },
        take: 1,
      },
    },
  });

  return prevChapter?.videos[0] || null;
};
