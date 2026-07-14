export default function AdminFormInput({
  label,
  name,
  type,
  defaultValue,
  placeholder,
  required,
  dir,
}: {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string | number;
  placeholder?: string;
  required?: boolean;
  dir?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type || "text"}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        dir={dir || "rtl"}
        className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition-colors focus:border-lightBlue focus:ring-2 focus:ring-lightBlue/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-lightBlue"
      />
    </div>
  );
}
