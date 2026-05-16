export default function ProcessSection() {
  return (
    <section className="w-full max-w-6xl mx-auto py-32 px-6 md:px-12 border-t border-[#1C1917]/10">
      <div className="text-center mb-24">
        <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#1C1917] tracking-tight">
          The <span className="italic">Process.</span>
        </h2>
        <p className="mt-6 font-sans text-xs tracking-[0.2em] uppercase text-[#1C1917]/40">
          How it works
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 relative">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-[1px] bg-[#1C1917]/10 -z-10"></div>

        {/* Step 1 */}
        <div className="flex flex-col items-center text-center group bg-transparent">
          <div className="w-16 h-16 border-[1px] border-[#1C1917]/20 rounded-full flex items-center justify-center mb-10 transition-all duration-700 group-hover:scale-110 group-hover:border-[#1C1917]/50 bg-[#EFE9E3]">
            <span className="font-serif text-xl text-[#1C1917]">I</span>
          </div>
          <h3 className="font-sans text-sm tracking-[0.15em] uppercase font-bold text-[#1C1917] mb-6">
            Upload
          </h3>
          <p className="font-sans text-[#1C1917]/60 leading-relaxed font-light text-base px-4">
            Upload a photo of the clothing item you want to wear. We can style any piece from your closet.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center group bg-transparent">
          <div className="w-16 h-16 border-[1px] border-[#1C1917]/20 rounded-full flex items-center justify-center mb-10 transition-all duration-700 group-hover:scale-110 group-hover:border-[#1C1917]/50 bg-[#EFE9E3]">
            <span className="font-serif text-xl text-[#1C1917]">II</span>
          </div>
          <h3 className="font-sans text-sm tracking-[0.15em] uppercase font-bold text-[#1C1917] mb-6">
            Select Occasion
          </h3>
          <p className="font-sans text-[#1C1917]/60 leading-relaxed font-light text-base px-4">
            Tell us where you're going or what look you want. Our AI can handle everything from a casual day out to a formal event.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center group bg-transparent">
          <div className="w-16 h-16 border-[1px] border-[#1C1917]/20 rounded-full flex items-center justify-center mb-10 transition-all duration-700 group-hover:scale-110 group-hover:border-[#1C1917]/50 bg-[#EFE9E3]">
            <span className="font-serif text-xl text-[#1C1917]">III</span>
          </div>
          <h3 className="font-sans text-sm tracking-[0.15em] uppercase font-bold text-[#1C1917] mb-6">
            Get Styled
          </h3>
          <p className="font-sans text-[#1C1917]/60 leading-relaxed font-light text-base px-4">
            Get a complete outfit recommendation tailored just for you. We'll match the perfect colors and styles to complete your look.
          </p>
        </div>
      </div>
    </section>
  );
}
