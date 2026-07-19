export function Footer() {
  return (
    <footer className="relative bg-void overflow-hidden">
      {/* Top glowing thread border */}
      <div className="gold-thread max-w-7xl mx-auto opacity-25" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          {/* Brand/Logo Column — 6 cols */}
          <div className="md:col-span-6 space-y-4">
            <h3 className="font-display text-3xl md:text-4xl font-semibold italic tracking-[-0.02em] text-gold-pale text-glow-gold">
              Brindavan <span className="text-light font-normal not-italic">Gardens</span>
            </h3>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold-dim">
              Spiritual · Shoegaze · Dream
            </p>
            <p className="font-mono text-[10px] tracking-[0.2em] leading-relaxed text-light-muted max-w-md">
              Seattle, WA · Manteis Recordings · MR-001 <br/>
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
                className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold-dim hover:text-gold transition-colors duration-300 w-fit group relative py-0.5"
              >
                Home
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
              <a
                href="#release"
                className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold-dim hover:text-gold transition-colors duration-300 w-fit group relative py-0.5"
              >
                Release
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
              <a
                href="#mantra"
                className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold-dim hover:text-gold transition-colors duration-300 w-fit group relative py-0.5"
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
                href="https://open.spotify.com/album/1oPtOn5okI3nLDvWWGgd3F"
                target="_blank"
                rel="noreferrer noopener"
                className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold-dim hover:text-gold transition-colors duration-300 w-fit group relative py-0.5"
              >
                Spotify
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
              <a
                href="https://music.apple.com"
                target="_blank"
                rel="noreferrer noopener"
                className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold-dim hover:text-gold transition-colors duration-300 w-fit group relative py-0.5"
              >
                Apple Music
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright segment */}
        <div className="mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-edge-faint w-full">
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
