import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroPadel from "@/assets/hero-padel.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroPadel}
          alt="Premium padel court at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-3xl">
          <div className="animate-slide-up">
            <span className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-accent-foreground text-sm font-medium mb-6 border border-accent/30">
              ✨ Now Open — Premium Padel Experience
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Elevate Your
            <br />
            <span className="text-gradient">Padel Game</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-8 animate-slide-up font-body" style={{ animationDelay: "0.2s" }}>
            Experience world-class padel at Artois. Premium courts, expert coaching, 
            and a vibrant community await you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Book Your Court
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Play className="w-5 h-5" />
              Watch Tour
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">6</div>
              <div className="text-primary-foreground/70 text-sm md:text-base">Premium Courts</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">500+</div>
              <div className="text-primary-foreground/70 text-sm md:text-base">Active Members</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">15+</div>
              <div className="text-primary-foreground/70 text-sm md:text-base">Pro Coaches</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 bg-primary-foreground/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
