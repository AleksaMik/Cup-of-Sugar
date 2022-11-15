import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <h1>
        <Link to="/">Cup of Sugar</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/search">Borrow</Link>
          </li>
          <li>
            <Link to="/post">Lend</Link>
          </li>
          <li>
            <Link to="/saved">Saved</Link>
          </li>
          <li>
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
