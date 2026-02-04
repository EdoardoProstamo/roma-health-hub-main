import { Shield, Users, Clock, Heart } from "lucide-react";
import { STRENGTHS } from "@/config/siteConfig";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  users: Users,
  clock: Clock,
  heart: Heart,
};

const StrengthsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Perché sceglierci
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Il nostro impegno quotidiano per la salute dei nostri pazienti
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STRENGTHS.map((strength, index) => {
            const Icon = iconMap[strength.icon] || Shield;
            
            return (
              <div
                key={strength.title}
                className="bg-card rounded-xl p-6 border border-border text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {strength.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {strength.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
