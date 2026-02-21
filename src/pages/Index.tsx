import TournamentHeader from "@/components/TournamentHeader";
import TournamentDescription from "@/components/TournamentDescription";
import TournamentTabs from "@/components/TournamentTabs";
import TournamentFooter from "@/components/TournamentFooter";
import BouncingBall from "@/components/BouncingBall";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <BouncingBall />
      <TournamentHeader />
      <main className="flex-1">
        <TournamentDescription />
        <TournamentTabs />
      </main>
      <TournamentFooter />
    </div>
  );
};

export default Index;
