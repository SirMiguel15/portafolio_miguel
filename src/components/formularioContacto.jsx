import { useState } from "react";
export default function FormularioContacto() {

  const [formulario, setFormulario] = useState({
  nombre: "",
  correo: "",
  asunto: "",
  mensaje: "",
  });

  const [errores, setErrores] = useState({});
  const [mensajeExito, setMensajeExito] = useState("");

  function manejarCambio(e) {
  setFormulario({
    ...formulario,
    [e.target.name]: e.target.value,
  });
  }

  function validarFormulario() {
  const nuevosErrores = {};
    if (!formulario.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }

    if (!formulario.correo.trim()) {
      nuevosErrores.correo = "El correo es obligatorio.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.correo)
    ) {
      nuevosErrores.correo = "Ingrese un correo válido.";
    }

    if (!formulario.asunto.trim()) {
      nuevosErrores.asunto = "El asunto es obligatorio.";
    }

    if (!formulario.mensaje.trim()) {
      nuevosErrores.mensaje = "El mensaje es obligatorio.";
    }
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  }

  function enviarFormulario(e) {
  e.preventDefault();
  if (validarFormulario()) {
  setMensajeExito("¡Enviado correctamente!");
    setFormulario({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });
  setErrores({});
} else {
  setMensajeExito("");
}
  }

  return (

    <section
      id="contacto"
      className="bg-slate-900 text-white py-24"
    >

      <div className="max-w-4xl mx-auto px-8">

        <h2 className="text-5xl font-bold">
        Contácta<span className="text-emerald-400">me</span>
        </h2>

        <div className="w-24 h-1 bg-emerald-400 rounded-full mt-5 mb-12"></div>
            <form onSubmit={enviarFormulario} className="space-y-6">

            <input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={manejarCambio}
            placeholder="Nombre completo"
            className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-emerald-400"
            />
            {errores.nombre && (
            <p className="text-red-400 text-sm">
            {errores.nombre}
            </p>
            )}

            <input
            type="email"
            name="correo"
            value={formulario.correo}
            onChange={manejarCambio}
            placeholder="Correo electrónico"
            className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-emerald-400"
            />
            {errores.correo && (
            <p className="text-red-400 text-sm">
            {errores.correo}
            </p>
            )}

            <textarea
            name="mensaje"
            value={formulario.mensaje}
            onChange={manejarCambio}
            rows="6"
            placeholder="Escribe tu mensaje..."
            className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-emerald-400 resize-none"
            ></textarea>
            {errores.mensaje && (
            <p className="text-red-400 text-sm">
            {errores.mensaje}
            </p>
            )}

            <input
            type="text"
            name="asunto"
            value={formulario.asunto}
            onChange={manejarCambio}
            placeholder="Asunto"
            className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-emerald-400"
            />
            {errores.asunto && (
            <p className="text-red-400 text-sm">
            {errores.asunto}
            </p>
            )}

            {mensajeExito && (
            <p className="text-green-400 font-semibold">
            {mensajeExito}
            </p>
            )}

            <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-400 transition px-8 py-4 rounded-xl font-semibold"
            >
            Enviar mensaje
            </button>

            </form>
      </div>

    </section>

  );

}