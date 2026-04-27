'use client';

export default function VideoSpotlight() {
  return (
    <section id="spotlight" className="relative py-32 px-6">
      {/* Subtle top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-haze/20 to-transparent" />

      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-haze-light/40 mb-16 text-center">
          Spotlight
        </p>

        {/* Video embed */}
        <div className="relative aspect-video rounded-sm overflow-hidden border border-white/5 glow-purple">
          <iframe
            src="https://www.youtube.com/embed/FBHeYrlKfRE?rel=0&modestbranding=1&color=white"
            title="Icey Recording - Spotlight"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
