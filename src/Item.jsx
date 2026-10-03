import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, autor, imagen }) => {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "15px", width: "220px", textAlign: "center", background: "#fff" }}>
      <img src={imagen} alt={nombre} style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "4px" }} />
      <h3>{nombre}</h3>
      <p style={{ color: "#666", fontSize: "14px" }}>{autor}</p>
      <p style={{ fontWeight: "bold", color: "#27ae60" }}>${precio}</p>
      <Link to={`/data/${id}`}>
        <button style={{ background: "#3498db", color: "white", border: "none", padding: "8px 12px", borderRadius: "4px", cursor: "pointer" }}>
          Ver Detalle
        </button>
      </Link>
    </div>
  );
};

export default Item;

