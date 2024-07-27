// /frontend/src/pages/Cart.js
import React, { useContext, useCallback } from 'react';
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

  const saveCartToDatabase = useCallback(async () => {
    console.log('Guardando pedido...');
    const items = cartItems.map(item => ({
      ...item,
      id: item.id.toString(),  // Convertir id a cadena
    }));
    console.log('Cart Items:', items);

    try {
      const response = await fetch('http://localhost:5000/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartItems: items }),
      });
      console.log(response);
      if (response.ok) {
        console.log('Pedido guardado en la base de datos');
        // Aquí podrías añadir lógica adicional después de guardar el pedido, como limpiar el carrito
      } else {
        const errorMessage = await response.text();
        console.error('Error al guardar el pedido en la base de datos:', response.statusText, errorMessage);
      }
    } catch (error) {
      console.error('Error al conectar con el servidor', error);
    }
  }, [cartItems]);

  const handleSaveButtonClick = () => {
    console.log('Botón Guardar Pedido clickeado');
    saveCartToDatabase();
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
        <button onClick={handleSaveButtonClick}>Guardar Pedido</button>
      </div>
    </div>
  );
};

export default Cart;
