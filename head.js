// head.js

document.addEventListener("DOMContentLoaded", () => {
    const head = document.getElementsByTagName("head")[0];
  
    // Favicon
    const favicon = document.createElement("link");
    favicon.rel = "shortcut icon";
    favicon.href = "images/logopc.png";
    favicon.type = "image/x-icon";
    head.appendChild(favicon);
  
    // Título
    const title = document.createElement("title");
    title.innerText = document.title || "PC Master Express";
    head.appendChild(title);
  
    // Meta tags comunes
    const metas = [
      { name: "charset", content: "UTF-8" },
      { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" }
    ];
  
    metas.forEach(metaInfo => {
      const meta = document.createElement("meta");
      Object.entries(metaInfo).forEach(([key, value]) => {
        meta.setAttribute(key, value);
      });
      head.appendChild(meta);
    });
  
    // CSS
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "style.css";
    head.appendChild(css);
  
    // Iconos
    const icons = document.createElement("script");
    icons.src = "https://kit.fontawesome.com/2c36e9b7b1.js";
    icons.crossOrigin = "anonymous";
    icons.defer = true;
    head.appendChild(icons);
  });
  