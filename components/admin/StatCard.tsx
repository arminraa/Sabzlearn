export default function StatCard({
  title,
  value,
  icon,
  color,
}: {
  title: string;
  value: number | string;
  icon: string;
  color: string;
}) {
  const colorMap: Record<string, string> = {
    blue: "from-lightBlue to-blue-600",
    green: "from-lightGreen to-green-600",
    orange: "from-lightOrange to-orange-600",
    purple: "from-purple-500 to-purple-700",
  };

  const bgMap: Record<string, string> = {
    blue: "bg-lightBlue/10",
    green: "bg-lightGreen/10",
    orange: "bg-lightOrange/10",
    purple: "bg-purple-500/10",
  };

  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-lightGray dark:text-gray-400">{title}</p>
          <p className="mt-2 text-3xl font-bold text-gray-800 dark:text-white">
            {value}
          </p>
        </div>
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${colorMap[color]} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
        >
          <i className={`bi ${icon} text-xl`}></i>
        </div>
      </div>
    </div>
  );
}
