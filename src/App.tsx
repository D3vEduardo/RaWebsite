import Header from "./pages/Header";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Evaluations from "./pages/Evaluations.tsx";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          (<>
            <Navbar />
            <Header />
            <Services />
            <Evaluations />
            <Contact />
            <Footer />
          </>)
        } />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}