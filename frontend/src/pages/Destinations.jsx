import React, { useEffect, useState } from "react";
import axios from "axios";
import DestinationCard from "../components/DestinationCard";

const CATEGORIES = [
  "All",
  "Trekking",
  "Cultural Heritage",
  "Adventure Sports",
  "Wildlife & Nature",
  "Spiritual & Religious Sites",
  "Nature & Scenery",
];
const REGIONS = [
  "All",
  "Kathmandu Valley",
  "Pokhara Region",
  "Everest Region",
  "Annapurna Region",
  "Western Nepal",
  "Chitwan Region",
];

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("All");
  const [region, setRegion] = useState("All");

  useEffect(() => {
    fetchData();
  }, [q, category, region]);

  function fetchData() {
    const params = {};
    if (q) params.q = q;
    if (category) params.category = category;
    if (region) params.region = region;
    axios
      .get("http://localhost:4000/api/destinations", { params })
      .then((r) => setDestinations(r.data))
      .catch(() => setDestinations([]));
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-semibold">Destinations</h1>
        <div className="mt-4 md:mt-0 flex gap-2">
          <input
            placeholder="Search by name or keyword"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="px-3 py-2 border rounded"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-3 py-2 border rounded"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="px-3 py-2 border rounded"
          >
            {REGIONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        {destinations.length === 0 ? (
          <div className="text-gray-600">
            No results found. Try clearing filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destinations.map((d) => (
              <DestinationCard key={d.id} d={d} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
