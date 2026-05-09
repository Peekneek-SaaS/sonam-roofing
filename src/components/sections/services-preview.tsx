import Link from "next/link";
import {
  ArrowRight,
  Home,
  Wrench,
  Layers,
  Sun,
  Droplets,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import {
  FadeIn,
  FadeInStagger,
  FadeInStaggerItem,
  HoverScale,
} from "@/components/motion-wrapper";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Wrench,
  Layers,
  Sun,
  Droplets,
  AlertTriangle,
};

export function ServicesPreviewSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <FadeIn>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider">
                Our Services
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Complete Roofing Solutions
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <Button asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        <FadeInStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <FadeInStaggerItem key={service.id}>
                <HoverScale>
                  <Link
                    href={`/services#${service.id}`}
                    className="group block rounded-xl border p-6 transition-colors bg-primary/90"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      {Icon && <Icon className="size-8 text-white" />}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-primary-foreground">
                      {service.title}
                    </h3>
                    <p className="text-xs text-primary-foreground">
                      {service.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center text-sm font-medium text-accent">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </HoverScale>
              </FadeInStaggerItem>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}
