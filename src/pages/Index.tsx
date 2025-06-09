import HeroSection from "@/components/HeroSection";
import TargetAudience from "@/components/TargetAudience";
import Benefits from "@/components/Benefits";
import PracticeValue from "@/components/PracticeValue";
import SpeakerInfo from "@/components/SpeakerInfo";
import Bonuses from "@/components/Bonuses";
import RegistrationForm from "@/components/RegistrationForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TargetAudience />
      <Benefits />
      <PracticeValue />
      <SpeakerInfo />
      <Bonuses />
      <RegistrationForm />
    </div>
  );
};

export default Index;
