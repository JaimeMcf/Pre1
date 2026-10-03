const Item = ({ libro }) => {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1rem", width: "220px", textAlign: "center", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
      <img src={libro.imagen} alt={libro.nombre} style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "4px" }} />
      <h3 style={{ fontSize: "1.1rem", margin: "0.5rem 0" }}>{libro.nombre}</h3>
      <p style={{ color: "#666", fontSize: "0.9rem", margin: "0 0 0.5rem 0" }}>{libro.autor}</p>
      <p style={{ fontWeight: "bold", color: "#27ae60" }}>${libro.precio}</p>
      <button style={{ background: "#3498db", color: "white", border: "none", padding: "0.5rem 1rem", borderRadius: "4px", cursor: "pointer" }}>
        Ver detalle
      </button>
    </div>
  );
};

export default Item;