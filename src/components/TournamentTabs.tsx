import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PracticalInfo from "./PracticalInfo";
import TournamentSchedule from "./TournamentSchedule";
import RegistrationForm from "./RegistrationForm";
import RegisteredTeams from "./RegisteredTeams";
import MatchSchedule from "./MatchSchedule";
import { Info, Calendar, ClipboardList, Users, Trophy } from "lucide-react";

const TournamentTabs = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-6">
        <Tabs defaultValue="registration" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="registration" className="flex items-center gap-2">
              <ClipboardList className="w-4 h-4" />
              <span className="hidden sm:inline">Inschrijven</span>
            </TabsTrigger>
            <TabsTrigger value="teams" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Teams</span>
            </TabsTrigger>
            <TabsTrigger value="info" className="flex items-center gap-2">
              <Info className="w-4 h-4" />
              <span className="hidden sm:inline">Praktisch</span>
            </TabsTrigger>
            <TabsTrigger value="matches" className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              <span className="hidden sm:inline">Wedstrijden</span>
            </TabsTrigger>
            <TabsTrigger value="schedule" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Programma</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="registration">
            <RegistrationForm />
          </TabsContent>
          
          <TabsContent value="teams">
            <RegisteredTeams />
          </TabsContent>
          
          <TabsContent value="info">
            <PracticalInfo />
          </TabsContent>
          
          <TabsContent value="matches">
            <div className="mb-4 p-3 bg-muted/50 border border-border rounded-lg text-center text-sm text-muted-foreground">
              ⚠️ Dit schema is nog niet definitief en wordt later ingevuld.
            </div>
            <MatchSchedule />
          </TabsContent>
          
          <TabsContent value="schedule">
            <div className="mb-4 p-3 bg-muted/50 border border-border rounded-lg text-center text-sm text-muted-foreground">
              ⚠️ Dit programma is nog niet definitief en kan nog wijzigen.
            </div>
            <TournamentSchedule />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TournamentTabs;
