
export default function Editar({ peli, conseguirPeliculas, setEditar, setListadoState }) {

  const guardarEdicion = (e, id) => {
    e.preventDefault();

    const pelis_almacenadas = conseguirPeliculas();
    const peli_actualizada = {
      id,
      title: e.currentTarget.elements.titulo.value.trim(),
      description: e.currentTarget.elements.descripcion.value.trim()
    };
    const peliculasActualizadas = pelis_almacenadas.map(pelicula =>
      pelicula.id === id ? peli_actualizada : pelicula
    );

    localStorage.setItem("pelis", JSON.stringify(peliculasActualizadas));

    setListadoState(peliculasActualizadas);
    setEditar(null);
  };

  return (
    <div className="edit-form">
      <h3 className="edit-form-title">Editar película</h3>
      <form className="movie-form" onSubmit={e => guardarEdicion(e, peli.id)}>
        <label htmlFor={`edit-title-${peli.id}`}>Título</label>
        <input
          type="text"
          id={`edit-title-${peli.id}`}
          name="titulo"
          defaultValue={peli.title}
          required
        />
        <label htmlFor={`edit-description-${peli.id}`}>Descripción</label>
        <textarea
          id={`edit-description-${peli.id}`}
          name="descripcion"
          defaultValue={peli.description}
          rows="3"
          required
        />
        <div className="edit-actions">
          <button className="primary-button" type="submit">Guardar cambios</button>
          <button className="secondary-button" type="button" onClick={() => setEditar(null)}>Cancelar</button>
        </div>
      </form>
    </div>
  )
}
