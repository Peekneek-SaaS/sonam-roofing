"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { serviceAreas } from "@/lib/data";
import Icon from "../../public/icons/icon";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          {/* <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
            <span className="text-lg font-bold text-primary-foreground">
              SR
            </span>
          </div> */}
          <Icon />
          <span className="text-lg font-bold tracking-tight">
            Sonam Roofing
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Services
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Service Areas
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link href="/service-areas" className="cursor-pointer">
                  All Areas
                </Link>
              </DropdownMenuItem>
              {serviceAreas.map((area: any) => (
                <DropdownMenuItem key={area.slug} asChild>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="cursor-pointer"
                  >
                    {area.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/about"
            className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+14165551234"
            className="flex items-center gap-2 text-sm font-medium"
          >
            <Phone className="h-4 w-4" />
            (416) 555-1234
          </a>
          <Button asChild>
            <Link href="/quote">Get Free Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t bg-background lg:hidden">
          <nav className="container mx-auto flex flex-col px-4 py-4">
            <Link
              href="/"
              className="py-3 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="py-3 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/service-areas"
              className="py-3 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Service Areas
            </Link>
            <Link
              href="/about"
              className="py-3 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="mt-4 flex flex-col gap-3">
              <Button variant="ghost" asChild>
                <a
                  href="tel:+14165551234"
                  className="flex items-center gap-2 text-sm font-medium hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  (416) 555-1234
                </a>
              </Button>
              <Button asChild>
                <Link href="/quote" onClick={() => setMobileMenuOpen(false)}>
                  Get Free Quote
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
