export default function AboutSection() {
  return (
    <section className="w-full max-w-6xl mx-auto py-24 px-6 md:px-12 animate-fadeIn" style={{ animationDelay: '400ms' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div className="sticky top-24">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-[#1C1917] leading-[1.1] tracking-tight">
            Elevating your <br/><span className="italic">personal aesthetic.</span>
          </h2>
          <p className="mt-8 font-sans text-sm tracking-widest uppercase text-[#1C1917]/40 border-l px-4 border-[#1C1917]/20">
            Vision & Philosophy
          </p>
        </div>
        <div className="space-y-10 font-sans text-[#1C1917]/80 leading-relaxed text-lg lg:text-xl font-light pt-4 lg:pt-0">
          <p>
            OS is your personal digital stylist. We use advanced AI to create the perfect outfits tailored exactly to your lifestyle.
          </p>
          <p>
            We believe that true style isn't about having a massive wardrobe. It's about making smart, sophisticated choices with the clothes you already own.
          </p>
          <div className="pt-12 border-t border-[#1C1917]/10">
            <button className="px-12 py-5 border border-[#1C1917] text-[#1C1917] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#1C1917] hover:text-[#EFE9E3] transition-all duration-500">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
