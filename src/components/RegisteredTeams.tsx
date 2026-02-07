import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Trophy } from "lucide-react";

interface Registration {
  id: string;
  player1_name: string;
  player2_name: string | null;
  team_name: string | null;
  team_color: string | null;
  skill_level: number;
  join_drinks: boolean;
  is_hyped: boolean;
}

const getSkillLabel = (value: number) => {
  if (value < 20) return { label: "Beginner", emoji: "🐣", color: "bg-green-100 text-green-800" };
  if (value < 40) return { label: "Casual", emoji: "🎾", color: "bg-blue-100 text-blue-800" };
  if (value < 60) return { label: "Intermediate", emoji: "💪", color: "bg-yellow-100 text-yellow-800" };
  if (value < 80) return { label: "Advanced", emoji: "🔥", color: "bg-orange-100 text-orange-800" };
  return { label: "Padel God", emoji: "👑", color: "bg-purple-100 text-purple-800" };
};

const RegisteredTeams = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistrations = async () => {
      const { data, error } = await supabase
        .from("registrations")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Error fetching registrations:", error);
      } else {
        setRegistrations(data || []);
      }
      setLoading(false);
    };

    fetchRegistrations();
  }, []);

  if (loading) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">Laden...</p>
      </div>
    );
  }

  if (registrations.length === 0) {
    return (
      <Card className="border-border/50">
        <CardContent className="p-8 text-center">
          <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="font-display text-xl font-semibold text-foreground mb-2">
            Nog geen inschrijvingen
          </h3>
          <p className="text-muted-foreground">
            Wees de eerste om je in te schrijven!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="py-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-accent" />
          <span className="font-display font-semibold text-lg">
            {registrations.length} {registrations.length === 1 ? "team" : "teams"} ingeschreven
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {registrations.map((reg, index) => {
          const skill = getSkillLabel(reg.skill_level);
          const teamDisplay = reg.team_name || `Team ${reg.player1_name}`;
          
          return (
            <Card key={reg.id} className="border-border/50 hover:shadow-soft transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Team number */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                    
                    {/* Team info */}
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-display font-semibold text-foreground">
                          {teamDisplay}
                        </h4>
                        {reg.team_color && (
                          <Badge variant="outline" className="text-xs">
                            {reg.team_color}
                          </Badge>
                        )}
                        {reg.is_hyped && <span title="Hyped!">🔥</span>}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {reg.player1_name}
                        {reg.player2_name && ` & ${reg.player2_name}`}
                      </p>
                    </div>
                  </div>
                  
                  {/* Skill level */}
                  <Badge className={`${skill.color} flex-shrink-0`}>
                    {skill.emoji} {skill.label}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default RegisteredTeams;
