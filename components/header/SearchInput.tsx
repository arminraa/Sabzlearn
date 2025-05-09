export default function SearchInput({
  styles,
  placeholder,
  inputStyles,
}: Readonly<{
  styles?: string;
  placeholder?: string;
  inputStyles?: string;
}>) {
  return (
    <div className={`${styles} relative`}>
      <input
        type="text"
        className={`${inputStyles} w-full bg-lightGray/10 focus:outline-none`}
        placeholder={placeholder ? placeholder : "چیو میخوای یادبگیری ؟"}
      />
      <span className="absolute left-[10px] top-1/2 -translate-y-1/2 text-lg text-black/50 dark:text-white">
        <i className="bi bi-search" />
      </span>
    </div>
  );
}
