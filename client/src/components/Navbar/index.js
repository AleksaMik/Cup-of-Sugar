import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Navbar() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/post">Post Rental</Link>
          </li>
          <li className="mx-1">
            <Link to="/SavedRentals">Saved Rentals</Link>
          </li>
          <li className="mx-1">
            <Link to="/SearchRentals">Search Rentals</Link>
          </li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h3>
        <Link to="/">Cup-of-Sugar</Link>
      </h3>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Navbar;
