import { Calendar, Users, Trophy, Clock } from "lucide-react";
import padelEquipment from "@/assets/padel-equipment.jpg";
import padelSocial from "@/assets/padel-social.jpg";
import padelCoaching from "@/assets/padel-coaching.jpg";

const features = [
  {
    icon: Calendar,
    title: "Easy Booking",
    description: "Reserve your court in seconds with our intuitive online booking system.",
  },
  {
    icon: Users,
    title: "Social Community",
    description: "Connect with fellow players, join leagues, and grow your padel network.",
  },
  {
    icon: Trophy,
    title: "Tournaments",
    description: "Compete in regular tournaments for all skill levels and win exciting prizes.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Open from 7AM to 11PM, fitting perfectly into your busy schedule.",
  },
];

const Features = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            The Ultimate Padel Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            From state-of-the-art courts to expert coaching, we've created the perfect environment 
            for your padel journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-accent/50 hover:shadow-soft transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent-gradient group-hover:text-accent-foreground transition-all duration-300">
                <feature.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative rounded-2xl overflow-hidden group aspect-square">
            <img
              src={padelEquipment}
              alt="Premium padel equipment"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-primary-foreground">Pro Equipment</h3>
                <p className="text-primary-foreground/80 text-sm">Top-tier gear available</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden group aspect-square">
            <img
              src={padelSocial}
              alt="Social padel games"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-primary-foreground">Play Together</h3>
                <p className="text-primary-foreground/80 text-sm">Join our vibrant community</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden group aspect-square">
            <img
              src={padelCoaching}
              alt="Professional coaching"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-primary-foreground">Expert Coaching</h3>
                <p className="text-primary-foreground/80 text-sm">Learn from the best</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
