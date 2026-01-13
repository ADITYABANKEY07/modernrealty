import Areas from "../components/Areas";
import Articles from "../components/Articles";
import ContactCard from "../components/ContactCard";
import Feedback from "../components/Feedback";
import Hero from "../components/Hero";
import Parallax from "../components/Parallax";
import Properties from "../components/Properties";
import Services from "../components/Services";
import Listings from "./Listings";

const Home = () => {
  return (
    <div className="relative min-h-screen font-sans flex flex-col items-center bg-dg overflow-hidden">
      <Hero/>
      <Services/>
      <Listings/>
      <Parallax/>
      <Properties/>
      <Feedback/>
      <Areas/>
      <Articles/>
      <ContactCard/>
    </div>
  );
};

export default Home;
