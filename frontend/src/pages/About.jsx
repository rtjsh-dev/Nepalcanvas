import React from "react";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-red-700 to-blue-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About NepalCanvas
          </h1>
          <p className="mt-3 text-xl text-white/90">
            Connecting travelers with Nepal's hidden gems
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Mission Section */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                NepalCanvas is a digital platform designed to showcase the
                breathtaking beauty, rich cultural heritage, and diverse
                experiences that Nepal has to offer. We aim to make travel
                planning easier and inspire explorers from around the world to
                discover Nepal's authentic charm.
              </p>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                From the towering peaks of the Himalayas to the serene lakes of
                Pokhara, from ancient temples to vibrant local communities — we
                bring Nepal's stories to life.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <img
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
                alt="Nepal temple"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="mb-12 bg-gradient-to-r from-red-50 to-blue-50 rounded-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-red-700">100+</div>
              <div className="text-gray-600 mt-2">Destinations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-700">8</div>
              <div className="text-gray-600 mt-2">UNESCO Sites</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-700">8,848m</div>
              <div className="text-gray-600 mt-2">Mt. Everest</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-700">10+</div>
              <div className="text-gray-600 mt-2">Trekking Routes</div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 bg-gray-100 rounded-lg p-8">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
                alt="Nepal mountains"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We envision NepalCanvas as the leading digital gateway for
                travelers seeking authentic experiences in Nepal. Our goal is to
                support local communities, promote sustainable tourism, and
                preserve Nepal's natural and cultural treasures for future
                generations.
              </p>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Through technology and storytelling, we're building bridges
                between curious travelers and the incredible people and places
                that make Nepal truly magical.
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏔️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Curated Destinations
              </h3>
              <p className="text-gray-600">
                Hand-picked locations showcasing Nepal's diverse landscapes,
                from mountain peaks to cultural heritage sites.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🗺️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Travel Planning</h3>
              <p className="text-gray-600">
                Detailed guides, practical tips, and insider information to help
                you plan your perfect Nepal adventure.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Insights</h3>
              <p className="text-gray-600">
                Authentic stories and recommendations from locals who know Nepal
                best.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-red-600 to-blue-600 rounded-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Nepal?</h2>
          <p className="text-xl mb-6 text-white/90">
            Start your journey with our curated collection of destinations
          </p>
          <a
            href="/destinations"
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Browse Destinations
          </a>
        </section>
      </div>
    </div>
  );
}
