import CourseCategory from "@/components/course-category/CourseCategory";


export default async function CourseCategoryPage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  return (
    <>
      <CourseCategory />
    </>
  );
}
