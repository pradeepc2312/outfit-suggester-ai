export interface OutfitSuggestion {
  occasion: string;
  headline: string;
  items: string[];
  tip: string;
}

export type AppState = 'idle' | 'uploading' | 'analysing' | 'results' | 'error';

export type ImageMediaType = 'image/jpeg' | 'image/png' | 'image/webp';
