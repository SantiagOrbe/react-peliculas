
import { useState } from 'react';
import './App.css'
import Buscador from './components/Buscador'
import Crear from './components/Crear'
import Listado from './components/Listado'

function App() {

  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="app-shell" id="inicio">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="MisPelis, ir al inicio">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-play" />
          </span>
          <span className="brand-copy">
            <span className="brand-name">MisPelis</span>
            <span className="brand-tagline">Tu colección personal</span>
          </span>
        </a>
        <a className="header-link" href="#peliculas">Explorar colección <span aria-hidden="true">↓</span></a>
      </header>

      <nav className="site-nav" aria-label="Navegación principal">
        <a className="nav-link nav-link--active" href="#inicio">Inicio</a>
      </nav>

      <main className="page-content">
        <section className="collection-section" id="peliculas" aria-labelledby="collection-title">
          <div className="collection-intro">
            <p className="eyebrow">Un archivo para volver a mirar</p>
            <h1 id="collection-title">Historias que<br />se quedan contigo.</h1>
            <p className="section-description">Guarda las películas que merecen otra visita.</p>
          </div>
          <h2 className="list-heading">Tu colección</h2>
          <Listado listadoState={listadoState} setListadoState={setListadoState} />
        </section>

        <aside className="sidebar" aria-label="Herramientas de películas">
          <Buscador setListadoState={setListadoState} />
          <Crear setListadoState={setListadoState} />
        </aside>
      </main>

      <footer className="site-footer">
        <span>MisPelis <span aria-hidden="true">·</span> Tu rincón para el cine</span>
        <a href="https://victorroblesweb.es">Creado para amantes del cine</a>
      </footer>
    </div>
  )
}

export default App
