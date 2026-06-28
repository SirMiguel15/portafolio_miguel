import perfil from "../assets/Perfil_pixar.png";

import { FaReact, FaPython, FaJsSquare } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-slate-950 text-white flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">

        <div>

          <span className="text-emerald-400 text-xl font-semibold">
            Hola, soy
          </span>

          <h1 className="mt-4 text-6xl lg:text-7xl font-black leading-none">
            Miguel Angel
            <span className="block text-teal-400">
              Conde
            </span>
          </h1>

          <h2 className="mt-6 text-2xl text-slate-300">
            Estudiante en formación de
            <span className="text-emerald-400 font-semibold">
              {" "}Desarrollo de Software
            </span>
          </h2>

          <div className="w-24 h-1 bg-emerald-400 rounded-full mt-8 mb-8"></div>

          <p className="text-slate-400 leading-9 text-lg max-w-xl">
            Actualmente estoy aprendiendo Python, React,
            JavaScript y desarrollo web moderno.

            Me apasiona construir aplicaciones intuitivas,
            rápidas y visualmente atractivas.
          </p>

          <div className="mt-10">
            <button
              className="bg-emerald-500 hover:bg-emerald-400 transition px-8 py-4 rounded-xl font-semibold shadow-xl"
            >
              Ver proyectos
            </button>
          </div>

          <div className="mt-12">

            <p className="text-slate-300 font-semibold mb-5">
              Tecnologías principales
            </p>

            <div className="flex flex-wrap gap-5">

              <div className="flex items-center gap-2 bg-slate-800 border border-yellow-500 px-4 py-2 rounded-full">
                <FaPython className="text-yellow-400 text-2xl" />
                <span>Python</span>
              </div>

              <div className="flex items-center gap-2 bg-slate-800 border border-sky-500 px-4 py-2 rounded-full">
                <FaReact className="text-sky-400 text-2xl" />
                <span>React</span>
              </div>

              <div className="flex items-center gap-2 bg-slate-800 border border-yellow-400 px-4 py-2 rounded-full">
                <FaJsSquare className="text-yellow-300 text-2xl" />
                <span>JavaScript</span>
              </div>

              <div className="flex items-center gap-2 bg-slate-800 border border-blue-500 px-4 py-2 rounded-full">
                <SiMysql className="text-blue-400 text-2xl" />
                <span>MySQL</span>
              </div>

            </div>

          </div>

        </div>

        <div className="relative flex justify-center">

          <div className="absolute w-[420px] h-[420px] rounded-[80px] bg-gradient-to-br from-emerald-500 to-teal-500 rotate-12 opacity-25 blur-sm"></div>

          <div className="absolute w-[340px] h-[340px] rounded-[60px] border-2 border-emerald-400 rotate-12"></div>

          <img
            src={perfil}
            alt="Miguel Angel Conde"
            className="relative w-[370px] drop-shadow-[0_0_35px_rgba(16,185,129,0.45)]"
          />

        </div>

      </div>
    </section>
  );
}