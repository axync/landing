import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { HowItWorks } from "./components/HowItWorks";
import { DealPreview } from "./components/DealPreview";
import { Features } from "./components/Features";
import { WhyAxync } from "./components/WhyAxync";
import { Supported } from "./components/Supported";
import { Roadmap } from "./components/Roadmap";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function SectionDivider() {
  return <div className="section-glow mx-auto max-w-xl" />;
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionDivider />
        <Problem />
        <SectionDivider />
        <HowItWorks />
        <SectionDivider />
        <DealPreview />
        <SectionDivider />
        <Features />
        <SectionDivider />
        <WhyAxync />
        <SectionDivider />
        <Supported />
        <SectionDivider />
        <Roadmap />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
