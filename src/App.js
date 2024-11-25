import { BrowserRouter, Routes, Route } from "react-router-dom"

import React from "react";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage"
import Electricas from "./pages/Electras"
import Acusticas from "./pages/Acusticas"
import Electroacusticas from "./pages/Electroacusticas"
import Accesorios from "./pages/Accesorios";
import Postventa from "./pages/Postventa";


function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="electricas" element={<Electricas />} />
          <Route path="acusticas" element={<Acusticas />} />
          <Route path="electroacusticas" element={<Electroacusticas />} />
          <Route path="accesorios" element={<Accesorios />} />
          <Route path="postventa" element={<Postventa />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
