import { MapPin, Calendar, UtensilsCrossed, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PracticalInfo = () => {
  const infoItems = [
    {
      icon: MapPin,
      label: "Locatie",
      value: "Arenal Antwerpen",
    },
    {
      icon: Calendar,
      label: "Datum",
      value: "Zaterdag 18 april 2026 - 16:00",
    },
    {
      icon: UtensilsCrossed,
      label: "Drinks & Food",
      value: "@ Den Tros vanaf 20:00",
    },
    {
      icon: CreditCard,
      label: "Inschrijvingskost",
      value: "To be determined",
    },
  ];

  return (
    <div className="py-8">
      <div className="grid gap-4 md:grid-cols-2">
        {infoItems.map((item, index) => (
          <Card key={index} className="border-border/50 shadow-soft">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                  {item.label}
                </p>
                <p className="text-lg font-display font-semibold text-foreground">
                  {item.value}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PracticalInfo;
