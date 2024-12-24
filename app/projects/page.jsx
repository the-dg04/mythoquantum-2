import CurrentRouteCard from "../components/CurrentRouteCard";
import Empower from "../components/Empower";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CompletedProjects from "./CompletedProjects";
import Hero from "./Hero";
import OngoingProjects from "./OngoingProjects";
import UpcomingProjects from "./UpcomingProjects";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center font-serif w-full text-black bg-blue-50 pt-10">
        <CurrentRouteCard route="Projects" />
        <Hero />
        <CompletedProjects />
        <OngoingProjects />
        <UpcomingProjects />
        <Empower />
        <Footer />
      </div>
    </>
  );
}
