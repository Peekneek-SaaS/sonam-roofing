import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Home,
  Wrench,
  Layers,
  Sun,
  Droplets,
  AlertTriangle,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import {
  FadeIn,
  FadeInStagger,
  FadeInStaggerItem,
} from "@/components/motion-wrapper";
import { CTASection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Our Roofing Services | High Skillz Roofing",
  description:
    "Complete roofing services including roof replacement, repairs, flat roofing, skylights, gutters, and emergency services. Serving Toronto & GTA.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Wrench,
  Layers,
  Sun,
  Droplets,
  AlertTriangle,
};

const serviceImages: Record<string, string> = {
  "roof-replacement":
    "https://images.unsplash.com/photo-1632889328498-af5cc46be979?w=800&h=500&fit=crop",
  "roof-repair":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop",
  "flat-roofing":
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
  skylights:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=500&fit=crop",
  gutters:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop",
  "emergency-repair":
    "https://images.unsplash.com/photo-1513880989635-6eb491ce7f5b?w=800&h=500&fit=crop",
};

export default function ServicesPage() {
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
                  Our Services
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                  Complete Roofing Solutions for Every Need
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-lg text-black">
                  From emergency repairs to complete roof replacements, we offer
                  comprehensive roofing services backed by quality materials and
                  expert craftsmanship.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="bg-background py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => {
                const Icon = iconMap[service.icon];
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                      isEven ? "" : "lg:[&>*:first-child]:order-2"
                    }`}
                  >
                    <FadeIn direction={isEven ? "left" : "right"}>
                      <div className="aspect-16/10 overflow-hidden rounded-2xl bg-muted">
                        <img
                          src={serviceImages[service.id]}
                          alt={service.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </FadeIn>
                    <div>
                      <FadeIn direction={isEven ? "right" : "left"}>
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                          {Icon && <Icon className="size-6  text-white" />}
                        </div>
                      </FadeIn>
                      <FadeIn direction={isEven ? "right" : "left"} delay={0.1}>
                        <h2 className="mb-4 text-3xl font-bold tracking-tight">
                          {service.title}
                        </h2>
                      </FadeIn>
                      <FadeIn direction={isEven ? "right" : "left"} delay={0.2}>
                        <p className="mb-6 text-muted-foreground">
                          {service.description}
                        </p>
                      </FadeIn>
                      <FadeInStagger className="mb-8 space-y-3">
                        {service.features.map((feature) => (
                          <FadeInStaggerItem
                            key={feature}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle className="size-4 text-primary" />

                            <span>{feature}</span>
                          </FadeInStaggerItem>
                        ))}
                      </FadeInStagger>
                      <FadeIn delay={0.4}>
                        <Button asChild>
                          <Link href="/quote">
                            Get a Quote
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </FadeIn>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-muted py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <FadeIn>
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                  Why Choose High Skillz Roofing?
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-muted-foreground">
                  We&apos;re committed to delivering exceptional roofing
                  services with integrity and professionalism.
                </p>
              </FadeIn>
            </div>

            <FadeInStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Trusted & Reviewed",
                  description:
                    "Over 180 verified 5-star Google reviews from homeowners across the GTA.",
                },
                {
                  title: "Certified Materials",
                  description:
                    "We use only certified, top-grade materials that withstand Toronto's weather.",
                },
                {
                  title: "Licensed & Insured",
                  description:
                    "Every project is fully insured and backed by our professional certifications.",
                },
                {
                  title: "10+ Years Experience",
                  description:
                    "Our team has the skill and know-how from over a decade of roofing work.",
                },
                {
                  title: "Guaranteed Work",
                  description:
                    "We stand behind our work with solid warranties and commitment to quality.",
                },
                {
                  title: "Custom Solutions",
                  description:
                    "Every roof is different. We tailor services to your specific needs and budget.",
                },
              ].map((item) => (
                <FadeInStaggerItem key={item.title}>
                  <div className="rounded-xl border bg-background p-6">
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
