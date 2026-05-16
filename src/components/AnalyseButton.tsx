interface AnalyseButtonProps {
  disabled: boolean;
  isLoading: boolean;
  onClick: () => void;
}

export default function AnalyseButton({ disabled, isLoading, onClick }: AnalyseButtonProps) {
  return (
    <div className="animate-fadeIn" style={{ animationDelay: '400ms' }}>
      <button
        type="button"
        onClick={onClick}
        disabled={disabled || isLoading}
        className="group relative flex w-full items-center justify-center gap-4 overflow-hidden rounded-none bg-[#1C1917] py-5 text-sm font-bold tracking-[0.2em] text-[#EFE9E3] uppercase transition-all duration-300 hover:bg-black hover:shadow-xl disabled:cursor-not-allowed disabled:bg-[#1C1917]/20 disabled:text-[#1C1917]/50 disabled:shadow-none"
      >
        {isLoading ? (
          <>
            <svg
              className="h-5 w-5 animate-spin text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Analysing Wardrobe…
          </>
        ) : (
          <>
            <span>Analyse My Wardrobe</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </button>
    </div>
  );
}
