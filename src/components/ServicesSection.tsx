import { Link } from "react-router-dom";
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

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const ServiceCard = ({ title, description, image, index }: ServiceCardProps) => {
  const imageSrc = imageMap[image] || serviceCheckup;
  
  return (
    <div 
      className="bg-card rounded-xl border border-border overflow-hidden hover-lift animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  // Mostra solo i primi 4 servizi nella home
  const displayServices = SERVICES.slice(0, 4);

  return (
    <section id="servizi" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Servizi e Prestazioni
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Offriamo un'ampia gamma di servizi di medicina generale per prenderci cura della vostra salute
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/servizi"
            className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-muted transition-colors duration-200"
          >
            Vedi tutti i servizi
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
