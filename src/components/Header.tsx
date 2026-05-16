export default function Header() {
  return (
    <header className="relative text-center py-24 md:py-40 flex flex-col items-center justify-center min-h-[60vh] overflow-hidden" style={{ perspective: '1200px' }}>
      {/* 3D Fashion Lookbook Carousel Animation */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
        <div className="animate-fashion-float absolute w-full h-full flex items-center justify-center">
          
          {/* Fashion Frames (Polaroid/Lookbook Style) */}
          {[0, 72, 144, 216, 288].map((angle, index) => (
            <div 
              key={angle}
              className="absolute w-[260px] h-[360px] p-4 bg-white/30 border-[1px] border-white/60 backdrop-blur-xl shadow-2xl flex flex-col rounded-sm"
              style={{ transform: `rotateY(${angle}deg) translateZ(450px) rotateX(${index % 2 === 0 ? 5 : -5}deg) translateY(${index % 2 === 0 ? -30 : 30}px)` }}
            >
              {/* Photo Placeholder */}
              <div className="flex-1 bg-[#1C1917]/5 mb-4 border-[1px] border-[#1C1917]/10 w-full overflow-hidden relative">
                {/* Abstract tone for photo area */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${['from-[#c084fc]/10', 'from-[#f472b6]/10', 'from-[#60a5fa]/10', 'from-[#E8D3C5]/30', 'from-[#DCD0C6]/30'][index]} to-transparent`}></div>
              </div>
              {/* Typography Placeholders */}
              <div className="w-3/4 h-1.5 bg-[#1C1917]/10 mb-2.5"></div>
              <div className="w-1/3 h-1.5 bg-[#1C1917]/10"></div>
            </div>
          ))}
        </div>
      </div>

      <h1 className="relative z-10 font-serif text-6xl md:text-8xl lg:text-9xl font-normal tracking-tight text-[#1C1917] leading-none max-w-4xl mx-auto drop-shadow-sm">
        Create your own <span className="italic">style.</span>
      </h1>
      <p className="relative z-10 mt-8 font-sans text-sm tracking-widest uppercase text-[#1C1917]/50 bg-white/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/50">
        Scroll Down
      </p>
    </header>
  );
}
