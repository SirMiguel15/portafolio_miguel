import { FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {

  const anio = new Date().getFullYear();

  return (

    <footer className="bg-slate-950 border-t border-slate-800 py-10">

      <div className="max-w-7xl mx-auto px-8 text-center">

        <h3 className="text-2xl font-bold text-white">
          Miguel Angel Conde
        </h3>

        <p className="text-slate-400 mt-2">
          Estudiante en Desarrollo de Software
        </p>

        <div className="flex justify-center gap-8 mt-8">

          <a
            href="mailto:mcondes.2016@gmail.com"
            className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition"
          >
            <FaEnvelope />
            Correo
          </a>

          <a
            href="https://github.com/SirMiguel15"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition"
          >
            <FaGithub />
            GitHub
          </a>

        </div>

        <p className="text-slate-500 mt-8 text-sm">
          © {anio} Miguel Ángel Conde. Todos los derechos reservados.
        </p>

      </div>

    </footer>

  );

}