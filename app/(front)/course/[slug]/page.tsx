export default async function CoursePage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  return <div>{(await params).slug}</div>;
}
