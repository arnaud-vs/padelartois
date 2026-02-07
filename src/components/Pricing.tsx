import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Drop-In",
    price: "€25",
    period: "per hour",
    description: "Perfect for casual players",
    features: [
      "Court access for 1 hour",
      "Racket rental available",
      "Shower facilities",
      "Free parking",
    ],
    featured: false,
  },
  {
    name: "Member",
    price: "€89",
    period: "per month",
    description: "For dedicated players",
    features: [
      "Unlimited court bookings",
      "Priority reservations",
      "Free coaching clinics",
      "Tournament entry discounts",
      "Exclusive member events",
      "Guest passes (2/month)",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "€149",
    period: "per month",
    description: "The complete experience",
    features: [
      "Everything in Member",
      "4 private lessons/month",
      "Pro shop discounts (20%)",
      "Locker room access",
      "Guest passes (5/month)",
      "Concierge booking service",
    ],
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section id="courts" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Pricing</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Find Your Perfect Plan
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you're a casual player or a dedicated enthusiast, we have a membership 
            that fits your lifestyle.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? "bg-hero-gradient text-primary-foreground shadow-lg scale-105"
                  : "bg-card border border-border shadow-soft"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent-gradient text-accent-foreground px-4 py-1 rounded-full text-sm font-medium shadow-accent">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-display text-xl font-semibold mb-2 ${
                  plan.featured ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {plan.name}
                </h3>
                <p className={plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className={`font-display text-4xl font-bold ${
                  plan.featured ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {plan.price}
                </span>
                <span className={plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}>
                  {" "}{plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.featured ? "text-accent" : "text-accent"
                    }`} />
                    <span className={plan.featured ? "text-primary-foreground/90" : "text-foreground/80"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? "hero" : "default"}
                size="lg"
                className={`w-full ${
                  plan.featured 
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" 
                    : ""
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
