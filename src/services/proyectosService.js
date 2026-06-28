export async function obtenerProyectos() {

  const respuesta = await fetch("/data/projects.json");

  if (!respuesta.ok) {
    throw new Error("No se pudieron cargar los proyectos.");
  }

  return respuesta.json();

}