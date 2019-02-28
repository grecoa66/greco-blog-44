import React from "react";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <nav role="navigation" aria-label="main-navigation">
        <div className="navbar-start has-text-centered">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/resume">
            Resume
          </Link>
        </div>
      </nav>
    );
  }
};

export default Navbar;
