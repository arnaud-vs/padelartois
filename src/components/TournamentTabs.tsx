import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PracticalInfo from "./PracticalInfo";
import TournamentSchedule from "./TournamentSchedule";
import RegistrationForm from "./RegistrationForm";
import { Info, Calendar, ClipboardList } from "lucide-react";

const TournamentTabs = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-6">
        <Tabs defaultValue="registration" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="registration" className="flex items-center gap-2">
              <ClipboardList className="w-4 h-4" />
              <span className="hidden sm:inline">Inschrijven</span>
            </TabsTrigger>
            <TabsTrigger value="info" className="flex items-center gap-2">
              <Info className="w-4 h-4" />
              <span className="hidden sm:inline">Praktisch</span>
            </TabsTrigger>
            <TabsTrigger value="schedule" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Programma</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="registration">
            <RegistrationForm />
          </TabsContent>
          
          <TabsContent value="info">
            <PracticalInfo />
          </TabsContent>
          
          <TabsContent value="schedule">
            <TournamentSchedule />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TournamentTabs;
