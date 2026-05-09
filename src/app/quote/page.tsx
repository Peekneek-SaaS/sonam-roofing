import type { Metadata } from "next";
import { Phone, Mail, Clock, Shield, CheckCircle } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { QuoteForm } from "@/components/quote-form";
import {
  FadeIn,
  FadeInStagger,
  FadeInStaggerItem,
} from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Get a Free Quote | High Skillz Roofing",
  description:
    "Request your free roofing estimate today. No obligation, just honest advice from trusted roofing experts serving Toronto & GTA.",
};

const benefits = [
  "Free, no-obligation estimates",
  "Same-day response guaranteed",
  "Detailed written quotes",
  "Flexible scheduling options",
  "Competitive pricing",
];

export default function QuotePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-secondary py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn>
                <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                  Get Your Free Roofing Quote
                </h1>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours with a detailed estimate. No obligation, no pressure.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
                  <QuoteForm />
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Contact Info */}
                <FadeIn direction="right">
                  <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
                    <h3 className="mb-4 text-lg font-semibold">
                      Contact Us Directly
                    </h3>
                    <div className="space-y-4">
                      <a
                        href="tel:+14165551234"
                        className="flex items-center gap-3 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                      >
                        <Phone className="h-5 w-5" />
                        (416) 555-1234
                      </a>
                      <a
                        href="mailto:info@highskillzroofing.ca"
                        className="flex items-center gap-3 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                      >
                        <Mail className="h-5 w-5" />
                        info@highskillzroofing.ca
                      </a>
                      <div className="flex items-center gap-3 text-primary-foreground/80">
                        <Clock className="h-5 w-5" />
                        Mon-Fri: 8AM - 6PM
                      </div>
                    </div>
                  </div>
                </FadeIn>

                {/* Benefits */}
                <FadeIn direction="right" delay={0.1}>
                  <div className="rounded-2xl border bg-card p-6">
                    <h3 className="mb-4 text-lg font-semibold">
                      Why Request a Quote?
                    </h3>
                    <ul className="space-y-3">
                      {benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-center gap-3 text-sm"
                        >
                          <CheckCircle className="h-5 w-5 text-accent" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>

                {/* Trust Badge */}
                <FadeIn direction="right" delay={0.2}>
                  <div className="rounded-2xl bg-accent/10 p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent">
                        <Shield className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          Fully Licensed & Insured
                        </h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Your property is protected. We carry full liability
                          insurance and workers&apos; compensation coverage.
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                {/* Emergency Notice */}
                <FadeIn direction="right" delay={0.3}>
                  <div className="rounded-2xl border border-accent bg-accent/5 p-6">
                    <h4 className="mb-2 font-semibold text-accent">
                      Need Emergency Service?
                    </h4>
                    <p className="mb-4 text-sm text-muted-foreground">
                      For urgent roof leaks or storm damage, call us directly
                      for immediate assistance.
                    </p>
                    <a
                      href="tel:+14165551234"
                      className="inline-flex items-center gap-2 font-medium text-accent hover:underline"
                    >
                      <Phone className="h-4 w-4" />
                      Call Now: (416) 555-1234
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-t bg-muted py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <FadeIn>
              <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">
                Frequently Asked Questions
              </h2>
            </FadeIn>
            <FadeInStagger className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              {[
                {
                  q: "How long does it take to get a quote?",
                  a: "We typically respond within 24 hours. For urgent requests, call us directly for same-day estimates.",
                },
                {
                  q: "Is the quote really free?",
                  a: "Yes! Our estimates are completely free with no obligation. We believe in transparent pricing upfront.",
                },
                {
                  q: "What information do you need?",
                  a: "Basic contact info, property address, and service needed helps us provide accurate estimates.",
                },
                {
                  q: "How accurate are your estimates?",
                  a: "Our written quotes are detailed and accurate. Final pricing is confirmed after on-site inspection.",
                },
              ].map((faq) => (
                <FadeInStaggerItem key={faq.q}>
                  <div className="rounded-xl bg-background p-6">
                    <h3 className="mb-2 font-semibold">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
