// Simulación de productos para pruebas (puedes reemplazarlo con tus datos reales)
const productos = [
    { nombre: "Producto 1" },
    { nombre: "Producto 2" },
    { nombre: "Producto 3" },
    { nombre: "Producto 4" },
    { nombre: "Producto 5" },
    { nombre: "Producto 6" },
    { nombre: "Producto 7" },
    { nombre: "Producto 8" }
];

const productosPorPagina = 4;
let paginaActual = 1;

const contenedor = document.getElementById("productos");

function mostrarProductos(pagina) {
    contenedor.innerHTML = "";

    const inicio = (pagina - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;
    const productosPagina = productos.slice(inicio, fin);

    productosPagina.forEach(p => {
        const div = document.createElement("div");
        div.textContent = p.nombre;
        div.style.marginBottom = "10px";
        contenedor.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".page-btn span").forEach(span => {
        span.addEventListener("click", () => {
            const page = span.getAttribute("data-page");

            if (page === "next") {
                if (paginaActual < Math.ceil(productos.length / productosPorPagina)) {
                    paginaActual++;
                }
            } else {
                paginaActual = parseInt(page);
            }

            mostrarProductos(paginaActual);
        });
    });

    mostrarProductos(paginaActual);
});
