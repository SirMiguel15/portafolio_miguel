export default function TarjetaHabilidad({ habilidad }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-emerald-400 transition">

      <h3 className="text-xl font-semibold text-emerald-400">
        {habilidad.nombre}
      </h3>

      <p className="text-slate-400 mt-2">
        {habilidad.tipo}
      </p>

    </div>
  );
}