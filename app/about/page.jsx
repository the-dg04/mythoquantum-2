import CurrentRouteCard from "../components/CurrentRouteCard";
import Navbar from "../components/Navbar";
import Achievements from "./Achievements";
import Hero from "./Hero";
import WhoWeAre from "./WhoWeAre";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center font-serif w-full text-black bg-blue-50 pt-10">
        <CurrentRouteCard route="About" />
        <Hero />
        <Achievements />
        <WhoWeAre />
      </div>
    </>
  );
}
