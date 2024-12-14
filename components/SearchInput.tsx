export default function SearchInput({
  styles,
}: Readonly<{
  styles?: string;
}>) {
  return (
    <div className={`${styles} relative`}>
      <input
        type="text"
        className={` bg-lightGray/10 rounded-2xl lg:rounded-3xl py-2 lg:py-[12px] px-4 focus:outline-none w-full`}
        placeholder="چیو میخوای یادبگیری ؟"
      />
      <span className="absolute top-1/2 left-[10px] -translate-y-1/2 text-black/50 text-lg">
        <i className="bi bi-search" />
      </span>
    </div>
  );
}
