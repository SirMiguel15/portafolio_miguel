import { useEffect, useState } from "react";
import { obtenerProyectos } from "../services/proyectosService";
import TarjetaProyecto from "./TarjetaProyecto";

export default function SeccionProyectos() {
    const [proyectos, setProyectos] = useState([]);
    const [cargando, setCargando] = useState(true); 
    const [error, setError] = useState("");
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
    const categorias = [
        "Todos",
        "Python",
        "React",
        "Soporte Técnico",
        ];
    const proyectosFiltrados =
    categoriaSeleccionada === "Todos"
    ? proyectos
    : proyectos.filter(
        (proyecto) =>
          proyecto.categoria === categoriaSeleccionada
        );

    useEffect(() => {

    async function cargarProyectos() {

    try {

      const datos = await obtenerProyectos();

      setProyectos(datos);

    } catch (err) {

      setError(err.message);

    } finally {

      setCargando(false);

    }

  }

  cargarProyectos();

}, []);

    if (cargando) {
    return (
      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-center text-xl">
            Cargando proyectos...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-red-500 text-center">
            {error}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="proyectos"
      className="bg-slate-950 text-white py-24"
    >

     <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold">
          Mis
          <span className="text-emerald-400"> Proyectos</span>
        </h2>

        <div className="w-24 h-1 bg-emerald-400 rounded-full mt-5 mb-12"></div>
            <div className="flex flex-wrap gap-4 mb-10">
        
        {categorias.map((categoria) => (
        <button
            key={categoria}
            onClick={() => setCategoriaSeleccionada(categoria)}
            className={`
            px-5
            py-2
            rounded-full
            transition
        ${
          categoriaSeleccionada === categoria
            ? "bg-emerald-500 text-white"
            : "bg-slate-800 text-slate-300 hover:bg-slate-700"
        }
      `}
        >
        {categoria}
        </button>

        ))}
            </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectosFiltrados.map((proyecto) => (
                <TarjetaProyecto
                key={proyecto.id}
                proyecto={proyecto}
                />
                ))}
        </div>
      </div>

    </section>
            );

}