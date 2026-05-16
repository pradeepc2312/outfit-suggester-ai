import { OCCASIONS } from '../constants/occasions';

interface OccasionSelectorProps {
  selected: string[];
  onToggle: (id: string) => void;
}

export default function OccasionSelector({ selected, onToggle }: OccasionSelectorProps) {
  return (
    <div className="mb-10 animate-fadeIn" style={{ animationDelay: '300ms' }}>
      <p className="mb-4 text-xs font-medium text-[#1C1917]/60 tracking-widest uppercase">Select Occasion</p>
      <div className="flex flex-wrap gap-3">
        {OCCASIONS.map((occasion) => {
          const isSelected = selected.includes(occasion.id);
          return (
            <button
              key={occasion.id}
              type="button"
              onClick={() => onToggle(occasion.id)}
              className={`cursor-pointer rounded-none border px-5 py-3 text-sm font-medium transition-colors duration-300 ${isSelected
                  ? 'border-[#1C1917] bg-[#1C1917] text-[#EFE9E3]'
                  : 'border-[#1C1917]/20 bg-transparent text-[#1C1917] hover:border-[#1C1917]'
                }`}
            >
              <span className="mr-2 opacity-80">{occasion.emoji}</span> 
              {occasion.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
