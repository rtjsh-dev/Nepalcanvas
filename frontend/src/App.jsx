import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:slug" element={<DestinationDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
