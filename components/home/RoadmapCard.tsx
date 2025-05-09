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
    <article className={`flexCenter rounded-xl ${color} h-[145px] w-full p-6`}>
      <div className="flexCol text-white">
        <i className={`${icon} text-3xl`}></i>
        <span className="whitespace-nowrap text-lg font-semibold">{title}</span>
        <span className="whitespace-nowrap">{quantity}</span>
      </div>
    </article>
  );
}
