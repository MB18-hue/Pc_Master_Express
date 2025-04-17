"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderProductos = renderProductos;
var productos = [
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
    }
];
function renderProductos(contenedorId) {
    var contenedor = document.getElementById(contenedorId);
    if (!contenedor) {
        console.error("No se encontr\u00F3 el contenedor con id \"".concat(contenedorId, "\""));
        return;
    }
    var smallContainer = document.createElement('div');
    smallContainer.className = 'small-container';
    var productContainer = document.createElement('div');
    productContainer.className = 'product-container';
    productos.forEach(function (producto) {
        var card = document.createElement('div');
        card.className = 'product-card';
        // Imagen
        var img = document.createElement('img');
        img.src = producto.imagen;
        img.alt = producto.titulo;
        // Título
        var title = document.createElement('h4');
        title.className = 'product-title';
        title.textContent = producto.titulo;
        // Estrellas
        var rating = document.createElement('div');
        rating.className = 'rating';
        for (var i = 0; i < 5; i++) {
            var star = document.createElement('i');
            star.className = i < producto.estrellas ? 'fa fa-star' : 'fa fa-star-o';
            rating.appendChild(star);
        }
        // Precio
        var price = document.createElement('p');
        price.className = 'product-price';
        price.textContent = producto.precio;
        // Agregar al card
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(rating);
        card.appendChild(price);
        // Agregar al contenedor
        productContainer.appendChild(card);
    });
    smallContainer.appendChild(productContainer);
    contenedor.appendChild(smallContainer);
}
