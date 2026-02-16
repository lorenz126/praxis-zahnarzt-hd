export default function SectionHeader({ eyebrow, title, subtitle, center = true, dark = false }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""} mb-16 sm:mb-20`}>
      {eyebrow && (
        <p className={`text-xs uppercase tracking-[0.2em] mb-4 ${dark ? "text-white/40" : "text-stone"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-heading font-medium ${dark ? "text-white" : "text-charcoal"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/60" : "text-charcoal-light"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
