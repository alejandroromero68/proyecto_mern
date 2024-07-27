// /frontend/src/components/AddProduct.js
import React, { useState } from 'react';
import './AddProducts.css';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { name, price, description, image };

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        console.log('Producto guardado exitosamente');
      } else {
        console.error('Error al guardar el producto');
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <h2>Agregar Nuevo Producto</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="URL de la Imagen"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <button type="submit">Guardar Producto</button>
    </form>
  );
};

export default AddProduct;
