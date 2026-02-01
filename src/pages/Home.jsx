// src/pages/Home.jsx
import React from "react";
import logo from "../assets/logo.png";
import bg from "../assets/bg.jpg";

export default function Home() {
  const menuItems = ["HOME", "EVENTS", "ABOUT", "CONTACT", "INVESTORS"];

  const events = [
    {
      name: "Limp Bizkit",
      loc: "@ Allianz Parque",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/41/Limp_Bizkit_2021.jpg",
    },
    {
      name: "Tiësto",
      loc: "@ Teatro B32 – Faria Lima",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/14/Ti%C3%ABsto_2019.jpg",
    },
    {
      name: "Titãs",
      loc: "@ Allianz Parque",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tit%C3%A3s_2017.jpg",
    },
  ];

  return (
    <div
      className="min-h-screen w-full text-white bg-no-repeat bg-cover bg-fixed"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "left top",
        backgroundSize: "118%",
      }}
    >
      {/* NAVBAR */}
      <nav className="w-full flex justify-center pt-8">
        <ul className="flex gap-10 text-lg font-medium tracking-wide uppercase">
          {menuItems.map((item, i) => (
            <li
              key={i}
              className="hover:text-orange-500 hover:underline transition cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO LOGO + SEARCH */}
      <section className="pt-16 text-center">
        <img src={logo} alt="Temporall Logo" className="h-32 mx-auto mb-6" />
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search events, artists, venues..."
            className="w-full px-4 py-2 rounded-full text-black focus:outline-none"
          />
        </div>
      </section>

      {/* LOCATION GRID */}
      <section className="mt-24 px-6 max-w-5xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { city: "Lisbon", desc: "Europe Operations" },
            { city: "Miami", desc: "North America Hub" },
            { city: "São Paulo", desc: "Latin America HQ" },
          ].map((loc, i) => (
            <div
              key={i}
              className="p-6 bg-black/50 backdrop-blur-md rounded-lg border border-white/20"
            >
              <h3 className="text-2xl font-semibold">{loc.city}</h3>
              <p className="text-gray-300 text-sm mt-1">{loc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-14 text-center">Upcoming Events</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {events.map((ev, i) => (
            <div
              key={i}
              className="p-4 bg-black/60 backdrop-blur-lg rounded-xl border border-zinc-600 hover:bg-black/80 transition"
            >
              <img
                src={ev.img}
                alt={ev.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-1">{ev.name}</h3>
              <p className="text-gray-300 mb-4">{ev.loc}</p>
              <button className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
                View Event
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* TICKETING & PARTNERS */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-center mb-16">
          Ticketing & Strategic Partners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 bg-black/50 backdrop-blur-md rounded-xl border border-white/20 text-center">
            <h3 className="text-xl font-semibold mb-4">Official Ticketing</h3>
            <img
              className="h-14 mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/2/20/Ticketmaster_logo.svg"
              alt="Ticketmaster Logo"
            />
          </div>

          <div className="p-8 bg-black/50 backdrop-blur-md rounded-xl border border-white/20 text-center">
            <h3 className="text-xl font-semibold mb-4">Venture Partner</h3>
            <img
              className="h-16 mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0f/BTG_Pactual_logo.svg"
              alt="BTG Pactual Logo"
            />
          </div>

          <div className="p-8 bg-black/50 backdrop-blur-md rounded-xl border border-white/20 text-center">
            <h3 className="text-xl font-semibold mb-4">
              VC Consulting – Endorsed By
            </h3>
            <img
              className="h-14 mx-auto"
              src="https://logodownload.org/wp-content/uploads/2019/09/xp-investimentos-logo.png"
              alt="XP Logo"
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="pb-28 text-center">
        <h2 className="text-4xl font-bold mb-4">Experience Everywhere</h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-6 text-lg">
          Temporall delivers world class entertainment across three continents.
        </p>
        <button className="px-10 py-3 rounded bg-white text-black font-semibold hover:bg-gray-200 transition text-lg">
          Explore More
        </button>
      </section>
    </div>
  );
}
