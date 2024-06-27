import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import productsData from '../productsData'; // Asumiendo que tienes un archivo productsData.js
import './Products.css';

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="products">
      <h2>Productos</h2>
      <div className="product-list">
        {productsData.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p> {/* Campo de descripción del producto */}
            <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
