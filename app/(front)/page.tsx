import Blog from "@/components/home/Blog";
import FreeCourses from "@/components/home/FreeCourses";
import Help from "@/components/home/Help";
import LastCourses from "@/components/home/LastCourses";
import NewCourses from "@/components/home/NewestCourses";
import PopularCourses from "@/components/home/PopularCourses";
import Roadmaps from "@/components/home/Roadmaps";
import Hero from "@/components/layout/Hero";
import prisma from "@/lib/prisma";

export default async function Home() {
  const popularCourses = await prisma.course.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: "desc",  
      // Latest first
    },
  });

  return (
    <main>
      <Hero />
      <LastCourses />
      <Roadmaps />
      <PopularCourses popularCourses={popularCourses} />
      <Help />
      <NewCourses />
      <Blog />
      <FreeCourses />
    </main>
  );
}
