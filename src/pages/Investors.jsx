export default function Investors() {
  return (
    <div className="px-6 md:px-20 py-16">

      <h1 className="text-center text-4xl font-bold mb-10">
        TEMPORALL FINANCIAL PERFORMANCE
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mb-20">
        
        <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-700">
          <p className="opacity-70">PAX Total Estimado</p>
          <h2 className="text-3xl font-bold my-2">1.5M+</h2>
        </div>

        <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-700">
          <p className="opacity-70">Investimento Direto</p>
          <h2 className="text-3xl font-bold my-2">R$ 20M+</h2>
        </div>

        <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-700">
          <p className="opacity-70">ROI Estimado</p>
          <h2 className="text-3xl font-bold my-2">12.5x</h2>
        </div>

      </div>

      <h2 className="text-2xl font-bold mb-6">Cashflow por Evento</h2>

      <div className="grid md:grid-cols-4 gap-6">

        <EventCard 
          title="TIESTO @ Copacabana"
          place="Copacabana Beach"
          cash="R$ 5M"
        />

        <EventCard 
          title="Helvetia Music Festival"
          place="Indaiatuba SP"
          cash="R$ 10M"
        />

        <EventCard 
          title="Ivete Sangalo Live"
          place="Brasil"
          cash="R$ 8M"
        />

        <EventCard 
          title="Zenith Festival"
          place="Campos RJ"
          cash="R$ 6M"
        />

      </div>
    </div>
  );
}

function EventCard({ title, place, cash }) {
  return (
    <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-4">
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm opacity-70">{place}</p>
      <p className="text-orange-400 font-bold mt-4">{cash}</p>
    </div>
  );
}
