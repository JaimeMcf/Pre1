import React, { useState } from "react";

export default function ClimaAppBuscador() {
  const [ciudadInput, setCiudadInput] = useState("");
  const [clima, setClima] = useState(null);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const buscarClima = async (e) => {
    e.preventDefault();
    if (!ciudadInput.trim()) return;

    setCargando(true);
    setError("");
    setClima(null);

    try {
      // Paso 1: Buscar las coordenadas (lat y lon) de la ciudad ingresada
      const respuestaGeo = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(ciudadInput)}&count=1`
      );
      const datosGeo = await respuestaGeo.json();

      // Si la ciudad no existe o no se encuentra
      if (!datosGeo.results || datosGeo.results.length === 0) {
        setError("Ciudad no encontrada. Intenta con otra.");
        setCargando(false);
        return;
      }

      const { latitude, longitude, name, country } = datosGeo.results[0];

      // Paso 2: Buscar el clima usando las coordenadas obtenidas
      const respuestaClima = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const datosClima = await respuestaClima.json();

      // Paso 3: Guardar los datos finales en el estado
      setClima({
        nombre: name,
        pais: country || "",
        temperatura: datosClima.current_weather.temperature,
        viento: datosClima.current_weather.windspeed,
      });

    } catch (err) {
      setError("Ocurrió un error al buscar los datos.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div style={{ maxWidth: "350px", margin: "40px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", textAlign: "center", fontFamily: "sans-serif", background: "#fff" }}>
      <h2>Buscador de Clima</h2>
      
      {/* Formulario de búsqueda */}
      <form onSubmit={buscarClima} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Ej. Madrid, Santiago..."
          value={ciudadInput}
          onChange={(e) => setCiudadInput(e.target.value)}
          style={{ padding: "8px", width: "65%", marginRight: "5px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <button type="submit" style={{ padding: "8px 12px", background: "#3498db", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Buscar
        </button>
      </form>

      {/* Mensajes de carga o error */}
      {cargando && <p>Buscando ciudad y clima...</p>}
      {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

      {/* Tarjeta de resultados */}
      {clima && (
        <div style={{ background: "#f4f6f7", padding: "15px", borderRadius: "8px", marginTop: "15px" }}>
          <h3>{clima.nombre} {clima.pais && `(${clima.pais})`}</h3>
          <div style={{ margin: "15px 0" }}>
            <span style={{ fontSize: "35px", fontWeight: "bold", color: "#2980b9" }}>
              {clima.temperatura}°C
            </span>
          </div>
          <p style={{ color: "#555", fontSize: "14px" }}>
            <b>Viento:</b> {clima.viento} km/h
          </p>
        </div>
      )}
    </div>
  );
}