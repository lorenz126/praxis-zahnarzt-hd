export default function ProcessStep({ number, title, description, isLast }) {
  return (
    <div className="relative text-center">
      <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center mx-auto mb-6">
        <span className="text-xl font-medium text-white/80">
          {number}
        </span>
      </div>
      {!isLast && (
        <div className="hidden md:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-white/10" />
      )}
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-white/60 leading-relaxed">{description}</p>
    </div>
  );
}
