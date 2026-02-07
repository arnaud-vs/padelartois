import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Trophy } from "lucide-react";

// Mock data for group stage matches
const groupMatches = [
  { id: 1, time: "14:00", court: "Baan 1", team1: "Team A", team2: "Team B", group: "Groep 1" },
  { id: 2, time: "14:00", court: "Baan 2", team1: "Team C", team2: "Team D", group: "Groep 1" },
  { id: 3, time: "14:30", court: "Baan 1", team1: "Team E", team2: "Team F", group: "Groep 2" },
  { id: 4, time: "14:30", court: "Baan 2", team1: "Team G", team2: "Team H", group: "Groep 2" },
  { id: 5, time: "15:00", court: "Baan 1", team1: "Team A", team2: "Team C", group: "Groep 1" },
  { id: 6, time: "15:00", court: "Baan 2", team1: "Team E", team2: "Team G", group: "Groep 2" },
  { id: 7, time: "15:30", court: "Baan 1", team1: "Team B", team2: "Team D", group: "Groep 1" },
  { id: 8, time: "15:30", court: "Baan 2", team1: "Team F", team2: "Team H", group: "Groep 2" },
];

// Knockout bracket data
const knockoutMatches = {
  semifinals: [
    { id: "sf1", team1: "Winnaar Groep 1", team2: "2e Groep 2", time: "16:30", court: "Baan 1" },
    { id: "sf2", team1: "Winnaar Groep 2", team2: "2e Groep 1", time: "16:30", court: "Baan 2" },
  ],
  final: { id: "f", team1: "Winnaar HF1", team2: "Winnaar HF2", time: "17:15", court: "Baan 1" },
};

const MatchCard = ({ match }: { match: typeof groupMatches[0] }) => (
  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-center text-sm text-muted-foreground">
        <Clock className="w-3 h-3 mb-1" />
        <span className="font-medium">{match.time}</span>
      </div>
      <div className="h-8 w-px bg-border" />
      <div className="flex flex-col">
        <span className="font-semibold text-foreground">{match.team1}</span>
        <span className="text-muted-foreground text-sm">vs</span>
        <span className="font-semibold text-foreground">{match.team2}</span>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <Badge variant="outline" className="text-xs">
        <MapPin className="w-3 h-3 mr-1" />
        {match.court}
      </Badge>
    </div>
  </div>
);

const BracketMatch = ({ 
  team1, 
  team2, 
  time, 
  court,
  isFinal = false 
}: { 
  team1: string; 
  team2: string; 
  time: string; 
  court: string;
  isFinal?: boolean;
}) => (
  <div className={`relative bg-card border rounded-lg p-3 ${isFinal ? 'border-primary shadow-gold' : 'border-border'}`}>
    {isFinal && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <Badge className="bg-primary text-primary-foreground">
          <Trophy className="w-3 h-3 mr-1" />
          Finale
        </Badge>
      </div>
    )}
    <div className="space-y-2 mt-1">
      <div className="flex items-center justify-between bg-muted/50 rounded px-2 py-1.5">
        <span className="font-medium text-sm">{team1}</span>
      </div>
      <div className="flex items-center justify-between bg-muted/50 rounded px-2 py-1.5">
        <span className="font-medium text-sm">{team2}</span>
      </div>
    </div>
    <div className="flex items-center justify-center gap-2 mt-2 text-xs text-muted-foreground">
      <Clock className="w-3 h-3" />
      <span>{time}</span>
      <span>•</span>
      <MapPin className="w-3 h-3" />
      <span>{court}</span>
    </div>
  </div>
);

const MatchSchedule = () => {
  // Group matches by group
  const matchesByGroup = groupMatches.reduce((acc, match) => {
    if (!acc[match.group]) {
      acc[match.group] = [];
    }
    acc[match.group].push(match);
    return acc;
  }, {} as Record<string, typeof groupMatches>);

  return (
    <div className="space-y-8">
      {/* Group Stage */}
      <Card className="border-border/50 shadow-soft">
        <CardHeader>
          <CardTitle className="font-display text-xl flex items-center gap-2">
            <span>🏸</span> Groepsfase
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {Object.entries(matchesByGroup).map(([group, matches]) => (
            <div key={group} className="space-y-3">
              <h4 className="font-semibold text-primary flex items-center gap-2">
                {group}
              </h4>
              <div className="space-y-2">
                {matches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Knockout Stage - Tournament Bracket */}
      <Card className="border-border/50 shadow-soft">
        <CardHeader>
          <CardTitle className="font-display text-xl flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary" /> Knock-out Fase
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {/* Semifinals */}
            <div className="flex flex-col gap-8 md:gap-16">
              {knockoutMatches.semifinals.map((match) => (
                <BracketMatch
                  key={match.id}
                  team1={match.team1}
                  team2={match.team2}
                  time={match.time}
                  court={match.court}
                />
              ))}
            </div>

            {/* Connector lines - hidden on mobile */}
            <div className="hidden md:flex flex-col items-center justify-center">
              <div className="w-8 h-px bg-border" />
              <div className="w-px h-24 bg-border" />
              <div className="w-8 h-px bg-border" />
            </div>

            {/* Arrow for mobile */}
            <div className="md:hidden text-2xl text-muted-foreground">↓</div>

            {/* Final */}
            <div className="w-full md:w-auto">
              <BracketMatch
                team1={knockoutMatches.final.team1}
                team2={knockoutMatches.final.team2}
                time={knockoutMatches.final.time}
                court={knockoutMatches.final.court}
                isFinal
              />
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            * Het schema wordt ingevuld naarmate de groepsfase vordert
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchSchedule;
