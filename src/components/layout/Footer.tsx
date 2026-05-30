export function Footer() {
  return (
    <footer className="py-16 md:py-24" style={{ borderTop: '1px solid rgba(212,168,67,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          {/* Left */}
          <div>
            <h3 className="font-display text-2xl font-semibold italic tracking-[-0.02em]" style={{ color: '#E8CC7A' }}>
              Brindavan <span style={{ color: '#E8DDD0' }}>Gardens</span>
            </h3>
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase mt-2" style={{ color: '#A68535' }}>
              Spiritual · Shoegaze · Dream
            </p>
            <p className="font-mono text-[9px] tracking-[0.15em] mt-4" style={{ color: '#6B5F54' }}>
              Seattle, WA · Manteis Recordings · MR-001
            </p>
          </div>

          {/* Right — streaming */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <span className="font-mono text-[8px] tracking-[0.25em] uppercase mb-1" style={{ color: '#6B5F54' }}>
              Stream
            </span>
            <a
              href="https://open.spotify.com/album/1oPtOn5okI3nLDvWWGgd3F"
              target="_blank"
              rel="noreferrer noopener"
              className="font-mono text-[10px] tracking-[0.1em] transition-colors duration-300"
              style={{ color: '#A68535' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#D4A843' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#A68535' }}
            >
              Spotify
            </a>
            <a
              href="https://music.apple.com"
              target="_blank"
              rel="noreferrer noopener"
              className="font-mono text-[10px] tracking-[0.1em] transition-colors duration-300"
              style={{ color: '#A68535' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#D4A843' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#A68535' }}
            >
              Apple Music
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-2" style={{ borderTop: '1px solid rgba(212,168,67,0.06)' }}>
          <p className="font-mono text-[8px] tracking-[0.15em]" style={{ color: '#6B5F54' }}>
            © {new Date().getFullYear()} Brindavan Gardens. All frequencies reserved.
          </p>
          <p className="font-mono text-[8px] tracking-[0.15em]" style={{ color: '#6B5F54' }}>
            Manteis Recordings
          </p>
        </div>
      </div>
    </footer>
  )
}