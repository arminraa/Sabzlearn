export default function AdminFormTextarea({
  label,
  name,
  defaultValue,
  placeholder,
  required,
  rows,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        rows={rows || 4}
        dir="rtl"
        className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition-colors focus:border-lightBlue focus:ring-2 focus:ring-lightBlue/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-lightBlue"
      />
    </div>
  );
}
