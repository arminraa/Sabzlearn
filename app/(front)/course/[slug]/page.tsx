export default async function CoursePage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  return (
    <section className="min-h-screen w-screen">
      <div className="container mt-10">
        <div className="flex overflow-x-auto scroll-hidden">
          <div className="flexCenter relative h-[50px] bg-white ml-[8px]">
            <div className="left-chevron z-10 absolute -left-[29px] top-0 h-full w-[30px] bg-white" />
            <div className="flexCenter h-full w-full whitespace-nowrap px-2">
              slam
            </div>
          </div>
          <div className="flexCenter relative h-[50px] bg-white ml-[8px]">
          <div className="right-chevron absolute -right-[1px] top-0 h-full w-[30px] bg-gray-200" />
            <div className="flexCenter h-full w-full whitespace-nowrap pl-[4px] pr-[36px]">
              slamscfdadffdadasdsadsdafgtehefvdf
            </div>
            <div className="left-chevron z-10 absolute -left-[29px] top-0 h-full w-[30px] bg-white" />
          </div>
          <div className="flexCenter relative h-[50px] bg-white ml-[8px]">
          <div className="right-chevron absolute -right-[1px] top-0 h-full w-[30px] bg-gray-200" />
            <div className="flexCenter h-full w-full whitespace-nowrap pl-[4px] pr-[36px]">
              slamscfdadffdadasdsadsdafgtehefvdf
            </div>
            <div className="left-chevron absolute -left-[29px] top-0 h-full w-[30px] bg-white z-10" />
          </div>
          <div className="flexCenter relative h-[50px] bg-white ml-[8px]">
          <div className="right-chevron absolute -right-[1px] top-0 h-full w-[30px] bg-gray-200" />
            <div className="flexCenter h-full w-full whitespace-nowrap pl-[4px] pr-[36px]">
              slamscfdadffdadasdsadsdafgtehefvdf
            </div>
            <div className="left-chevron absolute -left-[29px] top-0 h-full w-[30px] bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
