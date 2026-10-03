import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MetricsStrip } from "@/components/MetricsStrip";
import { SelectedWork } from "@/components/SelectedWork";
import { AlsoBuilt } from "@/components/AlsoBuilt";
import { LeadershipDelivery } from "@/components/LeadershipDelivery";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <MetricsStrip />
        <SelectedWork />
        <AlsoBuilt />
        <LeadershipDelivery />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
