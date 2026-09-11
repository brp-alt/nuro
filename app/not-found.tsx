export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-space">
      <div className="text-center">
        <div className="text-8xl mb-4">🚀</div>
        <h1 className="text-4xl font-bold text-white mb-2">404 - Lost in Space</h1>
        <p className="text-nebula-blue mb-6">The page you're looking for drifted into the void.</p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-gradient-nebula rounded-xl text-white font-semibold hover:shadow-glow transition-all"
        >
          Return to Nuro
        </a>
      </div>
    </div>
  );
}
