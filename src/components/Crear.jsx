import { useState } from "react";
import { guardarPeli } from "../helpers/GuardarEnStorage";

export default function Crear({ setListadoState }) {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [createdTitle, setCreatedTitle] = useState("");

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    const peli = {
      id: new Date().getTime(),
      title: formData.title.trim(),
      description: formData.description.trim()
    };

    setListadoState(elementos => [...elementos, peli]);
    guardarPeli("pelis", peli);
    setCreatedTitle(peli.title);
    setFormData({ title: "", description: "" });
  };

  return (
    <section className="tool-card create-card" id="anadir-pelicula" aria-labelledby="create-title">
      <p className="eyebrow">Amplía tu biblioteca</p>
      <h2 className="tool-title" id="create-title">Añadir película</h2>
      <p className="tool-description">Guarda los títulos que no quieres olvidar.</p>
      {createdTitle && (
        <p className="success-message" role="status">
          “{createdTitle}” se añadió a tu colección.
        </p>
      )}
      <form className="movie-form" onSubmit={conseguirDatosForm}>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Ej. El viaje de Chihiro"
          value={formData.title}
          onChange={e => setFormData({ ...formData, title: e.target.value })}
          required
        />

        <label htmlFor="description">Descripción</label>
        <textarea
          id="description"
          name="description"
          placeholder="¿Qué hace especial a esta película?"
          rows="4"
          value={formData.description}
          onChange={e => setFormData({ ...formData, description: e.target.value })}
          required
        />

        <button className="primary-button" type="submit">Guardar película <span aria-hidden="true">＋</span></button>
      </form>
    </section>
  )
}
