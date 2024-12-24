import Hero from "./landingPage/Hero";
import WhoWeAre from "./landingPage/WhoWeAre";
import Services from "./landingPage/Services";
import OurVision from "./landingPage/OurVision";
import HarnessPower from "./landingPage/HarnessPower";
import Reviews from "./landingPage/Reviews";
import Empower from "./components/Empower";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center font-serif w-full">
        <Hero />
        <WhoWeAre />
        <Services />
        <OurVision />
        <HarnessPower />
        <Reviews />
        <Empower />
        <Footer />
      </div>
    </>
  );
}
