import { Clock, Trophy, Beer } from "lucide-react";

const TournamentSchedule = () => {
  const scheduleItems = [
    {
      time: "16:00",
      event: "Ontvangst & Inschrijving",
      description: "Welkom op Arenal Antwerpen. Check-in en opwarming.",
      icon: Clock,
    },
    {
      time: "16:30",
      event: "Start Groepsfase",
      description: "De groepswedstrijden beginnen. Iedereen speelt tegen iedereen in zijn poule.",
      icon: Trophy,
    },
    {
      time: "18:00",
      event: "Kwartfinales",
      description: "De beste teams gaan door naar de knock-out fase.",
      icon: Trophy,
    },
    {
      time: "19:00",
      event: "Halve Finales",
      description: "Spanning stijgt! Wie haalt de finale?",
      icon: Trophy,
    },
    {
      time: "19:30",
      event: "Finale & Prijsuitreiking",
      description: "De grote finale gevolgd door de prijsuitreiking voor de winnaars.",
      icon: Trophy,
    },
    {
      time: "20:00",
      event: "Drinks & Food @ Den Tros",
      description: "Gezamenlijk afsluiten met een welverdiend pintje on the house!",
      icon: Beer,
    },
  ];

  return (
    <div className="py-8">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
        
        <div className="space-y-6">
          {scheduleItems.map((item, index) => (
            <div key={index} className="relative flex gap-6">
              {/* Time badge */}
              <div className="flex-shrink-0 w-16 text-right">
                <span className="font-display font-bold text-primary text-lg">
                  {item.time}
                </span>
              </div>
              
              {/* Icon */}
              <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-soft">
                <item.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-6">
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {item.event}
                </h3>
                <p className="text-muted-foreground mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TournamentSchedule;
