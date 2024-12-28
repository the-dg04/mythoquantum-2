import CurrentRouteCard from "../components/CurrentRouteCard";
import Empower from "../components/Empower";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CompletedProjects from "./CompletedProjects";
import OngoingProjects from "./OngoingProjects";
import UpcomingProjects from "./UpcomingProjects";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center font-serif w-full text-black bg-[#6A9AB0] pt-10">
        <CompletedProjects />
        <OngoingProjects />
        <UpcomingProjects />
        <Footer />
      </div>
    </>
  );
}
