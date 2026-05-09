import Link from "next/link";
import { ArrowRight, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion-wrapper";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="container mx-auto px-4 py-20 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <FadeIn>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Trusted Roofing Experts
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
                Your Roof Deserves{" "}
                <span className="text-primary">Expert Hands</span> and Premium
                Materials.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mb-8 text-lg text-muted-foreground">
                High Skillz Roofing delivers residential and commercial roofing
                solutions built to last. We combine quality craftsmanship with
                transparent pricing and industry-leading warranties.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/quote">
                    Get Free Inspection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Fully Licensed</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>24/7 Emergency</span>
                </div>
              </div>
            </FadeIn>
          </div>
          <FadeIn direction="right" delay={0.2}>
            <div className="relative">
              <div className="aspect-4/3 overflow-hidden rounded-2xl bg-muted">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                  alt="Professional roofers installing shingles on a residential roof"
                  className="h-full w-full object-cover"
                  height={600}
                  width={800}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-background p-6 shadow-lg">
                <div className="hidden md:flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">10+</p>
                    <p className="text-sm text-muted-foreground">
                      Years Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
