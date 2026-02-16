export default function Impressum() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 pt-16 sm:pt-24 pb-12 sm:pb-16">
          <h1 className="text-4xl font-medium text-charcoal max-w-5xl">
            Impressum
          </h1>
        </div>
      </section>

      {/* Legal Content */}
      <section className="bg-white/55 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
          <div className="prose prose-stone max-w-none">
            {/* Practice Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-medium text-charcoal mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="text-stone space-y-1">
                <p className="font-medium text-charcoal">
                  Dr. med. dent. Christine Herrmann-Flechtenmacher
                </p>
                <p>Zahnarztpraxis</p>
                <p>Franz-Knauff-Straße 2-4</p>
                <p>69115 Heidelberg</p>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-8">
              <h2 className="text-2xl font-medium text-charcoal mb-4">
                Kontakt
              </h2>
              <div className="text-stone space-y-1">
                <p>
                  Telefon:{" "}
                  <a
                    href="tel:062216184010"
                    className="text-primary hover:underline"
                  >
                    06221 - 6184010
                  </a>
                </p>
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

            {/* Professional Registration */}
            <div className="mb-8">
              <h2 className="text-2xl font-medium text-charcoal mb-4">
                Berufsbezeichnung und berufsrechtliche Regelungen
              </h2>
              <div className="text-stone space-y-2">
                <p>
                  <strong>Berufsbezeichnung:</strong> Zahnärztin, verliehen in
                  der Bundesrepublik Deutschland
                </p>
                <p>
                  <strong>Zuständige Kammer:</strong>
                  <br />
                  Landeszahnärztekammer Baden-Württemberg
                  <br />
                  Albstadtweg 9, 70567 Stuttgart
                  <br />
                  <a
                    href="https://www.lzk-bw.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.lzk-bw.de
                  </a>
                </p>
                <p>
                  <strong>Zuständige Aufsichtsbehörde:</strong>
                  <br />
                  Kassenzahnärztliche Vereinigung Baden-Württemberg
                  <br />
                  Bezirksdirektion Karlsruhe
                  <br />
                  Albtalstraße 32, 76137 Karlsruhe
                </p>
                <p>
                  <strong>Berufsrechtliche Regelungen:</strong>
                  <br />- Heilberufe-Kammergesetz (HBKG)
                  <br />- Berufsordnung der Landeszahnärztekammer
                  Baden-Württemberg
                  <br />- Gebührenordnung für Zahnärzte (GOZ)
                  <br />
                  Die Regelungen sind einsehbar unter:{" "}
                  <a
                    href="https://www.lzk-bw.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.lzk-bw.de
                  </a>
                </p>
              </div>
            </div>

            {/* VAT */}
            <div className="mb-8">
              <h2 className="text-2xl font-medium text-charcoal mb-4">
                Umsatzsteuer-ID
              </h2>
              <div className="text-stone">
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß §27 a
                  Umsatzsteuergesetz: auf Anfrage
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mb-8">
              <h2 className="text-2xl font-medium text-charcoal mb-4">
                Haftungsausschluss
              </h2>
              <div className="text-stone space-y-4">
                <div>
                  <h3 className="font-medium text-charcoal mb-2">
                    Haftung für Inhalte
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt
                    erstellt. Für die Richtigkeit, Vollständigkeit und
                    Aktualität der Inhalte können wir jedoch keine Gewähr
                    übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG
                    für eigene Inhalte auf diesen Seiten nach den allgemeinen
                    Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                    Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                    gespeicherte fremde Informationen zu überwachen oder nach
                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                    hinweisen.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-charcoal mb-2">
                    Haftung für Links
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Unser Angebot enthält Links zu externen Webseiten Dritter,
                    auf deren Inhalte wir keinen Einfluss haben. Deshalb können
                    wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    Für die Inhalte der verlinkten Seiten ist stets der
                    jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
                    auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
                    waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-charcoal mb-2">Urheberrecht</h3>
                  <p className="text-sm leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke
                    auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                    der Verwertung außerhalb der Grenzen des Urheberrechtes
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                    bzw. Erstellers. Downloads und Kopien dieser Seite sind nur
                    für den privaten, nicht kommerziellen Gebrauch gestattet.
                  </p>
                </div>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-8">
              <h2 className="text-2xl font-medium text-charcoal mb-4">
                Streitschlichtung
              </h2>
              <div className="text-stone text-sm leading-relaxed">
                <p>
                  Die Europäische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                  . Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
                <p className="mt-2">
                  Wir sind nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
