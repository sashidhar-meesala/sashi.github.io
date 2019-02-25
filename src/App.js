import React, { Component } from "react";
import "./App.css";

import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Home from "./Layouts/Home";
import About from "./Layouts/About";
import Experience from "./Layouts/Experience";
import Skills from "./Layouts/Skills";
import Contact from "./Layouts/Contact";
import { Router, Link, Location } from "@reach/router";
import Resume from "./Assets/Resume_Test.pdf";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div
          style={{
            backgroundColor: "rgb(27, 32, 51)",
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Router>
            <Home
              path="/"
              name={"SASHIDHAR MEESALA"}
              title="Microsoft CRM /Dynamics 365 developer"
              Resume={Resume}
            />
            <About
              path="/about"
              title="Hey, I'm a software developer from Hyderabad, India."
              title1="I can help you build your next product."
              subtitle="I design, build, operate & sometimes rescue full-stack web
            applications."
              caption="Have a project you'd like to discuss?"
              email="Let's chat sashidharklu@gmail.com"
            />
            <Experience path="/experience" />
            <Skills path="/skills" />
            <Contact
              path="/contact"
              mobile=" +1 437 213 5660"
              email="sashidharklu@gmail.com"
            />
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
