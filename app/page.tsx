'use client';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen px-4">
      <div className="text-center max-w-2xl">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="text-8xl mb-6 animate-pulse">🌌</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-nebula-blue to-nebula-purple bg-clip-text text-transparent">
            Nuro
          </h1>
          <p className="text-xl md:text-2xl text-nebula-blue/80 mb-4">
            Explore the Future of Space-Themed Design
          </p>
          <p className="text-nebula-blue/60 text-lg mb-8">
            A minimalist website showcasing the cosmos of creativity and innovation
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-space-800/30 border border-nebula-blue/30 hover:border-nebula-blue/60 transition-all">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-lg font-bold mb-2">Modern Design</h3>
            <p className="text-nebula-blue/60 text-sm">
              Sleek, contemporary aesthetics with cosmic inspiration
            </p>
          </div>

          <div className="p-6 rounded-xl bg-space-800/30 border border-nebula-blue/30 hover:border-nebula-blue/60 transition-all">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="text-lg font-bold mb-2">Interactive</h3>
            <p className="text-nebula-blue/60 text-sm">
              Engaging elements that bring the universe to life
            </p>
          </div>

          <div className="p-6 rounded-xl bg-space-800/30 border border-nebula-blue/30 hover:border-nebula-blue/60 transition-all">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-lg font-bold mb-2">Fast & Light</h3>
            <p className="text-nebula-blue/60 text-sm">
              Blazing fast static site with zero server overhead
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-4">
          <a
            href="#features"
            className="inline-block px-8 py-3 bg-gradient-nebula text-white rounded-lg font-semibold hover:shadow-glow transition-all"
          >
            Explore More
          </a>
          <p className="text-nebula-blue/50 text-sm">
            Fully static. No servers. Pure innovation. ✨
          </p>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-nebula-blue/20">
          <p className="text-nebula-blue/40 text-sm">
            Built with Next.js • Styled with TailwindCSS • Deployed as Static HTML
          </p>
          <p className="text-nebula-blue/30 text-xs mt-2">
            Made with 🌌 and pure web magic
          </p>
        </div>
      </div>
    </main>
  );
}
