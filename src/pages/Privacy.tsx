import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_CONFIG } from "@/config/siteConfig";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Page Header */}
        <section className="bg-secondary py-12 md:py-16">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 animate-fade-in">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground animate-fade-in delay-100">
              Informativa sul trattamento dei dati personali
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto prose prose-sm">
              <div className="bg-card rounded-xl border border-border p-8 animate-fade-in">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Titolare del trattamento
                </h2>
                <p className="text-muted-foreground mb-6">
                  Il Titolare del trattamento dei dati personali è:<br />
                  <strong className="text-foreground">{SITE_CONFIG.name}</strong><br />
                  {SITE_CONFIG.fullAddress}<br />
                  Tel: {SITE_CONFIG.phoneDisplay}<br />
                  P.IVA: {SITE_CONFIG.vatNumber}
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4 mt-8">
                  Tipologia di dati raccolti
                </h2>
                <p className="text-muted-foreground mb-4">
                  Il presente sito web non raccoglie dati personali degli utenti in modo automatico. 
                  Non sono presenti form di contatto, cookie di profilazione o strumenti di tracciamento.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4 mt-8">
                  Dati di navigazione
                </h2>
                <p className="text-muted-foreground mb-4">
                  I sistemi informatici preposti al funzionamento di questo sito web non acquisiscono, 
                  nel corso del loro normale esercizio, dati personali la cui trasmissione sia implicita 
                  nell'uso dei protocolli di comunicazione di Internet.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4 mt-8">
                  Cookie
                </h2>
                <p className="text-muted-foreground mb-4">
                  Il presente sito non utilizza cookie di profilazione. Possono essere utilizzati 
                  esclusivamente cookie tecnici necessari al funzionamento del sito.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4 mt-8">
                  Diritti dell'interessato
                </h2>
                <p className="text-muted-foreground mb-4">
                  In qualità di interessato, Lei ha diritto di ottenere dal Titolare la conferma 
                  dell'esistenza o meno di dati che La riguardano, nonché la loro comunicazione 
                  in forma intelligibile. Ha inoltre diritto di ottenere l'indicazione dell'origine 
                  dei dati, delle finalità e modalità del trattamento.
                </p>
                <p className="text-muted-foreground mb-4">
                  Per esercitare i Suoi diritti può rivolgersi al Titolare del trattamento 
                  ai recapiti sopra indicati.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4 mt-8">
                  Modifiche alla presente informativa
                </h2>
                <p className="text-muted-foreground">
                  Il Titolare si riserva il diritto di modificare, aggiornare, aggiungere o 
                  rimuovere parti della presente informativa sulla privacy. Si invita pertanto 
                  a consultare periodicamente questa pagina.
                </p>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Ultimo aggiornamento: Febbraio 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
