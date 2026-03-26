import MainContent from "@/components/Main/MainContent";
import { getDictionary } from "@/lib/get-dictionary";

export default async function Page({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const dict = await getDictionary(lng as "en" | "es");

  return <MainContent dict={dict} lng={lng} />;
}