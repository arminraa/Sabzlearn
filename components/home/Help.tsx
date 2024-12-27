import HelpCard from "./HelpCard";

export default function Help() {
  return (
    <section className="my-14">
      <div className="container">
        <div className="flexCol">
          <div className="flexCenter flex-col gap-4 text-center sm:items-start sm:self-start">
            <h3 className="flexCenter flex-row-reverse gap-2 text-2xl font-semibold sm:text-3xl sm:font-bold">
              <span className="text-black dark:text-white">
                ما چه کمکی میتونیم بهت بکنیم
              </span>
              <div className="hidden h-4 w-4 bg-lightBlue sm:block" />
            </h3>
            <h4 className="text-lightGray sm:text-lg">
              از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره
            </h4>
          </div>
          <div className="bg-lightOrange" />
          <div className="gridCols1 mt-8 w-full gap-6 md:grid-cols-2">
            <HelpCard
              icon="bi bi-book"
              color="bg-lightBlue/20"
              textColor="text-lightBlue"
            />
            <HelpCard
              icon="bi bi-chat-left"
              color="bg-lightOrange/20"
              textColor="text-lightOrange"
            />
            <HelpCard
              icon="bi bi-bar-chart"
              color="bg-lightGreen/20"
              textColor="text-lightGreen"
            />
            <HelpCard
              icon="bi bi-clipboard-check"
              color="bg-red-600/20"
              textColor="text-red-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
