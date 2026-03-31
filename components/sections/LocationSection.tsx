import Image from 'next/image'
import Link from 'next/link'
import { MAPS_URL, STUDIO_ADDRESS, STUDIO_HOURS } from '@/constants'

export function LocationSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-px bg-outline-variant/10">
          {/* Info */}
          <div className="bg-surface-container-low p-12">
            <h2 className="font-headline text-4xl font-black uppercase tracking-tighter mb-8">
              Onde Estamos
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-secondary shrink-0">
                  location_on
                </span>
                <div>
                  <p className="font-bold text-on-surface">
                    {STUDIO_ADDRESS.complement}
                  </p>
                  <p className="text-on-surface-variant">
                    {STUDIO_ADDRESS.street}
                    <br />
                    {STUDIO_ADDRESS.city} - {STUDIO_ADDRESS.state},{' '}
                    {STUDIO_ADDRESS.cep}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="material-symbols-outlined text-secondary shrink-0">
                  schedule
                </span>
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
          <div className="min-h-[400px] grayscale contrast-125 brightness-75 bg-surface-variant relative overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwPap-Nvwt2JEzKIfPa80aTuG6c0pLcQnGGFuvd1V8qt0lNa-oyUc-Xs_yNjHtdH2_wsGh7bzecvB0LXXmLlYmUTHG0sg9UcZgrSsZMTPjJMEl0LC_CLcCs-Kvzafg8B-4usoSwvFHSYn6c1FS9mtdmdhsodDCZ-OCxF2cQXlnrvVjCvXgdarjwwMojwKxeB0rejIPFvmMLS6XdL2_ibzaZGuinMhwPkOdMCaETqqBb3HWtIp2_Zmel22Icb1FrFdCzaGBW6CJM7U"
              alt="Mapa de Jundiaí"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-secondary/10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}