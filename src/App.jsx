import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-18 lg:pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<div className="p-10">Projects</div>} />
          <Route path="/contact" element={<div className="p-10">Contact</div>} />
        </Routes>
      </main>

      <Footer />
      <FloatingContact />
    </>
  );
}

export default App;