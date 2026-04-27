'use client';

export default function Artists() {
  return (
    <section id="artists" className="relative py-32 px-6">
      {/* Subtle top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-haze/20 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-haze-light/40 mb-16 text-center">
          Artists
        </p>

        {/* Artist Card */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Portrait */}
          <div className="relative flex-shrink-0 group">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/5 glow-purple">
              <img
                src="/winobami.jpeg"
                alt="Win Obami"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Haze ring */}
            <div className="absolute -inset-2 rounded-full border border-haze/10 pointer-events-none" />
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white/95 mb-3">
              Win Obami
            </h2>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-haze-light/50 mb-6">
              Singer · Rapper · Visionary · Founder
            </p>
            <p className="text-white/40 text-base leading-relaxed max-w-lg mb-8">
              The architect behind Soulflow Movement and the sonic identity of Icey Recording. 
              Win Obami channels raw vulnerability into sound—bridging the gap between pain, 
              poetry, and rebellion. A voice for those who were never meant to fit in.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6 justify-center md:justify-start">
              <a
                href="https://instagram.com/winobami"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/30 hover:text-haze-light transition-colors duration-300 group"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-xs font-mono tracking-wider">@winobami</span>
              </a>
              <a
                href="https://youtube.com/@winobami"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/30 hover:text-haze-light transition-colors duration-300 group"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="text-xs font-mono tracking-wider">@winobami</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
