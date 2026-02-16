import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("common");
  const { t: th } = useTranslation("home");
  const dotColor = "#2563EB"; // Professional blue for dental practice

  return (
    <footer className="bg-white/60 backdrop-blur-sm border-t border-white">
      {/* Footer grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block">
              <div className="text-lg font-medium text-charcoal leading-tight">
                <div>Zahnarztpraxis</div>
                <div className="text-sm text-stone">Dr. Herrmann-Flechtenmacher</div>
              </div>
            </Link>
            <p className="mt-4 text-sm text-stone leading-relaxed max-w-[240px]">
              {t("footer.tagline")}
            </p>
          </div>
          {/* Services */}
          <div>
            <h4 className="text-xs font-medium text-stone uppercase tracking-wider mb-4">
              {t("footer.services")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/services"
                  className="text-charcoal-light hover:text-charcoal transition-colors"
                >
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link
                  to="/practice"
                  className="text-charcoal-light hover:text-charcoal transition-colors"
                >
                  {t("nav.practice")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-charcoal-light hover:text-charcoal transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link
                  to="/impressum"
                  className="text-charcoal-light hover:text-charcoal transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  to="/datenschutz"
                  className="text-charcoal-light hover:text-charcoal transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h4 className="text-xs font-medium text-stone uppercase tracking-wider mb-4">
              {t("footer.company")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-charcoal-light hover:text-charcoal transition-colors"
                >
                  {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about#team"
                  className="text-charcoal-light hover:text-charcoal transition-colors"
                >
                  {t("footer.ourTeam")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-charcoal-light hover:text-charcoal transition-colors"
                >
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>
          {/* Visit us */}
          <div>
            <h4 className="text-xs font-medium text-stone uppercase tracking-wider mb-4">
              {t("nav.findUs")}
            </h4>
            <div className="text-sm space-y-2.5">
              <p className="text-charcoal-light">{th("findUs.address")}</p>
              <p className="text-charcoal-light">{th("findUs.addressLine")}</p>
              <p className="text-stone text-xs mt-3">{th("findUs.hours")}</p>
              <a
                href="mailto:info@heidelberg-zahnmedizin.de"
                className="text-charcoal-light hover:text-charcoal transition-colors inline-block mt-1"
              >
                info@heidelberg-zahnmedizin.de
              </a>
              <p className="text-charcoal-light mt-2">
                Tel: 06221 - 6184010
              </p>
            </div>
          </div>{" "}
        </div>{" "}
        {/* Bottom bar */}{" "}
        <div className="mt-12 pt-8 border-t border-white/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          {" "}
          <p className="text-xs text-stone">
            {" "}
            &copy; {new Date().getFullYear()} {t("footer.copyright")}{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
}
