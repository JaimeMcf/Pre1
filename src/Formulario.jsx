import React from "react"; 


export function FormularioProducto({datosForm, manejarCambio, manejarEnvio }  ) { 


const FormStyle = { 

 
            

display: "flex",
flexDirection: "column", 
maxWidth: "24rem",
margin: "3rem auto", 
padding: "1rem solid red",
borderRadius: "8px", 
gap: "16px"


}; 

return (  
<div  style={{backgroundImage: `url("./preE/di.png")`,
                backgroundSize: "cover",
                 backgroundRepeat: "no-repeat",
                 backgroundSize: "150px",}}>

<form style={FormStyle} onSubmit={manejarEnvio} >
<h3>Agregar consulta</h3>
<div>
    <label>Nombre y Apellido</label>
    <input type="text" name= "nombre"  value= { datosForm.nombre } onChange={manejarCambio}   placeholder="Nombre y apellido"/>
</div>
<div>
 <label>email</label>
    <input type="email" name= "email" value= { datosForm.email } onChange={manejarCambio}   placeholder="Email"/>
</div>
<div>
 <label>Consulta</label>
    <textarea type="text" name= "consulta" value= { datosForm.consulta} onChange={manejarCambio}   placeholder="Tu opinion me interesa"/>
</div>

<button type ="submit">Enviar Consulta</button>
</form>
</div>


)
}

