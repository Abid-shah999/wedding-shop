import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} />
      <h1>Wedding Items Shop</h1>
      <ProductCard name="Wedding Dress" price="200$" />
      <LoginForm />
      <RegisterForm />
      <Footer />
    </div>
  );
}

export default App;
