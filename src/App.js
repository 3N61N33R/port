import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main>
      <About />
      <Contact />
      <Navbar />
      <Skills />
    </main>
  );
}
