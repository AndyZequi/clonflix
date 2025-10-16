# 🎬 CloneFlix - Versión 1.0

**Versión Inicial** - Estructura base y diseño fundamental de la plataforma de streaming.

## 📋 Descripción de la Versión 1.0

Esta versión representa la base sólida sobre la cual se construye CloneFlix. Se establecieron los cimientos del diseño visual y la estructura HTML necesaria para crear una experiencia de usuario atractiva y funcional.

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

## 📁 Navegación del Repositorio

[🏠 **Inicio**](./README.md) • [📋 **Version 1**](./version1.md/) • [🚀 **Version 2**](./version2.md/) • [⚡ **Version 3**](./version3.md/) 

---

*Hecho con ❤️ para los amantes del cine.* 