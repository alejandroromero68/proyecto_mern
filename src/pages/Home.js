import React from 'react';
import './Home.css'; // Importa el archivo CSS para los estilos

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <img src="/images/banner.jpg" alt="Banner principal" className="banner-image" />
        <div className="banner-text">
          <h1>Bienvenido a Nuestra Tienda</h1>
          <p>Descubre nuestros productos increíbles.</p>
        </div>
      </div>
      
      <section className="featured-products">
        <h2>Productos Destacados</h2>
        <div className="product-list">
          {/* Aquí puedes agregar componentes de productos individuales */}
          <div className="product-item">
            <img src="/images/product1.jpg" alt="Producto 1" />
            <h3>Producto 1</h3>
            <p>$100</p>
          </div>
          <div className="product-item">
            <img src="/images/product2.jpg" alt="Producto 2" />
            <h3>Producto 2</h3>
            <p>$200</p>
          </div>
          {/* Agrega más productos según sea necesario */}
        </div>
      </section>
      
      <section className="categories">
        <h2>Categorías</h2>
        <div className="category-list">
          <div className="category-item">
            <img src="/images/category1.jpg" alt="Categoría 1" />
            <h3>Ropa</h3>
          </div>
          <div className="category-item">
            <img src="/images/category2.jpg" alt="Categoría 2" />
            <h3>Electrónica</h3>
          </div>
          {/* Agrega más categorías según sea necesario */}
        </div>
      </section>
      
      <section className="special-offers">
        <h2>Ofertas Especiales</h2>
        <div className="offer-list">
          <div className="offer-item">
            <h3>Descuento del 50%</h3>
            <p>En todos los productos de verano.</p>
          </div>
          {/* Agrega más ofertas según sea necesario */}
        </div>
      </section>
      
      <section className="testimonials">
        <h2>Testimonios</h2>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <p>"Excelente servicio y productos de calidad."</p>
            <p>- Juan Pérez</p>
          </div>
          {/* Agrega más testimonios según sea necesario */}
        </div>
      </section>
      
      <section className="news-updates">
        <h2>Noticias y Actualizaciones</h2>
        <div className="news-list">
          <div className="news-item">
            <h3>Nueva colección de otoño</h3>
            <p>Disponible a partir del 1 de septiembre.</p>
          </div>
          {/* Agrega más noticias según sea necesario */}
        </div>
      </section>
    </div>
  );
}

export default Home;
