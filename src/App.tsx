import Header from "./pages/Header";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AOS from "aos";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}