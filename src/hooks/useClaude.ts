import { useCallback, useState } from 'react';
import { buildSystemPrompt } from '../prompts/systemPrompt';
import type { ImageMediaType, OutfitSuggestion } from '../types';

const LOADING_MESSAGES = [
  'Scanning your wardrobe…',
  'Identifying clothing items…',
  'Matching to occasions…',
  'Building your outfits…',
] as const;

interface AnalyseParams {
  apiKey: string;
  base64Data: string;
  mediaType: ImageMediaType;
  selectedOccasions: string[];
}

function parseOutfitResponse(data: {
  content?: Array<{ type?: string; text?: string }>;
}): OutfitSuggestion[] {
  const raw = (data.content ?? []).map((b) => b.text ?? '').join('');
  const cleaned = raw.replace(/```json|```/g, '').trim();
  const jsonStart = cleaned.indexOf('[');
  const jsonEnd = cleaned.lastIndexOf(']');
  if (jsonStart === -1 || jsonEnd === -1) {
    throw new Error('Invalid response format');
  }
  return JSON.parse(cleaned.slice(jsonStart, jsonEnd + 1)) as OutfitSuggestion[];
}

export function useClaude() {
  const [suggestions, setSuggestions] = useState<OutfitSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messageIndex, setMessageIndex] = useState(0);

  const loadingMessage = LOADING_MESSAGES[messageIndex % LOADING_MESSAGES.length];

  const analyse = useCallback(
    async ({ apiKey, base64Data, mediaType, selectedOccasions }: AnalyseParams) => {
      if (!apiKey.trim()) {
        setError('Please enter your Anthropic API key.');
        return;
      }

      setIsLoading(true);
      setError(null);
      setSuggestions([]);
      setMessageIndex(0);

      const messageInterval = window.setInterval(() => {
        setMessageIndex((i) => (i + 1) % LOADING_MESSAGES.length);
      }, 2000);

      try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey.trim(),
            'anthropic-version': '2023-06-01',
            'anthropic-dangerous-direct-browser-access': 'true',
          },
          body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 1500,
            messages: [
              {
                role: 'user',
                content: [
                  {
                    type: 'image',
                    source: {
                      type: 'base64',
                      media_type: mediaType,
                      data: base64Data,
                    },
                  },
                  {
                    type: 'text',
                    text: buildSystemPrompt(selectedOccasions),
                  },
                ],
              },
            ],
          }),
        });

        if (!response.ok) {
          const errBody = await response.json().catch(() => ({}));
          const msg =
            (errBody as { error?: { message?: string } })?.error?.message ??
            `Request failed (${response.status})`;
          throw new Error(msg);
        }

        const data = await response.json();
        const parsed = parseOutfitResponse(data);
        setSuggestions(parsed);
        return parsed;
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'An unexpected error occurred';
        setError(message);
        throw err;
      } finally {
        window.clearInterval(messageInterval);
        setIsLoading(false);
      }
    },
    [],
  );

  const reset = useCallback(() => {
    setSuggestions([]);
    setError(null);
    setMessageIndex(0);
  }, []);

  return {
    suggestions,
    isLoading,
    error,
    loadingMessage,
    analyse,
    reset,
  };
}
