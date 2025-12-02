import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DestinationDetail() {
  const { slug } = useParams();
  const [dest, setDest] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/destinations/${slug}`)
      .then((r) => setDest(r.data))
      .catch(() => setDest(null));
  }, [slug]);

  if (!dest)
    return <div className="max-w-4xl mx-auto px-4 py-8">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="rounded overflow-hidden">
        <img
          src={
            (dest.images &&
              dest.images.length > 0 &&
              dest.images[0].imageUrl) ||
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=60"
          }
          alt="banner"
          className="w-full h-80 object-cover"
        />
      </div>
      <div className="mt-4 flex items-start gap-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{dest.name}</h1>
          <div className="mt-2 text-sm text-gray-600">
            {dest.category} • {dest.region}
          </div>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-2 text-gray-700">{dest.overview}</p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">What to See / Do</h2>
            <p className="mt-2 text-gray-700">{dest.whatToSee}</p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">How to Get There</h2>
            <p className="mt-2 text-gray-700">{dest.howToGetThere}</p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">Tips for Visitors</h2>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              {(dest.tips || "")
                .split("\n")
                .filter((t) => t.trim())
                .map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
            </ul>
          </section>
        </div>

        <aside className="w-80 bg-gray-50 p-4 rounded">
          <h3 className="font-semibold">Quick Facts</h3>
          <div className="mt-3 text-sm text-gray-700">
            <div>
              <strong>Region:</strong> {dest.region}
            </div>
            {dest.altitude && (
              <div>
                <strong>Altitude:</strong> {dest.altitude} m
              </div>
            )}
            {dest.bestSeason && (
              <div>
                <strong>Best Season:</strong> {dest.bestSeason}
              </div>
            )}
            {dest.difficultyLevel && (
              <div>
                <strong>Difficulty:</strong> {dest.difficultyLevel}
              </div>
            )}
            {dest.entryFee && (
              <div>
                <strong>Entry Fee:</strong> {dest.entryFee}
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
