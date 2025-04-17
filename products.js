document.addEventListener("DOMContentLoaded", function () {
    renderProductos("productos");
});

const productos = [
    {
        imagen: "images/producto1.jpg",
        titulo: "Polo Azul Oscuro (Reciclado)",
        estrellas: 4,
        precio: "PEN 35.00"
    },
    {
        imagen: "images/producto2.jpg",
        titulo: "Polo negro (Reciclado)",
        estrellas: 5,
        precio: "PEN 30.00"
    },
    {
        imagen: "images/producto3.jpg",
        titulo: "Polo Blanco(Reciclado)",
        estrellas: 3,
        precio: "PEN 25.00"
    },
    {
        imagen: "images/producto4.jpg",
        titulo: "Funda para Celular",
        estrellas: 4,
        precio: "PEN 5.00"
    },
      {
        imagen: "images/producto1.jpg",
        titulo: "Polo Azul Oscuro (Reciclado)",
        estrellas: 4,
        precio: "PEN 35.00"
    },
    {
        imagen: "images/producto2.jpg",
        titulo: "Polo negro (Reciclado)",
        estrellas: 5,
        precio: "PEN 30.00"
    },
    {
        imagen: "images/producto3.jpg",
        titulo: "Polo Blanco(Reciclado)",
        estrellas: 3,
        precio: "PEN 25.00"
    },
    {
        imagen: "images/producto4.jpg",
        titulo: "Funda para Celular",
        estrellas: 4,
        precio: "PEN 5.00"
    }
];

function renderProductos(contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) return;

    const smallContainer = document.createElement("div");
    smallContainer.className = "small-container";

    const filtro = document.createElement("select");
    filtro.innerHTML = `
        <option>Filtrar</option>
        <option>Alta demanda</option>
        <option>Populares</option>
        <option>Precios Altos</option>
        <option>Precios Bajos</option>
    `;
    filtro.addEventListener("change", function () {
        const valorFiltro = filtro.value;
        if (valorFiltro === "Precios Altos") {
            productos.sort((a, b) => parseFloat(b.precio.replace('PEN ', '')) - parseFloat(a.precio.replace('PEN ', '')));
        } else if (valorFiltro === "Precios Bajos") {
            productos.sort((a, b) => parseFloat(a.precio.replace('PEN ', '')) - parseFloat(b.precio.replace('PEN ', '')));
        }
        renderProductos(contenedorId);  // Volver a renderizar después de aplicar el filtro
    });
    smallContainer.appendChild(filtro);

    const titulo = document.createElement("h2");
    titulo.className = "title";
    titulo.textContent = "Todos Nuestros Productos";
    smallContainer.appendChild(titulo);

    const row = document.createElement("div");
    row.className = "row";

    productos.forEach(producto => {
        const col = document.createElement("div");
        col.className = "col-4";

        const img = document.createElement("img");
        img.src = producto.imagen;

        const h4 = document.createElement("h4");
        h4.textContent = producto.titulo;

        const rating = document.createElement("div");
        rating.className = "rating";
        for (let i = 0; i < 5; i++) {
            const star = document.createElement("i");
            star.className = i < producto.estrellas ? "fa fa-star" : "fa fa-star-o";
            rating.appendChild(star);
        }

        const precio = document.createElement("p");
        precio.textContent = producto.precio;

        col.appendChild(img);
        col.appendChild(h4);
        col.appendChild(rating);
        col.appendChild(precio);
        row.appendChild(col);
    });

    smallContainer.appendChild(row);
    contenedor.innerHTML = '';  // Limpiar el contenedor antes de agregar nuevos productos
    contenedor.appendChild(smallContainer);
}
