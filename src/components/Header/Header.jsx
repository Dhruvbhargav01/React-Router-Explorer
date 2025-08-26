

import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              alt="Logo"
            />
          </Link>
          <div className="nav-actions">
            <Link to="#" className="login-btn">
              Log in
            </Link>
            <Link to="#" className="get-started-btn">
              Get started
            </Link>
          </div>
          <div className="nav-links" id="mobile-menu-2">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "nav-link"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "nav-link"
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "nav-link"
                  }
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "nav-link"
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
