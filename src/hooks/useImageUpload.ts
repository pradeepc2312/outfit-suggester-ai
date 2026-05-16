import { useCallback, useState } from 'react';
import type { ImageMediaType } from '../types';

const ACCEPTED_TYPES: ImageMediaType[] = ['image/jpeg', 'image/png', 'image/webp'];

function isAcceptedType(type: string): type is ImageMediaType {
  return ACCEPTED_TYPES.includes(type as ImageMediaType);
}

export function useImageUpload() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [base64Data, setBase64Data] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<ImageMediaType | null>(null);
  const [isReading, setIsReading] = useState(false);

  const clear = useCallback(() => {
    setPreviewUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
    setBase64Data(null);
    setMediaType(null);
  }, []);

  const processFile = useCallback(
    (file: File) => {
      if (!isAcceptedType(file.type)) return;

      setIsReading(true);
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return objectUrl;
      });

      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        const base64 = result.split(',')[1] ?? '';
        setBase64Data(base64);
        setMediaType(file.type as ImageMediaType);
        setIsReading(false);
      };
      reader.onerror = () => {
        setIsReading(false);
        clear();
      };
      reader.readAsDataURL(file);
    },
    [clear],
  );

  return {
    previewUrl,
    base64Data,
    mediaType,
    isReading,
    hasImage: Boolean(base64Data && mediaType),
    processFile,
    clear,
    acceptedTypes: ACCEPTED_TYPES,
  };
}
