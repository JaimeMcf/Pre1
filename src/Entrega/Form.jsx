import { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && email) {
      setEnviado(true);
    }
  };

  return (
    <section id="contacto" style={{ marginTop: "3rem", padding: "2rem", background: "#f9f9f9", borderRadius: "8px" }}>
      <h3>Suscríbete a nuestras novedades</h3>

     
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center", marginTop: "1rem" }}>
        
       
        <div style={{ flex: "1", minWidth: "250px", textAlign: "center" }}>
          <img 
            src="./preD/d.jpg" 
            alt="Jaimey Koha" 
            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
          />
        </div>

       
        <div style={{ flex: "1", minWidth: "280px" }}>
          {enviado ? (
            <p style={{ color: "green", fontWeight: "bold" }}>¡Gracias por suscribirte, {nombre}!</p>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}>
              <div>
                <label style={{ display: "block", marginBottom: "0.3rem" }}>Nombre:</label>
                <input 
                  type="text" 
                  value={nombre} 
                  onChange={(e) => setNombre(e.target.value)} 
                  required 
                  style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "0.3rem" }}>Correo Electrónico:</label>
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                  style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
                />
              </div>
              <button type="submit" style={{ background: "#27ae60", color: "white", border: "none", padding: "0.7rem", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}>
                Enviar
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Formulario;
