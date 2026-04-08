import MainContent from "@/components/Main/MainContent";
import { getDictionary } from "@/lib/get-dictionary";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lng: "en" | "es" }>;
}) {
  const { lng } = await params;
  const dict = await getDictionary(lng) as any;

 return (
    <main className="bg-black">
      <MainContent key={lng} dict={dict.home} lng={lng} />
    </main>
  );
}