import padelArtoisLogo from "@/assets/padel-artois-header-logo.png";
import padelBlueSky from "@/assets/padel-blue-sky.jpg";

const TournamentHeader = () => {
  return (
    <header className="relative py-12 md:py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={padelBlueSky}
          alt="Padel court with blue sky"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Padel Artois Logo */}
          <img
            src={padelArtoisLogo}
            alt="Padel Artois"
            className="h-52 md:h-72 lg:h-80 w-auto mb-4 rounded-lg shadow-lg"
          />
          
          {/* Tournament subtitle */}
          <h2 className="stella-header text-xl md:text-2xl lg:text-3xl text-white tracking-[0.2em] drop-shadow-lg">
            Tournament
          </h2>
          
          {/* Anno */}
          <p className="text-white/80 text-sm mt-4 tracking-widest uppercase drop-shadow">
            Antwerp 2026
          </p>
        </div>
      </div>
    </header>
  );
};

export default TournamentHeader;
