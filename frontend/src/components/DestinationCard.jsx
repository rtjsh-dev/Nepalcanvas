import React from "react";
import { Link } from "react-router-dom";

export default function DestinationCard({ d }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md overflow-hidden">
      <div className="h-48 bg-gray-200">
        <img
          src={
            (d.images && d.images.length > 0 && d.images[0].imageUrl) ||
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=60"
          }
          alt={d.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">{d.name}</h3>
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {d.category}
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-2">{d.overview}</p>
        <div className="mt-4 flex justify-between items-center">
          <Link
            to={`/destinations/${d.slug}`}
            className="text-sm text-white bg-red-600 px-3 py-2 rounded"
          >
            View Details
          </Link>
          <div className="text-xs text-gray-500">{d.region}</div>
        </div>
      </div>
    </div>
  );
}
