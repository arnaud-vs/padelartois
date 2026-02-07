import { Star } from "lucide-react";

const TournamentDescription = () => {
  return (
    <section className="py-12 md:py-16 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <h2 className="stella-header text-lg text-primary tracking-widest">Welkom</h2>
            <Star className="w-4 h-4 text-accent fill-accent" />
          </div>
          
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-body">
            Welkom op de website van <span className="font-semibold text-primary">Padel Artois</span>, 
            het meest exclusieve padeltornooi van het land! In deze verjaardagseditie zullen de beste 
            padelduo's het tegen elkaar opnemen voor de felbegeerde eerste plaats, met bijbehorende prijzen. 
            Na de ongetwijfeld bloedstollende finale zakken we gezamenlijk af naar{" "}
            <span className="font-semibold text-primary">Den Tros</span> voor een welverdiend pintje on the house. 
            Alle andere praktische info kan je hieronder vinden. 
          </p>
          
          <p className="text-xl md:text-2xl font-display text-primary mt-8 italic">
            Dat de beste moge winnen & see you soon!
          </p>
        </div>
      </div>
    </section>
  );
};

export default TournamentDescription;
