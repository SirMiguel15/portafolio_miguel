export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 text-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        <h1 className="text-2xl font-black tracking-wide text-emerald-400">
          Miguel Angel Conde
        </h1>

        <ul className="flex gap-8 font-medium">
          <li>
            <a href="#inicio" className="text-slate-300 hover:text-emerald-400 transition-colors duration-300">
              Inicio
            </a>
          </li>

          <li>
            <a href="#sobre-mi" className="text-slate-300 hover:text-emerald-400 transition-colors duration-300">
              Sobre mí
            </a>
          </li>
          <li>
              <a
                href="#habilidades"
                className="text-slate-300 hover:text-emerald-400 transition-colors duration-300"
              >
                Habilidades
              </a>
            </li>

          <li>
            <a href="#proyectos" className="text-slate-300 hover:text-emerald-400 transition-colors duration-300">
              Proyectos
            </a>
          </li>

          <li>
            <a href="#contacto" className="text-slate-300 hover:text-emerald-400 transition-colors duration-300">
              Contacto
            </a>
          </li>
        </ul>

      </nav>
    </header>
  );
}