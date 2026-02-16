export default function StatCard({ number, label, dark = false }) {
  return (
    <div className="text-center">
      <div className={`text-3xl sm:text-4xl font-medium ${dark ? "text-white" : "text-charcoal"}`}>
        {number}
      </div>
      <div className={`text-sm uppercase tracking-wide mt-2 ${dark ? "text-white/40" : "text-stone"}`}>
        {label}
      </div>
    </div>
  );
}
