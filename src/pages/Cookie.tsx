import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_CONFIG } from "@/config/siteConfig";

const Cookie = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Page Header */}
        <section className="bg-secondary py-12 md:py-16">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 animate-fade-in">
              Cookie Policy
            </h1>
            <p className="text-muted-foreground animate-fade-in delay-100">
              Informativa sull'utilizzo dei cookie
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto prose prose-sm">
              <div className="bg-card rounded-xl border border-border p-8 animate-fade-in">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Cosa sono i cookie
                </h2>
                <p className="text-muted-foreground mb-6">
                  I cookie sono piccoli file di testo che i siti visitati dall'utente inviano 
                  al suo terminale (computer, tablet, smartphone), dove vengono memorizzati 
                  per essere poi ritrasmessi agli stessi siti alla visita successiva.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4 mt-8">
                  Cookie utilizzati da questo sito
                </h2>
                <p className="text-muted-foreground mb-4">
                  Il presente sito web <strong className="text-foreground">non utilizza cookie di profilazione</strong> 
                  né cookie di terze parti per finalità di marketing o tracciamento.
                </p>
                <p className="text-muted-foreground mb-4">
                  Potrebbero essere utilizzati esclusivamente cookie tecnici strettamente necessari 
                  al funzionamento del sito. Tali cookie sono essenziali per permettere all'utente 
                  di navigare correttamente.
                </p>

                <h2 className="text-xl font-semibold text-foreground mb-4 mt-8">
                  Tipologie di cookie
                </h2>
                <div className="text-muted-foreground mb-4 space-y-4">
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Cookie tecnici</h3>
                    <p className="text-sm">
                      Sono cookie necessari per il corretto funzionamento del sito. 
                      Non richiedono il consenso dell'utente.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Cookie di profilazione</h3>
                    <p className="text-sm">
                      Questo sito <strong>NON utilizza</strong> cookie di profilazione.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Cookie di terze parti</h3>
                    <p className="text-sm">
                      Questo sito <strong>NON utilizza</strong> cookie di terze parti.
                    </p>
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-foreground mb-4 mt-8">
                  Come disabilitare i cookie
                </h2>
                <p className="text-muted-foreground mb-4">
                  È possibile disabilitare i cookie attraverso le impostazioni del proprio browser. 
                  Di seguito i link alle guide dei principali browser:
                </p>
                <ul className="text-muted-foreground text-sm space-y-2 mb-6">
                  <li>Chrome: Impostazioni → Privacy e sicurezza → Cookie</li>
                  <li>Firefox: Impostazioni → Privacy e sicurezza → Cookie</li>
                  <li>Safari: Preferenze → Privacy → Cookie</li>
                  <li>Edge: Impostazioni → Cookie e autorizzazioni sito</li>
                </ul>

                <h2 className="text-xl font-semibold text-foreground mb-4 mt-8">
                  Titolare del trattamento
                </h2>
                <p className="text-muted-foreground">
                  {SITE_CONFIG.name}<br />
                  {SITE_CONFIG.fullAddress}<br />
                  Tel: {SITE_CONFIG.phoneDisplay}
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

export default Cookie;
