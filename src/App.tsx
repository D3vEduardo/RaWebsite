import Header from "./components/Header";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ScrollAnimation } from "./components/ScrollAnimation";

export default function App() {

  return (
    <>
      < Navbar />
      < Header />
      < Services />
      < Contact />
      < Footer />
      <ScrollAnimation />
    </>
  )
}