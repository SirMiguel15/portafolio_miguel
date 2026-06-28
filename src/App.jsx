import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ListaHabilidades from "./components/ListaHabilidades";
import SeccionProyectos from "./components/SeccionProyectos";
import FormularioContacto from "./components/FormularioContacto";
import Footer from "./components/Footer";
import SobreMi from "./components/SobreMi";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SobreMi />
      <ListaHabilidades />
      <SeccionProyectos />
      <FormularioContacto />
      <Footer />
    </>
  );
}