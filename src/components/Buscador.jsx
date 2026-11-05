import { useState } from "react";

export default function Buscador({ setListadoState }) {

  const [busqueda, setBusqueda] = useState("");
  const [noEncontrado, setNoEncontrado] = useState(false);


  const buscarPeli = (e) => {
    const textoBusqueda = e.target.value;
    setBusqueda(textoBusqueda);

    const peliculas = JSON.parse(localStorage.getItem("pelis") || "[]");
    const textoNormalizado = textoBusqueda.trim().toLowerCase();

    const pelis_encontradas = peliculas.filter(
      peli => peli.title.toLowerCase().includes(textoNormalizado)
    );

    setNoEncontrado(textoNormalizado.length > 0 && pelis_encontradas.length === 0);
    setListadoState(pelis_encontradas);
  }

  return (
    <section className="tool-card search-card" aria-labelledby="search-title">
      <p className="eyebrow">Encuentra tu próxima película</p>
      <h2 className="tool-title" id="search-title">Buscar en tu colección</h2>
      <form className="search-form" onSubmit={e => e.preventDefault()} role="search">
        <label className="visually-hidden" htmlFor="search_field">Buscar películas por título</label>
        <input
          type="search"
          id="search_field"
          name="busqueda"
          placeholder="Ej. Interestelar"
          autoComplete="off"
          value={busqueda}
          onChange={buscarPeli}
        />
        <button className="search-button" type="submit" aria-label="Buscar película">
          <span aria-hidden="true">⌕</span>
        </button>
      </form>
      <p className={`search-message${noEncontrado ? " search-message--visible" : ""}`} aria-live="polite">
        {noEncontrado ? "No se encontraron películas con ese título." : "Escribe un título para filtrar tus películas."}
      </p>
    </section>
  )
}
