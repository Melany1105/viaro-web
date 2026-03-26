"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

interface QuoteButtonProps {
  label: string;
  lng: string;
}

export function QuoteButton({ label, lng }: QuoteButtonProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const homeRoute = `/${lng}`;
  const isHome = pathname === homeRoute || pathname === `${homeRoute}/`;

  // Escucha el param ?scrollTo=contact-us al llegar a home
  useEffect(() => {
    if (searchParams.get("scrollTo") === "contact-us") {
      const tryScroll = () => {
        const el = document.getElementById("contact-us");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          // Limpia el param de la URL sin recargar
          const url = new URL(window.location.href);
          url.searchParams.delete("scrollTo");
          history.replaceState(null, "", url.toString());
        } else {
          // Si el elemento aún no está, reintenta
          setTimeout(tryScroll, 100);
        }
      };
      tryScroll();
    }
  }, [searchParams]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHome) {
      document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `${homeRoute}?scrollTo=contact-us`;
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-[9999] bg-primary text-white px-6 py-3 rounded-full shadow-xl font-semibold transition-all duration-300 hover:bg-neutral-800 hover:-translate-y-1"
    >
      {label}
    </button>
  );
}