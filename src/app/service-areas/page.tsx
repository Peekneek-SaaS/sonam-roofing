import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { serviceAreas } from "@/lib/data";
import {
  FadeIn,
  FadeInStagger,
  FadeInStaggerItem,
  HoverScale,
} from "@/components/motion-wrapper";
import { CTASection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Service Areas | High Skillz Roofing",
  description:
    "High Skillz Roofing serves Toronto, Vaughan, North York, Richmond Hill, Markham, Mississauga and the entire Greater Toronto Area.",
};

const areaImages: Record<string, string> = {
  toronto:
    "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=600&h=400&fit=crop",
  vaughan:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  "north-york":
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  "richmond-hill":
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop",
  markham:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
  mississauga:
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
};

export default function ServiceAreasPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-secondary py-20 text-primary lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-black">
                  Service Areas
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                  Serving Toronto & The Greater Toronto Area
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-lg text-black">
                  From downtown Toronto to the surrounding suburbs, we provide
                  professional roofing services to homeowners and businesses
                  across the GTA.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Areas Grid */}
        <section className="bg-background py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <FadeInStagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {serviceAreas.map((area) => (
                <FadeInStaggerItem key={area.slug}>
                  <HoverScale scale={1.02}>
                    <Link
                      href={`/service-areas/${area.slug}`}
                      className="group block overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md"
                    >
                      <div className="aspect-3/2 overflow-hidden bg-muted">
                        <img
                          src={areaImages[area.slug]}
                          alt={`Roofing services in ${area.name}`}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="mb-2 flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <h2 className="text-xl font-semibold">{area.name}</h2>
                        </div>
                        <p className="mb-4 text-sm text-muted-foreground">
                          {area.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {area.neighborhoods
                            .slice(0, 3)
                            .map((neighborhood) => (
                              <span
                                key={neighborhood}
                                className="rounded-full bg-primary text-secondary px-3 py-1 text-xs"
                              >
                                {neighborhood}
                              </span>
                            ))}
                          {area.neighborhoods.length > 3 && (
                            <span className="rounded-full bg-secondary px-3 py-1 text-xs">
                              +{area.neighborhoods.length - 3} more
                            </span>
                          )}
                        </div>
                        <div className="mt-4 flex items-center text-sm font-medium text-black">
                          View Details
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </HoverScale>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </section>

        {/* Why Local Matters */}
        <section className="bg-muted py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <FadeIn>
                  <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                    Why Local Experience Matters
                  </h2>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <p className="mb-6 text-muted-foreground">
                    Toronto&apos;s unique climate demands specialized roofing
                    knowledge. From heavy snowfall to summer storms, your roof
                    needs to withstand it all. Our team understands the specific
                    challenges GTA homeowners face.
                  </p>
                </FadeIn>
                <FadeInStagger className="space-y-4">
                  {[
                    "Deep understanding of Ontario building codes",
                    "Experience with GTA weather patterns",
                    "Relationships with local suppliers for quality materials",
                    "Quick response times across all service areas",
                    "Knowledge of neighborhood architectural styles",
                  ].map((point) => (
                    <FadeInStaggerItem
                      key={point}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                      <span>{point}</span>
                    </FadeInStaggerItem>
                  ))}
                </FadeInStagger>
                <FadeIn delay={0.4}>
                  <div className="mt-8">
                    <Button asChild>
                      <Link href="/quote">
                        Get a Local Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </FadeIn>
              </div>
              <FadeIn direction="right" delay={0.2}>
                <div className="aspect-square overflow-hidden rounded-2xl bg-muted lg:aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&h=600&fit=crop"
                    alt="Toronto skyline"
                    className="h-full w-full object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* All Cities List */}
        <section className="bg-background py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <FadeIn>
              <h2 className="mb-8 text-center text-3xl font-bold tracking-tight md:text-4xl">
                All Service Locations
              </h2>
            </FadeIn>
            <FadeInStagger className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                ...serviceAreas.map((a) => a.name),
                "Etobicoke",
                "Scarborough",
                "Aurora",
                "Newmarket",
                "Thornhill",
                "Oakville",
                "Burlington",
                "Brampton",
              ].map((city) => (
                <FadeInStaggerItem key={city}>
                  <div className="flex items-center gap-2 rounded-lg border bg-card p-3">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{city}</span>
                  </div>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
            <FadeIn delay={0.4}>
              <p className="mt-8 text-center text-sm text-muted-foreground">
                Don&apos;t see your area?{" "}
                <Link
                  href="/quote"
                  className="font-medium text-primary hover:underline"
                >
                  Contact us
                </Link>{" "}
                — we likely serve your neighborhood too!
              </p>
            </FadeIn>
          </div>
        </section>

        {/* <CTASection /> */}
      </main>
      <Footer />
    </>
  );
}
