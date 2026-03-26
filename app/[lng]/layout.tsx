import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getDictionary } from "@/lib/get-dictionary";
import { ScrollReveal } from "@/components/scroll-reveal";
import { QuoteButton } from "@/components/quote-button";
import "./globals.css";
import { Suspense } from "react";

const geisRocFont = localFont({
  src: [
    {
      path: "../../public/Demo_Fonts/Fontspring-DEMO-rocgroteskextrawide-bold.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Demo_Fonts/Fontspring-DEMO-rocgroteskextrawide-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-roc-grotesk",
});

export const metadata: Metadata = {
  title: "Viaro",
  description: "Premium executive and luxury transportation service.",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lng: "en" | "es" }>;
}) {
  const { lng } = await params;
  const dict = (await getDictionary(lng)) as any;
  const base = `/${lng}`;
  return (
    <html lang={lng} className="scroll-smooth">
      <body className={`${geisRocFont.variable} antialiased`}>
        <ScrollReveal />
        <Navbar dict={dict} lng={lng} />

        {children}

        <Suspense fallback={null}>
          <QuoteButton label={dict.cta_button || "Get Quote"} lng={lng} />
        </Suspense>
        <Footer dict={dict.footer} lng={lng} />
      </body>
    </html>
  );
}
