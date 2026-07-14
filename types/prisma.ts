import { Chapter, Prisma, Video } from "@prisma/client";

export interface Course {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  author: string;
  price: number;
  salePrice: number | null;
  score: number;
  viewersCount: number;
  published: boolean;
  preSale: boolean;
  categoryId: string | null;
  courseLength: number;
  prerequisite: string;
  progressPercent: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  title: string;
  slug: string;
}

export type CategoryWithCourses = Category & {
  courses: Course[];
};

export type CourseWithChaptersAndVideosAndCategory = Prisma.CourseGetPayload<{
  include: {
    chapters: {
      include: {
        videos: true;
      };
    };
    category: true;
  };
}>;

export type ChapterWithVideos = Chapter & {
  videos: Video[];
};
