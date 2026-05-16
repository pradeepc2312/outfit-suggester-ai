import type { OutfitSuggestion } from '../types';
import OutfitCard from './OutfitCard';

interface ResultsSectionProps {
  suggestions: OutfitSuggestion[];
}

export default function ResultsSection({ suggestions }: ResultsSectionProps) {
  if (suggestions.length === 0) return null;

  return (
    <section className="mb-6 animate-fadeIn">
      <h2 className="mb-10 font-serif text-4xl font-bold text-[#1C1917] tracking-tight">Curated Looks</h2>
      <div className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <OutfitCard key={`${suggestion.occasion}-${index}`} suggestion={suggestion} index={index} />
        ))}
      </div>
    </section>
  );
}
