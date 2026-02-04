import studioImage from "@/assets/studio-medical.jpg";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="animate-fade-in">
            <div className="rounded-xl overflow-hidden border border-border">
              <img
                src={studioImage}
                alt="Ambulatorio medico con attrezzature professionali e ambiente pulito"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in delay-100">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Lo Studio
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Lo Studio Medico di Medicina Generale opera in convenzione con il 
                Servizio Sanitario Nazionale attraverso la A.S.L. Roma A, garantendo 
                assistenza sanitaria di base ai cittadini residenti nel territorio.
              </p>
              <p>
                L'ambulatorio è dotato di attrezzature moderne per le visite di routine, 
                il monitoraggio dei parametri vitali e la gestione delle patologie croniche più comuni.
              </p>
              <p>
                L'obiettivo principale è offrire un'assistenza medica attenta e personalizzata, 
                costruendo un rapporto di fiducia duraturo con ogni paziente e accompagnandolo 
                nel percorso di cura e prevenzione.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
