import React from "react";

export default function EventCard({ name, loc }) {
  return (
    <div className="p-6 bg-black/60 backdrop-blur-lg rounded-xl border border-zinc-600 hover:bg-black/80 transition">
      <h3 className="text-2xl font-bold mb-1">{name}</h3>
      <p className="text-gray-300">{loc}</p>
      <button className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition mt-4">
        View Event
      </button>
    </div>
  );
}
