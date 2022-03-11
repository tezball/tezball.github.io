import React from "react";
import "./App.css";
import TopNav from "./components/TopNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Missing404 from "./pages/Missing404";
import DesignPattrens from "./pages/designPattrens/DesignPattrens";
import Creational from "./pages/designPattrens/creational/Creational";
import DesignPattrensLayout from "./pages/designPattrens/DesignPattrensLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />

          <Route path="/Design-Pattrens" element={<DesignPattrensLayout />}>
            <Route index element={<DesignPattrens />}></Route>
            <Route path="Creational" element={<Creational />}></Route>
            <Route path="Structural" element={<Home />}></Route>
            <Route path="Behavioral" element={<Home />}></Route>
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Missing404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
