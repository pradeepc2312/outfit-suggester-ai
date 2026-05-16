import { getOccasionDisplay } from '../constants/occasions';
import type { OutfitSuggestion } from '../types';

interface OutfitCardProps {
  suggestion: OutfitSuggestion;
  index: number;
}

export default function OutfitCard({ suggestion, index }: OutfitCardProps) {
  const display = getOccasionDisplay(suggestion.occasion);
  const emoji = display?.emoji ?? '✨';
  const label = display?.label ?? suggestion.occasion;

  return (
    <article
      className="animate-fadeIn mb-8 border-b border-[#1C1917]/10 pb-8 last:border-0"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <header className="mb-4 flex items-center gap-3">
        <span className="text-sm font-medium uppercase tracking-widest text-[#1C1917]/50">
          {emoji} {label}
        </span>
      </header>

      <h3 className="font-serif text-3xl font-bold text-[#1C1917] mb-6 leading-snug">{suggestion.headline}</h3>

      <ul className="mb-6 space-y-3">
        {suggestion.items.map((item) => (
          <li
            key={item}
            className="flex gap-4 text-sm leading-relaxed text-[#1C1917]/80 before:shrink-0 before:content-['—'] before:text-[#1C1917]/30"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6 border-l border-[#1C1917] pl-4">
        <span className="font-serif italic text-sm text-[#1C1917]/60 block mb-1">Styling Note</span>
        <p className="text-sm leading-relaxed text-[#1C1917]">{suggestion.tip}</p>
      </div>
    </article>
  );
}
