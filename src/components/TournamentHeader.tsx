import padelArtoisLogo from "@/assets/padel-artois-header-logo.png";

const TournamentHeader = () => {
  return (
    <header className="bg-primary py-8 md:py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Padel Artois Logo */}
          <img
            src={padelArtoisLogo}
            alt="Padel Artois"
            className="h-32 md:h-44 lg:h-52 w-auto mb-4"
          />
          
          {/* Tournament subtitle */}
          <h2 className="stella-header text-xl md:text-2xl lg:text-3xl text-accent tracking-[0.2em]">
            Tournament
          </h2>
          
          {/* Anno */}
          <p className="text-primary-foreground/70 text-sm mt-4 tracking-widest uppercase">
            Antwerp 2026
          </p>
        </div>
      </div>
    </header>
  );
};

export default TournamentHeader;
