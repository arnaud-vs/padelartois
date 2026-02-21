import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const RuleSection = ({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) => (
  <div className="space-y-2">
    <h3 className="font-display font-bold text-lg flex items-center gap-2">
      <span className="text-2xl">{icon}</span> {title}
    </h3>
    <div className="text-sm text-muted-foreground leading-relaxed pl-9">{children}</div>
  </div>
);

const CourtDiagram = () => (
  <div className="bg-green-800/90 rounded-lg p-4 max-w-sm mx-auto my-6 text-white text-xs font-mono select-none">
    <div className="border-2 border-white/80 rounded relative">
      {/* Net */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/60 -translate-x-1/2" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-800 px-1 text-white/80 text-[10px]">NET</div>
      
      <div className="grid grid-cols-2">
        {/* Left side */}
        <div className="border-r border-white/30 p-2">
          <div className="border border-white/40 rounded h-20 flex items-center justify-center mb-1">
            <span className="text-white/60">Service</span>
          </div>
          <div className="border border-white/40 rounded h-20 flex items-center justify-center">
            <span className="text-white/60">Service</span>
          </div>
          <div className="text-center mt-1 text-white/50">🧑‍🤝‍🧑 Team A</div>
        </div>
        {/* Right side */}
        <div className="p-2">
          <div className="border border-white/40 rounded h-20 flex items-center justify-center mb-1">
            <span className="text-white/60">Service</span>
          </div>
          <div className="border border-white/40 rounded h-20 flex items-center justify-center">
            <span className="text-white/60">Service</span>
          </div>
          <div className="text-center mt-1 text-white/50">🧑‍🤝‍🧑 Team B</div>
        </div>
      </div>
    </div>
    {/* Walls */}
    <div className="flex justify-between mt-1 text-white/50 text-[10px]">
      <span>🧱 Glass Wall</span>
      <span>🧱 Glass Wall</span>
    </div>
    <p className="text-center text-white/40 mt-1 text-[10px]">⬆️ Enclosed court with glass walls & fences ⬆️</p>
  </div>
);

const ScoringDiagram = () => (
  <div className="bg-muted/50 border border-border rounded-lg p-4 max-w-xs mx-auto my-4 text-center">
    <p className="font-display font-bold text-sm mb-2">Scoring (like tennis)</p>
    <div className="flex items-center justify-center gap-2 text-lg font-mono">
      <span className="bg-primary/10 rounded px-2 py-1">0</span>
      <span>→</span>
      <span className="bg-primary/10 rounded px-2 py-1">15</span>
      <span>→</span>
      <span className="bg-primary/10 rounded px-2 py-1">30</span>
      <span>→</span>
      <span className="bg-primary/10 rounded px-2 py-1">40</span>
      <span>→</span>
      <span className="bg-accent/20 rounded px-2 py-1 font-bold">Game!</span>
    </div>
    <p className="text-xs text-muted-foreground mt-2">40-40 = Deuce → need 2 points ahead to win</p>
  </div>
);

const ServeDiagram = () => (
  <div className="bg-muted/50 border border-border rounded-lg p-4 max-w-xs mx-auto my-4">
    <p className="font-display font-bold text-sm mb-3 text-center">Serve Rules</p>
    <div className="flex items-center gap-3 text-sm">
      <div className="flex flex-col items-center gap-1">
        <span className="text-3xl">🏓</span>
        <span className="text-[10px] text-muted-foreground">Underhand</span>
      </div>
      <span className="text-lg">→</span>
      <div className="flex flex-col items-center gap-1">
        <span className="text-3xl">⬇️</span>
        <span className="text-[10px] text-muted-foreground">Bounce first</span>
      </div>
      <span className="text-lg">→</span>
      <div className="flex flex-col items-center gap-1">
        <span className="text-3xl">↗️</span>
        <span className="text-[10px] text-muted-foreground">Hit below waist</span>
      </div>
      <span className="text-lg">→</span>
      <div className="flex flex-col items-center gap-1">
        <span className="text-3xl">🎯</span>
        <span className="text-[10px] text-muted-foreground">Cross-court</span>
      </div>
    </div>
  </div>
);

const PadelRules = () => {
  return (
    <Card className="border-border/50 shadow-soft">
      <CardContent className="p-6 md:p-8 space-y-6">
        <div className="text-center mb-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            🎾 Padel Rules for Beginners
          </h2>
          <p className="text-muted-foreground mt-2">Everything you need to know in 5 minutes</p>
        </div>

        <RuleSection title="The Court" icon="🏟️">
          <p>Padel is played on a <strong>smaller court than tennis</strong>, enclosed by glass walls and metal fences. The ball can be played off the walls — that's what makes it unique!</p>
          <CourtDiagram />
        </RuleSection>

        <Separator />

        <RuleSection title="Teams" icon="👥">
          <p>Always <strong>2 vs 2</strong> (doubles only). No singles in padel!</p>
        </RuleSection>

        <Separator />

        <RuleSection title="Serving" icon="🏓">
          <p>The serve must be hit <strong>underhand</strong> (below waist height). Bounce the ball, then hit it <strong>diagonally</strong> into the opponent's service box. You get <strong>2 attempts</strong> per point.</p>
          <ServeDiagram />
        </RuleSection>

        <Separator />

        <RuleSection title="Scoring" icon="🔢">
          <p>Same as tennis: <strong>15, 30, 40, Game</strong>. First team to win <strong>6 games</strong> wins a set (with 2 games lead or tiebreak at 6-6).</p>
          <ScoringDiagram />
        </RuleSection>

        <Separator />

        <RuleSection title="Playing the Ball" icon="🎾">
          <ul className="list-disc list-inside space-y-1">
            <li>The ball must <strong>bounce once</strong> on the ground before hitting a wall</li>
            <li>You <strong>can</strong> volley (hit before bounce) except on the serve return</li>
            <li>The ball <strong>can bounce off the glass walls</strong> on your side — you can still play it!</li>
            <li>You <strong>cannot</strong> hit the ball into the fence directly (must hit ground first on opponent's side)</li>
          </ul>
        </RuleSection>

        <Separator />

        <RuleSection title="Winning a Point" icon="✅">
          <ul className="list-disc list-inside space-y-1">
            <li>Ball bounces <strong>twice</strong> on opponent's side</li>
            <li>Opponent hits ball into the <strong>net</strong></li>
            <li>Opponent hits ball <strong>out</strong> (over the fence/glass without bouncing first)</li>
            <li>Ball hits opponent's <strong>body</strong></li>
          </ul>
        </RuleSection>

        <Separator />

        <RuleSection title="Key Differences from Tennis" icon="⚡">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Walls are in play</strong> — use them!</li>
            <li><strong>Underhand serve only</strong> — no smashing serves</li>
            <li><strong>Always doubles</strong> — teamwork is key</li>
            <li><strong>Smaller court</strong> — more rallies, more fun</li>
          </ul>
        </RuleSection>

        <Separator />

        <RuleSection title="Top Tips" icon="💡">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Position:</strong> Both players should stay near the net when possible</li>
            <li><strong>Lobs:</strong> A high ball over your opponent is a great strategy</li>
            <li><strong>Patience:</strong> Padel is about consistency, not power</li>
            <li><strong>Have fun:</strong> It's the most social racket sport! 🍻</li>
          </ul>
        </RuleSection>
      </CardContent>
    </Card>
  );
};

export default PadelRules;
