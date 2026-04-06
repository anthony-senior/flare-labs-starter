import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Your Headline Here
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            A short description of what this business does and why visitors
            should care. Edit this in Sanity.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#services"
              className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
            >
              Get Started
            </a>
            <a
              href="#about"
              className="border border-white/30 px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Service One", "Service Two", "Service Three"].map((service) => (
              <div
                key={service}
                className="p-8 rounded-xl border border-slate-200 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-slate-600">
                  Description of this service. Edit in Sanity to customize for
                  each client.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tell the story of this business. Who they are, what they stand for,
            and why clients trust them. This content comes from Sanity so the
            client can update it themselves.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-slate-300 mb-8">
            Get in touch today for a free consultation.
          </p>
          <a
            href="/contact"
            className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-950 text-slate-400 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        <p className="mt-1">
          Built by{" "}
          <Link href="https://flareintl.com/flare-labs" className="text-slate-300 hover:text-white transition">
            Flare Labs
          </Link>
        </p>
      </footer>
    </main>
  );
}
