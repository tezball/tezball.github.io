import React from "react";
import "./App.css";
import TopNav from "./components/TopNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Missing404 from "./pages/Missing404";
import DesignPattrens from "./pages/designPattrens/DesignPattrens";
import Creational from "./pages/designPattrens/creational/Creational";
import FactoryMethod from "./pages/designPattrens/creational/FactoryMethod";
import AbstractFactory from "./pages/designPattrens/creational/AbstractFactory";
import Builder from "./pages/designPattrens/creational/Builder";
import Prototype from "./pages/designPattrens/creational/Prototype";
import Singleton from "./pages/designPattrens/creational/Singleton";
import Behavioral from "./pages/designPattrens/behavioral/Behavioral";
import ChainOfResponsibility from "./pages/designPattrens/behavioral/ChainOfResponsibility";
import Command from "./pages/designPattrens/behavioral/Command";
import Interator from "./pages/designPattrens/behavioral/Interator";
import Interpreter from "./pages/designPattrens/behavioral/Interpreter";
import Mediator from "./pages/designPattrens/behavioral/Mediator";
import Memento from "./pages/designPattrens/behavioral/Memento";
import Observer from "./pages/designPattrens/behavioral/Observer";
import State from "./pages/designPattrens/behavioral/State";
import Strategy from "./pages/designPattrens/behavioral/Strategy";
import TemplateMethod from "./pages/designPattrens/behavioral/TemplateMethod";
import Visitor from "./pages/designPattrens/behavioral/Visitor";
import Structural from "./pages/designPattrens/structual/Structural";
import Adapter from "./pages/designPattrens/structual/Adapter";
import Bridge from "./pages/designPattrens/structual/Bridge";
import Composite from "./pages/designPattrens/structual/Composite";
import Decorator from "./pages/designPattrens/structual/Decorator";
import Facade from "./pages/designPattrens/structual/Facade";
import Flyweight from "./pages/designPattrens/structual/Flyweight";
import Proxy from "./pages/designPattrens/structual/Proxy";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Design-Pattrens" element={<DesignPattrens />} />
          <Route path="/Design-Pattrens/Creational" element={<Creational />} />
          <Route
            path="/Design-Pattrens/Creational/Factory-Method"
            element={<FactoryMethod />}
          />
          <Route
            path="/Design-Pattrens/Creational/Abstract-Factory"
            element={<AbstractFactory />}
          />
          <Route
            path="/Design-Pattrens/Creational/Builder"
            element={<Builder />}
          />
          <Route
            path="/Design-Pattrens/Creational/Prototype"
            element={<Prototype />}
          />
          <Route
            path="/Design-Pattrens/Creational/Singleton"
            element={<Singleton />}
          />
          <Route path="/Design-Pattrens/Behavioral" element={<Behavioral />} />
          <Route
            path="/Design-Pattrens/Behavioral/Chain-of-Responsibility"
            element={<ChainOfResponsibility />}
          />
          <Route
            path="/Design-Pattrens/Behavioral/Command"
            element={<Command />}
          />
          <Route
            path="/Design-Pattrens/Behavioral/Interator"
            element={<Interator />}
          />
          <Route
            path="/Design-Pattrens/Behavioral/Interpreter"
            element={<Interpreter />}
          />
          <Route
            path="/Design-Pattrens/Behavioral/Mediator"
            element={<Mediator />}
          />
          <Route
            path="/Design-Pattrens/Behavioral/Memento"
            element={<Memento />}
          />
          <Route
            path="/Design-Pattrens/Behavioral/Observer"
            element={<Observer />}
          />
          <Route path="/Design-Pattrens/Behavioral/State" element={<State />} />
          <Route
            path="/Design-Pattrens/Behavioral/Strategy"
            element={<Strategy />}
          />
          <Route
            path="/Design-Pattrens/Behavioral/Template-Method"
            element={<TemplateMethod />}
          />
          <Route
            path="/Design-Pattrens/Behavioral/Visitor"
            element={<Visitor />}
          />
          <Route path="/Design-Pattrens/Structural" element={<Structural />} />
          <Route
            path="/Design-Pattrens/Structural/Adapter"
            element={<Adapter />}
          />
          <Route
            path="/Design-Pattrens/Structural/Bridge"
            element={<Bridge />}
          />
          <Route
            path="/Design-Pattrens/Structural/Composite"
            element={<Composite />}
          />
          <Route
            path="/Design-Pattrens/Structural/Decorator"
            element={<Decorator />}
          />
          <Route
            path="/Design-Pattrens/Structural/Facade"
            element={<Facade />}
          />
          <Route
            path="/Design-Pattrens/Structural/Flyweight"
            element={<Flyweight />}
          />
          <Route path="/Design-Pattrens/Structural/Proxy" element={<Proxy />} />
          <Route path="/About" element={<About />} />
          <Route path="/*" element={<Missing404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
