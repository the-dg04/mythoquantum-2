import CurrentRouteCard from "../components/CurrentRouteCard";
import Empower from "../components/Empower";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Cards from "./Cards";
import Hero from "./Hero";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center font-serif w-full text-black bg-blue-50 pt-10">
        <CurrentRouteCard route="Insights" />
        <Hero />
        <Cards />
        <Empower />
        <Footer />
      </div>
    </>
  );
}
