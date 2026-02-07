import { Star } from "lucide-react";
import padelArtoisLogo from "@/assets/padel-artois-logo.jpeg";

const TournamentFooter = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Tournament Logo */}
          <div className="mb-8">
            <img
              src={padelArtoisLogo}
              alt="Artois Padel Championship"
              className="max-w-xs md:max-w-sm rounded-lg shadow-lg"
            />
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-3 h-3 text-accent fill-accent" />
            <span className="text-primary-foreground/70 text-sm uppercase tracking-widest">
              Padel Artois Tournament
            </span>
            <Star className="w-3 h-3 text-accent fill-accent" />
          </div>
          <p className="text-primary-foreground/50 text-sm">
            Wow, you're actually reading this
          </p>
        </div>
      </div>
    </footer>
  );
};

export default TournamentFooter;
