# 🎬 CloneFlix - Versión 2.0

**Versión Funcional** - Integración completa con API y dinámica interactiva

## 🚀 Descripción de la Versión 2.0

Esta versión marca el punto de inflexión donde CloneFlix cobra vida. Se implementó la lógica JavaScript necesaria para consumir la API de TVMaze, renderizar contenido dinámico y crear una experiencia de usuario completamente interactiva. La plataforma evoluciona de un diseño estático a una aplicación web funcional.

## 🌟 Estructura de Archivos

```
📦 CloneFlix
├── 📄 index.html
├── 🎨 css/
│   └── app.css
├── 📱 js/
│   └── app.js
```

## 💻 Código Principal 

### index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Clonflix</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/app.css">
  </head>
  <body>
    <nav class="navbar navbar-expland-lg border-bottom bg-black">
        <div class="container">
            <a href="#" class="navbar-brand">
                <b>Clone</b>Flix
            </a>
            <form id="searchForm" class="d-flex ms-auto">
                <input id="searchInput" type="text" class="form-control me-2" placeholder="Buscar tu movie...">
                <button type="submit" class="btn btn-danger">Buscar</button>
            </form>
        </div>
    </nav>

    <header class="hero bg-black">
        <div class="container">
            <h1 id="heroTitle" class="display-5 fw-bold"></h1>
            <p id="heroDesc" class="lead col-lg-6"></p>
            <button id="heroPlay" class="btn btn-danger btn-lg">
                Ver ahora
            </button>
        </div>
    </header>

    <main id="rowsContainer" class="container my-4">
    </main>

    <footer class="footer-py-4 mt-5">
        <div class="container small">
            Hecho con ❤ utilizando TVMaze
        </div>
    </footer>

    <!-- Modal para el detalle de la pelicula-->
     <div id="detailModal" class="modal fade" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content bg-black text-ligth">
                <div class="modal-header border-secondary">
                    <h5 id="detailTitle" class="modal-title">Detalle</h5>
                    <button class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div id="datailBody" class="modal-body">
                    Cargando...
                </div>
            </div>
        </div>
     </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
    <script src="./js/app.js"></script>
  </body>
</html>
```

### app.css
```css
body{
    background-color:#0B0D10;
}

.navbar-brand b {
    color: #E50914;
}

.hero {
    min-height: 50vh;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: end;
    padding: 3rem 1rem;
    position: relative;
}

.hero::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
}

.hero > .container {
    position: relative;
    z-index: 2;
}

.rowTitle { 
    font-weight: 700;
    margin: 1rem 0 .5rem;
}

.rail {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding-bottom: .5rem;
    scroll-snap-type: x mandatory;
}

.card-poster {
    min-width: 160px;
    scroll-snap-align: start;
    background: #111;
    border: none;
}

.card-poster img {
    aspect-ratio: 2/3;
    object-fit: cover;
    border-radius: 5rem;
}

.badge-genre {
    background-color: #E50914;
}

.footer {
    border-top: 1px solid #222;
    color: #9AA4AD;
}

::-webkit-scrollbar{
    height: 8px;
}

::-webkit-scrollbar-thumb{
    background-color: #333;
    border-radius: 4px;
}
```
### app.js
```javascript
//api a tvmaze
const API = 'https://api.tvmaze.com';

//Elementos del DOM
const rowsContainer = document.querySelector('#rowsContainer');
const hero = document.querySelector('#hero');
const heroTitle = document.querySelector('#heroTitle');
const heroDesc = document.querySelector('#heroDesc');
const heroPlay = document.querySelector('#heroPlay');

const init = async () => {
    const trending = await fetchJSON(`${API}/shows?page=1`)
    renderRow("Tendencias", trending.slice(0,20))
    console.log('@@@ trending =>', trending);
}

const renderRow = (title, shows) => {
    const section = document.createElement('section')
    section.classList = 'mb-3'
    section.innerHTML = 
    `
        <h3 class="rowTitle">${title}</h3>
        <div class="rail" data-rail></div>
    `

    //Función para crear los poster mini y pegarlos

    rowsContainer.appendChild(section)
}

const fetchJSON = async (url) => {
    const res = await fetch(url)
    if(!res.ok){
        throw new Error('Error al obtener los datos', url)
    }
    return await res.json()
}

init()
```

## 📁 Navegación del Repositorio

[🏠 **Inicio**](./README.md) • [📋 **Version 1**](./version1/) • [🚀 **Version 2**](./version2/) 

---

*Base sólida para grandes experiencias cinematográficas* 🎭