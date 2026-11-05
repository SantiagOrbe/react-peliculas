
import { useEffect, useState } from "react";
import Editar from "./Editar";

export default function Listado({ listadoState, setListadoState}) {

  const [editar, setEditar] = useState(null);

  function conseguirPeliculas() {
    const peliculas = JSON.parse(localStorage.getItem("pelis") || "[]");

    return Array.isArray(peliculas) ? peliculas : [];
  }

  useEffect(() => {
    setListadoState(conseguirPeliculas());
  }, [setListadoState]);

  const borrarPeli = (id) => {
    const nuevo_array_pelis = conseguirPeliculas().filter(peli => peli.id !== id);

    setListadoState(nuevo_array_pelis);

    localStorage.setItem("pelis", JSON.stringify(nuevo_array_pelis));
  };

  return (
    <ol className="movie-list">
      {listadoState.length > 0 ? (
        listadoState.map((peli, index) => (
          <li key={peli.id} className="movie-list-item">
            <article className="movie-record">
              <span className="movie-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div className="movie-record-content">
                <h3 className="movie-title">{peli.title}</h3>
                <p className="movie-description">{peli.description}</p>
                <div className="movie-actions">
                  <button className="edit-button" type="button" onClick={() => setEditar(peli.id)}>Editar</button>
                  <button className="delete-button" type="button" onClick={() => borrarPeli(peli.id)}>Borrar</button>
                </div>
                {editar === peli.id && (
                  <Editar
                    peli={peli}
                    conseguirPeliculas={conseguirPeliculas}
                    setEditar={setEditar}
                    setListadoState={setListadoState}
                  />
                )}
              </div>
            </article>
          </li>
        ))
      ) : (
        <li className="empty-state">
          <h2>No hay películas para mostrar</h2>
          <p>Prueba otra búsqueda o añade una película para empezar tu colección.</p>
        </li>
      )}
    </ol>
  );
}
