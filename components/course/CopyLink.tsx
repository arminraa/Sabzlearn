"use client";
export default function CopyLink() {
  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => console.log("Text copied to clipboard!"))
      .catch((err) => console.error("Failed to copy text", err));
  };
  return (
    <div className="lg:flexCenter mt-6 hidden h-[160px] w-full rounded-md bg-white p-4 lg:flex-col lg:gap-3">
      <span className="text-lg font-semibold">لینک کوتاه آموزش</span>
      <button
        onClick={() => handleCopy("sabzlearn.ir/?p=138")}
        className="flexRow w-full rounded-md border border-dashed border-lightBlue bg-blue-50 p-4 text-end text-lg text-lightBlue"
      >
        <i className="bi bi-copy text-xl"></i>
        sabzlearn.ir/?p=۱۳۸
      </button>
    </div>
  );
}
