import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Thanks from "./components/Thanks";

function App() {
  return (
    <Router basename="/gautam-portfolio">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </Router>
  );
}

export default App;
