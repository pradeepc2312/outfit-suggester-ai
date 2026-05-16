interface ErrorCardProps {
  onRetry: () => void;
}

export default function ErrorCard({ onRetry }: ErrorCardProps) {
  return (
    <div className="mb-6 border border-[#1C1917]/20 p-8 text-center animate-fadeIn bg-white/50">
      <p className="mb-4 text-3xl opacity-50" aria-hidden>
        *
      </p>
      <p className="mb-6 text-sm text-[#1C1917] leading-relaxed font-serif italic">
        We encountered an issue curating your wardrobe.<br/>
        Please check your connection and try a clearer image.
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="rounded-none border border-[#1C1917] px-8 py-3 text-xs font-medium tracking-widest text-[#1C1917] uppercase transition-colors hover:bg-[#1C1917] hover:text-[#EFE9E3]"
      >
        Try Again
      </button>
    </div>
  );
}
