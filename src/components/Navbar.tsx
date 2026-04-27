'use client';

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Icey Recording"
            className="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#manifesto"
            className="text-sm font-mono uppercase tracking-[0.2em] text-white/50 hover:text-haze-light transition-colors duration-300"
          >
            Manifesto
          </a>
          <a
            href="#artists"
            className="text-sm font-mono uppercase tracking-[0.2em] text-white/50 hover:text-haze-light transition-colors duration-300"
          >
            Win Obami
          </a>
          <a
            href="#join"
            className="text-sm font-mono uppercase tracking-[0.2em] px-4 py-2 border border-white/10 text-white/70 hover:border-haze/50 hover:text-haze-light transition-all duration-300"
          >
            Join
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-px bg-white/70 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`w-5 h-px bg-white/70 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-black/95 backdrop-blur-md">
          <div className="flex flex-col px-6 py-6 gap-4">
            <a
              href="#manifesto"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-mono uppercase tracking-[0.2em] text-white/50 hover:text-haze-light transition-colors"
            >
              Manifesto
            </a>
            <a
              href="#artists"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-mono uppercase tracking-[0.2em] text-white/50 hover:text-haze-light transition-colors"
            >
              Win Obami
            </a>
            <a
              href="#join"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-mono uppercase tracking-[0.2em] text-white/50 hover:text-haze-light transition-colors"
            >
              Join
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
