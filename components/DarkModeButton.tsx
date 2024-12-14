import Link from "next/link";

export default function DarkModeButton({
  styles,
}: Readonly<{
  styles?: string;
}>) {
  return (
    <button
      className={`${styles} lg:w-5 lg:h-5 w-3 flexCenter h-3 p-6 bg-lightGray/10 rounded-full`}
    >
      <Link href="#" className="text-xl lg:text-2xl  text-lightGray">
        <i className="bi bi-moon"></i>
      </Link>
    </button>
  );
}
