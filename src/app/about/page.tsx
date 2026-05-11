import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Shield,
  Users,
  Target,
  Heart,
  CheckCircle,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  FadeIn,
  FadeInStagger,
  FadeInStaggerItem,
} from "@/components/motion-wrapper";
import { CTASection } from "@/components/sections/cta";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | Sonam Roofing",
  description:
    "Learn about Sonam Roofing - Toronto's trusted roofing contractor with 10+ years of experience. Licensed, insured, and committed to quality.",
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We believe in honest communication, transparent pricing, and doing what we say we'll do.",
  },
  {
    icon: Target,
    title: "Quality",
    description:
      "We never cut corners. Every project is completed to the highest standards of craftsmanship.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "Your satisfaction is our priority. We treat every home as if it were our own.",
  },
  {
    icon: Heart,
    title: "Community",
    description:
      "We're proud to serve our neighbors across Toronto and the GTA with reliable roofing services.",
  },
];

const certifications = [
  "GAF Certified Contractor",
  "CertainTeed SELECT ShingleMaster",
  "IKO ROOFPRO",
  "WSIB Covered",
  "Fully Licensed & Insured",
  "BBB Accredited",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <FadeIn>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    About Us
                  </p>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-primary">
                    10+ Years of Trusted Roofing Excellence
                  </h1>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="mb-6 text-lg text-muted-foreground">
                    Sonam Roofing was founded on a simple principle: provide
                    honest, quality roofing services that homeowners can trust.
                    What started as a small team has grown into one of the
                    GTA&apos;s most respected roofing contractors.
                  </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="text-muted-foreground">
                    Our success comes from more than just tools and materials —
                    it comes from a dedicated team with deep knowledge,
                    precision, and pride in every project. We understand that
                    true success isn&apos;t just measured by the final result,
                    but by the satisfaction and trust we build with each client.
                  </p>
                </FadeIn>
              </div>
              <FadeIn direction="right" delay={0.2}>
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                    <img
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop"
                      alt="Sonam Roofing team working on a project"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* <div className="absolute -bottom-6 -right-6 rounded-xl bg-accent p-6 shadow-lg">
                    <div className="flex items-center gap-4">
                      <Award className="h-8 w-8 text-accent-foreground" />
                      <div>
                        <p className="text-sm font-semibold text-accent-foreground">
                          10+
                        </p>
                        <p className="text-xs text-accent-foreground/80">
                          Years of Experience
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y bg-background py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <FadeInStagger className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <FadeInStaggerItem key={stat.label} className="text-center">
                  <p className="text-3xl text-primary font-bold md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-background py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <FadeIn>
                <h2 className="mb-6 text-center text-3xl font-bold tracking-tight md:text-4xl">
                  Our Story
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="prose text-center prose-lg mx-auto text-muted-foreground">
                  <p>
                    Sonam Roofing began over a decade ago when our founder
                    recognized a gap in the Toronto roofing market — homeowners
                    needed a contractor they could actually trust. Too many were
                    getting poor quality work, hidden fees, and unreliable
                    service.
                  </p>
                  <p>
                    We set out to change that. From day one, our approach has
                    been different: transparent pricing, quality materials,
                    skilled craftsmanship, and genuine care for every customer.
                    We treat your home like it&apos;s our own because we believe
                    that&apos;s how every roofing company should operate.
                  </p>
                  <p>
                    Today, we&apos;ve completed over 11,000 roof repairs and
                    7,000 new roof installations across the Greater Toronto
                    Area. But what we&apos;re most proud of isn&apos;t the
                    numbers — it&apos;s the relationships we&apos;ve built and
                    the trust we&apos;ve earned from homeowners throughout our
                    community.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-muted py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <FadeIn>
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                  Our Values
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  These core values guide everything we do, from how we interact
                  with customers to how we complete every roofing project.
                </p>
              </FadeIn>
            </div>

            <FadeInStagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <FadeInStaggerItem key={value.title}>
                  <div className="rounded-xl bg-background p-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-primary py-20 text-primary-foreground lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <FadeIn>
                  <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                    Certified Excellence
                  </h2>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <p className="mb-8 text-primary-foreground/80">
                    We maintain the highest industry standards through
                    continuous training and certification. Our credentials
                    ensure you&apos;re getting the best quality work backed by
                    manufacturer warranties.
                  </p>
                </FadeIn>
                <FadeInStagger className="space-y-3">
                  {certifications.map((cert) => (
                    <FadeInStaggerItem
                      key={cert}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span>{cert}</span>
                    </FadeInStaggerItem>
                  ))}
                </FadeInStagger>
                <FadeIn delay={0.4}>
                  <div className="mt-8">
                    <Button variant="secondary" asChild>
                      <Link href="/quote">
                        Work With Us
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </FadeIn>
              </div>
              <FadeIn direction="right" delay={0.2}>
                <div className="aspect-square overflow-hidden rounded-2xl bg-primary-foreground/10 lg:aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                    alt="Professional roofing work in progress"
                    className="h-full w-full object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-background py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <FadeIn>
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                  Meet Our Team
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Our experienced team brings decades of combined roofing
                  expertise to every project.
                </p>
              </FadeIn>
            </div>

            <FadeInStagger className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Sonam Paleden",
                  role: "Founder & Lead Estimator",
                  image:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
                },
                {
                  name: "Neeraj Bhardwaj",
                  role: "Operations Manager",
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
                },
                {
                  name: "Sarah John",
                  role: "Customer Relations",
                  image:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
                },
              ].map((member) => (
                <FadeInStaggerItem key={member.name}>
                  <div className="text-center">
                    <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full bg-muted">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
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
