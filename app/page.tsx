import LastCourses from "@/components/LastCourses";
import Hero from "@/components/layout/Hero";
import Roadmaps from "@/components/Roadmaps";
import PopularCourses from "@/components/PopularCourses";
import Help from "@/components/Help";
import NewCourses from "@/components/NewestCourses";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <main>
      <Hero />
      <LastCourses />
      <Roadmaps />
      <PopularCourses />
      <Help />
      <NewCourses />
      <Blog />
    </main>
  );
}
