import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, clearCart } = useContext(CartContext);

  const Imagen =   {

backgroundImage: `url('/preE/p.jpg')`,
backgroundSize: "cover",
backgroundPosition: "center",
minHeight: "100vh",
width: "750px",
height: "750px", 
padding: "5px"


   }


  if (cart.length === 0) {
    return (
      <div style={Imagen}>
      <div style={{ display: "block", padding: "50px", position: "relative", left: "500px"}}>
        <h2 style={{color: "#000"}}>Tu carrito está vacío</h2>
        <br></br>

        <Link style={{color: "#000", textDecoration: "none"}}   to="/data">Ir a comprar</Link>
      </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tu Carrito</h2>
      {cart.map((prod) => (
        <div key={prod.id} style={{ borderBottom: "1px solid #000", padding: "10px 0" }}>
          <p><b>{prod.nombre}</b> - Cantidad: {prod.quantity} - Total: ${prod.precio * prod.quantity}</p>
        </div>
      ))}
      <button onClick={clearCart} style={{ background: "red", color: "#fff", padding: "8px", border: "none", marginTop: "15px", cursor: "pointer" }}>
        Vaciar Carrito
      </button>
    </div>
  );
}