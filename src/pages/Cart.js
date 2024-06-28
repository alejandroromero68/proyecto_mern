import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  const handleQuantityChange = (productId, event) => {
    const quantity = parseInt(event.target.value);
    if (quantity > 0) {
      updateQuantity(productId, quantity);
    }
  };

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Total</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(event) => handleQuantityChange(item.id, event)}
                  />
                </td>
                <td>${item.price}</td>
                <td>${item.price * item.quantity}</td>
                <td>
                  <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="total">
        <h3>
          Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
        </h3>
      </div>
    </div>
  );
};

export default Cart;
