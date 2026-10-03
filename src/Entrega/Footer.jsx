
const Footer = () => {
  const equipo = [
    { nombre: "Lucius Gunnes", rol: "Escritor", img: "./preD/Lucius.jpg" },
    { nombre: "Belle Inosanto", rol: "Escritora-editora", img: "./preD/belle.jpg"},
    { nombre: "Serafina Cou", rol: "Escritor-maquetadora", img: "./preD/sera.jpg" }
  ];

  return (
    <footer style={{ backgroundColor: "#34495e", color: "#fff", padding: "2rem 1rem", marginTop: "2rem" }}>
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <h3>Librería Online S.A.</h3>
        <p>Tu espacio favorito para descubrir nuevas historias.</p>
      </div>
      
      <h4 style={{ textAlign: "center" }}>Nuestro Equipo</h4>
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
        {equipo.map((persona, index) => (
          <div key={index} style={{ background: "#2c3e50", padding: "1rem", borderRadius: "8px", textAlign: "center", width: "150px" }}>
            <img src={persona.img} alt={persona.nombre} style={{ borderRadius: "50%", width: "60px", height: "60px" }} />
            <p style={{ margin: "0.5rem 0 0 0", fontWeight: "bold" }}>{persona.nombre}</p>
            <p style={{ fontSize: "0.8rem", color: "#bdc3c7", margin: 0 }}>{persona.rol}</p>
        
          </div>
         
        ))}
      </div>
       <p>Somos un grupo de escritores que nos abocamos a dar vida a los sueños</p>
        <div style={{
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 40px",
  backgroundColor: "#1a1a1a",
  color: "#ffffff",
  fontSize: "14px",
  flexWrap: "wrap",
  gap: "15px"
}}>
             
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">X</a>
           <p>&copy; 2026 - Todos los derechos reservados.</p>
        </div>
    </footer>
  );
};


export default Footer 