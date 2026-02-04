import { Phone } from "lucide-react";
import { SITE_CONFIG } from "@/config/siteConfig";
import ctaImage from "@/assets/cta-clinic.jpg";

const CTASection = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaImage}
          alt="Ingresso dello studio medico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 animate-fade-in">
            Prenota la tua visita
          </h2>
          <p className="text-primary-foreground/80 mb-8 animate-fade-in delay-100">
            Per prenotare un appuntamento o richiedere informazioni, 
            contatta il nostro studio telefonicamente durante gli orari di apertura.
          </p>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground font-medium rounded-lg hover:bg-muted transition-colors duration-200 animate-fade-in delay-200"
          >
            <Phone className="w-5 h-5" />
            Chiama ora: {SITE_CONFIG.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
