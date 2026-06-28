import { habilidades } from "../data/habilidades";
import TarjetaHabilidad from "./TarjetaHabilidad";
export default function SkillList() {
  return (
    <section
    id="habilidades"
    className="bg-slate-900 text-white py-24"
    >
  <div className="max-w-7xl mx-auto px-8">

    <h2 className="text-5xl font-bold">
      Mis
      <span className="text-emerald-400">
        {" "}Habilidades
      </span>
    </h2>

    <div className="w-24 h-1 bg-emerald-400 rounded-full mt-5 mb-12"></div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

{habilidades.map((habilidad) => (

  <TarjetaHabilidad
    key={habilidad.id}
    habilidad={habilidad}
  />

))}

</div>

  </div>
</section>
  );
}