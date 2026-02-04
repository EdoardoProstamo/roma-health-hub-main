import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/config/siteConfig";

const Contatti = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Page Header */}
        <section className="bg-secondary py-12 md:py-16">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 animate-fade-in">
              Contatti
            </h1>
            <p className="text-muted-foreground max-w-2xl animate-fade-in delay-100">
              Per prenotazioni e informazioni, contattateci telefonicamente 
              durante gli orari di apertura dello studio.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Main Contact Card */}
                <div className="bg-card rounded-xl border border-border p-8 animate-fade-in">
                  <h2 className="text-xl font-semibold text-foreground mb-6">
                    Informazioni di contatto
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">Telefono</h3>
                        <a
                          href={`tel:${SITE_CONFIG.phone}`}
                          className="text-lg text-accent-foreground hover:underline"
                        >
                          {SITE_CONFIG.phoneDisplay}
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">Indirizzo</h3>
                        <p className="text-muted-foreground mb-2">
                          {SITE_CONFIG.fullAddress}
                        </p>
                        <a
                          href={SITE_CONFIG.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-lg hover:bg-muted transition-colors"
                        >
                          Apri su Google Maps
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="bg-card rounded-xl border border-border p-8 animate-fade-in delay-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-accent/30 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">
                      Orari di apertura
                    </h2>
                  </div>
                  
                  <div className="space-y-3">
                    {SITE_CONFIG.hours.map((schedule) => (
                      <div 
                        key={schedule.day} 
                        className="flex justify-between items-center py-2 border-b border-border last:border-b-0"
                      >
                        <span className="text-foreground">{schedule.day}</span>
                        <span className={`text-sm ${
                          schedule.time === "Chiuso" 
                            ? "text-muted-foreground" 
                            : "text-muted-foreground"
                        }`}>
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 bg-primary rounded-xl p-8 text-center animate-fade-in delay-200">
                <h2 className="text-xl font-semibold text-primary-foreground mb-3">
                  Prenota la tua visita
                </h2>
                <p className="text-primary-foreground/80 mb-6">
                  Contattaci telefonicamente per fissare un appuntamento
                </p>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-background text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Chiama ora
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contatti;
