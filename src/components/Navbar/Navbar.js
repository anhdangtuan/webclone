import React from "react";
import Snavbar from "./style";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Snavbar>
      <div className="nav">
        <h2 className="title">DOVILE</h2>
        <div className="link">
          <Link className="navlinks" to="/">
            HOME
          </Link>
          <Link className="navlinks about-me" to="/about-me">
            ABOUT ME
          </Link>
          <Link className="navlinks" to="/blog">
            BLOG
          </Link>
        </div>
      </div>
    </Snavbar>
  );
};

export default Navbar;
