import Link from "next/link";

export default function DataTable({
  title,
  href,
  hrefLabel,
  columns,
  children,
}: {
  title: string;
  href?: string;
  hrefLabel?: string;
  columns: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-gray-700">
        <h2 className="text-lg font-bold text-gray-800 dark:text-white">
          {title}
        </h2>
        {href && (
          <Link
            href={href}
            className="flex items-center gap-2 rounded-xl bg-lightBlue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-darkBlue"
          >
            <i className="bi bi-plus-lg"></i>
            {hrefLabel || "افزودن"}
          </Link>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-right text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50 dark:border-gray-700 dark:bg-gray-700/50">
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-lightGray dark:text-gray-400"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 dark:divide-gray-700">
            {children}
          </tbody>
        </table>
      </div>
    </div>
  );
}
