export interface OccasionOption {
  id: string;
  label: string;
  emoji: string;
}

export const OCCASIONS: OccasionOption[] = [
  { id: 'party', label: 'Party', emoji: '🎉' },
  { id: 'formal', label: 'Formal', emoji: '👔' },
  { id: 'sports', label: 'Sports', emoji: '🏃' },
  { id: 'casual', label: 'Casual', emoji: '☀️' },
  { id: 'date-night', label: 'Date Night', emoji: '🌙' },
  { id: 'office', label: 'Office', emoji: '💼' },
  { id: 'vacation', label: 'Vacation', emoji: '🌴' },
  { id: 'creative', label: 'Creative/Artistic', emoji: '🎨' },
];

export function getOccasionDisplay(occasionId: string): OccasionOption | undefined {
  const normalized = occasionId.toLowerCase().replace(/\s+/g, '-');
  return OCCASIONS.find(
    (o) =>
      o.id === normalized ||
      o.label.toLowerCase() === occasionId.toLowerCase() ||
      o.label.toLowerCase().replace(/\s+/g, '-') === normalized,
  );
}
