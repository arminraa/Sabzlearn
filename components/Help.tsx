import HelpCard from "./HelpCard";

export default function Help() {
  return (
    <section className="my-14">
      <div className="container">
        <div className="flexCol">
          <div className="flexCenter flex-col text-center sm:items-start gap-4 sm:self-start">
            <h3 className="font-semibold sm:font-bold text-2xl sm:text-3xl flexCenter flex-row-reverse gap-2">
              <span className="dark:text-white text-black">ما چه کمکی میتونیم بهت بکنیم</span>
              <div className="hidden sm:block w-4 h-4 bg-lightBlue" />
            </h3>
            <h4 className="text-lightGray sm:text-lg">
              از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره
            </h4>
          </div>
          <div className="bg-lightOrange"/>
          <div className="gridCols1 md:grid-cols-2 gap-6 w-full mt-8">
            {/* <HelpCard icon="bi bi-book" color="lightBlue" textColor="text-lightBlue" />
            <HelpCard icon="bi bi-chat-left" color="lightGreen" />
            <HelpCard icon="bi bi-bar-chart" color="lightBlue" />
            <HelpCard icon="bi bi-clipboard-check" color="lightGreen" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
