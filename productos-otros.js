// productos-otros.js

// Array de productos "Otros productos"
const otrosProductos = [
    {
      imagen: 'images/SSD1.jpg',
      titulo: 'DISCO DURO SSD KINGSTON A400M SATA 120GB m.2 2280',
      estrellas: 4,
      descripcion: 'Sin Sistema Operativo e instalación',
      precio: '$29.99'
    },
    {
      imagen: 'images/SSW.webp',
      titulo: 'Ssd Disco Solido Kingston M2 Nv1 250gb Pcie Nvme 35x',
      estrellas: 4,
      descripcion: 'Sin Sistema Operativo e instalación',
      precio: '$42.99'
    },
    {
      imagen: 'images/ssd4.png',
      titulo: 'Disco SSD M.2 KINGSTON SNVS 500GB NVMe PCIe',
      estrellas: 4,
      descripcion: 'Sin Sistema Operativo e instalación',
      precio: '$49.99'
    },
    {
      imagen: 'images/ssd3.webp',
      titulo: 'Polo Blanco',
      estrellas: 4,
      descripcion: '',
      precio: 'PEN 25.00'
    },
    {
      imagen: 'images/producto4.jpg',
      titulo: 'Funda para Celular',
      estrellas: 4,
      descripcion: '',
      precio: 'PEN 5.00'
    },
    {
      imagen: 'images/producto5.jpg',
      titulo: 'Esponja Acustica',
      estrellas: 4,
      descripcion: '',
      precio: 'PEN 20.00'
    },
    {
      imagen: 'images/producto2.jpg',
      titulo: 'Polo Negro',
      estrellas: 3,
      descripcion: '',
      precio: 'PEN 30.00'
    },
    {
      imagen: 'images/producto1.jpg',
      titulo: 'Polo Azul Oscuro-Reciclado',
      estrellas: 2,
      descripcion: '',
      precio: 'PEN 35.00'
    }
  ];
  
  /**
   * Renderiza los productos dentro de la sección "Otros Productos"
   * @param {string} contenedorId - id del contenedor donde inyectar los productos.
   */
  function renderOtrosProductos(contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) {
      console.error(`No se encontró el contenedor con id "${contenedorId}"`);
      return;
    }
  
    // Creamos el wrapper .row para los productos
    const rowContainer = document.createElement('div');
    rowContainer.className = 'row';
  
    // Por cada producto, creamos su card
    otrosProductos.forEach(p => {
      const col = document.createElement('div');
      col.className = 'col-4';
  
      // Imagen
      const img = document.createElement('img');
      img.src = p.imagen;
      img.alt = p.titulo;
      col.appendChild(img);
  
      // Título
      const h4 = document.createElement('h4');
      h4.textContent = p.titulo;
      col.appendChild(h4);
  
      // Estrellas
      const rating = document.createElement('div');
      rating.className = 'rating';
      for (let i = 0; i < 5; i++) {
        const star = document.createElement('i');
        star.className = i < p.estrellas ? 'fa fa-star' : 'fa fa-star-o';
        rating.appendChild(star);
      }
      col.appendChild(rating);
  
      // Descripción
      if (p.descripcion) {
        const small = document.createElement('small');
        small.textContent = p.descripcion;
        col.appendChild(small);
      }
  
      // Precio
      const price = document.createElement('p');
      price.textContent = p.precio;
      col.appendChild(price);
  
      // Añadir la columna al contenedor de la fila
      rowContainer.appendChild(col);
    });
  
    // Inyectamos la fila de productos en el contenedor principal
    contenedor.appendChild(rowContainer);
  }
  
  // Ejecutamos la función al cargar el DOM
  document.addEventListener('DOMContentLoaded', function() {
    renderOtrosProductos('otros-productos');
  });
  