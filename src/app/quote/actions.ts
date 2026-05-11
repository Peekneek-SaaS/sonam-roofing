"use server";

import * as z from "zod";

import prisma from "@/lib/db";

const quoteSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.email(),
  phone: z.string().min(1),
  address: z.string().min(1),
  city: z.string().min(1),
  postalCode: z.string().min(1),
  service: z.string().min(1),
  propertyType: z.string().min(1),
  timeline: z.string().min(1),
  message: z.string().optional(),
});

type QuoteInput = z.infer<typeof quoteSchema>;

export async function submitQuoteAction(input: QuoteInput) {
  const parsed = quoteSchema.safeParse(input);

  if (!parsed.success) {
    return {
      success: false as const,
      error: "Invalid form data. Please check your entries.",
    };
  }

  try {
    await prisma.quote.create({
      data: {
        ...parsed.data,
        message: parsed.data.message?.trim() ? parsed.data.message : null,
      },
    });

    return { success: true as const };
  } catch (error) {
    console.error("Failed to save quote:", error);
    return {
      success: false as const,
      error: "We could not submit your quote right now. Please try again.",
    };
  }
}
