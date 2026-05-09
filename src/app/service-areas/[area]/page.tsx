import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, CheckCircle, Phone, Star } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { serviceAreas, services } from "@/lib/data";
import {
  FadeIn,
  FadeInStagger,
  FadeInStaggerItem,
} from "@/components/motion-wrapper";
import { CTASection } from "@/components/sections/cta";

interface PageProps {
  params: Promise<{ area: string }>;
}

export async function generateStaticParams() {
  return serviceAreas.map((area) => ({
    area: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { area } = await params;
  const areaData = serviceAreas.find((a) => a.slug === area);

  if (!areaData) {
    return {
      title: "Area Not Found | Sonam Roofing",
    };
  }

  return {
    title: `Roofing Services in ${areaData.name} | Sonam Roofing`,
    description: `Professional roofing contractor serving ${areaData.name}. Roof repair, replacement, flat roofing, and emergency services. Licensed & Insured. Free quotes!`,
  };
}

const areaImages: Record<string, string> = {
  toronto:
    "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=1200&h=600&fit=crop",
  vaughan:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
  "north-york":
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop",
  "richmond-hill":
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=600&fit=crop",
  markham:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=600&fit=crop",
  mississauga:
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=600&fit=crop",
};

export default async function AreaPage({ params }: PageProps) {
  const { area } = await params;
  const areaData = serviceAreas.find((a) => a.slug === area);

  if (!areaData) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary py-20 text-primary-foreground lg:py-28">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${areaImages[areaData.slug]})` }}
          />
          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn>
                <div className="mb-4 flex items-center justify-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
                    Service Area
                  </span>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                  Roofing Services in {areaData.name}
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mb-8 text-lg text-primary-foreground/80">
                  {areaData.longDescription}
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/quote">
                      Get a Free Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="link"
                    asChild
                    className="text-white"
                  >
                    <a href="tel:+14165551234">
                      <Phone className="mr-2 h-4 w-4" />
                      (416) 555-1234
                    </a>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="bg-background py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <FadeIn>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Neighborhoods we serve:
                </span>
                {areaData.neighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="rounded-full bg-background text-primary px-4 py-2 text-sm font-semiold"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Services Available */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <FadeIn>
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                  Our Services in {areaData.name}
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  We offer comprehensive roofing solutions to homeowners and
                  businesses throughout {areaData.name} and surrounding areas.
                </p>
              </FadeIn>
            </div>

            <FadeInStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <FadeInStaggerItem key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="group block rounded-xl border bg-card p-6 transition-shadow hover:shadow-md"
                  >
                    <h3 className="mb-2 text-lg font-semibold group-hover:text-primary">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {service.shortDescription}
                    </p>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Link>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-muted py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <FadeIn>
                  <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                    Why {areaData.name} Homeowners Choose Us
                  </h2>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <p className="mb-8 text-muted-foreground">
                    We&apos;ve built a strong reputation in {areaData.name}{" "}
                    through quality work, transparent pricing, and exceptional
                    customer service. Our local expertise means we understand
                    your neighborhood&apos;s unique roofing needs.
                  </p>
                </FadeIn>
                <FadeInStagger className="space-y-4">
                  {[
                    `Fast response times across ${areaData.name}`,
                    "Knowledge of local building codes and permits",
                    "Relationships with local material suppliers",
                    "Understanding of neighborhood architectural styles",
                    "Trusted by your neighbors with 180+ 5-star reviews",
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
              </div>
              <FadeIn direction="right" delay={0.2}>
                <div className="space-y-6">
                  {/* Testimonial Card */}
                  <div className="rounded-xl border bg-background p-6 shadow-sm">
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-primary stroke-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="mb-4 text-foreground">
                      &quot;Sonam Roofing did an amazing job on our roof in{" "}
                      {areaData.name}. Professional, on time, and the quality is
                      outstanding. Highly recommend!&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                        <span className="text-sm font-semibold">JD</span>
                      </div>
                      <div>
                        <p className="font-medium">John D.</p>
                        <p className="text-sm text-muted-foreground">
                          {areaData.name} Homeowner
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-secondary p-6 text-center">
                      <p className="text-3xl font-bold text-foreground">500+</p>
                      <p className="text-sm text-accent-foreground/80">
                        Roofs in {areaData.name}
                      </p>
                    </div>
                    <div className="rounded-xl bg-primary p-6 text-center text-primary-foreground">
                      <p className="text-3xl font-bold">10+</p>
                      <p className="text-sm text-primary-foreground/80">
                        Years Serving Area
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Other Service Areas */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <FadeIn>
              <h2 className="mb-8 text-center text-3xl font-bold tracking-tight md:text-4xl">
                Other Service Areas
              </h2>
            </FadeIn>
            <FadeInStagger className="flex flex-wrap justify-center gap-4">
              {serviceAreas
                .filter((a) => a.slug !== areaData.slug)
                .map((otherArea) => (
                  <FadeInStaggerItem key={otherArea.slug}>
                    <Link
                      href={`/service-areas/${otherArea.slug}`}
                      className="flex items-center gap-2 rounded-full border bg-card px-6 py-3 font-medium transition-colors hover:bg-secondary"
                    >
                      <MapPin className="h-4 w-4 text-primary" />
                      {otherArea.name}
                    </Link>
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
