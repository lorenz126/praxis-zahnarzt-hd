import { useState } from "react";
import { Link } from "react-router-dom";
import placeholderImg from "../../assets/team-photo.jpg";

export default function Prevention() {
  const [openFaq, setOpenFaq] = useState(null);

  const benefits = [
    {
      title: "Professionelle Zahnreinigung",
      description:
        "Entfernung von Zahnstein und Verfärbungen für gesunde, saubere Zähne",
    },
    {
      title: "Schwangerschaftsprophylaxe",
      description:
        "Spezielle Vorsorge für werdende Mütter zur Vermeidung von Schwangerschaftsgingivitis",
    },
    {
      title: "Schmelzhärtung",
      description:
        "Fluoridierung zur Stärkung des Zahnschmelzes und Kariesprävention",
    },
    {
      title: "Speicheltest",
      description:
        "Analyse Ihres individuellen Kariesrisikos für maßgeschneiderte Prophylaxe",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Eingangsuntersuchung",
      description:
        "Umfassende Untersuchung Ihrer Zähne und des Zahnfleisches",
    },
    {
      step: "2",
      title: "Professionelle Reinigung",
      description:
        "Schonende Entfernung von Zahnstein, Belägen und Verfärbungen",
    },
    {
      step: "3",
      title: "Politur & Fluoridierung",
      description: "Glättung der Zahnoberflächen und Schmelzhärtung",
    },
    {
      step: "4",
      title: "Beratung",
      description:
        "Individuelle Tipps für Ihre häusliche Mundhygiene und Ernährung",
    },
  ];

  const faqs = [
    {
      question: "Wie oft sollte ich zur professionellen Zahnreinigung?",
      answer:
        "Wir empfehlen eine professionelle Zahnreinigung alle 6 Monate. Bei erhöhtem Kariesrisiko oder Parodontitis kann eine häufigere Prophylaxe sinnvoll sein.",
    },
    {
      question: "Übernimmt die Krankenkasse die Kosten?",
      answer:
        "Viele gesetzliche Krankenkassen bezuschussen die professionelle Zahnreinigung. Private Versicherungen übernehmen die Kosten oft vollständig. Wir beraten Sie gerne zu den Möglichkeiten.",
    },
    {
      question: "Ist die Behandlung schmerzhaft?",
      answer:
        "Die professionelle Zahnreinigung ist in der Regel schmerzfrei. Bei empfindlichen Zähnen oder freiliegenden Zahnhälsen kann eine lokale Betäubung eingesetzt werden.",
    },
    {
      question: "Was ist eine Schwangerschaftsprophylaxe?",
      answer:
        "Während der Schwangerschaft erhöht sich durch Hormonveränderungen das Risiko für Zahnfleischentzündungen. Unsere spezielle Schwangerschaftsprophylaxe beugt dem vor und schützt Mutter und Kind.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 pt-16 sm:pt-24 pb-12 sm:pb-16">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-stone hover:text-charcoal transition-colors mb-6"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Zurück zu Leistungen
          </Link>
          <h1 className="text-4xl font-medium text-charcoal max-w-5xl">
            Prophylaxe & Vorsorge
          </h1>
          <p className="mt-6 text-lg text-stone max-w-2xl">
            Vorbeugen ist besser als Heilen - mit professioneller Prophylaxe
            halten Sie Ihre Zähne ein Leben lang gesund.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-white/55 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 py-8">
          <div className="rounded-2xl overflow-hidden aspect-[21/9] bg-gradient-to-br from-primary/20 to-secondary/20">
            <img
              src={placeholderImg}
              alt="Prophylaxe & Vorsorge"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 py-14 sm:py-20">
          <h2 className="text-2xl font-medium text-charcoal mb-12">
            Unsere Prophylaxe-Leistungen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 rounded-2xl bg-white/40 backdrop-blur-sm"
              >
                <h3 className="text-lg font-medium text-charcoal mb-2">
                  {benefit.title}
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white/55 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 py-14 sm:py-20">
          <h2 className="text-2xl font-medium text-charcoal mb-12">
            Ablauf der Prophylaxe
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium text-lg">
                      {item.step}
                    </span>
                  </div>
                </div>
                <h3 className="text-base font-medium text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 py-14 sm:py-20">
          <h2 className="text-2xl font-medium text-charcoal mb-12">
            Häufige Fragen
          </h2>
          <div className="max-w-3xl divide-y divide-sand">
            {faqs.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className="text-charcoal font-medium pr-8 group-hover:text-black transition-colors">
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-stone shrink-0 transition-transform duration-200 ${openFaq === index ? "rotate-45" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${openFaq === index ? "max-h-48 opacity-100 pb-5" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-charcoal-light text-sm leading-relaxed pr-12">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white/55 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 py-14 sm:py-20">
          <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-medium text-charcoal">
              Jetzt Prophylaxe-Termin vereinbaren
            </h2>
            <p className="mt-4 text-stone max-w-2xl mx-auto">
              Investieren Sie in Ihre Zahngesundheit - vereinbaren Sie noch
              heute einen Termin für Ihre professionelle Zahnreinigung.
            </p>
            <div className="mt-8">
              <a
                href="https://heidelberg-zahnmedizin.termin.dampsoft.net/patientenportal/suche"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
              >
                Online Termin buchen
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
