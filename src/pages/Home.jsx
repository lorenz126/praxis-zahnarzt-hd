import { useState } from "react";
import { Link } from "react-router-dom";
import teamPhoto from "../assets/team-photo.jpg";
import babyBotoxImg from "../assets/baby-botox.jpg";
import skinAnalysisImg from "../assets/skin-analysis.jpg";
import beautyGlowImg from "../assets/beauty-glow.jpg";
import infusionImg from "../assets/infusion.jpg";
import insightPreventionImg from "../assets/jonathan-borba-n1B6ftPB5Eg-unsplash.jpg";
import insightLongevityImg from "../assets/austrian-national-library-aHMpOhw7u1E-unsplash.jpg";
import insightSkinImg from "../assets/vinoth-ragunathan-cvQ6wD3bPYE-unsplash.jpg";

const insightImages = [insightPreventionImg, insightLongevityImg, insightSkinImg];

const treatmentImages = [
  babyBotoxImg,
  skinAnalysisImg,
  beautyGlowImg,
  infusionImg,
];

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }, (_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* 1. Hero — lightest glass, mesh most visible */}
      <section className="bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 pt-16 sm:pt-24 pb-12 sm:pb-16">
          <h1 className="text-4xl font-medium text-charcoal max-w-5xl">
            Gesunde Zähne ein Leben lang
          </h1>
          <p className="mt-6 text-lg text-stone max-w-2xl">
            Herzlich willkommen in unserer Zahnarztpraxis im Ärztehaus West - mitten im Herzen von Heidelberg. Wir bieten Ihnen moderne Zahnmedizin mit persönlicher Betreuung in angenehmer Atmosphäre.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 pb-14 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4">
            {/* Left — hero image placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10 bg-gradient-to-br from-primary/20 to-secondary/20">
              <div className="aspect-[16/9] lg:aspect-auto lg:min-h-[400px] flex items-center justify-center p-12">
                <div className="text-center">
                  <h2 className="text-3xl sm:text-5xl font-medium text-charcoal mb-4">
                    Gesunde Zähne
                  </h2>
                  <p className="text-lg text-stone mb-8">
                    Ein Leben lang
                  </p>
                  <a
                    href="https://heidelberg-zahnmedizin.termin.dampsoft.net/patientenportal/suche"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-charcoal text-cream px-6 py-3 rounded-full font-medium text-sm hover:gap-3 transition-all"
                  >
                    Termin buchen
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

            {/* Right column */}
            <div className="hidden lg:flex flex-col gap-4">
              {/* Team photo card */}
              <Link
                to="/about#team"
                className="group relative rounded-2xl overflow-hidden flex-1 min-h-0"
              >
                <img
                  src={teamPhoto}
                  alt="Unser Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium">
                    Unser Team
                  </p>
                  <p className="text-white/60 text-sm mt-1">
                    Erfahren und einfühlsam
                  </p>
                </div>
              </Link>

              {/* Service card */}
              <Link
                to="/services"
                className="group rounded-2xl bg-cream-dark/50 backdrop-blur-sm p-6 flex flex-col justify-end min-h-[130px] hover:bg-sand/30 transition-colors"
              >
                <p className="text-charcoal font-medium">
                  Unsere Leistungen
                </p>
                <span className="mt-1 text-stone text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Mehr erfahren
                  <svg
                    className="w-3.5 h-3.5"
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
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Services */}
      <section className="bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 py-14 sm:py-20">
          <h2 className="text-2xl font-medium text-charcoal mb-2">
            Unsere Schwerpunkte
          </h2>
          <p className="text-stone mb-12">Moderne Zahnmedizin für Ihre Gesundheit</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/services/prevention" className="group">
              {/* Image area */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                <img
                  src={insightImages[0]}
                  alt="Prophylaxe & Vorsorge"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Text below */}
              <span className="mt-3 inline-block text-xs font-medium text-charcoal/50 uppercase tracking-wider">
                Prävention
              </span>
              <h3 className="mt-1 text-base font-medium text-charcoal leading-snug group-hover:text-primary transition-colors">
                Prophylaxe & Vorsorge
              </h3>
              <p className="mt-1.5 text-sm text-stone">Langfristige Zahngesundheit für Kinder, Jugendliche und Erwachsene in freundlicher Atmosphäre</p>
            </Link>

            <Link to="/services/periodontology" className="group">
              {/* Image area */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                <img
                  src={insightImages[1]}
                  alt="Parodontologie"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Text below */}
              <span className="mt-3 inline-block text-xs font-medium text-charcoal/50 uppercase tracking-wider">
                Zahnfleischbehandlung
              </span>
              <h3 className="mt-1 text-base font-medium text-charcoal leading-snug group-hover:text-primary transition-colors">
                Parodontologie
              </h3>
              <p className="mt-1.5 text-sm text-stone">Erfahrene Behandlung von Zahnfleischerkrankungen mit modernen Methoden</p>
            </Link>

            <Link to="/services/prosthodontics" className="group">
              {/* Image area */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                <img
                  src={insightImages[2]}
                  alt="CEREC® Keramik-Rekonstruktion"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Text below */}
              <span className="mt-3 inline-block text-xs font-medium text-charcoal/50 uppercase tracking-wider">
                Modernste Technologie
              </span>
              <h3 className="mt-1 text-base font-medium text-charcoal leading-snug group-hover:text-primary transition-colors">
                CEREC® Keramik-Rekonstruktion
              </h3>
              <p className="mt-1.5 text-sm text-stone">Kronen, Inlays, Brücken, Veneers und Implantatkomponenten - seit 2011 in unserer Praxis</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Weitere Leistungen */}
      <section className="bg-white/65 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 py-14 sm:py-20">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="text-2xl font-medium text-charcoal">
              Weitere Leistungen
            </h2>
            <Link
              to="/services"
              className="text-sm font-medium text-stone hover:text-charcoal transition-colors inline-flex items-center gap-1.5 hover:gap-2.5"
            >
              Alle Leistungen
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
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/services/fillings" className="group">
              <div className="relative aspect-square rounded-2xl overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                <img
                  src={treatmentImages[0]}
                  alt="Füllungen"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="mt-4 text-base font-medium text-charcoal leading-snug group-hover:text-primary transition-colors">
                Füllungen
              </h3>
              <p className="mt-1.5 text-sm text-stone">
                Biokompatible Materialien
              </p>
            </Link>

            <Link to="/services/endodontics" className="group">
              <div className="relative aspect-square rounded-2xl overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                <img
                  src={treatmentImages[1]}
                  alt="Wurzelbehandlung"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="mt-4 text-base font-medium text-charcoal leading-snug group-hover:text-primary transition-colors">
                Wurzelbehandlung
              </h3>
              <p className="mt-1.5 text-sm text-stone">
                Schonende Endodontie
              </p>
            </Link>

            <Link to="/services/implantology" className="group">
              <div className="relative aspect-square rounded-2xl overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                <img
                  src={treatmentImages[2]}
                  alt="Implantologie"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="mt-4 text-base font-medium text-charcoal leading-snug group-hover:text-primary transition-colors">
                Implantologie
              </h3>
              <p className="mt-1.5 text-sm text-stone">
                3D-geführte Implantate
              </p>
            </Link>

            <Link to="/services/aesthetics" className="group">
              <div className="relative aspect-square rounded-2xl overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                <img
                  src={treatmentImages[3]}
                  alt="Zahnästhetik"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="mt-4 text-base font-medium text-charcoal leading-snug group-hover:text-primary transition-colors">
                Zahnästhetik
              </h3>
              <p className="mt-1.5 text-sm text-stone">
                Bleaching & Veneers
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Find Us — lighter glass, mesh shows through */}
      <section id="find-us" className="bg-white/55 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 py-14 sm:py-20">
          <h2 className="text-2xl font-medium text-charcoal mb-4">
            So finden Sie uns
          </h2>
          <p className="text-charcoal-light mb-12">Mitten im Herzen von Heidelberg - gut erreichbar mit Auto und ÖPNV</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left — Map */}
            <div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <iframe
                  title="Zahnarztpraxis Heidelberg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.1!2d8.6519!3d49.3854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c1234abcdef%3A0x123456789!2sFranz-Knauff-Stra%C3%9Fe+2-4%2C+69115+Heidelberg!5e0!3m2!1sde!2sde!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4">
                <p className="text-charcoal font-medium">
                  Zahnarztpraxis Dr. Herrmann-Flechtenmacher
                </p>
                <p className="text-stone text-sm mt-1">
                  Franz-Knauff-Straße 2-4<br />
                  69115 Heidelberg<br />
                  Ärztehaus HD-West, 4. Stock
                </p>
                <p className="text-stone text-sm mt-3 font-medium">Sprechzeiten:</p>
                <p className="text-stone text-sm">
                  Mo, Mi: 8:00 - 16:00 Uhr<br />
                  Di: 9:00 - 18:00 Uhr<br />
                  Do: 10:00 - 19:00 Uhr<br />
                  Fr: 8:00 - 14:00 Uhr
                </p>
                <p className="text-stone/60 text-xs mt-2">
                  Termine nach Vereinbarung
                </p>
              </div>
            </div>

            {/* Right — Contact & Info */}
            <div className="space-y-4">
              <div className="p-6 bg-white/40 backdrop-blur-sm rounded-2xl">
                <h3 className="text-lg font-medium text-charcoal mb-4">Kontakt</h3>
                <div className="space-y-2 text-sm text-stone">
                  <p>
                    <span className="font-medium text-charcoal">Telefon:</span><br />
                    <a href="tel:062216184010" className="text-primary hover:underline">
                      06221 - 6184010
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-charcoal">E-Mail:</span><br />
                    <a href="mailto:info@heidelberg-zahnmedizin.de" className="text-primary hover:underline">
                      info@heidelberg-zahnmedizin.de
                    </a>
                  </p>
                  <p className="pt-2">
                    <a
                      href="https://heidelberg-zahnmedizin.termin.dampsoft.net/patientenportal/suche"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-medium text-sm hover:bg-primary-dark transition-colors"
                    >
                      Online Termin buchen
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white/40 backdrop-blur-sm rounded-2xl">
                <h3 className="text-lg font-medium text-charcoal mb-4">Anfahrt</h3>
                <div className="space-y-2 text-sm text-stone">
                  <p>
                    <span className="font-medium text-charcoal">Mit dem Auto:</span><br />
                    Parkplätze vor dem Haus vorhanden<br />
                    Behindertenparkplätze verfügbar
                  </p>
                  <p>
                    <span className="font-medium text-charcoal">Mit dem ÖPNV:</span><br />
                    Haltestelle Pfaffengrund/Telekom<br />
                    Barrierefreier Zugang mit Aufzug
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ — heavier glass */}
      <section className="bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 py-14 sm:py-20">
          <h2 className="text-2xl font-medium text-charcoal mb-12">
            Häufige Fragen
          </h2>
          <div className="max-w-7xl divide-y divide-sand">
            <div>
              <button
                onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-charcoal font-medium pr-8 group-hover:text-black transition-colors">
                  Wie erreiche ich die Praxis mit öffentlichen Verkehrsmitteln?
                </span>
                <svg
                  className={`w-5 h-5 text-stone shrink-0 transition-transform duration-200 ${openFaq === 0 ? "rotate-45" : ""}`}
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
                className={`overflow-hidden transition-all duration-300 ease-out ${openFaq === 0 ? "max-h-48 opacity-100 pb-5" : "max-h-0 opacity-0"}`}
              >
                <p className="text-charcoal-light text-sm leading-relaxed pr-12">
                  Unsere Praxis ist sehr gut mit öffentlichen Verkehrsmitteln erreichbar. Die nächste Haltestelle ist Pfaffengrund/Telekom. Parkplätze sind direkt vor dem Haus vorhanden, auch Behindertenparkplätze stehen zur Verfügung.
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-charcoal font-medium pr-8 group-hover:text-black transition-colors">
                  Wie oft sollte ich zur Prophylaxe kommen?
                </span>
                <svg
                  className={`w-5 h-5 text-stone shrink-0 transition-transform duration-200 ${openFaq === 1 ? "rotate-45" : ""}`}
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
                className={`overflow-hidden transition-all duration-300 ease-out ${openFaq === 1 ? "max-h-48 opacity-100 pb-5" : "max-h-0 opacity-0"}`}
              >
                <p className="text-charcoal-light text-sm leading-relaxed pr-12">
                  Wir empfehlen eine professionelle Zahnreinigung alle 6 Monate. Bei erhöhtem Kariesrisiko oder Parodontitis kann eine häufigere Prophylaxe sinnvoll sein. Wir beraten Sie gerne individuell.
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-charcoal font-medium pr-8 group-hover:text-black transition-colors">
                  Was ist CEREC® und welche Vorteile bietet es?
                </span>
                <svg
                  className={`w-5 h-5 text-stone shrink-0 transition-transform duration-200 ${openFaq === 2 ? "rotate-45" : ""}`}
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
                className={`overflow-hidden transition-all duration-300 ease-out ${openFaq === 2 ? "max-h-48 opacity-100 pb-5" : "max-h-0 opacity-0"}`}
              >
                <p className="text-charcoal-light text-sm leading-relaxed pr-12">
                  CEREC® ist ein computergestütztes System zur Herstellung von Keramik-Zahnersatz. Der große Vorteil: Kronen, Inlays und Brücken können oft in nur einer Sitzung gefertigt werden - ohne Provisorium und ohne zweiten Termin.
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-charcoal font-medium pr-8 group-hover:text-black transition-colors">
                  Wie kann ich einen Termin vereinbaren?
                </span>
                <svg
                  className={`w-5 h-5 text-stone shrink-0 transition-transform duration-200 ${openFaq === 3 ? "rotate-45" : ""}`}
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
                className={`overflow-hidden transition-all duration-300 ease-out ${openFaq === 3 ? "max-h-48 opacity-100 pb-5" : "max-h-0 opacity-0"}`}
              >
                <p className="text-charcoal-light text-sm leading-relaxed pr-12">
                  Sie können telefonisch unter 06221-6184010 einen Termin vereinbaren oder bequem unser Online-Buchungsportal nutzen. Für Notfälle außerhalb der Sprechzeiten wenden Sie sich bitte an den zahnärztlichen Notdienst unter 01805-607011.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
