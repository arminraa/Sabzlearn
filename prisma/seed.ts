import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting to seed database...')
  
  // Clear existing courses (optional - removes old data)
  await prisma.course.deleteMany()
  console.log('✓ Cleared existing courses')
  
  // Sample courses data
  const courses = [
    {
      title: 'دوره جامع React و Next.js',
      slug: 'react-nextjs-complete',
      shortDescription: 'آموزش کامل React و Next.js از مقدماتی تا پیشرفته به همراه پروژه‌های عملی و واقعی',
      imageUrl: '/images/course-pictures/ReactJS-Course.webp',
      author: 'علی محمدی',
      price: 990000,
      salePrice: 499000,
      score: 4.8,
      viewersCount: 1250,
      published: true
    },
    {
      title: 'برنامه نویسی بک‌اند با Node.js',
      slug: 'nodejs-backend',
      shortDescription: 'ساخت API های قدرتمند و scalable با Node.js، Express و MongoDB',
      imageUrl: '/images/course-pictures/34-1.webp',
      author: 'سارا کریمی',
      price: 790000,
      salePrice: null,
      score: 4.5,
      viewersCount: 890,
      published: true
    },
    {
      title: 'دوره تخصصی TypeScript',
      slug: 'typescript-mastery',
      shortDescription: 'مسلط شدن به TypeScript و استفاده از آن در پروژه‌های بزرگ و تیمی',
      imageUrl: '/images/course-pictures/c-sharp.webp',
      author: 'رضا احمدی',
      price: 590000,
      salePrice: 299000,
      score: 4.9,
      viewersCount: 2100,
      published: true
    },
    {
      title: 'Tailwind CSS از صفر تا صد',
      slug: 'tailwind-css-complete',
      shortDescription: 'طراحی رابط کاربری حرفه‌ای و responsive با Tailwind CSS',
      imageUrl: '/images/course-pictures/n8n.webp',
      author: 'مریم حسینی',
      price: 390000,
      salePrice: 199000,
      score: 4.7,
      viewersCount: 560,
      published: true
    },
    {
      title: 'دوره کامل Python',
      slug: 'python-complete',
      shortDescription: 'آموزش برنامه نویسی با Python از مبتدی تا پیشرفته به همراه پروژه‌های عملی',
      imageUrl: '/images/course-pictures/AlpineJS8-1.webp',
      author: 'حمید رضایی',
      price: 850000,
      salePrice: null,
      score: 4.6,
      viewersCount: 3420,
      published: true
    },
    {
      title: 'Next.js 14 و App Router',
      slug: 'nextjs14-app-router',
      shortDescription: 'آموزش جدیدترین امکانات Next.js 14، App Router و Server Components',
      imageUrl: '/images/course-pictures/سکوی-پرتاب1.jpg',
      author: 'علی محمدی',
      price: 690000,
      salePrice: 449000,
      score: 4.9,
      viewersCount: 980,
      published: true
    },
    {
      title: 'دوره GraphQL',
      slug: 'graphql-complete',
      shortDescription: 'ساخت API های انعطاف‌پذیر با GraphQL، Apollo Client و Server',
      imageUrl: '/images/course-pictures/vuejs.webp',
      author: 'سارا کریمی',
      price: 740000,
      salePrice: 399000,
      score: 4.4,
      viewersCount: 430,
      published: true
    },
    {
      title: 'Prisma و PostgreSQL',
      slug: 'prisma-postgresql',
      shortDescription: 'مدیریت دیتابیس با Prisma ORM، روابط پیشرفته و PostgreSQL',
      imageUrl: '/images/course-pictures/6.webp',
      author: 'رضا احمدی',
      price: 540000,
      salePrice: null,
      score: 4.7,
      viewersCount: 670,
      published: true
    },
    {
      title: 'JavaScript پیشرفته',
      slug: 'javascript-advanced',
      shortDescription: 'مفاهیم پیشرفته JavaScript شامل closures، promises، async/await و OOP',
      imageUrl: '/images/course-pictures/2.webp',
      author: 'محمد نوروزی',
      price: 450000,
      salePrice: 249000,
      score: 4.8,
      viewersCount: 1560,
      published: true
    },
    // {
    //   title: 'دوره Docker',
    //   slug: 'docker-complete',
    //   shortDescription: 'آموزش Docker، کانتینری کردن برنامه‌ها و دپلوی با Docker Compose',
    //   imageUrl: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=300&fit=crop',
    //   author: 'حمید رضایی',
    //   price: 620000,
    //   salePrice: 399000,
    //   score: 4.5,
    //   viewersCount: 720,
    //   published: true
    // }
  ]
  
  // Insert all courses
  let createdCount = 0
  for (const course of courses) {
    await prisma.course.create({
      data: course
    })
    createdCount++
    console.log(`✓ Added: ${course.title}`)
  }
  
  console.log(`\n✅ Successfully added ${createdCount} courses to database!`)
  
  // Show summary
  const totalCourses = await prisma.course.count()
  const publishedCourses = await prisma.course.count({ where: { published: true } })
  const avgScore = await prisma.course.aggregate({
    _avg: { score: true }
  })
  
  console.log('\n📊 Database Summary:')
  console.log(`   Total courses: ${totalCourses}`)
  console.log(`   Published courses: ${publishedCourses}`)
  console.log(`   Average score: ${avgScore._avg.score?.toFixed(2) || 0}`)
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })