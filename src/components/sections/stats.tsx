import { stats } from "@/lib/data";
import { FadeInStagger, FadeInStaggerItem } from "@/components/motion-wrapper";

export function StatsSection() {
  return (
    <section className="border-y bg-background py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeInStagger className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <FadeInStaggerItem key={stat.label} className="text-center">
              <p className="text-3xl font-bold md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
