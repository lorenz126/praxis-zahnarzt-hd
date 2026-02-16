import { useTranslation } from "react-i18next";
import teamPhoto from "../assets/team-photo.jpg";

export default function About() {
  const accentColor = "#2563EB"; // Professional blue
  const { t } = useTranslation("about");
  const { t: tc } = useTranslation("common");

  const team = [
    {
      name: t("team.drHerrmann.name"),
      role: t("team.drHerrmann.role"),
      image: null,
      expertise: [
        t("team.expertise.prevention"),
        t("team.expertise.aesthetics"),
        t("team.expertise.functional"),
        t("team.expertise.prosthetics"),
      ],
      bio: t("team.drHerrmann.bio"),
    },
    {
      name: t("team.gabriele.name"),
      role: t("team.gabriele.role"),
      image: null,
      expertise: [
        t("team.expertise.prevention"),
      ],
      bio: t("team.gabriele.bio"),
    },
    {
      name: t("team.sandra.name"),
      role: t("team.sandra.role"),
      image: null,
      expertise: [],
      bio: t("team.sandra.bio"),
    },
  ];

  const pillars = [
    {
      title: t("pillars.modern.title"),
      description: t("pillars.modern.description"),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
    },
    {
      title: t("pillars.prevention.title"),
      description: t("pillars.prevention.description"),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      title: t("pillars.care.title"),
      description: t("pillars.care.description"),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section>
        <div className="section py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold text-black">
              {t("hero.title")}
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy with Team Photo */}
      <section className="section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-black mb-6">
              {t("philosophy.title")}
            </h2>
            <p className="text-gray-600">
              {t("philosophy.p1")}
            </p>
            <p className="mt-4 text-gray-600">
              {t("philosophy.p2")}
            </p>
            <p className="mt-4 text-gray-600 font-medium">
              {t("philosophy.p3")}
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src={teamPhoto}
              alt="Zahnarztpraxis Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section>
        <div className="section">
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-200"
              >
                <div style={{ color: accentColor }} className="mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-semibold text-black">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section" id="team">
        <h2 className="text-3xl font-semibold text-black text-center mb-4">
          {t("team.title")}
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          {t("team.subtitle")}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200 overflow-hidden"
            >
              <div className="bg-gray-100 aspect-[4/3]">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-300">
                    <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black">
                  {member.name}
                </h3>
                <p className="text-gray-500 mt-1">{member.role}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-black text-white" id="contact">
        <div className="section">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold">{t("contact.title")}</h2>
            <p className="mt-4 text-white/80">
              {t("contact.description")}
            </p>
            <div className="mt-8">
              <p className="text-white/90">
                <span className="text-white/60">{t("contact.email")}:</span>{" "}
                info@heidelberg-zahnmedizin.de
              </p>
            </div>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                {tc("buttons.contactUs")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
