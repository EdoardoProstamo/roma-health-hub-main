import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SERVICES } from "@/config/siteConfig";
import serviceCheckup from "@/assets/service-checkup.jpg";
import servicePrescriptions from "@/assets/service-prescriptions.jpg";
import serviceCertificates from "@/assets/service-certificates.jpg";
import serviceVaccines from "@/assets/service-vaccines.jpg";

const imageMap: Record<string, string> = {
  "service-checkup": serviceCheckup,
  "service-prescriptions": servicePrescriptions,
  "service-certificates": serviceCertificates,
  "service-vaccines": serviceVaccines,
};

const Servizi = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Page Header */}
        <section className="bg-secondary py-12 md:py-16">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 animate-fade-in">
              Servizi e Prestazioni
            </h1>
            <p className="text-muted-foreground max-w-2xl animate-fade-in delay-100">
              Il nostro studio offre un'ampia gamma di servizi di medicina generale 
              per rispondere alle esigenze sanitarie dei nostri pazienti.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICES.map((service, index) => {
                const imageSrc = imageMap[service.image] || serviceCheckup;
                
                return (
                  <div
                    key={service.id}
                    className="bg-card rounded-xl border border-border overflow-hidden animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="md:flex">
                      <div className="md:w-2/5">
                        <img
                          src={imageSrc}
                          alt={service.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-3/5 p-6">
                        <h2 className="text-xl font-semibold text-foreground mb-3">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <p className="text-sm text-accent-foreground">
                          Per informazioni, contatta lo studio telefonicamente.
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-secondary py-10">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-muted-foreground">
                Le prestazioni elencate sono indicative e possono variare in base alle esigenze 
                specifiche del paziente. Per informazioni dettagliate sui servizi disponibili, 
                si prega di contattare direttamente lo studio.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Servizi;
