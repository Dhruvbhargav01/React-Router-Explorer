

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <aside className="home-aside">
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-hero-title">
              Welcome to <span className="home-subtitle">Your Awesome App</span>
            </h1>
            <p className="home-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Discover amazing features, seamless experience, and modern design.
            </p>

            {/* Buttons below paragraph */}
            <div className="home-buttons">
              <Link className="home-download-btn" to="/">
                Download Now
              </Link>
              <Link className="home-learn-btn" to="/about">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="home-image1">
          <img
            src="https://images.unsplash.com/photo-1718607601475-3ff032a2322b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image1"
          />
        </div>
      </aside>

      {/* Highlight Image */}
      <div className="home-section">
        <div className="home-section-image">
          <img
            src="https://plus.unsplash.com/premium_photo-1676637656198-e2bbf752103a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="section-image"
          />
        </div>
        <div className="home-section-text">
          <p className="home-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
        </div>
      </div>


      <p className="home-footer-text">
        Join thousands of users and start your journey today!
      </p>
    </div>
  );
}
