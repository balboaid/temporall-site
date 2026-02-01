import React from "react";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center pt-8">
      <Logo />
      <ul className="flex gap-10 text-lg font-medium tracking-wide ml-10">
        <li className="hover:text-gray-300 transition cursor-pointer">Home</li>
        <li className="hover:text-gray-300 transition cursor-pointer">Events</li>
        <li className="hover:text-gray-300 transition cursor-pointer">About</li>
        <li className="hover:text-gray-300 transition cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}
