import { ToPersianNumber } from "topersiannumber";

export default function NumberBox({
  number,
  className,
}: {
  number: number;
  className?: string;
}) {
  return (
    <span
      className={`${className && className} flexCenter h-[12px] w-[12px] rounded-md bg-white p-4 text-black md:p-5 dark:bg-gray-600 dark:text-white`}
    >
      {number === 0 ? ToPersianNumber(number + 1) : ToPersianNumber(number)}
    </span>
  );
}
