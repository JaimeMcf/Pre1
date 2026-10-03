import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import  { FormularioContainer } from "./FormularioContainer"

export default function Navbar() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "15px 30px", background: "#333", color: "white" }}>
      <h2>Librería de Diego</h2>
      <div style={{  display: "flex", gap: "20px", alignItems: "center" }}>

         <Link to="/" style={{ color: "white", textDecoration: "none" }}>Inicio</Link>
        <Link to="/data" style={{ color: "white", textDecoration: "none" }}>Catálogo</Link>
        <Link to="/carrito" style={{ color: "white", textDecoration: "none" }}>
         Carrito ({totalQuantity})</Link>
        <Link to="/FormularioContainer" style={{ color: "white", textDecoration: "none" }}>
        Contacto
        
        </Link>
         

      </div>

    </nav>
  );
}