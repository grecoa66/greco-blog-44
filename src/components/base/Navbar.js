import React from "react";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <nav role="navigation" aria-label="main-navigation">
        <div className="navbar-start has-text-centered">
          <Link to="/">Home</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    );
  }
};

export default Navbar;
