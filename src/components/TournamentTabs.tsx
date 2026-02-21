import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PracticalInfo from "./PracticalInfo";
import RegistrationForm from "./RegistrationForm";
import RegisteredTeams from "./RegisteredTeams";
import PadelRules from "./PadelRules";
import { Info, Calendar, ClipboardList, Users, Trophy, AlertTriangle, BookOpen } from "lucide-react";

const TournamentTabs = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-6">
        <Tabs defaultValue="registration" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-7 mb-8">
            <TabsTrigger value="registration" className="flex items-center gap-2">
              <ClipboardList className="w-4 h-4" />
              <span className="hidden sm:inline">Inschrijven</span>
            </TabsTrigger>
            <TabsTrigger value="teams" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Teams</span>
            </TabsTrigger>
            <TabsTrigger value="rules" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Regels</span>
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
            <TabsTrigger value="secret" className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="w-4 h-4" />
              <span className="hidden sm:inline">Don't click</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="registration">
            <RegistrationForm />
          </TabsContent>
          
          <TabsContent value="teams">
            <RegisteredTeams />
          </TabsContent>
          
          <TabsContent value="rules">
            <PadelRules />
          </TabsContent>

          <TabsContent value="info">
            <PracticalInfo />
          </TabsContent>
          
          <TabsContent value="matches">
            <div className="p-3 bg-muted/50 border border-border rounded-lg text-center text-sm text-muted-foreground">
              ⚠️ Dit schema is nog niet definitief en wordt later ingevuld.
            </div>
          </TabsContent>
          
          <TabsContent value="schedule">
            <div className="p-3 bg-muted/50 border border-border rounded-lg text-center text-sm text-muted-foreground">
              ⚠️ Dit programma is nog niet definitief en kan nog wijzigen.
            </div>
          </TabsContent>
          
          <TabsContent value="secret">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">🎵 You've been warned... 🎵</h2>
              <div className="aspect-video max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Never Gonna Give You Up"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="mt-4 text-muted-foreground">Never gonna give you up, never gonna let you down... 🕺</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TournamentTabs;
