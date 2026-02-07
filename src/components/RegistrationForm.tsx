import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle, Send } from "lucide-react";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    player1Name: "",
    player2Name: "",
    teamName: "",
    teamColor: "",
    skillLevel: [50],
    joinDrinks: false,
    isHyped: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.player1Name.trim()) {
      toast({
        title: "Fout",
        description: "Naam van speler 1 is verplicht",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-registration", {
        body: {
          player1Name: formData.player1Name.trim(),
          player2Name: formData.player2Name.trim(),
          teamName: formData.teamName.trim(),
          teamColor: formData.teamColor.trim(),
          skillLevel: formData.skillLevel[0],
          joinDrinks: formData.joinDrinks,
          isHyped: formData.isHyped,
        },
      });

      if (error) throw error;

      setIsSubmitted(true);
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Fout",
        description: "Er ging iets mis bij het versturen van je registratie. Probeer opnieuw.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSkillLabel = (value: number) => {
    if (value < 20) return "Never played before 🐣";
    if (value < 40) return "Beginner 🎾";
    if (value < 60) return "Intermediate 💪";
    if (value < 80) return "Advanced 🔥";
    return "Padel God 👑";
  };

  if (isSubmitted) {
    return (
      <Card className="border-accent/30 shadow-gold">
        <CardContent className="p-8 md:p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-accent" />
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Thanks for your registration!
          </h3>
          <p className="text-lg text-muted-foreground">
            See you soon! 🎾🍻
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border/50 shadow-soft">
      <CardHeader>
        <CardTitle className="font-display text-2xl text-center">Inschrijving</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Player 1 Name - Required */}
          <div className="space-y-2">
            <Label htmlFor="player1Name">
              Naam Speler 1 <span className="text-primary">*</span>
            </Label>
            <Input
              id="player1Name"
              placeholder="Je naam"
              value={formData.player1Name}
              onChange={(e) => setFormData({ ...formData, player1Name: e.target.value })}
              required
            />
          </div>

          {/* Player 2 Name - Optional */}
          <div className="space-y-2">
            <Label htmlFor="player2Name">Naam Speler 2 (optioneel)</Label>
            <Input
              id="player2Name"
              placeholder="Naam van je partner"
              value={formData.player2Name}
              onChange={(e) => setFormData({ ...formData, player2Name: e.target.value })}
            />
          </div>

          {/* Team Name - Optional */}
          <div className="space-y-2">
            <Label htmlFor="teamName">Team Naam (optioneel)</Label>
            <Input
              id="teamName"
              placeholder="Bijv. De Smashmasters"
              value={formData.teamName}
              onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
            />
          </div>

          {/* Team Color - Optional */}
          <div className="space-y-2">
            <Label htmlFor="teamColor">Teamkleur (optioneel)</Label>
            <Input
              id="teamColor"
              placeholder="Bijv. Rood, Blauw, etc."
              value={formData.teamColor}
              onChange={(e) => setFormData({ ...formData, teamColor: e.target.value })}
            />
          </div>

          {/* Skill Level Slider */}
          <div className="space-y-4">
            <Label>Ervaringsniveau</Label>
            <div className="px-2">
              <Slider
                value={formData.skillLevel}
                onValueChange={(value) => setFormData({ ...formData, skillLevel: value })}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>Never played before</span>
                <span>Padel god</span>
              </div>
            </div>
            <p className="text-center font-medium text-primary">
              {getSkillLabel(formData.skillLevel[0])}
            </p>
          </div>

          {/* Checkboxes */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Checkbox
                id="joinDrinks"
                checked={formData.joinDrinks}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, joinDrinks: checked as boolean })
                }
              />
              <Label htmlFor="joinDrinks" className="cursor-pointer">
                I join for food & drinks after the tournament 🍻
              </Label>
            </div>

            <div className="flex items-center space-x-3">
              <Checkbox
                id="isHyped"
                checked={formData.isHyped}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, isHyped: checked as boolean })
                }
              />
              <Label htmlFor="isHyped" className="cursor-pointer">
                I'm hyped for the tournament 🔥
              </Label>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Bezig met verzenden..."
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Confirm registration
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegistrationForm;
