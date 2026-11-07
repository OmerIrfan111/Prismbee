/**
 * Orbs: animated floating gradient blobs for section backdrops.
 * Pure CSS animation (see .orb classes in index.css); the global
 * prefers-reduced-motion rule freezes them automatically.
 *
 * tone="light" (default): emerald/mint glows for light sections
 * tone="dark": emerald glows tuned for dark sections (footer)
 */
export default function Orbs({ className = '', tone = 'light' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${tone === 'dark' ? 'orb-tone-dark' : ''} ${className}`}
    >
      <span className="orb orb-a" />
      <span className="orb orb-b" />
      <span className="orb orb-c" />
    </div>
  );
}
