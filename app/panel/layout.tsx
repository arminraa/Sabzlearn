import "../globals.css";
import Providers from "@/components/Providers";
import { Metadata } from "next";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

export const metadata: Metadata = {
  title: "پنل مدیریت | سبزلرن",
  description: "پنل مدیریت سایت آموزشی سبزلرن",
};

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="overflow-x-hidden bg-[#f8f9fb] font-[dana] dark:bg-[#111827] dark:text-white">
        <Providers>
          <div className="flex min-h-screen">
            <AdminSidebar />
            <div className="mr-0 flex-1 lg:mr-[280px]">
              <AdminHeader />
              <main className="p-4 pt-4 lg:p-6 lg:pt-4">{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
