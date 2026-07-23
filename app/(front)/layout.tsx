import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/Providers";
import { Metadata } from "next";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Sabzlearn",
  description: "Programming teaching platform",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await prisma.category.findMany({
    include: {
      courses: true,
    },
  });
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden bg-lightGray/15 dark:bg-gray-900 dark:text-white">
        <Providers>
          <Header categories={categories} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
