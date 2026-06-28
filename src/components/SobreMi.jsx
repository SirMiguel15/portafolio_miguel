export default function SobreMi() {

  const fortalezas = [
    "Desarrollo Web",
    "Python",
    "Django",
    "React",
    "JavaScript",
    "MySQL",
    "Mantenimiento de computadores"
  ];

  return (

    <section
      id="sobre-mi"
      className="bg-slate-900 text-white py-24"
    >

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold">

          Sobre

          <span className="text-emerald-400">
            {" "}mí
          </span>

        </h2>

        <div className="w-24 h-1 bg-emerald-400 rounded-full mt-5 mb-16"></div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>

            <h3 className="text-2xl font-semibold text-emerald-400 mb-6">

              ¿Quién soy?

            </h3>

            <p className="text-slate-300 leading-8">

              Soy Miguel Angel Conde, estudiante en formación de
              Desarrollo de Software en CENSA. Me apasiona el
              desarrollo web y disfruto aprender nuevas tecnologías
              para crear aplicaciones modernas, funcionales y con
              una buena experiencia de usuario.

            </p>

          </div>
          <div>

            <h3 className="text-2xl font-semibold text-emerald-400 mb-6">

              Fortalezas

            </h3>

            <div className="grid grid-cols-2 gap-4">

              {fortalezas.map((fortaleza) => (
                <div
                  key={fortaleza}
                  className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-center hover:border-emerald-400 transition"
                >
                  {fortaleza}
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Objetivo */}

        <div className="mt-20 text-center">

          <h3 className="text-2xl font-semibold text-emerald-400 mb-6">

            Objetivo profesional

          </h3>

          <p className="text-slate-300 leading-8">

            Mi objetivo es continuar fortaleciendo mis conocimientos
            en desarrollo de software, participar en proyectos reales
            y adquirir experiencia profesional desarrollando soluciones
            web que aporten valor a las personas y a las organizaciones.

          </p>

        </div>

      </div>

    </section>

  );

}