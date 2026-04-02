import Link from "next/link";
import { MAPS_URL, STUDIO_ADDRESS, STUDIO_HOURS } from "@/constants";
import { Clock, MapPinned } from "lucide-react";

export function LocationSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-px bg-outline-variant/10">
          {/* Info */}
          <div className="bg-surface-container-low  p-12">
            <h2 className="font-headline text-4xl font-black uppercase tracking-tighter mb-8">
              Onde Estamos
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPinned
                  className="text-secondary shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-bold text-on-surface">
                    {STUDIO_ADDRESS.complement}
                  </p>
                  <p className="text-on-surface-variant">
                    {STUDIO_ADDRESS.street}
                    <br />
                    {STUDIO_ADDRESS.city} - {STUDIO_ADDRESS.state},{" "}
                    {STUDIO_ADDRESS.cep}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-secondary shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-bold text-on-surface">
                    Horário de Atendimento
                  </p>
                  <p className="text-on-surface-variant">{STUDIO_HOURS}</p>
                </div>
              </div>

              <Link
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-secondary text-secondary px-8 py-4 font-headline uppercase font-bold text-sm hover:bg-secondary hover:text-on-secondary transition-all"
              >
                Como Chegar
              </Link>
            </div>
          </div>

          {/* Map */}
          <div className="min-h-100 contrast-125 brightness-75 bg-surface-variant relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d916.8592970852643!2d-46.8869884!3d-23.1907328!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf26938a08c8c9%3A0xb4d85dec7fadb797!2sThe%20Garden%20Custom!5e0!3m2!1spt-BR!2sbr!4v1775154788917!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
