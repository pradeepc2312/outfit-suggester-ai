import { useCallback, useState } from 'react';
import type { AppState } from './types';
import { OCCASIONS } from './constants/occasions';
import { useImageUpload } from './hooks/useImageUpload';
import { useClaude } from './hooks/useClaude';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ProcessSection from './components/ProcessSection';
import UploadZone from './components/UploadZone';
import OccasionSelector from './components/OccasionSelector';
import AnalyseButton from './components/AnalyseButton';
import LoadingBar from './components/LoadingBar';
import ResultsSection from './components/ResultsSection';
import ErrorCard from './components/ErrorCard';

export default function App() {
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);
  const [appState, setAppState] = useState<AppState>('idle');

  const image = useImageUpload();
  const claude = useClaude();

  const canAnalyse = image.hasImage && selectedOccasions.length > 0;

  const toggleOccasion = useCallback((id: string) => {
    setSelectedOccasions((prev) =>
      prev.includes(id) ? prev.filter((o) => o !== id) : [...prev, id],
    );
  }, []);

  const handleAnalyse = async () => {
    if (!canAnalyse || !image.base64Data || !image.mediaType) return;

    setAppState('analysing');
    const labels = selectedOccasions.map(
      (id) => OCCASIONS.find((o) => o.id === id)?.label ?? id,
    );

    try {
      const result = await claude.analyse({
        base64Data: image.base64Data,
        mediaType: image.mediaType,
        selectedOccasions: labels,
      });
      setAppState(result?.length ? 'results' : 'error');
    } catch {
      setAppState('error');
    }
  };

  const handleStyleAgain = () => {
    image.clear();
    claude.reset();
    setSelectedOccasions([]);
    setAppState('idle');
  };

  const handleRetry = () => {
    claude.reset();
    setAppState('idle');
  };

  const showForm = appState !== 'results' || claude.suggestions.length === 0;

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Stylist', href: '#stylist' },
  ];

  return (
    <div className="min-h-screen font-sans text-[#1C1917] flex flex-col bg-transparent">
      <Navbar links={navLinks} />
      <main className="w-full flex-1">
        
        {/* Top Section - Hero */}
        <div id="home" className="w-full px-6 animate-fadeIn scroll-mt-24">
          <Header />
        </div>

        {/* Bottom Section - About Page */}
        <div id="about" className="w-full scroll-mt-24">
          <AboutSection />
        </div>

        {/* Process Section */}
        <div id="process" className="w-full scroll-mt-24">
          <ProcessSection />
        </div>

        {/* The Interactive Stylist (Form) */}
        <section id="stylist" className="w-full max-w-5xl mx-auto py-32 px-6 border-t border-[#1C1917]/10 scroll-mt-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#1C1917] tracking-tight">
              The <span className="italic">Stylist.</span>
            </h2>
            <p className="mt-6 font-sans text-xs tracking-[0.2em] uppercase text-[#1C1917]/40">
              Curate your next look
            </p>
          </div>

          <div className="animate-fadeIn" style={{ animationDelay: '200ms' }}>
            {showForm && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
                <div className="h-full min-h-[400px]">
                  <UploadZone
                    previewUrl={image.previewUrl}
                    acceptedTypes={image.acceptedTypes}
                    onFileSelect={image.processFile}
                    onClear={image.clear}
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <OccasionSelector selected={selectedOccasions} onToggle={toggleOccasion} />

                  <div className="mt-8">
                    <AnalyseButton
                      disabled={!canAnalyse}
                      isLoading={appState === 'analysing'}
                      onClick={handleAnalyse}
                    />
                  </div>

                  {appState === 'analysing' && (
                    <div className="mt-6">
                      <LoadingBar message={claude.loadingMessage} />
                    </div>
                  )}
                </div>
              </div>
            )}

            {appState === 'error' && <ErrorCard onRetry={handleRetry} />}

            {appState === 'results' && claude.suggestions.length > 0 && (
              <div className="animate-fadeIn mt-16 pt-16 border-t border-[#1C1917]/10">
                <ResultsSection suggestions={claude.suggestions} />
                <button
                  type="button"
                  onClick={handleStyleAgain}
                  className="w-full mt-12 rounded-none border border-[#1C1917] bg-transparent py-5 text-xs font-bold tracking-[0.2em] text-[#1C1917] uppercase transition-colors duration-500 hover:bg-[#1C1917] hover:text-[#EFE9E3]"
                >
                  Style Another Look
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
