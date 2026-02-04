import { Phone, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/config/siteConfig";

const ContactSection = () => {
  return (
    <section id="contatti" className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Contatti
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Per prenotazioni e informazioni, contattateci telefonicamente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Telefono */}
          <div className="bg-card rounded-xl p-6 border border-border text-center animate-fade-in">
            <div className="w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Telefono
            </h3>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {SITE_CONFIG.phoneDisplay}
            </a>
          </div>

          {/* Indirizzo */}
          <div className="bg-card rounded-xl p-6 border border-border text-center animate-fade-in delay-100">
            <div className="w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Indirizzo
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {SITE_CONFIG.fullAddress}
            </p>
            <a
              href={SITE_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-accent-foreground hover:underline"
            >
              Apri su Google Maps
            </a>
          </div>

          {/* Orari */}
          <div className="bg-card rounded-xl p-6 border border-border text-center animate-fade-in delay-200">
            <div className="w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Orari
            </h3>
            <div className="text-sm text-muted-foreground space-y-1">
              {SITE_CONFIG.hours.slice(0, 5).map((schedule) => (
                <div key={schedule.day} className="flex justify-between text-xs">
                  <span>{schedule.day}</span>
                  <span>{schedule.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
