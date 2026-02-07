import { Star } from "lucide-react";

const TournamentHeader = () => {
  return (
    <header className="bg-primary py-8 md:py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Decorative stars */}
          <div className="flex items-center gap-3 mb-4">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <Star className="w-5 h-5 text-accent fill-accent" />
            <Star className="w-4 h-4 text-accent fill-accent" />
          </div>
          
          {/* Main title - Stella Artois inspired */}
          <h1 className="stella-header text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-2">
            Padel Artois
          </h1>
          <h2 className="stella-header text-xl md:text-2xl lg:text-3xl text-accent tracking-[0.2em]">
            Tournament
          </h2>
          
          {/* Decorative divider */}
          <div className="flex items-center gap-4 mt-6 w-full max-w-xs">
            <div className="h-px flex-1 bg-primary-foreground/30" />
            <Star className="w-3 h-3 text-accent fill-accent" />
            <div className="h-px flex-1 bg-primary-foreground/30" />
          </div>
          
          {/* Anno */}
          <p className="text-primary-foreground/70 text-sm mt-4 tracking-widest uppercase">
            Anno 2026
          </p>
        </div>
      </div>
    </header>
  );
};

export default TournamentHeader;
