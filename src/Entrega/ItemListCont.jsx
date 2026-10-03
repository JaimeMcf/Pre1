import { useState, useEffect } from "react";
import Item from "./Item";

const ItemListContainer = () => {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        setLibros(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error cargando los libros:", error));
  }, []);

  if (loading) return <p>Cargando catálogo de libros...</p>;

  return (
    <section id="catalogo">
      <h2>Catálogo de Libros</h2>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "flex-start" }}>
        {libros.map((libro) => (
          <Item key={libro.id} libro={libro} />
        ))}
      </div>
    </section>
  );
};

export default ItemListContainer;
