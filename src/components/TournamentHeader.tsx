import padelArtoisLogo from "@/assets/padel-artois-header-logo.png";

const TournamentHeader = () => {
  return (
    <header className="bg-background py-10 md:py-14">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Padel Artois Logo */}
          <img
            src={padelArtoisLogo}
            alt="Padel Artois"
            className="h-52 md:h-72 lg:h-80 w-auto mb-4"
          />
          
          {/* Tournament subtitle */}
          <h2 className="stella-header text-xl md:text-2xl lg:text-3xl text-primary tracking-[0.2em]">
            Tournament
          </h2>
          
          {/* Anno */}
          <p className="text-muted-foreground text-sm mt-4 tracking-widest uppercase">
            Antwerp 2026
          </p>
        </div>
      </div>
    </header>
  );
};

export default TournamentHeader;
