import HeroSection from "./MainSections/HeroSection";
import TripForm from "./MainSections/TripForm";
import Benefits from "./MainSections/Benefits";
import HowItWorks from "./MainSections/HowItWorks";

const Main = () => {
  return (
    <main>
      <HeroSection />
      <TripForm />
      <Benefits />
      <HowItWorks />
    </main>
  );
};

export default Main;