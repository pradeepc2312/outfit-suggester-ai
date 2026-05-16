import { useCallback, useRef, useState } from 'react';
import type { ImageMediaType } from '../types';

interface UploadZoneProps {
  previewUrl: string | null;
  acceptedTypes: ImageMediaType[];
  onFileSelect: (file: File) => void;
  onClear: () => void;
}

export default function UploadZone({
  previewUrl,
  acceptedTypes,
  onFileSelect,
  onClear,
}: UploadZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = useCallback(
    (files: FileList | null) => {
      const file = files?.[0];
      if (file && acceptedTypes.includes(file.type as ImageMediaType)) {
        onFileSelect(file);
      }
    },
    [acceptedTypes, onFileSelect],
  );

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  if (previewUrl) {
    return (
      <div className="relative animate-fadeIn h-full min-h-[400px] w-full group overflow-hidden border border-[#1C1917]/10">
        <img
          src={previewUrl}
          alt="Wardrobe preview"
          className="h-full w-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClear();
          }}
          className="absolute right-6 top-6 rounded-none bg-white/90 backdrop-blur-md px-6 py-3 text-xs font-bold tracking-[0.2em] text-[#1C1917] uppercase transition-all duration-300 hover:bg-[#1C1917] hover:text-white shadow-sm"
        >
          Remove
        </button>
      </div>
    );
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => inputRef.current?.click()}
      onKeyDown={(e) => e.key === 'Enter' && inputRef.current?.click()}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={`group flex flex-col items-center justify-center cursor-pointer border-2 border-dashed h-full min-h-[400px] w-full px-10 py-16 text-center transition-all duration-500 ${
        isDragging
          ? 'border-[#1C1917] bg-[#1C1917]/5 scale-[0.99]'
          : 'border-[#1C1917]/20 hover:border-[#1C1917]/40 hover:bg-[#1C1917]/[0.02]'
      }`}
    >
      <input
        ref={inputRef}
        type="file"
        accept={acceptedTypes.join(',')}
        className="hidden"
        onChange={(e) => {
          handleFiles(e.target.files);
          e.target.value = '';
        }}
      />
      <div className="mb-6 transform transition-transform duration-500 group-hover:-translate-y-2">
        <svg
          className="w-6 h-6 text-[#1C1917]/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeWidth="1.5"
            d="M12 4v12m0-12l-4 4m4-4l4 4M4 16v4h16v-4"
          />
        </svg>
      </div>
      <p className="text-xs tracking-[0.2em] uppercase text-[#1C1917] mb-3 font-bold transition-colors group-hover:text-[#1C1917]">
        Upload Photo
      </p>
      <p className="text-sm text-[#1C1917]/60 font-serif italic">
        Drop a file here or click to browse
      </p>
    </div>
  );
}
