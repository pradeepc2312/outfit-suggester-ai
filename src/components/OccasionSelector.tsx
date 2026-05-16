import { OCCASIONS } from '../constants/occasions';

interface OccasionSelectorProps {
  selected: string[];
  onToggle: (id: string) => void;
}

export default function OccasionSelector({ selected, onToggle }: OccasionSelectorProps) {
  return (
    <div className="animate-fadeIn" style={{ animationDelay: '300ms' }}>
      <div className="flex justify-between items-end mb-6">
        <p className="text-xs font-bold tracking-[0.2em] text-[#1C1917] uppercase">
          Select Occasion
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {OCCASIONS.map((occasion) => {
          const isSelected = selected.includes(occasion.id);
          return (
            <button
              key={occasion.id}
              type="button"
              onClick={() => onToggle(occasion.id)}
              className={`group flex items-center justify-between cursor-pointer border px-5 py-4 text-sm font-medium transition-all duration-300 ${
                isSelected
                  ? 'border-[#1C1917] bg-[#1C1917] text-white shadow-md'
                  : 'border-[#1C1917]/10 bg-white/40 text-[#1C1917] hover:border-[#1C1917]/40 hover:bg-white'
              }`}
            >
              <span className="tracking-wide">{occasion.label}</span>
              <span className={`text-lg transition-transform duration-300 group-hover:scale-110 ${
                isSelected ? 'opacity-100' : 'opacity-50 grayscale'
              }`}>
                {occasion.emoji}
              </span> 
            </button>
          );
        })}
      </div>
    </div>
  );
}
