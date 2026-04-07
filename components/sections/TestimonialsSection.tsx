import { TESTIMONIALS } from "@/constants";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export function TestimonialsSection() {
  return (
    <section
      className="py-24 bg-surface"
      id="depoimentos"
      aria-labelledby="depoimentos-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-headline uppercase tracking-[0.3em] text-sm font-bold">
            Clientes
          </span>
          <h2
            id="depoimentos-heading"
            className="font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter mt-2"
          >
            O Que Dizem
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
