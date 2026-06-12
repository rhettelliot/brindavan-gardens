export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-edge-faint">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          {/* Left */}
          <div>
            <h3 className="font-display text-2xl font-semibold italic tracking-[-0.02em] text-gold-pale">
              Brindavan <span className="text-light">Gardens</span>
            </h3>
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase mt-2 text-gold-dim">
              Spiritual · Shoegaze · Dream
            </p>
            <p className="font-mono text-[9px] tracking-[0.15em] mt-4 text-light-muted">
              Seattle, WA · Manteis Recordings · MR-001
            </p>
          </div>

          {/* Right — streaming */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <span className="font-mono text-[8px] tracking-[0.25em] uppercase mb-1 text-light-muted">
              Stream
            </span>
            <a
              href="https://open.spotify.com/album/1oPtOn5okI3nLDvWWGgd3F"
              target="_blank"
              rel="noreferrer noopener"
              className="font-mono text-[10px] tracking-[0.1em] transition-colors duration-300 text-gold-dim hover:text-gold"
            >
              Spotify
            </a>
            <a
              href="https://music.apple.com"
              target="_blank"
              rel="noreferrer noopener"
              className="font-mono text-[10px] tracking-[0.1em] transition-colors duration-300 text-gold-dim hover:text-gold"
            >
              Apple Music
            </a>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 border-t border-edge-faint w-full">
            <p className="font-mono text-[8px] tracking-[0.15em] text-light-muted">
              © {new Date().getFullYear()} Brindavan Gardens. All frequencies reserved.
            </p>
            <p className="font-mono text-[8px] tracking-[0.15em] text-light-muted">
              Manteis Recordings
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
