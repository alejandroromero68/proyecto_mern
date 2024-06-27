import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, attachment: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message, attachment } = formData;

    // Aquí deberías implementar la lógica para enviar el formulario por correo
    // Para simplificar, mostraremos los datos en la consola
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Mensaje:', message);
    console.log('Adjunto:', attachment);

    // Lógica para enviar el formulario por correo
    // Esta parte debería implementarse en el backend o con un servicio de envío de correo

    // Limpia el formulario después de enviar
    setFormData({
      name: '',
      email: '',
      message: '',
      attachment: null,
    });
  };

  return (
    <div className="contact">
      <h2>Contacto</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="attachment">Adjuntar Archivo</label>
          <input
            type="file"
            id="attachment"
            name="attachment"
            accept=".pdf,.doc,.docx,.jpg,.png"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
