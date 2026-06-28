export default function TarjetaProyecto({ proyecto }) {
  return (
    <div className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-400 transition-all duration-500 flex flex-col h-full">

      <div className="overflow-hidden">

      <img
        src={proyecto.imagen}
        alt={proyecto.titulo}
        className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
      />

      </div>



      <div className="p-6 flex flex-col flex-1">
{/*edicion imagenes con zoom h3*/}
        <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 mb-3">
          {proyecto.titulo}
        </h3>

        <p className="text-slate-300 leading-7 mb-5">
          {proyecto.descripcion}
        </p>



        <div className="flex flex-wrap gap-2 mb-6">

          {proyecto.tecnologias.map((tecnologia, index) => (

            <span
              key={index}
              className="bg-slate-700  text-slate-200 text-sm px-3 py-1 rounded-full border border-slate-600"
            >
              {tecnologia}
            </span>

          ))}

        </div>

    
    <div className="mt-auto"></div>
        <a
          href={proyecto.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-emerald-50 hover:bg-emerald-400 hover:scale-105 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 w-full"
        >
          Ver repositorio
        </a>

      </div>

    </div>
  );
}