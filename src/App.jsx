import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-18 lg:pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div className="p-10">About</div>} />
          <Route path="/services" element={<div className="p-10">Services</div>} />
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