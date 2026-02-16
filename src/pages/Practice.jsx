import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import placeholderImg from "../assets/team-photo.jpg";

const technologyIcons = [
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
  </svg>,
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>,
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
  </svg>,
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
];

export default function Practice() {
  const { t } = useTranslation("practice");

  const team = t("team.members", { returnObjects: true });
  const technologies = t("technologies.items", { returnObjects: true }).map((tech, index) => ({
    ...tech,
    icon: technologyIcons[index],
  }));

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 pt-16 sm:pt-24 pb-12 sm:pb-16">
          <h1 className="text-4xl font-medium text-charcoal max-w-5xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 text-lg text-stone max-w-2xl">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-white/55 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-medium text-charcoal mb-6">
                Unsere Philosophie
              </h2>
              <div className="space-y-4 text-stone leading-relaxed">
                <p>
                  In unserer Zahnarztpraxis verbinden wir modernste Technologie
                  mit persönlicher, einfühlsamer Betreuung. Seit über 25 Jahren
                  sind wir Ihre Ansprechpartner für ganzheitliche
                  Zahngesundheit in Heidelberg.
                </p>
                <p>
                  Unser Ziel ist es, Ihre natürlichen Zähne so lange wie
                  möglich zu erhalten. Durch präventive Maßnahmen,
                  minimalinvasive Behandlungsmethoden und regelmäßige
                  Weiterbildung unseres Teams bieten wir Ihnen Zahnmedizin auf
                  höchstem Niveau.
                </p>
                <p>
                  Wir nehmen uns Zeit für Sie - für eine ausführliche Beratung,
                  eine schonende Behandlung und Ihre individuellen Bedürfnisse.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20">
              <img
                src={placeholderImg}
                alt="Praxisphilosophie"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 py-14 sm:py-20">
          <h2 className="text-2xl font-medium text-charcoal mb-12">
            Unser Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl bg-white/40 backdrop-blur-sm p-6"
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 mb-4">
                  <img
                    src={placeholderImg}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-sm text-primary font-medium mb-1">
                  {member.experience}
                </div>
                <h3 className="text-lg font-medium text-charcoal mb-1">
                  {member.name}
                </h3>
                <div className="text-sm text-stone mb-3">{member.role}</div>
                <p className="text-sm text-stone leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-white/55 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 py-14 sm:py-20">
          <h2 className="text-2xl font-medium text-charcoal mb-6">
            Modernste Technologie
          </h2>
          <p className="text-stone mb-12 max-w-2xl">
            Wir investieren kontinuierlich in modernste zahnmedizinische
            Technologie, um Ihnen die beste Behandlungsqualität zu bieten.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.title}
                className="p-6 rounded-2xl bg-white/40 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-medium text-charcoal mb-2">
                  {tech.title}
                </h3>
                <p className="text-sm text-stone leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 py-14 sm:py-20">
          <h2 className="text-2xl font-medium text-charcoal mb-12">
            Unsere Lage
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-charcoal mb-4">
                Zentral im Ärztehaus HD-West
              </h3>
              <div className="space-y-4 text-stone">
                <div>
                  <p className="font-medium text-charcoal">Adresse</p>
                  <p>Franz-Knauff-Straße 2-4</p>
                  <p>69115 Heidelberg</p>
                  <p className="text-sm mt-1">4. Stock im Ärztehaus HD-West</p>
                </div>
                <div>
                  <p className="font-medium text-charcoal">Anfahrt</p>
                  <p className="text-sm">
                    • Mit dem Auto: Parkplätze vor dem Haus vorhanden
                    <br />
                    • Mit dem ÖPNV: Haltestelle Pfaffengrund/Telekom
                    <br />• Barrierefreier Zugang mit Aufzug
                  </p>
                </div>
                <div>
                  <p className="font-medium text-charcoal">Kontakt</p>
                  <p>Tel: 06221 - 6184010</p>
                  <p>
                    E-Mail:{" "}
                    <a
                      href="mailto:info@heidelberg-zahnmedizin.de"
                      className="text-primary hover:underline"
                    >
                      info@heidelberg-zahnmedizin.de
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <iframe
                title="Zahnarztpraxis Heidelberg Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.1!2d8.6519!3d49.3854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c1234abcdef%3A0x123456789!2sFranz-Knauff-Stra%C3%9Fe+2-4%2C+69115+Heidelberg!5e0!3m2!1sde!2sde!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white/55 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 py-14 sm:py-20">
          <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-medium text-charcoal">
              Besuchen Sie uns
            </h2>
            <p className="mt-4 text-stone max-w-2xl mx-auto">
              Vereinbaren Sie einen Termin und lernen Sie unser Team und unsere
              moderne Praxis persönlich kennen.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
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
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/60 backdrop-blur-sm text-charcoal px-8 py-3 rounded-full font-medium hover:bg-white/80 transition-colors"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
