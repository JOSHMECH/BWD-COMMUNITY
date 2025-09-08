import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ChallengesSection from "@/components/ChallengesSection";
import LeaderboardSection from "@/components/LeaderboardSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ChallengesSection />
      <LeaderboardSection />
      <Footer />
    </div>
  );
};

export default Index;
