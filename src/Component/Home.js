import React, { Component } from "react";
import "./Style/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="obx">
        <section className="hero">
          <div className="container">
            <h2>Welcome to My Website</h2>
            <p>Showcasing my work, skills and more!</p>
            <button className="btn">Explore</button>
            
          </div>
        </section>

        <section className="about">
          <div className="container">
            <h2>About Me</h2>
            <p>
              Hello! I am a passionate developer focused on building responsive
              and user-friendly websites.
            </p>
          </div>
        </section>

        <footer>
          <div className="container">
            <p>&copy; 2025 My Website. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
}