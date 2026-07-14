export default function AdminFormCheckbox({
  label,
  name,
  defaultChecked,
}: {
  label: string;
  name: string;
  defaultChecked?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        name={name}
        id={name}
        defaultChecked={defaultChecked}
        className="h-4 w-4 rounded border-gray-300 text-lightBlue focus:ring-lightBlue/20"
      />
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
}
