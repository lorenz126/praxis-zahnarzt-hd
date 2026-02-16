import { useState } from "react";
import { Link } from "react-router-dom";
import placeholderImg from "../../assets/team-photo.jpg";

export default function Prosthodontics() {
  const [openFaq, setOpenFaq] = useState(null);

  const benefits = [
    {
      title: "Kronen & Brücken",
      description:
        "Hochwertige Versorgung mit vollkeramischen oder metallkeramischen Kronen",
    },
    {
      title: "Veneers",
      description:
        "Hauchdünne Keramikschalen für ein perfektes Lächeln",
    },
    {
      title: "Prothesen",
      description:
        "Teil- und Vollprothesen für optimalen Tragekomfort",
    },
    {
      title: "CEREC® Technologie",
      description:
        "Digitale Abformung und Keramik-Rekonstruktion in nur einer Sitzung",
    },
  ];

  const faqs = [
    {
      question: "Was ist CEREC® und welche Vorteile bietet es?",
      answer:
        "CEREC® ist ein computergestütztes System zur Herstellung von Keramik-Zahnersatz in einer einzigen Sitzung. Sie sparen Zeit und bekommen sofort Ihr fertiges Ergebnis.",
    },
    {
      question: "Wie lange hält Zahnersatz?",
      answer:
        "Bei guter Pflege und regelmäßigen Kontrollen kann Zahnersatz viele Jahre bis Jahrzehnte halten. Kronen und Brücken haben eine durchschnittliche Lebensdauer von 10-15 Jahren, oft länger.",
    },
    {
      question: "Was sind Veneers?",
      answer:
        "Veneers sind hauchdünne Keramikschalen, die auf die Vorderseite der Zähne geklebt werden. Sie korrigieren Verfärbungen, Fehlstellungen oder Lücken für ein ästhetisches Lächeln.",
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
            Zahnersatz
          </h1>
          <p className="mt-6 text-lg text-stone max-w-2xl">
            Hochwertiger Zahnersatz für Funktion und Ästhetik - von Kronen über
            Brücken bis zu vollkeramischen Veneers.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-white/55 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 py-8">
          <div className="rounded-2xl overflow-hidden aspect-[21/9] bg-gradient-to-br from-primary/20 to-secondary/20">
            <img
              src={placeholderImg}
              alt="Zahnersatz"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 py-14 sm:py-20">
          <h2 className="text-2xl font-medium text-charcoal mb-12">
            Unsere Zahnersatz-Leistungen
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
              Beratungstermin vereinbaren
            </h2>
            <p className="mt-4 text-stone max-w-2xl mx-auto">
              Lassen Sie sich zu Ihren Möglichkeiten für hochwertigen Zahnersatz
              beraten.
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
