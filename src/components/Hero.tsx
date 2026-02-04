import { Phone } from "lucide-react";
import { SITE_CONFIG } from "@/config/siteConfig";
import heroImage from "@/assets/hero-clinic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Sala d'attesa dello studio medico con ambiente accogliente e professionale"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 pt-20">
        <div className="max-w-2xl">
          {/* Overlapping Card */}
          <div className="bg-card/95 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-lg border border-border animate-fade-in">
            <div className="inline-block px-3 py-1 bg-accent/30 text-accent-foreground text-xs font-medium rounded-full mb-4">
              Convenzione A.S.L. Roma A
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              Studio Medico di
              <span className="block text-powder-blue-dark">Medicina Generale</span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Assistenza sanitaria completa per tutta la famiglia. Visite mediche, prescrizioni, 
              certificati e continuità assistenziale nel cuore di Roma.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                Chiama ora
              </a>
              <a
                href="#servizi"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-muted transition-colors duration-200"
              >
                Scopri i servizi
              </a>
            </div>

            {/* Quick Info */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div>
                  <span className="font-medium text-foreground">Indirizzo:</span>
                  <span className="ml-1">{SITE_CONFIG.address}, Roma</span>
                </div>
                <div>
                  <span className="font-medium text-foreground">Telefono:</span>
                  <span className="ml-1">{SITE_CONFIG.phoneDisplay}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
