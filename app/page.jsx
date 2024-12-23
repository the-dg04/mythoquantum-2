import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import Services from "./components/Services";
import OurVision from "./components/OurVision";
import HarnessPower from "./components/HarnessPower";
import Reviews from "./components/Reviews";
import Empower from "./components/Empower";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
      <div className="flex flex-col items-center font-serif">
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
