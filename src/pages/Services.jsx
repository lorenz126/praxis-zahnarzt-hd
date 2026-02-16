import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Placeholder images - will be replaced in Phase 6
import placeholderImg from "../assets/team-photo.jpg";

const serviceImages = Array(9).fill(placeholderImg);

export default function Services() {
  const { t } = useTranslation("services");
  const { t: tc } = useTranslation("common");

  const services = t("cards", { returnObjects: true }).map((card) => ({
    id: card.id,
    title: card.title,
    category: card.category,
    description: card.description,
    href: `/services/${card.id}`,
  }));

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 pt-16 sm:pt-24 pb-12 sm:pb-16">
          <h1 className="text-4xl font-medium text-charcoal max-w-5xl">
            {t("hub.title")}
          </h1>
          <p className="mt-6 text-lg text-stone max-w-2xl">
            {t("hub.subtitle")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 py-14 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={service.id}
                to={service.href}
                className="group rounded-2xl bg-white/40 backdrop-blur-sm overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Image area */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={serviceImages[index]}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block text-xs font-medium text-white/80 uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Text area */}
                <div className="p-6">
                  <h3 className="text-lg font-medium text-charcoal leading-snug group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone leading-relaxed">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                    {t("hub.learnMore")}
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
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white/55 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 py-14 sm:py-20">
          <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-medium text-charcoal">
              {t("hub.cta.title")}
            </h2>
            <p className="mt-4 text-stone max-w-2xl mx-auto">
              {t("hub.cta.subtitle")}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://heidelberg-zahnmedizin.termin.dampsoft.net/patientenportal/suche"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
              >
                {t("hub.cta.bookButton")}
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
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/60 backdrop-blur-sm text-charcoal px-8 py-3 rounded-full font-medium hover:bg-white/80 transition-colors"
              >
                {t("hub.cta.contactButton")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
