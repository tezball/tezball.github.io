import React from "react";
import { Link } from "react-router-dom";

function TopNav() {
  return (
    <nav>
      <ul style={{ textAlign: "left" }}>
        <li>
          <Link to="Home">Home</Link>
        </li>
        <li>
          <Link to="Design-Pattrens">Design Pattrens</Link>
          <ul>
            <li>
              <Link to="Design-Pattrens/Creational">Creational</Link>
              <ul>
                <li>
                  <Link to="Design-Pattrens/Creational/Abstract-Factory">
                    Abstract Factory
                  </Link>
                </li>
                <li>
                  <Link to="Design-Pattrens/Creational/Factory-Method">
                    Factory Method
                  </Link>
                </li>
                <li>
                  <Link to="Design-Pattrens/Creational/Builder">Builder</Link>
                </li>
                <li>
                  <Link to="Design-Pattrens/Creational/Prototype">
                    Prototype
                  </Link>
                </li>
                <li>
                  <Link to="Design-Pattrens/Creational/Singleton">
                    Singleton
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="Design-Pattrens/Behavioral">Behavioral</Link>
            </li>
            <ul>
              <li>
                <Link to="Design-Pattrens/Behavioral/Chain-of-Responsibility">
                  Chain of Responsibility
                </Link>
              </li>
              <li>
                <Link to="Design-Pattrens/Behavioral/Command">Command</Link>
              </li>
              <li>
                <Link to="Design-Pattrens/Behavioral/Interator">Interator</Link>
              </li>
              <li>
                <Link to="Design-Pattrens/Behavioral/Interpreter">
                  Interpreter
                </Link>
              </li>
              <li>
                <Link to="Design-Pattrens/Behavioral/Mediator">Mediator</Link>
              </li>
              <li>
                <Link to="Design-Pattrens/Behavioral/Memento">Memento</Link>
              </li>
              <li>
                <Link to="Design-Pattrens/Behavioral/Observer">Observer</Link>
              </li>
              <li>
                <Link to="Design-Pattrens/Behavioral/State">State</Link>
              </li>
              <li>
                <Link to="Design-Pattrens/Behavioral/Strategy">Strategy</Link>
              </li>
              <li>
                <Link to="Design-Pattrens/Behavioral/Template-Method">
                  Template Method
                </Link>
              </li>
              <li>
                <Link to="Design-Pattrens/Behavioral/Visitor">Visitor</Link>
              </li>
            </ul>
          </ul>
        </li>
        <li>
          <Link to="About">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
