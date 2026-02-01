import React from "react";

export default function FeatureCard({ title, img, desc }) {
  return (
    <div className="p-6 bg-black/50 backdrop-blur-md rounded-lg border border-white/20 text-center">
      <img src={img} alt={title} className="h-16 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{desc}</p>
    </div>
  );
}
