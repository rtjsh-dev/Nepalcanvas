import React, { useEffect, useState } from "react";
import axios from "axios";
import DestinationCard from "../components/DestinationCard";

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/destinations/featured")
      .then((r) => setFeatured(r.data))
      .catch(() => {});
  }, []);

  const heroImage =
    (featured[0] &&
      featured[0].images &&
      featured[0].images.length > 0 &&
      featured[0].images[0].imageUrl) ||
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80";

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <section className="mb-8">
        <div className="relative rounded-lg overflow-hidden h-64 md:h-96 bg-gray-200">
          <img
            src={heroImage}
            alt="Nepal landscape"
            className="w-full h-full object-cover"
            loading="eager"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80";
            }}
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-start justify-center p-6">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              Discover the Magic of Nepal
            </h1>
            <p className="text-white/90 mt-2 max-w-xl">
              Rich landscapes, deep culture, and unforgettable adventures —
              explore Nepal's top destinations.
            </p>
            <div className="mt-4">
              <a
                href="#destinations"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Explore Destinations
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations">
        <h2 className="text-2xl font-semibold mb-4">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((d) => (
            <DestinationCard key={d.id} d={d} />
          ))}
        </div>
      </section>
    </div>
  );
}
