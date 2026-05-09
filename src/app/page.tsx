import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { TrustSection } from "@/components/sections/trust";
import { ServicesPreviewSection } from "@/components/sections/services-preview";
import { ProjectsSection } from "@/components/sections/projects";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ServiceAreasPreviewSection } from "@/components/sections/service-areas-preview";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <TrustSection />
        <ServicesPreviewSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ServiceAreasPreviewSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
