import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import {
  FadeIn,
  FadeInStagger,
  FadeInStaggerItem,
  HoverScale,
} from "@/components/motion-wrapper";

export function ProjectsSection() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Portfolio
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Recent Projects Completed
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              See the difference quality makes. Browse our recent roofing
              projects across the Greater Toronto Area.
            </p>
          </FadeIn>
        </div>

        <FadeInStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <FadeInStaggerItem key={project.id}>
              <HoverScale scale={1.03}>
                <div className="group overflow-hidden rounded-xl bg-background shadow-sm">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="rounded-full bg-primary text-secondary px-3 py-1 text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="mb-1 font-semibold">{project.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-3 w-3" />
                      {project.location}
                    </div>
                  </div>
                </div>
              </HoverScale>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">
                View More Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
