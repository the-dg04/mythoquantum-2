import CurrentRouteCard from "../components/CurrentRouteCard";
import Navbar from "../components/Navbar";
import Achievements from "./Achievements";
import Hero from "./Hero";
import WhoWeAre from "./WhoWeAre";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center w-full bg-[#6A9AB0]">
      <div className="h-16"></div>
        {/* <CurrentRouteCard route="About" /> */}
        <Hero />
        <Achievements />
        <WhoWeAre />
      </div>
    </>
  );
}
