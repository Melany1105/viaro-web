"use client"
import { Star } from "lucide-react"
import { getDictionary } from "@/lib/get-dictionary";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Testimonial = {
  name: string
  role: string
  text: string
  rating: number
}

type TestimonialsProps = {
  data: Testimonial[]
}

export function Testimonials({ data }: TestimonialsProps) {
  const params = useParams();
      const lng = params.lng as "es" | "en";
    
      const [dict, setDict] = useState<any>(null);
    
      useEffect(() => {
        const loadDict = async () => {
          const data = await getDictionary(lng);
          setDict(data);
        };
    
        loadDict();
      }, [lng]);
    
      if (!dict) return <div>Loading...</div>; 
      const t = dict.testimo;
  return (
    <section id="testimonials" className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <p className="mt-4 font-serif text-4xl font-bold tracking-tight text-card-foreground sm:text-5xl">
        {t.title}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {data.map((testimonial) => (
            <div
              key={testimonial.text}
              className="border rounded-xl p-8 transition-all duration-300 border-primary/50"
            >
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {`"${testimonial.text}"`}
              </p>

              <div className="mt-6 border-t border-border pt-6">
                <p className="font-serif text-lg font-semibold text-card-foreground">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}