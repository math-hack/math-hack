import { CreatorSection } from "./components/creator-section";
import { CTA } from "./components/cta";
import { DataCardsSection } from "./components/data-card-section";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { News } from "./components/news";
import { Programs } from "./components/programs";
import { Stats } from "./components/stats";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      {/* <Stats /> */}
      <Programs />
      <DataCardsSection></DataCardsSection>
      <CreatorSection></CreatorSection>
      {/* <News /> */}
      <CTA />
      <Footer />
    </main>
  );
}
