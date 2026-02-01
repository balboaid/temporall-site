import React from "react";
import bg from "../assets/bg.jpg";
import Logo from "./Logo";

export default function Hero() {
  return (
    <div
      className="min-h-screen w-full text-white bg-no-repeat bg-cover bg-fixed flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "118%" }}
    >
      <Logo />
      <h1 className="mt-8 text-5xl font-bold">Experience Everywhere</h1>
      <p className="mt-4 text-gray-300 text-lg max-w-xl text-center">
        Temporall delivers world class entertainment across three continents.
      </p>
    </div>
  );
}
