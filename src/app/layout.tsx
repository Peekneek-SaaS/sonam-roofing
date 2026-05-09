import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "High Skillz Roofing | Trusted Roofing Contractor in Toronto & GTA",
  description:
    "Professional roofing services in Toronto, Vaughan, North York & GTA. Expert roof repairs, replacement, skylights, and flat roofing. Licensed & Insured. Get your free quote today!",
  keywords: [
    "roofing contractor",
    "Toronto roofing",
    "roof repair",
    "roof replacement",
    "GTA roofers",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
