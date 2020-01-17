import React from "react";

function Nav() {
  return (
    <div>
      <nav id="navbar">
        <div className="nav-wrapper">
          <div className="logo">
            <a href="#home">
              <i className="fas fa-chess-knight"></i> Karam Shadid
            </a>
          </div>

          <ul id="menu">
            <li>
              <a href="#menu">Home</a>
            </li>
            <li>
              <a href="#project-title">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#mdbcontainer">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
