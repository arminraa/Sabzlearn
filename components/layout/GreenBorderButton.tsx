export default function GreenBorderButton({
  title,
  optStyles,
  onClick,
}: Readonly<{
  title: string;
  optStyles?: string;
  onClick?: () => void;
}>) {
  return (
    <button
      onClick={onClick}
      className={`${optStyles} rounded-md border border-lightGreen bg-white p-2 text-sm text-lightGreen hover:bg-green-50`}
    >
      {title}
    </button>
  );
}
