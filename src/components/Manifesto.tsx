'use client';

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative py-32 px-6">
      {/* Background haze */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(107, 33, 168, 0.04) 0%, transparent 70%)',
        }}
      />

      {/* Subtle top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-haze/20 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Section label */}
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-haze-light/40 mb-16">
          Manifesto
        </p>

        {/* Manifesto text */}
        <div className="space-y-8">
          <p className="text-xl md:text-2xl font-light leading-relaxed text-white/80">
            We are the Soulflow Movement.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-white/40">
            Born from the margins. Built for those who were told their feelings were too much, 
            their thoughts too dark, their dreams too loud. We reject emotional captivity—the 
            silent chains society wraps around the hearts of the misunderstood.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-white/40">
            This is not a label. This is a liberation front. We create for the ones who 
            scream into pillows at 3am. For the ones who turn pain into poetry, and silence 
            into something that shakes the walls. Art is our weapon. Vulnerability is our armor.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-white/40">
            We don&apos;t chase trends. We don&apos;t bend for algorithms. We bend reality until it 
            reflects the truth we carry. If the world wasn&apos;t built for us, we&apos;ll build our own 
            and leave the door open for every outsider behind us.
          </p>

          <div className="pt-8">
            <div className="w-12 h-px bg-haze/30 mx-auto mb-8" />
            <p className="text-sm font-mono uppercase tracking-[0.3em] text-haze-light/30">
              Soulflow is forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
