import React from "react";

function ProductCard({ name, price }) {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/150" alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button onClick={() => alert("Added to cart!")}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
