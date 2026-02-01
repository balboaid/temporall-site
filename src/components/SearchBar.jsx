import React from "react";

export default function SearchBar() {
  return (
    <div className="max-w-4xl mx-auto mt-8 px-6">
      <input
        type="text"
        placeholder="Search for events, artists, venues..."
        className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
      />
    </div>
  );
}
