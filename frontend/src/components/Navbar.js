import React from "react";

function Navbar({ toggleDarkMode }) {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
        <li>Contact</li>
      </ul>
      <button onClick={toggleDarkMode}>Toggle Dark/Light</button>
    </nav>
  );
}

export default Navbar;
