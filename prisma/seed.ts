import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting to seed database...");

  // Create admin user
  await prisma.user.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      username: "admin",
      password: "admin123",
      role: "admin",
    },
  });
  console.log("✓ Admin user created (admin / admin123)");

  await prisma.category.deleteMany();
  console.log("✓ Cleared existing categories");

  const categories = [
    { title: "فرانت اند", slug: "frontend" },
    { title: "بک اند", slug: "backend" },
    { title: "فول استک", slug: "fullstack" },
    { title: "دیتابیس", slug: "database" },
    { title: "دواپس", slug: "devops" },
    { title: "ماشین لرنینگ", slug: "machine-learning" },
    { title: "همه", slug: "all" },
  ];

  const createdCategories: any[] = [];

  for (const category of categories) {
    const created = await prisma.category.create({
      data: category,
    });

    createdCategories.push(created);
    console.log(`✓ Added category: ${category.title}`);
  }
  const getCategoryId = (slug: string) =>
    createdCategories.find((c) => c.slug === slug)?.id;

  // Clear existing courses (optional - removes old data)
  await prisma.course.deleteMany();
  console.log("✓ Cleared existing courses");

  // Sample courses data
  const courses = [
    {
      title: "دوره جامع React و Next.js",
      slug: "react-nextjs-complete",
      shortDescription:
        "آموزش کامل React و Next.js از مفاهیم پایه تا ساخت پروژه‌های حرفه‌ای و آماده ورود به بازار کار",
      description:
        " در این دوره جامع، React و Next.js را به صورت کامل و پروژه‌محور یاد خواهید گرفت. آموزش از مفاهیم پایه مانند Componentها، State و Props آغاز می‌شود و به مباحث پیشرفته‌ای مانند Context API، Server Components، App Router، Data Fetching و بهینه‌سازی عملکرد می‌رسد. در طول دوره چندین پروژه واقعی و کاربردی پیاده‌سازی خواهید کرد تا بتوانید مفاهیم را در عمل درک کنید. همچنین با معماری مناسب پروژه، مدیریت وضعیت، ارتباط با API و استقرار پروژه در محیط واقعی آشنا می‌شوید. این دوره برای افرادی طراحی شده است که قصد ورود به بازار کار فرانت‌اند را دارند یا می‌خواهند دانش خود را به سطح حرفه‌ای ارتقا دهند.",
      imageUrl: "/images/course-pictures/ReactJS-Course.webp",
      author: "علی محمدی",
      price: 990000,
      salePrice: 499000,
      score: 4.8,
      viewersCount: 1250,
      progressPercent: 10,
      prerequisite: "شبکع و لینوکس",
      courseLength: 24,
      authorProfileImageUrl: "/images/course-pictures/2.webp",
      published: true,
      preSale: false,
      categoryId: getCategoryId("frontend"),
      chapters: [
        {
          title: "مقدمات React",
          description: "آشنایی با React و نصب ابزارهای مورد نیاز",
          order: 1,
          videos: [
            {
              title: "معرفی دوره",
              slug: "react-introduction",
              videoUrl: "/videos/sample-video.mp4",
              duration: 300,
              order: 1,
              isFree: true,
            },
            {
              title: "نصب ابزارها",
              slug: "react-setup",
              videoUrl: "/videos/sample-video.mp4",
              duration: 600,
              order: 2,
              isFree: true,
            },
          ],
        },
        {
          title: "کامپوننت‌ها",
          description: "ساخت و استفاده از کامپوننت‌ها",
          order: 2,
          videos: [
            {
              title: "اولین کامپوننت",
              slug: "first-component",
              videoUrl: "/videos/sample-video.mp4",
              duration: 900,
              order: 1,
              isFree: false,
            },
          ],
        },
      ],
    },
    {
      title: "برنامه نویسی بک‌اند با Node.js",
      slug: "nodejs-backend",
      shortDescription:
        "یادگیری توسعه بک‌اند با Node.js، Express و ساخت APIهای مقیاس‌پذیر و حرفه‌ای",
      imageUrl: "/images/course-pictures/34-1.webp",
      description:
        " در این دوره جامع، React و Next.js را به صورت کامل و پروژه‌محور یاد خواهید گرفت. آموزش از مفاهیم پایه مانند Componentها، State و Props آغاز می‌شود و به مباحث پیشرفته‌ای مانند Context API، Server Components، App Router، Data Fetching و بهینه‌سازی عملکرد می‌رسد. در طول دوره چندین پروژه واقعی و کاربردی پیاده‌سازی خواهید کرد تا بتوانید مفاهیم را در عمل درک کنید. همچنین با معماری مناسب پروژه، مدیریت وضعیت، ارتباط با API و استقرار پروژه در محیط واقعی آشنا می‌شوید. این دوره برای افرادی طراحی شده است که قصد ورود به بازار کار فرانت‌اند را دارند یا می‌خواهند دانش خود را به سطح حرفه‌ای ارتقا دهند.",
      author: "سارا کریمی",
      price: 790000,
      salePrice: null,
      score: 4.5,
      viewersCount: 890,
      progressPercent: 10,
      prerequisite: "شبکع و لینوکس",
      courseLength: 24,
      authorProfileImageUrl: "/images/course-pictures/2.webp",
      published: true,
      preSale: true,
      categoryId: getCategoryId("backend"),
      chapters: [
        {
          title: "مقدمات React",
          description: "آشنایی با React و نصب ابزارهای مورد نیاز",
          order: 1,
          videos: [
            {
              title: "معرفی دوره",
              slug: "react-introduction-2",
              videoUrl: "/videos/sample-video.mp4",
              duration: 300,
              order: 1,
              isFree: true,
            },
            {
              title: "نصب ابزارها",
              slug: "react-setup-2",
              videoUrl: "/videos/sample-video.mp4",
              duration: 600,
              order: 2,
              isFree: true,
            },
          ],
        },
        {
          title: "کامپوننت‌ها",
          description: "ساخت و استفاده از کامپوننت‌ها",
          order: 2,
          videos: [
            {
              title: "اولین کامپوننت",
              slug: "first-component-2",
              videoUrl: "/videos/sample-video.mp4",
              duration: 900,
              order: 1,
              isFree: false,
            },
          ],
        },
      ],
    },
    {
      title: "دوره تخصصی TypeScript",
      slug: "typescript-mastery",
      shortDescription:
        "تسلط بر TypeScript و استفاده از تایپ‌سیف بودن در پروژه‌های واقعی و بزرگ",
      imageUrl: "/images/course-pictures/c-sharp.webp",
      description:
        " در این دوره جامع، React و Next.js را به صورت کامل و پروژه‌محور یاد خواهید گرفت. آموزش از مفاهیم پایه مانند Componentها، State و Props آغاز می‌شود و به مباحث پیشرفته‌ای مانند Context API، Server Components، App Router، Data Fetching و بهینه‌سازی عملکرد می‌رسد. در طول دوره چندین پروژه واقعی و کاربردی پیاده‌سازی خواهید کرد تا بتوانید مفاهیم را در عمل درک کنید. همچنین با معماری مناسب پروژه، مدیریت وضعیت، ارتباط با API و استقرار پروژه در محیط واقعی آشنا می‌شوید. این دوره برای افرادی طراحی شده است که قصد ورود به بازار کار فرانت‌اند را دارند یا می‌خواهند دانش خود را به سطح حرفه‌ای ارتقا دهند.",
      author: "رضا احمدی",

      price: 590000,
      salePrice: 299000,
      score: 4.9,
      viewersCount: 2100,
      progressPercent: 10,
      prerequisite: "شبکع و لینوکس",
      courseLength: 24,
      authorProfileImageUrl: "/images/course-pictures/2.webp",

      published: true,
      preSale: false,
      categoryId: getCategoryId("frontend"),
      chapters: [
        {
          title: "مقدمات React",
          description: "آشنایی با React و نصب ابزارهای مورد نیاز",
          order: 1,
          videos: [
            {
              title: "معرفی دوره",
              slug: "react-introduction-3",
              videoUrl: "/videos/sample-video.mp4",
              duration: 300,
              order: 1,
              isFree: true,
            },
            {
              title: "نصب ابزارها",
              slug: "react-setup-3",
              videoUrl: "/videos/sample-video.mp4",
              duration: 600,
              order: 2,
              isFree: true,
            },
          ],
        },
        {
          title: "کامپوننت‌ها",
          description: "ساخت و استفاده از کامپوننت‌ها",
          order: 2,
          videos: [
            {
              title: "اولین کامپوننت",
              slug: "first-component-3",
              videoUrl: "/videos/sample-video.mp4",
              duration: 900,
              order: 1,
              isFree: false,
            },
          ],
        },
      ],
    },
    {
      title: "Tailwind CSS از صفر تا صد",
      slug: "tailwind-css-complete",
      shortDescription:
        "آموزش طراحی رابط کاربری مدرن و واکنش‌گرا با Tailwind CSS از صفر تا صد",
      imageUrl: "/images/course-pictures/n8n.webp",
      author: "مریم حسینی",
      description:
        " در این دوره جامع، React و Next.js را به صورت کامل و پروژه‌محور یاد خواهید گرفت. آموزش از مفاهیم پایه مانند Componentها، State و Props آغاز می‌شود و به مباحث پیشرفته‌ای مانند Context API، Server Components، App Router، Data Fetching و بهینه‌سازی عملکرد می‌رسد. در طول دوره چندین پروژه واقعی و کاربردی پیاده‌سازی خواهید کرد تا بتوانید مفاهیم را در عمل درک کنید. همچنین با معماری مناسب پروژه، مدیریت وضعیت، ارتباط با API و استقرار پروژه در محیط واقعی آشنا می‌شوید. این دوره برای افرادی طراحی شده است که قصد ورود به بازار کار فرانت‌اند را دارند یا می‌خواهند دانش خود را به سطح حرفه‌ای ارتقا دهند.",
      price: 390000,
      salePrice: 199000,
      score: 4.7,
      viewersCount: 560,
      progressPercent: 10,
      prerequisite: "شبکع و لینوکس",
      courseLength: 24,
      authorProfileImageUrl: "/images/course-pictures/2.webp",

      published: true,
      preSale: true,
      categoryId: getCategoryId("frontend"),
      chapters: [
        {
          title: "مقدمات React",
          description: "آشنایی با React و نصب ابزارهای مورد نیاز",
          order: 1,
          videos: [
            {
              title: "معرفی دوره",
              slug: "react-introduction-4",
              videoUrl: "/videos/sample-video.mp4",
              duration: 300,
              order: 1,
              isFree: true,
            },
            {
              title: "نصب ابزارها",
              slug: "react-setup-4",
              videoUrl: "/videos/sample-video.mp4",
              duration: 600,
              order: 2,
              isFree: true,
            },
          ],
        },
        {
          title: "کامپوننت‌ها",
          description: "ساخت و استفاده از کامپوننت‌ها",
          order: 2,
          videos: [
            {
              title: "اولین کامپوننت",
              slug: "first-component-4",
              videoUrl: "/videos/sample-video.mp4",
              duration: 900,
              order: 1,
              isFree: false,
            },
          ],
        },
      ],
    },
    {
      title: "دوره کامل Python",
      slug: "python-complete",
      shortDescription:
        "یادگیری برنامه‌نویسی با Python از مقدماتی تا پیشرفته همراه با پروژه‌های کاربردی",
      imageUrl: "/images/course-pictures/AlpineJS8-1.webp",
      author: "حمید رضایی",
      description:
        " در این دوره جامع، React و Next.js را به صورت کامل و پروژه‌محور یاد خواهید گرفت. آموزش از مفاهیم پایه مانند Componentها، State و Props آغاز می‌شود و به مباحث پیشرفته‌ای مانند Context API، Server Components، App Router، Data Fetching و بهینه‌سازی عملکرد می‌رسد. در طول دوره چندین پروژه واقعی و کاربردی پیاده‌سازی خواهید کرد تا بتوانید مفاهیم را در عمل درک کنید. همچنین با معماری مناسب پروژه، مدیریت وضعیت، ارتباط با API و استقرار پروژه در محیط واقعی آشنا می‌شوید. این دوره برای افرادی طراحی شده است که قصد ورود به بازار کار فرانت‌اند را دارند یا می‌خواهند دانش خود را به سطح حرفه‌ای ارتقا دهند.",
      price: 850000,
      salePrice: null,
      score: 4.6,
      viewersCount: 3420,
      progressPercent: 10,
      prerequisite: "شبکع و لینوکس",
      courseLength: 24,
      authorProfileImageUrl: "/images/course-pictures/2.webp",
      published: true,
      preSale: false,
      categoryId: getCategoryId("backend"),
      chapters: [
        {
          title: "مقدمات React",
          description: "آشنایی با React و نصب ابزارهای مورد نیاز",
          order: 1,
          videos: [
            {
              title: "معرفی دوره",
              slug: "react-introduction-5",
              videoUrl: "/videos/sample-video.mp4",
              duration: 300,
              order: 1,
              isFree: true,
            },
            {
              title: "نصب ابزارها",
              slug: "react-setup-5",
              videoUrl: "/videos/sample-video.mp4",
              duration: 600,
              order: 2,
              isFree: true,
            },
          ],
        },
        {
          title: "کامپوننت‌ها",
          description: "ساخت و استفاده از کامپوننت‌ها",
          order: 2,
          videos: [
            {
              title: "اولین کامپوننت",
              slug: "first-component-5",
              videoUrl: "/videos/sample-video.mp4",
              duration: 900,
              order: 1,
              isFree: false,
            },
          ],
        },
      ],
    },
    {
      title: "Next.js 14 و App Router",
      slug: "nextjs14-app-router",
      shortDescription:
        "آشنایی کامل با App Router، Server Components و قابلیت‌های جدید Next.js 14",
      imageUrl: "/images/course-pictures/سکوی-پرتاب1.jpg",
      author: "علی محمدی",
      description:
        " در این دوره جامع، React و Next.js را به صورت کامل و پروژه‌محور یاد خواهید گرفت. آموزش از مفاهیم پایه مانند Componentها، State و Props آغاز می‌شود و به مباحث پیشرفته‌ای مانند Context API، Server Components، App Router، Data Fetching و بهینه‌سازی عملکرد می‌رسد. در طول دوره چندین پروژه واقعی و کاربردی پیاده‌سازی خواهید کرد تا بتوانید مفاهیم را در عمل درک کنید. همچنین با معماری مناسب پروژه، مدیریت وضعیت، ارتباط با API و استقرار پروژه در محیط واقعی آشنا می‌شوید. این دوره برای افرادی طراحی شده است که قصد ورود به بازار کار فرانت‌اند را دارند یا می‌خواهند دانش خود را به سطح حرفه‌ای ارتقا دهند.",
      price: 690000,
      salePrice: 449000,
      score: 4.9,
      viewersCount: 980,
      progressPercent: 10,
      prerequisite: "شبکع و لینوکس",
      courseLength: 24,
      authorProfileImageUrl: "/images/course-pictures/2.webp",
      published: true,
      preSale: true,
      categoryId: getCategoryId("frontend"),
      chapters: [
        {
          title: "مقدمات React",
          description: "آشنایی با React و نصب ابزارهای مورد نیاز",
          order: 1,
          videos: [
            {
              title: "معرفی دوره",
              slug: "react-introduction-6",
              videoUrl: "/videos/sample-video.mp4",
              duration: 300,
              order: 1,
              isFree: true,
            },
            {
              title: "نصب ابزارها",
              slug: "react-setup-6",
              videoUrl: "/videos/sample-video.mp4",
              duration: 600,
              order: 2,
              isFree: true,
            },
          ],
        },
        {
          title: "کامپوننت‌ها",
          description: "ساخت و استفاده از کامپوننت‌ها",
          order: 2,
          videos: [
            {
              title: "اولین کامپوننت",
              slug: "first-component-6",
              videoUrl: "/videos/sample-video.mp4",
              duration: 900,
              order: 1,
              isFree: false,
            },
          ],
        },
      ],
    },
    {
      title: "دوره GraphQL",
      slug: "graphql-complete",
      shortDescription:
        "ساخت و مدیریت APIهای منعطف با GraphQL، Apollo Client و Apollo Server",
      imageUrl: "/images/course-pictures/vuejs.webp",
      author: "سارا کریمی",
      description:
        " در این دوره جامع، React و Next.js را به صورت کامل و پروژه‌محور یاد خواهید گرفت. آموزش از مفاهیم پایه مانند Componentها، State و Props آغاز می‌شود و به مباحث پیشرفته‌ای مانند Context API، Server Components، App Router، Data Fetching و بهینه‌سازی عملکرد می‌رسد. در طول دوره چندین پروژه واقعی و کاربردی پیاده‌سازی خواهید کرد تا بتوانید مفاهیم را در عمل درک کنید. همچنین با معماری مناسب پروژه، مدیریت وضعیت، ارتباط با API و استقرار پروژه در محیط واقعی آشنا می‌شوید. این دوره برای افرادی طراحی شده است که قصد ورود به بازار کار فرانت‌اند را دارند یا می‌خواهند دانش خود را به سطح حرفه‌ای ارتقا دهند.",
      price: 740000,
      salePrice: 399000,
      score: 4.4,
      viewersCount: 430,
      progressPercent: 10,
      prerequisite: "شبکع و لینوکس",
      courseLength: 24,
      authorProfileImageUrl: "/images/course-pictures/2.webp",
      published: true,
      preSale: false,
      categoryId: getCategoryId("backend"),
      chapters: [
        {
          title: "مقدمات React",
          description: "آشنایی با React و نصب ابزارهای مورد نیاز",
          order: 1,
          videos: [
            {
              title: "معرفی دوره",
              slug: "react-introduction-7",
              videoUrl: "/videos/sample-video.mp4",
              duration: 300,
              order: 1,
              isFree: true,
            },
            {
              title: "نصب ابزارها",
              slug: "react-setup-7",
              videoUrl: "/videos/sample-video.mp4",
              duration: 600,
              order: 2,
              isFree: true,
            },
          ],
        },
        {
          title: "کامپوننت‌ها",
          description: "ساخت و استفاده از کامپوننت‌ها",
          order: 2,
          videos: [
            {
              title: "اولین کامپوننت",
              slug: "first-component-7",
              videoUrl: "/videos/sample-video.mp4",
              duration: 900,
              order: 1,
              isFree: false,
            },
          ],
        },
      ],
    },
    {
      title: "Prisma و PostgreSQL",
      slug: "prisma-postgresql",
      shortDescription:
        "مدیریت پایگاه داده با Prisma ORM و PostgreSQL همراه با روابط و کوئری‌های پیشرفته",
      imageUrl: "/images/course-pictures/6.webp",
      author: "رضا احمدی",
      description:
        " در این دوره جامع، React و Next.js را به صورت کامل و پروژه‌محور یاد خواهید گرفت. آموزش از مفاهیم پایه مانند Componentها، State و Props آغاز می‌شود و به مباحث پیشرفته‌ای مانند Context API، Server Components، App Router، Data Fetching و بهینه‌سازی عملکرد می‌رسد. در طول دوره چندین پروژه واقعی و کاربردی پیاده‌سازی خواهید کرد تا بتوانید مفاهیم را در عمل درک کنید. همچنین با معماری مناسب پروژه، مدیریت وضعیت، ارتباط با API و استقرار پروژه در محیط واقعی آشنا می‌شوید. این دوره برای افرادی طراحی شده است که قصد ورود به بازار کار فرانت‌اند را دارند یا می‌خواهند دانش خود را به سطح حرفه‌ای ارتقا دهند.",
      price: 540000,
      salePrice: null,
      score: 4.7,
      viewersCount: 670,
      progressPercent: 10,
      prerequisite: "شبکع و لینوکس",
      courseLength: 24,
      authorProfileImageUrl: "/images/course-pictures/2.webp",
      published: true,
      preSale: true,
      categoryId: getCategoryId("database"),
      chapters: [
        {
          title: "مقدمات React",
          description: "آشنایی با React و نصب ابزارهای مورد نیاز",
          order: 1,
          videos: [
            {
              title: "معرفی دوره",
              slug: "react-introduction-8",
              videoUrl: "/videos/sample-video.mp4",
              duration: 300,
              order: 1,
              isFree: true,
            },
            {
              title: "نصب ابزارها",
              slug: "react-setup-8",
              videoUrl: "/videos/sample-video.mp4",
              duration: 600,
              order: 2,
              isFree: true,
            },
          ],
        },
        {
          title: "کامپوننت‌ها",
          description: "ساخت و استفاده از کامپوننت‌ها",
          order: 2,
          videos: [
            {
              title: "اولین کامپوننت",
              slug: "first-component-8",
              videoUrl: "/videos/sample-video.mp4",
              duration: 900,
              order: 1,
              isFree: false,
            },
          ],
        },
      ],
    },
    {
      title: "JavaScript پیشرفته",
      slug: "javascript-advanced",
      shortDescription:
        "یادگیری مفاهیم پیشرفته JavaScript شامل Closure، Promise، Async/Await و برنامه‌نویسی شی‌گرا",
      imageUrl: "/images/course-pictures/2.webp",
      author: "محمد نوروزی",
      description:
        " در این دوره جامع، React و Next.js را به صورت کامل و پروژه‌محور یاد خواهید گرفت. آموزش از مفاهیم پایه مانند Componentها، State و Props آغاز می‌شود و به مباحث پیشرفته‌ای مانند Context API، Server Components، App Router، Data Fetching و بهینه‌سازی عملکرد می‌رسد. در طول دوره چندین پروژه واقعی و کاربردی پیاده‌سازی خواهید کرد تا بتوانید مفاهیم را در عمل درک کنید. همچنین با معماری مناسب پروژه، مدیریت وضعیت، ارتباط با API و استقرار پروژه در محیط واقعی آشنا می‌شوید. این دوره برای افرادی طراحی شده است که قصد ورود به بازار کار فرانت‌اند را دارند یا می‌خواهند دانش خود را به سطح حرفه‌ای ارتقا دهند.",
      price: 450000,
      salePrice: 249000,
      score: 4.8,
      viewersCount: 1560,
      progressPercent: 10,
      prerequisite: "شبکع و لینوکس",
      courseLength: 24,
      authorProfileImageUrl: "/images/course-pictures/2.webp",
      published: true,
      preSale: false,
      categoryId: getCategoryId("frontend"),
      chapters: [
        {
          title: "مقدمات React",
          description: "آشنایی با React و نصب ابزارهای مورد نیاز",
          order: 1,
          videos: [
            {
              title: "معرفی دوره",
              slug: "react-introduction-9",
              videoUrl: "/videos/sample-video.mp4",
              duration: 300,
              order: 1,
              isFree: true,
            },
            {
              title: "نصب ابزارها",
              slug: "react-setup-9",
              videoUrl: "/videos/sample-video.mp4",
              duration: 600,
              order: 2,
              isFree: true,
            },
          ],
        },
        {
          title: "کامپوننت‌ها",
          description: "ساخت و استفاده از کامپوننت‌ها",
          order: 2,
          videos: [
            {
              title: "اولین کامپوننت",
              slug: "first-component-9",
              videoUrl: "/videos/sample-video.mp4",
              duration: 900,
              order: 1,
              isFree: false,
            },
          ],
        },
      ],
    },
    {
      title: "یادگیری ماشین",
      slug: "ml-advanced",
      shortDescription:
        "یادگیری مفاهیم پیشرفته JavaScript شامل Closure، Promise، Async/Await و برنامه‌نویسی شی‌گرا",
      imageUrl: "/images/course-pictures/2.webp",
      author: "آرمین رهبر",
      description:
        " در این دوره جامع، React و Next.js را به صورت کامل و پروژه‌محور یاد خواهید گرفت. آموزش از مفاهیم پایه مانند Componentها، State و Props آغاز می‌شود و به مباحث پیشرفته‌ای مانند Context API، Server Components، App Router، Data Fetching و بهینه‌سازی عملکرد می‌رسد. در طول دوره چندین پروژه واقعی و کاربردی پیاده‌سازی خواهید کرد تا بتوانید مفاهیم را در عمل درک کنید. همچنین با معماری مناسب پروژه، مدیریت وضعیت، ارتباط با API و استقرار پروژه در محیط واقعی آشنا می‌شوید. این دوره برای افرادی طراحی شده است که قصد ورود به بازار کار فرانت‌اند را دارند یا می‌خواهند دانش خود را به سطح حرفه‌ای ارتقا دهند.",
      price: 450000,
      salePrice: 249000,
      score: 4.8,
      viewersCount: 1560,
      progressPercent: 10,
      prerequisite: "شبکع و لینوکس",
      courseLength: 24,
      authorProfileImageUrl: "/images/course-pictures/2.webp",
      published: true,
      preSale: false,
      categoryId: getCategoryId("machine-learning"),
      chapters: [
        {
          title: "مقدمات React",
          description: "آشنایی با React و نصب ابزارهای مورد نیاز",
          order: 1,
          videos: [
            {
              title: "معرفی دوره",
              slug: "react-introduction-10",
              videoUrl: "/videos/sample-video.mp4",
              duration: 8000,
              order: 1,
              isFree: true,
            },
            {
              title: "نصب ابزارها",
              slug: "react-setup-10",
              videoUrl: "/videos/sample-video.mp4",
              duration: 600,
              order: 2,
              isFree: true,
            },
          ],
        },
        {
          title: "کامپوننت‌ها",
          description: "ساخت و استفاده از کامپوننت‌ها",
          order: 2,
          videos: [
            {
              title: "اولین کامپوننت",
              slug: "first-component-10",
              videoUrl: "/videos/sample-video.mp4",
              duration: 900,
              order: 1,
              isFree: false,
            },
          ],
        },
      ],
    },
  ];

  // Insert all courses
  let createdCount = 0;
  for (const course of courses) {
    const { chapters, ...courseData } = course;
    await prisma.course.create({
      data: {
        ...courseData,

        chapters: {
          create: chapters.map((chapter) => ({
            title: chapter.title,
            description: chapter.description,
            order: chapter.order,

            videos: {
              create: chapter.videos.map((video) => ({
                title: video.title,
                slug: video.slug,
                videoUrl: video.videoUrl,
                duration: video.duration,
                order: video.order,
                isFree: video.isFree,
              })),
            },
          })),
        },
      },
    });
    createdCount++;
    console.log(`✓ Added: ${course.title}`);
  }

  console.log(`\n✅ Successfully added ${createdCount} courses to database!`);

  // Show summary
  const totalCourses = await prisma.course.count();
  const publishedCourses = await prisma.course.count({
    where: { published: true },
  });
  const avgScore = await prisma.course.aggregate({
    _avg: { score: true },
  });

  console.log("\n📊 Database Summary:");
  console.log(`   Total courses: ${totalCourses}`);
  console.log(`   Published courses: ${publishedCourses}`);
  console.log(`   Average score: ${avgScore._avg.score?.toFixed(2) || 0}`);
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
