// main.js

// Array de productos
const productos = [
    {
      imagen: 'images/producto1.avif',
      titulo: 'Laptop HP Pavilion Gaming 15-ec1038la - 15.6',
      precio: '$749.99',
      estrellas: 4
    },
    {
      imagen: 'images/producto2.avif',
      titulo: 'HP Victus 15 Gaming Laptop 15.6" FHD IPS 144Hz AMD 7000 Ryzen 5 7535HS',
      precio: '$799.00',
      estrellas: 5
    },
    {
      imagen: 'images/laptop3.jpg',
      titulo: 'Dell Alienware m15 R5 Gaming Laptop | Ryzen 9 | RTX',
      precio: '$2,850.00',
      estrellas: 3
    },
    {
      imagen: 'images/laptop4.webp',
      titulo: 'Laptop ASUS ROG STRIX G15, Ryzen 7 6800H, 16GB, SSD 512GB, TX 3050',
      precio: '$1,750.00',
      estrellas: 4
    },
    {
        imagen: 'images/laptop4.webp',
        titulo: 'Laptop ASUS ROG STRIX G15, Ryzen 7 6800H, 16GB, SSD 512GB, TX 3050',
        precio: '$1,750.00',
        estrellas: 5
      },
      {
        imagen: 'images/laptop4.webp',
        titulo: 'Laptop ASUS ROG STRIX G15, Ryzen 7 6800H, 16GB, SSD 512GB, TX 3050',
        precio: '$1,750.00',
        estrellas: 4
      }
  ];
  
  /**
   * Renderiza los productos dentro del contenedor cuyo id se pasa como argumento.
   * @param {string} contenedorId - id del elemento donde se inyectarán los cards.
   */
  function renderProductos(contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) {
      console.error(`No se encontró el contenedor con id "${contenedorId}"`);
      return;
    }
  
    // Creamos el wrapper .product-container
    const productContainer = document.createElement('div');
    productContainer.className = 'product-container';
  
    // Por cada producto, construimos su card
    productos.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
  
      // Imagen
      const img = document.createElement('img');
      img.src = p.imagen;
      img.alt = p.titulo;
      card.appendChild(img);
  
      // Título
      const h4 = document.createElement('h4');
      h4.className = 'product-title';
      h4.textContent = p.titulo;
      card.appendChild(h4);
  
      // Estrellas
      const rating = document.createElement('div');
      rating.className = 'rating';
      for (let i = 0; i < 5; i++) {
        const star = document.createElement('i');
        star.className = i < p.estrellas ? 'fa fa-star' : 'fa fa-star-o';
        rating.appendChild(star);
      }
      card.appendChild(rating);
  
      // Precio
      const price = document.createElement('p');
      price.className = 'product-price';
      price.textContent = p.precio;
      card.appendChild(price);
  
      // Añadimos el card al contenedor principal
      productContainer.appendChild(card);
    });
  
    // Injectamos todo en el contenedor del HTML
    contenedor.appendChild(productContainer);
  }
  
  // Esperamos que el DOM esté listo para renderizar
  document.addEventListener('DOMContentLoaded', function() {
    renderProductos('productos');
  });
  