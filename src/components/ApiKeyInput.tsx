interface ApiKeyInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ApiKeyInput({ value, onChange }: ApiKeyInputProps) {
  return (
    <div className="mb-10">
      <label htmlFor="api-key" className="mb-2 block text-xs font-medium text-[#1C1917]/60 tracking-widest uppercase">
        Anthropic API Key
      </label>
      <input
        id="api-key"
        type="password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="sk-ant-…"
        autoComplete="off"
        className="w-full rounded-none border-b border-[#1C1917]/20 bg-transparent px-0 py-3 text-sm text-[#1C1917] placeholder:text-[#1C1917]/30 focus:border-[#1C1917] focus:outline-none transition-colors"
      />
      <p className="mt-2 text-xs text-[#1C1917]/50 font-serif italic">
        Stored in memory only.
      </p>
    </div>
  );
}
