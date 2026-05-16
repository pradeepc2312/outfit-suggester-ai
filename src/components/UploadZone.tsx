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
      <div className="relative animate-fadeIn">
        <img
          src={previewUrl}
          alt="Wardrobe preview"
          className="h-72 w-full object-cover"
        />
        <button
          type="button"
          onClick={onClear}
          className="absolute right-4 top-4 rounded-none bg-[#EFE9E3] px-4 py-2 text-xs font-medium tracking-widest text-[#1C1917] uppercase transition-colors hover:bg-[#1C1917] hover:text-[#EFE9E3]"
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
      className={`group cursor-pointer border px-10 py-16 text-center transition-all duration-300 ${isDragging
          ? 'border-[#1C1917] bg-[#1C1917]/5'
          : 'border-[#1C1917]/20 hover:border-[#1C1917]'
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
      <p className="text-sm tracking-widest uppercase text-[#1C1917] mb-2 font-medium">
        Upload Photo
      </p>
      <p className="text-xs text-[#1C1917]/50 font-serif italic">Drop a file here or click to browse</p>
    </div>
  );
}
