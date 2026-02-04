import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/config/siteConfig";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Info Studio */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">+</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Studio Medico
                </p>
                <p className="text-xs text-muted-foreground">
                  Medicina Generale
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {SITE_CONFIG.subtitle}
            </p>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Contatti
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  {SITE_CONFIG.fullAddress}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Link */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Link utili
            </h3>
            <nav className="space-y-2">
              <Link
                to="/"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                to="/servizi"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Servizi
              </Link>
              <Link
                to="/contatti"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contatti
              </Link>
              <Link
                to="/privacy"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookie"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-xs text-muted-foreground">
              <p>{SITE_CONFIG.name}</p>
              <p>{SITE_CONFIG.fullAddress}</p>
              <p>Tel: {SITE_CONFIG.phoneDisplay} • P.IVA: {SITE_CONFIG.vatNumber}</p>
            </div>
            <div className="text-xs text-muted-foreground">
              © {currentYear} Tutti i diritti riservati
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
