interface LoadingBarProps {
  message: string;
}

export default function LoadingBar({ message }: LoadingBarProps) {
  return (
    <div className="mb-6 animate-fadeIn" aria-live="polite">
      <div className="h-[1px] w-full overflow-hidden bg-[#1C1917]/10">
        <div className="animate-progress h-[1px] bg-[#1C1917]" />
      </div>
      <p className="mt-4 text-center text-xs font-serif italic text-[#1C1917]/60 animate-pulse">{message}</p>
    </div>
  );
}
