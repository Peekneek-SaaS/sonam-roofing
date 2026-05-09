import Link from "next/link";
import { Phone, Mail, MapPin, Airplay } from "lucide-react";
import { services, serviceAreas } from "@/lib/data";
import { HugeiconsIcon } from "@hugeicons/react";
import { Facebook02Icon, InstagramIcon, Linkedin01Icon } from "@hugeicons/core-free-icons";

export function Footer() {
  return (
    <footer className="border-t bg-black text-primary-foreground">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
                <span className="text-lg font-bold text-secondary">SR</span>
              </div>
              <span className="text-lg font-bold">Sonam Roofing</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Your trusted roofing contractor in Toronto and the GTA. Licensed,
              insured, and committed to quality craftsmanship.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <HugeiconsIcon icon={Facebook02Icon} />
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <HugeiconsIcon icon={InstagramIcon} />
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
                <HugeiconsIcon icon={Linkedin01Icon} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Service Areas
            </h3>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+14165551234"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  (416) 555-1234
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@highskillzroofing.ca"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  info@highskillzroofing.ca
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-primary-foreground/80">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>
                    123 Roofing Way
                    <br />
                    Toronto, ON M5V 1A1
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-primary-foreground/60 md:flex-row lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} Sonam Roofing. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
