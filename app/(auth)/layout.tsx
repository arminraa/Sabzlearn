import Providers from "@/components/Providers";
import "../globals.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="fa" dir="rtl">
      <body className="flexCenter h-screen w-screen bg-gray-100 dark:bg-gray-900">
        <Providers>
          <div className="absolute left-0 top-0 hidden h-[300px] w-[300px] rounded-full bg-sky-500 opacity-20 blur-[120px] lg:block" />
          {children}
          <div className="absolute bottom-0 right-0 hidden h-[300px] w-[300px] rounded-full bg-amber-400 opacity-20 blur-[120px] lg:block" />
        </Providers>
      </body>
    </html>
  );
}
