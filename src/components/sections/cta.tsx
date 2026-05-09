import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion-wrapper";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <FadeIn>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-accent-foreground md:text-4xl">
            Ready to Get Started?
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mx-auto mb-8 max-w-2xl text-accent-foreground/80">
            Schedule your free consultation today and receive a detailed
            estimate. No obligation, no pressure — just honest advice from
            roofing experts.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/quote">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href="tel:+14165551234">
                <Phone className="mr-2 h-4 w-4" />
                Call (416) 555-1234
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
