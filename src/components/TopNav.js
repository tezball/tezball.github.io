import React from "react";
import { Link } from "react-router-dom";

function TopNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="Home">Home</Link>
        </li>
        <li>
          <Link to="Design-Pattrens">Design Pattrens</Link>
          <ul>
            <li>
              <Link to="Design-Pattrens/Creational">Creational</Link>
            </li>
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
