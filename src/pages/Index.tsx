import TournamentHeader from "@/components/TournamentHeader";
import TournamentDescription from "@/components/TournamentDescription";
import TournamentTabs from "@/components/TournamentTabs";
import TournamentFooter from "@/components/TournamentFooter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
