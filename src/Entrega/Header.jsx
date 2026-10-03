const Header = () => {
  return (
    <header style={{ padding: "1rem", backgroundColor: "#2c3e50", color: "#fff" }}>
      <h1>La libreria de los sueños</h1>
      <nav>
        <ul style={{ display: "flex", listStyle: "none", gap: "1rem", padding: 0 }}>
          <li><a href="#inicio" style={{ color: "#fff", textDecoration: "none" }}>Inicio</a></li>
          <li><a href="#catalogo" style={{ color: "#fff", textDecoration: "none" }}>Catálogo</a></li>
          <li><a href="#contacto" style={{ color: "#fff", textDecoration: "none" }}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
