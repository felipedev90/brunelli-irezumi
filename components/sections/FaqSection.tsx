import { FAQ_ITEMS } from "@/constants";
import { FaqItem } from "@/components/ui/FaqItem";

export function FaqSection() {
  return (
    <section className="py-12 md:py-24 bg-surface-container-low" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-headline text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12 text-center">
          Dúvidas Frequentes
        </h2>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <FaqItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
