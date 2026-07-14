import Link from "next/link";
import { ToPersianNumber } from "topersiannumber";

export default function RoadmapCard({
  title,
  quantity,
  color,
  icon,
  slug,
}: Readonly<{
  title: string;
  quantity: string;
  icon: string;
  color: string;
  slug: string;
}>) {
  return (
    <Link className="w-full" href={`/course-cat/${slug}`}>
      <article
        className={`flexCenter w-full rounded-xl ${color} h-[145px] w-full p-6`}
      >
        <div className="flexCol text-white">
          <i className={`${icon} text-3xl`}></i>
          <span className="whitespace-nowrap text-lg font-semibold">
            {title}
          </span>
          <span className="whitespace-nowrap">
            {ToPersianNumber(quantity)} دوره
          </span>
        </div>
      </article>
    </Link>
  );
}
