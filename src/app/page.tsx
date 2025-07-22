import Hero from "./_sections/_hero/Hero";
import Features from "./_sections/_features/Features";
import About from "./_sections/_about/About";
import Strategy from "./_sections/Strategy";
import Overview from "./_sections/_overview/Overview";
import Faq from "./_sections/Faq";
import CallToAction from "./_sections/CallToAction";
import Migration from "./_sections/_migration/Migration";

export default function Home() {
  return (
    <div>
      <Hero />
      <Migration />
      <Features />
      <About />
      <Strategy />
      <Overview />
      <Faq />
      <CallToAction />
    </div>
  );
}
