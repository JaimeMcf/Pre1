 import React, { useState } from "react";
import { FormularioProducto } from "./Formulario";

export function FormularioContainer() {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    email: "",
    consulta: ""
  });
 
  const [imagenFile, setImagenFile] = useState(null);

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setDatosForm({
      ...datosForm,
      [name]: value
    });
  };

  
  const manejarCambioImagen = (evento) => {
    setImagenFile(evento.target.files[0]);
  };

  const manejarEnvio = async (evento) => {
    evento.preventDefault();

   
    if (!imagenFile) {
      alert("Por favor, selecciona una imagen para el producto.");
      return;
    }

   
    const apiKey = '02a2bf60bbc666a71a5e27955f8457f8' 
    const formData = new FormData();
    formData.append('image', imagenFile);

    try {
      console.log("Subiendo imagen a Imgbb...");
      const respuestaImgbb = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: 'POST',
        body: formData,
      });

      const datosImgbb = await respuestaImgbb.json();

      if (datosImgbb.success) {
        console.log("Imagen subida con éxito. URL:", datosImgbb.data.url);

        
        const productoCompleto = {
          ...datosForm,
          urlImagen: datosImgbb.data.url
        };

        console.log('Enviando datos:', productoCompleto);

         
        setDatosForm({
          nombre: "",
          email: "",
          consulta: ""
        });
        setImagenFile(null);

      } else {
        throw new Error('La subida de la imagen a Imgbb falló.');
      }

    } catch (error) {
      console.error("Error en el proceso de envío:", error);
      alert("Hubo un error al subir la imagen. Por favor, intentá de nuevo.");
    }
  };

  return (
    <FormularioProducto
      datosForm={datosForm}
      manejarCambio={manejarCambio}
      manejarCambioImagen={manejarCambioImagen}
      imagenFile={imagenFile}
      manejarEnvio={manejarEnvio}
    />
  );
}



