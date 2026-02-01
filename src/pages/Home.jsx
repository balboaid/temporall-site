import logo from "../assets/logo.png";
import bg from "../assets/bg.jpg";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full text-white bg-no-repeat bg-cover bg-fixed"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "left top",
        backgroundSize: "130%", // MEIO TERMO PERFEITO
      }}
    >
      {/* LOGO */}
      <div className="pt-[50px] flex justify-center">
        <img
          src={logo}
          alt="Temporall Logo"
          className="h-24 w-auto drop-shadow-xl" // tamanho mais equilibrado
        />
      </div>

      {/* GRID OF LOCATIONS */}
      <section className="mt-20 px-6 max-w-4xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="p-4 bg-black/50 backdrop-blur-md rounded-lg border border-white/20">
            <h3 className="text-xl font-semibold">Lisbon</h3>
            <p className="text-gray-300 text-sm">Europe Operations</p>
          </div>

          <div className="p-4 bg-black/50 backdrop-blur-md rounded-lg border border-white/20">
            <h3 className="text-xl font-semibold">Miami</h3>
            <p className="text-gray-300 text-sm">North America Hub</p>
          </div>

          <div className="p-4 bg-black/50 backdrop-blur-md rounded-lg border border-white/20">
            <h3 className="text-xl font-semibold">São Paulo</h3>
            <p className="text-gray-300 text-sm">Latin America HQ</p>
          </div>

        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="p-6 bg-black/60 backdrop-blur-lg rounded-xl border border-zinc-600 hover:bg-black/80 transition">
            <h3 className="text-xl font-bold mb-1">Limp Bizkit</h3>
            <p className="text-gray-300 mb-3">@ Allianz Parque</p>
            <button className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200">
              View Event
            </button>
          </div>

          <div className="p-6 bg-black/60 backdrop-blur-lg rounded-xl border border-zinc-600 hover:bg-black/80 transition">
            <h3 className="text-xl font-bold mb-1">Tiësto</h3>
            <p className="text-gray-300 mb-3">@ Teatro B32 – Faria Lima</p>
            <button className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200">
              View Event
            </button>
          </div>

          <div className="p-6 bg-black/60 backdrop-blur-lg rounded-xl border border-zinc-600 hover:bg-black/80 transition">
            <h3 className="text-xl font-bold mb-1">Titãs</h3>
            <p className="text-gray-300 mb-3">@ Allianz Parque</p>
            <button className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200">
              View Event
            </button>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Experience Everywhere</h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Temporall delivers world-class entertainment across three continents.
        </p>

        <button className="px-8 py-3 rounded bg-white text-black font-semibold hover:bg-gray-200 transition">
          Explore More
        </button>
      </section>
    </div>
  );
}

