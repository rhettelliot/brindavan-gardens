import Link from 'next/link'

export default function NotFound() {
  return (
    <main
      className="min-h-[100dvh] flex flex-col items-center justify-center text-center px-6"
      style={{ backgroundColor: '#020203' }}
    >
      <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold">
        404 — Outside the garden
      </p>
      <h1 className="font-display text-4xl md:text-6xl mt-6 mb-4 text-light">
        Page not found
      </h1>
      <p className="font-body text-sm mb-12 text-light-dim">
        This path dissolved into reverb.
      </p>
      <Link
        href="/"
        className="font-mono text-[10px] tracking-[0.25em] uppercase px-8 py-4 border border-gold/40 text-gold transition-all duration-300 hover:bg-gold hover:text-void hover:border-gold hover:shadow-[0_0_20px_rgba(212,168,67,0.15)]"
      >
        Return to the garden
      </Link>
    </main>
  )
}
