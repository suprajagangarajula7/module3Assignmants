import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ButtonDemo from "./components/ButtonDemo";
import ImageHover from "./components/ImageHover";
import ListDemo from "./components/ListDemo";
import GridCards from "./components/GridCards";
import TableDemo from "./components/TableDemo";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero />

      <section className="p-6 space-y-10">
        <ButtonDemo />
        <ImageHover />
        <ListDemo />
        <GridCards />
        <TableDemo />
        <ContactForm />
      </section>
    </div>
  );
}

export default App;
