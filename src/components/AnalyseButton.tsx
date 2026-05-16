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
        className="mb-6 flex w-full items-center justify-center gap-3 rounded-none bg-[#1C1917] py-4 text-sm font-medium tracking-widest text-[#EFE9E3] uppercase transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-40"
      >
        {isLoading ? (
          <>
            <svg
              className="h-5 w-5 animate-spin"
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
          'Analyse My Wardrobe'
        )}
      </button>
    </div>
  );
}
