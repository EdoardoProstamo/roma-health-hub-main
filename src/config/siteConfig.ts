/**
 * Configurazione del sito - Studio Medico di Medicina Generale
 * Convenzione A.S.L. Roma A
 */

export const SITE_CONFIG = {
  // Informazioni Studio
  name: "Studio Medico di Medicina Generale",
  subtitle: "Convenzione A.S.L. Roma A",
  description: "Studio medico di medicina generale convenzionato con il Servizio Sanitario Nazionale. Visite mediche, prescrizioni, certificati e assistenza sanitaria a Roma.",
  
  // Contatti
  address: "Via Gaetano Moroni, 2",
  city: "Roma",
  province: "RM",
  postalCode: "00100",
  country: "Italia",
  fullAddress: "Via Gaetano Moroni, 2 – 00100 Roma (RM), Italia",
  phone: "+39 06 4423 8834",
  phoneDisplay: "06 4423 8834",
  
  // Dati fiscali
  vatNumber: "DA INSERIRE", // P.IVA da compilare
  
  // Link esterni
  googleMapsUrl: "https://maps.google.com/?q=Via+Gaetano+Moroni+2+Roma+Italia",
  googleReviewsUrl: "", // DA INSERIRE - URL pagina Google dell'attività
  
  // Orari (DA INSERIRE)
  hours: [
    { day: "Lunedì", time: "DA INSERIRE" },
    { day: "Martedì", time: "DA INSERIRE" },
    { day: "Mercoledì", time: "DA INSERIRE" },
    { day: "Giovedì", time: "DA INSERIRE" },
    { day: "Venerdì", time: "DA INSERIRE" },
    { day: "Sabato", time: "Chiuso" },
    { day: "Domenica", time: "Chiuso" },
  ],
};

export const SITE_THEME = {
  // Palette: Minimal Gray
  palette: "minimal-gray",
  colors: {
    white: "#FFFFFF",
    pearlGray: "#F5F5F7",
    lightGray: "#E8E8ED",
    mediumGray: "#8E8E93",
    darkGray: "#3A3A3C",
    charcoal: "#1D1D1F",
    powderBlue: "#B8D4E3",
    powderBlueLight: "#E3EEF5",
    powderBlueDark: "#6A9AB8",
  },
  
  // Stile Hero
  heroStyle: "card-overlay", // Hero con card sovrapposta
  
  // Presentazione Servizi
  servicesStyle: "vertical-cards", // Cards verticali con immagini
  
  // Elementi grafici
  borderRadius: "rounded", // Angoli smussati
  separators: "thin", // Separatori sottili
  
  // Gradienti
  gradients: false, // Nessun gradient
  
  // Font (solo system fonts)
  fonts: {
    heading: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  
  // Animazioni
  animations: {
    duration: "200ms",
    easing: "ease-out",
  },
};

export const SERVICES = [
  {
    id: "visite",
    title: "Visite Mediche",
    description: "Visite ambulatoriali per la valutazione dello stato di salute generale e la gestione delle patologie croniche.",
    image: "service-checkup",
  },
  {
    id: "prescrizioni",
    title: "Prescrizioni e Ricette",
    description: "Rilascio di prescrizioni mediche per farmaci, esami diagnostici e visite specialistiche.",
    image: "service-prescriptions",
  },
  {
    id: "certificati",
    title: "Certificati Medici",
    description: "Certificati per attività sportiva non agonistica, malattia, idoneità lavorativa e altri scopi.",
    image: "service-certificates",
  },
  {
    id: "vaccinazioni",
    title: "Vaccinazioni",
    description: "Somministrazione di vaccini secondo il calendario vaccinale e vaccinazioni stagionali.",
    image: "service-vaccines",
  },
  {
    id: "prevenzione",
    title: "Prevenzione",
    description: "Attività di prevenzione primaria e screening per la diagnosi precoce delle principali patologie.",
    image: "service-checkup",
  },
  {
    id: "cronici",
    title: "Gestione Patologie Croniche",
    description: "Monitoraggio e gestione continuativa di patologie croniche come diabete, ipertensione e cardiopatie.",
    image: "service-prescriptions",
  },
];

export const STRENGTHS = [
  {
    icon: "shield",
    title: "Convenzione SSN",
    description: "Studio convenzionato con il Servizio Sanitario Nazionale tramite A.S.L. Roma A.",
  },
  {
    icon: "users",
    title: "Attenzione al Paziente",
    description: "Approccio personalizzato e ascolto attento delle esigenze di ogni paziente.",
  },
  {
    icon: "clock",
    title: "Accessibilità",
    description: "Orari flessibili e disponibilità per le urgenze dei pazienti assistiti.",
  },
  {
    icon: "heart",
    title: "Continuità Assistenziale",
    description: "Cura continua nel tempo con conoscenza approfondita della storia clinica.",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Come posso prenotare una visita?",
    answer: "È possibile prenotare una visita chiamando lo studio al numero 06 4423 8834 durante gli orari di apertura. Si consiglia di prenotare con anticipo per garantire la disponibilità.",
  },
  {
    question: "Come posso ottenere una ricetta medica?",
    answer: "Le ricette per farmaci già in terapia possono essere richieste telefonicamente. Per nuove prescrizioni è necessaria una visita medica per la valutazione appropriata.",
  },
  {
    question: "Come si richiede un certificato medico?",
    answer: "I certificati medici vengono rilasciati dopo una visita in studio. Si prega di specificare al momento della prenotazione il tipo di certificato necessario.",
  },
  {
    question: "Lo studio è accessibile a persone con disabilità?",
    answer: "Per informazioni sull'accessibilità dello studio, si prega di contattare telefonicamente la segreteria.",
  },
  {
    question: "Cosa devo fare in caso di urgenza?",
    answer: "In caso di emergenza chiamare il 118. Per urgenze non gravi durante gli orari di chiusura, rivolgersi al servizio di Guardia Medica o al Pronto Soccorso più vicino.",
  },
  {
    question: "Come posso cambiare il medico di base?",
    answer: "La scelta o il cambio del medico di base si effettua presso gli sportelli della A.S.L. di appartenenza con tessera sanitaria e documento d'identità.",
  },
];
