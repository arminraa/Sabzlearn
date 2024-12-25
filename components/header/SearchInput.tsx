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
        className={`${inputStyles} bg-lightGray/10 focus:outline-none w-full`}
        placeholder={placeholder ? placeholder : "چیو میخوای یادبگیری ؟"}
      />
      <span className="absolute top-1/2 left-[10px] -translate-y-1/2 text-black/50 dark:text-white text-lg">
        <i className="bi bi-search" />
      </span>
    </div>
  );
}
