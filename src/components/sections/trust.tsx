import { Shield, DollarSign, HardHat, Hammer } from "lucide-react";
import {
  FadeIn,
  FadeInStagger,
  FadeInStaggerItem,
} from "@/components/motion-wrapper";

const trustPoints = [
  {
    icon: Shield,
    title: "Premium Materials",
    description:
      "We source only the finest roofing materials from trusted manufacturers with proven track records.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "No hidden fees. You know what you're paying for before we start work.",
  },
  {
    icon: HardHat,
    title: "Safety First Always",
    description:
      "Our crew follows strict protocols that exceed industry standards on every single job.",
  },
  {
    icon: Hammer,
    title: "Honest Craftsmanship",
    description:
      "We take pride in work that speaks for itself through durability and attention to detail.",
  },
];

export function TrustSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeIn>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Quality
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Built Right, Built to Last
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mb-8 text-muted-foreground">
                We don&apos;t cut corners. Every nail, every seam, every
                material choice reflects our commitment to work that endures
                decades of weather and wear.
              </p>
            </FadeIn>
            <FadeInStagger className="grid gap-6 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <FadeInStaggerItem key={point.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                    <point.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{point.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </div>
          <FadeIn direction="right" delay={0.2}>
            <div className="relative">
              <div className="aspect-4/3 overflow-hidden rounded-2xl bg-muted">
                <img
                  src="/images/quality.jpg"
                  alt="Roofing professionals working on a roof installation"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
