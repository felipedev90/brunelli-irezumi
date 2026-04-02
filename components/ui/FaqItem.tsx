import Link from "next/link";
import type { FaqItem as FaqItemType } from "@/types";
import { ChevronDown } from "lucide-react";

interface FaqItemProps {
  item: FaqItemType;
}

export function FaqItem({ item }: FaqItemProps) {
  return (
    <details className="group bg-surface-container border-l-4 border-transparent open:border-secondary transition-all">
      <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
        <span className="font-headline font-bold uppercase tracking-wide">
          {item.question}
        </span>
        <ChevronDown
          className="group-open:rotate-180 transition-transform shrink-0 ml-4"
          aria-hidden="true"
        />
      </summary>

      <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">
        {item.answer}

        {item.cta && (
          <div className="mt-4">
            <Link
              href={item.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-bold underline hover:text-secondary/80 transition-colors"
            >
              {item.cta.label}
            </Link>
          </div>
        )}
      </div>
    </details>
  );
}
