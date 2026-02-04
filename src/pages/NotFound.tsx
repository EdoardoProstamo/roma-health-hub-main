import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center pt-20">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto text-center py-16">
            <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Pagina non trovata
            </h2>
            <p className="text-muted-foreground mb-8">
              La pagina che stai cercando non esiste o è stata spostata.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Torna alla home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
