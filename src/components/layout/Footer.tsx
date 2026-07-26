export function Footer() {
  return (
    <footer className="relative bg-void overflow-hidden">
      {/* Top glowing thread border */}
      <div className="gold-thread max-w-7xl mx-auto opacity-25" />

      {/* 5. Subtle orbital mandala at top */}
      <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[120px] pointer-events-none z-0 opacity-15" viewBox="0 0 300 60" preserveAspectRatio="none" aria-hidden="true"
      >
        <path className="orbital-curve" d="M0,30 C75,0 225,0 300,30 C225,60 75,60 0,30" />
        <path className="orbital-curve-thin" d="M30,30 C90,10 210,10 270,30 C210,50 90,50 30,30" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          {/* Brand/Logo Column — 6 cols */}
          <div className="md:col-span-6 space-y-4">
            <h3 className="font-display text-2xl md:text-4xl font-semibold italic tracking-[-0.02em] text-cream text-glow-gold">
              Brindavan <span className="text-gold font-normal not-italic">Gardens</span>
            </h3>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold-dim">
              Spiritual · Shoegaze · Dream
            </p>
            <p className="font-mono text-[10px] tracking-[0.2em] leading-relaxed text-light-muted max-w-md">
              Seattle, WA · Manteis Recordings · MR-007 <br />
              Equanimity through sound. Reverb as sanctuary.
            </p>
          </div>

          {/* Navigation Column — 3 cols */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-light-muted border-b border-edge-faint pb-2 max-w-[100px]">
              Explore
            </span>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="inline-flex items-center min-h-[44px] font-mono text-[11px] tracking-[0.25em] uppercase text-gold-dim hover:text-gold transition-colors duration-300 w-fit group relative py-0.5"
              >
                Home
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
              <a
                href="#release"
                className="inline-flex items-center min-h-[44px] font-mono text-[11px] tracking-[0.25em] uppercase text-gold-dim hover:text-gold transition-colors duration-300 w-fit group relative py-0.5"
              >
                Release
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
              <a
                href="#mantra"
                className="inline-flex items-center min-h-[44px] font-mono text-[11px] tracking-[0.25em] uppercase text-gold-dim hover:text-gold transition-colors duration-300 w-fit group relative py-0.5"
              >
                Mantra
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </div>
          </div>

          {/* Streaming Column — 3 cols */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-light-muted border-b border-edge-faint pb-2 max-w-[100px]">
              Listen
            </span>
            <div className="flex flex-col gap-2">
              <a
                href="https://distrokid.com/hyperfollow/brindavangardens/upek/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Listen to Brindavan Gardens on all streaming platforms (opens in new tab)"
                className="inline-flex items-center min-h-[44px] font-mono text-[11px] tracking-[0.2em] uppercase text-gold-dim hover:text-gold transition-colors duration-300 w-fit group relative py-0.5"
              >
                All Platforms
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
              <a
                href="https://open.spotify.com/album/1oPtOn5okI3nLDvWWGgd3F"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Listen to Brindavan Gardens on Spotify (opens in new tab)"
                className="inline-flex items-center min-h-[44px] font-mono text-[11px] tracking-[0.2em] uppercase text-gold-dim hover:text-gold transition-colors duration-300 w-fit group relative py-0.5"
              >
                Spotify
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
              <a
                href="https://music.apple.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Listen to Brindavan Gardens on Apple Music (opens in new tab)"
                className="inline-flex items-center min-h-[44px] font-mono text-[11px] tracking-[0.2em] uppercase text-gold-dim hover:text-gold transition-colors duration-300 w-fit group relative py-0.5"
              >
                Apple Music
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
              <a
                href="https://manteisrecordings.bandcamp.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Purchase Brindavan Gardens on Bandcamp (opens in new tab)"
                className="inline-flex items-center min-h-[44px] font-mono text-[11px] tracking-[0.2em] uppercase text-gold-dim hover:text-gold transition-colors duration-300 w-fit group relative py-0.5"
              >
                Bandcamp
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </div>
          </div>
        </div>

        {/* Manteis Network */}
        <div className="mt-16 pt-8 border-t border-edge-faint grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 items-start">
          <div className="md:col-span-6 flex flex-col gap-2">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-light-muted border-b border-edge-faint pb-2 max-w-[100px]">
              Label
            </span>
            <a
              href="https://manteisrecordings.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Visit Manteis Recordings label hub (opens in new tab)"
              className="inline-flex items-center min-h-[44px] font-mono text-[11px] tracking-[0.2em] uppercase text-gold-dim hover:text-gold transition-colors duration-300 w-fit group relative py-0.5"
            >
              Manteis Recordings ↗
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          </div>
          <div className="md:col-span-6 flex flex-col gap-2">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-light-muted border-b border-edge-faint pb-2 max-w-[100px]">
              Roster
            </span>
            <div className="flex flex-col gap-1.5">
              <a href="https://redshiftmantra.vercel.app" target="_blank" rel="noreferrer noopener" aria-label="Visit Red Shift Mantra artist site (opens in new tab)" className="inline-flex items-center min-h-[44px] font-mono text-[11px] tracking-[0.2em] uppercase text-gold-dim hover:text-gold transition-colors duration-300 w-fit group relative py-0.5">Red Shift Mantra ↗<span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" /></a>
              <a href="https://manteis-project-site.vercel.app" target="_blank" rel="noreferrer noopener" aria-label="Visit The Manteis Project artist site (opens in new tab)" className="inline-flex items-center min-h-[44px] font-mono text-[11px] tracking-[0.2em] uppercase text-gold-dim hover:text-gold transition-colors duration-300 w-fit group relative py-0.5">The Manteis Project ↗<span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" /></a>
              <a href="https://thesan-musique-site.vercel.app" target="_blank" rel="noreferrer noopener" aria-label="Visit Thesan Musique artist site (opens in new tab)" className="inline-flex items-center min-h-[44px] font-mono text-[11px] tracking-[0.2em] uppercase text-gold-dim hover:text-gold transition-colors duration-300 w-fit group relative py-0.5">Thesan Musique ↗<span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" /></a>
              <a href="https://bethany-pritchett-site.vercel.app" target="_blank" rel="noreferrer noopener" aria-label="Visit Bethany Pritchett artist site (opens in new tab)" className="inline-flex items-center min-h-[44px] font-mono text-[11px] tracking-[0.2em] uppercase text-gold-dim hover:text-gold transition-colors duration-300 w-fit group relative py-0.5">Bethany Pritchett ↗<span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" /></a>
            </div>
          </div>
        </div>

        {/* 9. Bottom mandala stamp row */}
        <div className="mt-12 flex justify-center gap-8">
          <div className="mandala-stamp w-14 h-14">
            <span className="font-mono text-[8px] tracking-[0.1em] text-gold">MR</span>
          </div>
          <div className="mandala-stamp w-14 h-14">
            <span className="font-mono text-[8px] tracking-[0.1em] text-gold">007</span>
          </div>
          <div className="mandala-stamp w-14 h-14">
            <span className="font-mono text-[8px] tracking-[0.1em] text-gold">OM</span>
          </div>
        </div>

        {/* Bottom copyright segment */}
        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-edge-faint w-full">
          <p className="font-mono text-[9px] tracking-[0.2em] text-light-muted text-center md:text-left">
            © {new Date().getFullYear()} Brindavan Gardens. All frequencies reserved.
          </p>
          <div className="text-gold-dim text-xs select-none">
            ✦
          </div>
          <p className="font-mono text-[9px] tracking-[0.2em] text-light-muted hover:text-gold transition-colors duration-300">
            Manteis Recordings
          </p>
        </div>
      </div>
    </footer>
  )
}
