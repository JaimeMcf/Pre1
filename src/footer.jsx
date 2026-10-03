import './Footer.css'; 

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; 2026 - Todos los derechos reservados.</p>
        
        <div className="social-icons">
        
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">X</a>
        </div>
      </div>
    </footer>
  );
}