import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "./CartContext";

export default function ItemDetail() {
  const [libro, setLibro] = useState(null);
  const { id } = useParams();
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const encontrado = data.find((el) => el.id === Number(id));
        setLibro(encontrado);
      });
  }, [id]);

  if (!libro) return <h2>Cargando...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{libro.nombre}</h2>
      <p><b>Autor:</b> {libro.autor}</p>
      <p>{libro.descripcion}</p>
      <p><b>Precio:</b> ${libro.precio}</p>
      <button 
        onClick={() => addItem(libro, 1)}
        style={{ background: "green", color: "white", padding: "10px", border: "none", cursor: "pointer" }}
      >
        Agregar al Carrito
      </button>
      <br /><br />
      <Link to="/data">← Volver al catálogo</Link>
    </div>
  );
}