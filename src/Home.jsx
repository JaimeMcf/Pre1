

export default function Home() {
  return (
    <div style={{ padding: "50px", textAlign: "center", background: "#aa9895", minHeight: "80vh" }}>
      
      <section style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <video 
          controls 
          autoPlay 
          muted 
          loop 
          style={{ 
            maxWidth: "600px", 
            width: "100%", 
            borderRadius: "12px", 
            boxShadow: "0px 4px 15px rgba(0,0,0,0.3)" 
          }}
          src="./preE/video.mp4">
          Tu navegador no soporta el elemento de video.
        </video>
      </section>
      
    
    </div>
  );
}