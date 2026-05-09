import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceAreas } from "@/lib/data";
import {
  FadeIn,
  FadeInStagger,
  FadeInStaggerItem,
} from "@/components/motion-wrapper";

export function ServiceAreasPreviewSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeIn>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Service Areas
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Serving Toronto & The Greater Toronto Area
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mb-8 text-muted-foreground">
                From downtown Toronto to the suburbs of Vaughan, North York,
                Richmond Hill, and beyond — we&apos;re your local roofing
                experts covering the entire GTA.
              </p>
            </FadeIn>
            <FadeInStagger className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {serviceAreas.map((area) => (
                <FadeInStaggerItem key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    <MapPin className="h-4 w-4 text-primary" />
                    {area.name}
                  </Link>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
            <FadeIn delay={0.4}>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/service-areas">
                    View All Areas
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
          <FadeIn direction="right" delay={0.2}>
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted lg:aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&h=600&fit=crop"
                alt="Toronto skyline aerial view"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-lg font-semibold text-white">
                  Proudly serving the GTA since 2014
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
