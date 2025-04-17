document.addEventListener("DOMContentLoaded", function () {
    injectStyles();
    renderTestimonios("testimonios");
});

const testimonios = [
    {
        imagen: "https://www.exacompu.com.ec/wp-content/uploads/2021/01/mantenimiento.jpg",
        titulo: "Mantenimiento preventivo de computadoras",
        estrellas: 5,
        descripcion: "Realizamos el mantenimiento de tu computadora o laptops.",
        enlace: "https://wa.me/59396691773?text=Hola%20quisiera%20consultar%20por%20mantenimiento",
        textoBoton: "Consulta Aquí"
    },
    {
        imagen: "https://tecnomatica.cupet.cu/sites/default/files/servicios/venta_de_equipos.jpg",
        titulo: "Venta de todo equipo de Computo",
        estrellas: 5,
        descripcion: "Aquí encuentras de todo a mejor precio",
        enlace: "productos.html",
        textoBoton: "Consulta Aquí"
    }
];

function renderTestimonios(contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) {
        console.error(`No se encontró el contenedor con id "${contenedorId}"`);
        return;
    }

    const section = document.createElement("div");
    section.className = "testimonial";

    const smallContainer = document.createElement("div");
    smallContainer.className = "small-container";

    const row = document.createElement("div");
    row.className = "row";

    testimonios.forEach(testimonio => {
        const col = document.createElement("div");
        col.className = "col-3";

        const img = document.createElement("img");
        img.src = testimonio.imagen;
        img.alt = testimonio.titulo;

        const h3 = document.createElement("h3");
        h3.innerHTML = `${testimonio.titulo} <i class="fas fa-check-circle"></i>`;

        const rating = document.createElement("div");
        rating.className = "rating";
        for (let i = 0; i < 5; i++) {
            const star = document.createElement("i");
            star.className = i < testimonio.estrellas ? "fa fa-star" : "fa fa-star-o";
            rating.appendChild(star);
        }

        const p = document.createElement("p");
        p.textContent = testimonio.descripcion;

        const iconos = document.createElement("div");
        iconos.className = "iconos";
        ["fa-recycle", "fa-users", "fa-stopwatch"].forEach(iconClass => {
            const icon = document.createElement("i");
            icon.className = `fas ${iconClass}`;
            iconos.appendChild(icon);
        });

        const boton = document.createElement("a");
        boton.href = testimonio.enlace;
        boton.className = "comprarbtn";
        boton.innerHTML = `${testimonio.textoBoton} &#8594;`;
        iconos.appendChild(boton);

        col.appendChild(img);
        col.appendChild(h3);
        col.appendChild(rating);
        col.appendChild(p);
        col.appendChild(iconos);
        row.appendChild(col);
    });

    smallContainer.appendChild(row);
    section.appendChild(smallContainer);
    contenedor.appendChild(section);
}

function injectStyles() {
    const style = document.createElement("style");
    style.textContent = `
        .testimonial .col-3 {
            width: 100%;
            max-width: 380px;
            margin: auto;
            box-sizing: border-box;
            text-align: center;
            padding: 15px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            border-radius: 15px;
            background-color: white;
            overflow: hidden;
        }
        .testimonial .col-3 img {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 10px;
        }
        .testimonial .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
        }
        .iconos {
            margin-top: 10px;
        }
        .iconos i {
            margin: 0 5px;
            color: #555;
        }
        .comprarbtn {
            display: inline-block;
            margin-top: 10px;
            padding: 10px 20px;
            background-color: #27c9d3;
            color: white;
            border-radius: 20px;
            text-decoration: none;
            transition: background-color 0.3s;
        }
        .comprarbtn:hover {
            background-color: #1daeb7;
        }
        @media (max-width: 768px) {
            .testimonial .col-3 {
                width: 90%;
            }
        }
    `;
    document.head.appendChild(style);
}
