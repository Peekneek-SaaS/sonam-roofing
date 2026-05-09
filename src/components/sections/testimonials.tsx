import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import {
  FadeIn,
  FadeInStagger,
  FadeInStaggerItem,
} from "@/components/motion-wrapper";

export function TestimonialsSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Testimonials
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              What Our Customers Say
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Don&apos;t just take our word for it. Here&apos;s what homeowners
              across the GTA have to say about our roofing services.
            </p>
          </FadeIn>
        </div>

        <FadeInStagger className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeInStaggerItem key={index}>
              <div className="relative rounded-xl border bg-card p-6 shadow-sm">
                <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/20" />
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary stroke-primary"
                    />
                  ))}
                </div>
                <p className="mb-6 text-foreground">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/30">
                    <span className="text-sm font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <FadeIn delay={0.4}>
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-primary text-primary stroke-primary"
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">4.9/5</span> based
              on 180+ reviews on Google
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
