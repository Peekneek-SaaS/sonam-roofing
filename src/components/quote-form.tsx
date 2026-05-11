"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { FadeIn } from "@/components/motion-wrapper";
import * as z from "zod";
import { useForm } from "@tanstack/react-form";
import { useEffect, useState } from "react";

import { submitQuoteAction } from "@/app/quote/actions";

const services = [
  "Roof Replacement",
  "Roof Repair",
  "Flat Roofing",
  "Skylight Services",
  "Gutters & Eavestrough",
  "Emergency Repair",
  "Roof Inspection",
  "Other",
];

const propertyTypes = ["Residential", "Commercial", "Industrial"];

const timelines = [
  "As soon as possible",
  "Within 1-2 weeks",
  "Within 1 month",
  "Planning ahead (2+ months)",
];

const formSchema = z.object({
  firstName: z.string().min(1, "First Name is required."),
  lastName: z.string().min(1, "Last Name is required."),
  email: z.email("Invalid email address."),
  phone: z.string().min(1, "Phone is required."),
  address: z.string().min(1, "Street Address is required."),
  city: z.string().min(1, "City is required."),
  postalCode: z.string().min(1, "Postal Code is required."),
  service: z.string().min(1, "Service is required."),
  propertyType: z.string().min(1, "Property Type is required."),
  timeline: z.string().min(1, "Timeline is required."),
  message: z.string().optional(),
});

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formRenderKey, setFormRenderKey] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(10);

  useEffect(() => {
    if (!submitted) {
      return;
    }

    setRemainingSeconds(10);

    const countdown = setInterval(() => {
      setRemainingSeconds((seconds) => (seconds > 0 ? seconds - 1 : 0));
    }, 1000);

    const timer = setTimeout(() => {
      setSubmitted(false);
      setSubmitError(null);
      setFormRenderKey((key) => key + 1);
    }, 10000);

    return () => {
      clearInterval(countdown);
      clearTimeout(timer);
    };
  }, [submitted]);

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      service: "",
      propertyType: "",
      timeline: "",
      message: "",
    },
    validators: {
      onSubmit: ({ value }) => {
        formSchema.parse(value);
      },
    },
    onSubmit: async ({ value }) => {
      setSubmitError(null);
      const result = await submitQuoteAction(value);

      if (!result.success) {
        setSubmitError(result.error);
        return;
      }

      form.reset();
      // Scroll to the top after form submission
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      setSubmitted(true);
    },
  });

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-emerald-500 bg-emerald-100 p-6 text-center">
        <CheckCircle className="size-28 text-emerald-500" />
        <h1 className="text-xl">Thankyou for submitting!</h1>
        <p className="text-base font-medium text-foreground">
          Quote submitted, expect a response soon on email and text message.
        </p>
        <div className="space-y-2">
          <Button onClick={() => setSubmitted(false)}>Get another quote</Button>
          <p className="text-xs">Redirecting in {remainingSeconds} second(s)</p>
        </div>
      </div>
    );
  }

  return (
    <form
      key={formRenderKey}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="space-y-6"
    >
      {submitError ? (
        <div className="rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {submitError}
        </div>
      ) : null}
      {/* Personal Information */}
      <FadeIn>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Personal Information</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <form.Field
              name="firstName"
              children={(field) => (
                <div className="space-y-2">
                  <label htmlFor={field.name} className="text-sm font-medium">
                    First Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="John"
                    required
                  />
                </div>
              )}
            />
            <form.Field
              name="lastName"
              children={(field) => (
                <div className="space-y-2">
                  <label htmlFor={field.name} className="text-sm font-medium">
                    Last Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Doe"
                    required
                  />
                </div>
              )}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <form.Field
              name="email"
              children={(field) => (
                <div className="space-y-2">
                  <label htmlFor={field.name} className="text-sm font-medium">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="email"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              )}
            />
            <form.Field
              name="phone"
              children={(field) => (
                <div className="space-y-2">
                  <label htmlFor={field.name} className="text-sm font-medium">
                    Phone <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="tel"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="(416) 555-1234"
                    required
                  />
                </div>
              )}
            />
          </div>
        </div>
      </FadeIn>

      {/* Property Information */}
      <FadeIn delay={0.1}>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Property Information</h3>
          <form.Field
            name="address"
            children={(field) => (
              <div className="space-y-2">
                <label htmlFor={field.name} className="text-sm font-medium">
                  Street Address <span className="text-destructive">*</span>
                </label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="123 Main Street"
                  required
                />
              </div>
            )}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <form.Field
              name="city"
              children={(field) => (
                <div className="space-y-2">
                  <label htmlFor={field.name} className="text-sm font-medium">
                    City <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Toronto"
                    required
                  />
                </div>
              )}
            />
            <form.Field
              name="postalCode"
              children={(field) => (
                <div className="space-y-2">
                  <label htmlFor={field.name} className="text-sm font-medium">
                    Postal Code <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="M5V 1A1"
                    required
                  />
                </div>
              )}
            />
          </div>
          <form.Field
            name="propertyType"
            children={(field) => (
              <div className="space-y-2">
                <label htmlFor={field.name} className="text-sm font-medium">
                  Property Type <span className="text-destructive">*</span>
                </label>
                <select
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">Select property type</option>
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            )}
          />
        </div>
      </FadeIn>

      {/* Service Details */}
      <FadeIn delay={0.2}>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Service Details</h3>
          <form.Field
            name="service"
            children={(field) => (
              <div className="space-y-2">
                <label htmlFor={field.name} className="text-sm font-medium">
                  Service Needed <span className="text-destructive">*</span>
                </label>
                <select
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            )}
          />
          <form.Field
            name="timeline"
            children={(field) => (
              <div className="space-y-2">
                <label htmlFor={field.name} className="text-sm font-medium">
                  Timeline <span className="text-destructive">*</span>
                </label>
                <select
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">Select timeline</option>
                  {timelines.map((timeline) => (
                    <option key={timeline} value={timeline}>
                      {timeline}
                    </option>
                  ))}
                </select>
              </div>
            )}
          />
          <form.Field
            name="message"
            children={(field) => (
              <div className="space-y-2">
                <label htmlFor={field.name} className="text-sm font-medium">
                  Additional Details
                </label>
                <textarea
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Tell us more about your roofing needs, any specific concerns, or questions you have..."
                  rows={4}
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            )}
          />
        </div>
      </FadeIn>

      {/* Submit Button */}
      <FadeIn delay={0.3}>
        <div className="pt-4">
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={!canSubmit}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            )}
          />
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Your information is kept confidential and secure with us.
          </p>
        </div>
      </FadeIn>
    </form>
  );
}
