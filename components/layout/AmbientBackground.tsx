export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="ambient-aurora" />
      <div className="ambient-orb ambient-orb-green" />
      <div className="ambient-orb ambient-orb-cyan" />
      <div className="ambient-orb ambient-orb-soft" />
      <div className="ambient-grid" />
      <div className="ambient-noise" />
    </div>
  );
}
