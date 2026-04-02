import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-secondary-container focus:text-on-surface focus:px-4 focus:py-2 focus:font-headline focus:font-bold focus:uppercase focus:outline-none"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}
