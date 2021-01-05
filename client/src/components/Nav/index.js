import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-primary bg-dark">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
        <Link style={styles.link} to="/search">Search</Link>
        <Link style={styles.link} to="/saved">Saved</Link>
    </nav>
  );
}

export default Nav;

const styles = {
  link: {
    color: "white",
    padding: "20px",
  }
}