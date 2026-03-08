import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Chains } from "./components/Chains";
import { Roadmap } from "./components/Roadmap";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Chains />
        <Roadmap />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
