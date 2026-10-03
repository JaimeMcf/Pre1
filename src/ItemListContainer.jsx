import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ItemListContainer() {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setLibros(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Catálogo de Libros</h2>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {libros.map((libro) => (
          <div key={libro.id} style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", width: "200px" }}>
            <img src={libro.imagen} alt={libro.nombre} style={{ width: "100%" }} />
            <h3>{libro.nombre}</h3>
            <p>${libro.precio}</p>
           <Link to={`/data/${libro.id}`}>
  <button style={{ background: "blue", color: "white", padding: "5px 10px", border: "none", cursor: "pointer" }}>
    Ver Detalle
  </button>
</Link>
           
          </div>
        ))}
      </div>
    </div>
  );
}
