import Link from "next/link";

export default function EmptyState({
  icon,
  title,
  description,
  href,
  hrefLabel,
}: {
  icon: string;
  title: string;
  description: string;
  href: string;
  hrefLabel: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
        <i className={`bi ${icon} text-4xl text-lightGray dark:text-gray-400`}></i>
      </div>
      <h3 className="mt-4 text-lg font-bold text-gray-800 dark:text-white">
        {title}
      </h3>
      <p className="mt-1 text-sm text-lightGray dark:text-gray-400">
        {description}
      </p>
      <Link
        href={href}
        className="mt-6 flex items-center gap-2 rounded-xl bg-lightBlue px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-darkBlue"
      >
        <i className="bi bi-plus-lg"></i>
        {hrefLabel}
      </Link>
    </div>
  );
}
