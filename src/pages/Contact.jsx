import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
    alert(
      "Vielen Dank für Ihre Nachricht! Wir melden uns schnellstmöglich bei Ihnen."
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const officeHours = [
    { day: "Montag", hours: "8:00 - 16:00 Uhr" },
    { day: "Dienstag", hours: "9:00 - 18:00 Uhr" },
    { day: "Mittwoch", hours: "8:00 - 16:00 Uhr" },
    { day: "Donnerstag", hours: "10:00 - 19:00 Uhr" },
    { day: "Freitag", hours: "8:00 - 14:00 Uhr" },
    { day: "Samstag", hours: "Geschlossen" },
    { day: "Sonntag", hours: "Geschlossen" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 pt-16 sm:pt-24 pb-12 sm:pb-16">
          <h1 className="text-4xl font-medium text-charcoal max-w-5xl">
            Kontakt
          </h1>
          <p className="mt-6 text-lg text-stone max-w-2xl">
            Wir sind für Sie da - kontaktieren Sie uns für Terminvereinbarungen,
            Fragen oder Notfälle.
          </p>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="bg-white/55 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 py-14 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Phone */}
            <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-sm text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-charcoal mb-2">Telefon</h3>
              <a
                href="tel:062216184010"
                className="text-primary hover:underline"
              >
                06221 - 6184010
              </a>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-sm text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-charcoal mb-2">E-Mail</h3>
              <a
                href="mailto:info@heidelberg-zahnmedizin.de"
                className="text-primary hover:underline break-all"
              >
                info@heidelberg-zahnmedizin.de
              </a>
            </div>

            {/* Address */}
            <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-sm text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-charcoal mb-2">Adresse</h3>
              <p className="text-stone text-sm">
                Franz-Knauff-Straße 2-4
                <br />
                69115 Heidelberg
                <br />
                <span className="text-xs">Ärztehaus HD-West, 4. Stock</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours & Map */}
      <section className="bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Office Hours */}
            <div>
              <h2 className="text-2xl font-medium text-charcoal mb-6">
                Sprechzeiten
              </h2>
              <div className="rounded-2xl bg-white/40 backdrop-blur-sm overflow-hidden">
                <table className="w-full">
                  <tbody className="divide-y divide-sand/50">
                    {officeHours.map((item) => (
                      <tr key={item.day}>
                        <td className="px-6 py-4 text-charcoal font-medium">
                          {item.day}
                        </td>
                        <td className="px-6 py-4 text-stone text-right">
                          {item.hours}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-stone">
                Termine nach Vereinbarung. Für Notfälle außerhalb der
                Sprechzeiten wenden Sie sich bitte an den zahnärztlichen
                Notdienst: <strong>01805 - 607011</strong>
              </p>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-medium text-charcoal mb-6">
                So finden Sie uns
              </h2>
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
              <p className="mt-4 text-sm text-stone">
                <strong>Anfahrt:</strong> Parkplätze vor dem Haus vorhanden.
                ÖPNV: Haltestelle Pfaffengrund/Telekom. Barrierefreier Zugang
                mit Aufzug.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white/55 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 py-14 sm:py-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-medium text-charcoal mb-6 text-center">
              Schreiben Sie uns
            </h2>
            <p className="text-stone text-center mb-8">
              Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Nutzen
              Sie unser Kontaktformular.
            </p>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white/40 backdrop-blur-sm p-8 space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-charcoal mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/60 border border-sand focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="Ihr Name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/60 border border-sand focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    placeholder="ihre@email.de"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/60 border border-sand focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-charcoal mb-2"
                >
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg bg-white/60 border border-sand focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                  placeholder="Ihre Nachricht an uns..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
              >
                Nachricht senden
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
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Online Booking CTA */}
      <section className="bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 py-14 sm:py-20">
          <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-medium text-charcoal">
              Online Termin buchen
            </h2>
            <p className="mt-4 text-stone max-w-2xl mx-auto">
              Buchen Sie Ihren Wunschtermin ganz einfach online - schnell,
              unkompliziert und rund um die Uhr.
            </p>
            <div className="mt-8">
              <a
                href="https://heidelberg-zahnmedizin.termin.dampsoft.net/patientenportal/suche"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
              >
                Zum Online-Terminkalender
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

      {/* Patient Forms Section */}
      <section className="bg-white/55 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-6 lg:pr-12 py-14 sm:py-20">
          <h2 className="text-2xl font-medium text-charcoal mb-6 text-center">
            Patientenformulare
          </h2>
          <p className="text-stone text-center mb-8 max-w-2xl mx-auto">
            Bereiten Sie Ihren ersten Besuch vor - laden Sie unsere
            Patientenformulare herunter und bringen Sie diese ausgefüllt mit.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-sm text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-medium text-charcoal mb-1">
                Anamnesebogen
              </h3>
              <p className="text-xs text-stone mb-3">
                Für Neupatienten
              </p>
              <button className="text-sm text-primary hover:underline">
                Download (PDF)
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-sm text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-medium text-charcoal mb-1">
                Datenschutzerklärung
              </h3>
              <p className="text-xs text-stone mb-3">
                DSGVO-Informationen
              </p>
              <button className="text-sm text-primary hover:underline">
                Download (PDF)
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-sm text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-medium text-charcoal mb-1">
                Einwilligungserklärung
              </h3>
              <p className="text-xs text-stone mb-3">
                Behandlung & Daten
              </p>
              <button className="text-sm text-primary hover:underline">
                Download (PDF)
              </button>
            </div>
          </div>
          <p className="text-xs text-stone text-center mt-6">
            * Diese Formulare stehen demnächst zum Download bereit
          </p>
        </div>
      </section>
    </>
  );
}
