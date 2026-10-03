import React, { useState } from "react";
import { FormularioProducto } from "./Formulario";

export function FormularioContainer() {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    email: "",
    consulta: ""
  });

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setDatosForm({
      ...datosForm,
      [name]: value
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("enviando datos");

    setDatosForm({
    nombre: "",
    email: "",
    consulta: ""
  });
  };

  return (
    <FormularioProducto
      datosForm={datosForm}
      manejarCambio={manejarCambio}
      manejarEnvio={manejarEnvio}
    />
  );
}