import { notFound } from "next/navigation";
import Site from "@/components/Site";

export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: "en" }];
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  return <Site />;
}
