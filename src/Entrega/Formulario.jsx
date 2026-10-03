import React from 'react';

 function Formulario() {
  return (


<form 
  onSubmit={(e) => {
    e.preventDefault();
  
    alert("¡Producto guardado con éxito!");
  }} 
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "25px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif"
  }}
>
  <h2 style={{ margin: "0 0 10px 0", color: "#333333", fontSize: "20px", textAlign: "center" }}>
    Cargar Nuevo libro
  </h2>


  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
    <label style={{ fontSize: "14px", fontWeight: "bold", color: "#555555" }}>ID del libro:</label>
    <input 
      type="text" 
      placeholder="Ej: 1" 
      required 
      style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc", fontSize: "14px" }}
    />
  </div>


  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
    <label style={{ fontSize: "14px", fontWeight: "bold", color: "#555555" }}>título del libro:</label>
    <input 
      type="text" 
      placeholder="Ej: Oco, Além" 
      required 
      style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc", fontSize: "14px" }}
    />
  </div>


  <div style={{ display: "flex", gap: "10px" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: "5px", flex: 1 }}>
      <label style={{ fontSize: "14px", fontWeight: "bold", color: "#555555" }}>Precio del libro ($):</label>
      <input 
        type="number" 
        placeholder="0.00" 
        step="0.01"
        required 
        style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc", fontSize: "14px" }}
      />
    </div>

    <div style={{ display: "flex", flexDirection: "column", gap: "5px", flex: 1 }}>
      <label style={{ fontSize: "14px", fontWeight: "bold", color: "#555555" }}>Stock:</label>
      <input 
        type="number" 
        placeholder="0" 
        required 
        style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc", fontSize: "14px" }}
      />
    </div>
  </div>

  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
    <label style={{ fontSize: "14px", fontWeight: "bold", color: "#555555" }}>Imagen del libro:</label>
    <input 
      type="file" 
      accept="image/*"
      required 
      style={{ fontSize: "14px", padding: "5px 0" }}
    />
  </div>

 
  <button 
    type="submit" 
    style={{
      marginTop: "10px",
      padding: "12px",
      backgroundColor: "#1a1a1a",
      color: "#ffffff",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer"
    }}
  >
    Guardar producto
  </button>
</form>



);
}

export default Formulario 