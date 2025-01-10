import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Achievements from "./Achievements";
import Hero from "./Hero";
import Team from "./Team";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center w-full bg-color-200">
      <div className="h-16"></div>
        <Hero />
        <Achievements />
        <Team />
        <Footer />
      </div>
    </>
  );
}
