export default function Breadcrumb() {
  return (
    <div className="scroll-hidden flex overflow-x-auto">
      <div className="flexCenter relative ml-[8px] h-[50px] rounded-md bg-white">
        <div className="left-chevron absolute -left-[29px] top-0 z-10 h-full w-[30px] bg-white" />
        <div className="flexCenter h-full w-full whitespace-nowrap pl-2 pr-4 text-xl">
          <i className="bi bi-house-door"></i>
        </div>
      </div>
      <div className="flexCenter relative ml-[8px] h-[50px] bg-white">
        <div className="right-chevron absolute -right-[1px] top-0 h-full w-[30px] bg-gray-200" />
        <div className="flexCenter h-full w-full whitespace-nowrap pl-[4px] pr-[36px]">
          دوره ها
        </div>
        <div className="left-chevron absolute -left-[29px] top-0 z-10 h-full w-[30px] bg-white" />
      </div>
      <div className="flexCenter relative ml-[8px] h-[50px] bg-white">
        <div className="right-chevron absolute -right-[1px] top-0 h-full w-[30px] bg-gray-200" />
        <div className="flexCenter h-full w-full whitespace-nowrap pl-[4px] pr-[36px]">
          پی اچ پی
        </div>
        <div className="left-chevron absolute -left-[29px] top-0 z-10 h-full w-[30px] bg-white" />
      </div>
      <div className="flexCenter relative ml-[8px] h-[50px] flex-grow-[2] rounded-md bg-white">
        <div className="right-chevron absolute -right-[1px] top-0 h-full w-[30px] bg-gray-200" />
        <div className="flexCenter justify-start font-semibold h-full w-full whitespace-nowrap pl-[4px] pr-[36px]">
          آموزش جامع PHP از صفر
        </div>
        {/* <div className="left-chevron absolute -left-[29px] top-0 h-full w-[30px] bg-white" /> */}
      </div>
    </div>
  );
}
