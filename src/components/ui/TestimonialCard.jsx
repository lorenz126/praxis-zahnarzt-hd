export default function TestimonialCard({ quote, name, role }) {
  return (
    <div className="flex flex-col p-8 sm:p-10 rounded-2xl border border-sand bg-white">
      <p className=" text-lg italic text-charcoal leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-6 pt-6 border-t border-sand">
        <p className="font-medium text-charcoal text-sm">{name}</p>
        <p className="text-stone text-sm">{role}</p>
      </div>
    </div>
  );
}
