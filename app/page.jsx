import Hero from "./landingPage/Hero";
import Services from "./landingPage/Services";
import Reviews from "./landingPage/Reviews";
import Empower from "./components/Empower";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slider from "./landingPage/Slider";
import Clients from "./landingPage/Clients";

export default function Home() {
  return (
    <>
      <Navbar />
        <Slider />
      <div className="flex flex-col items-center w-full bg-[#6A9AB0]">
        <Hero />
        <Services />
        <Clients />
        <Reviews />
        <Empower />
        <Footer />
      </div>
    </>
  );
}
