export default function RoadmapCard({
  title,
  quantity,
  color,
  icon,
}: Readonly<{
  title: string;
  quantity: string;
  icon: string;
  color:
    | "orange-red-gradient"
    | "green-blue-gradient"
    | "pink-purple-gradient"
    | "blue-purple-gradient";
}>) {
  return (
    <article className={`flexCenter rounded-xl ${color} h-[145px] p-6 w-full`}>
      <div className="flexCol text-white">
        <i className={`${icon} text-3xl`}></i>
        <span className="text-lg font-semibold whitespace-nowrap">{title}</span>
        <span className="whitespace-nowrap">{quantity}</span>
      </div>
    </article>
  );
}
