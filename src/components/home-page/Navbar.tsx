import React from "react";

const Navbar = () => (
  <nav className="navbar pt-10">
    <div className="navbar-logo">LOGO</div>
    <ul className="navbar-links">
      <li><a href="#">Products</a></li>
      <li><a href="#">Loan Uses</a></li>
      <li><a href="#">Our Clients</a></li>
      <li><a href="#">Our Process</a></li>
      <li><a href="#">Resource</a></li>
    </ul>
    <button className="navbar-btn">Get Started</button>
  </nav>
);

export default Navbar;