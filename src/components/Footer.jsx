import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-black text-white text-center">
      &copy; {new Date().getFullYear()} Temporall. All rights reserved.
    </footer>
  );
}
