import { Star } from "lucide-react";

const TournamentFooter = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-3 h-3 text-accent fill-accent" />
            <span className="text-primary-foreground/70 text-sm uppercase tracking-widest">
              Padel Artois Tournament
            </span>
            <Star className="w-3 h-3 text-accent fill-accent" />
          </div>
          <p className="text-primary-foreground/50 text-sm">
            © 2026 - Dat de beste moge winnen!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default TournamentFooter;
