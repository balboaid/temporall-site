import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-neutral-900 border-b border-neutral-800">
      <Link to="/" className="text-xl font-bold text-orange-500">TEMPORALL</Link>

      <div className="hidden md:flex gap-6">
        <Link to="/" className="hover:text-orange-400">Home</Link>
        <Link to="/events" className="hover:text-orange-400">Events</Link>
        <Link to="/about" className="hover:text-orange-400">About</Link>
        <Link to="/investors" className="hover:text-orange-400">Investors</Link>
        <Link to="/contact" className="hover:text-orange-400">Contact</Link>
      </div>
    </nav>
  );
}
