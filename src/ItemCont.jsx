import { ItemListe } from  "../koha/ItemListe";  

export function ItemCont({Mensaje}) { 

const productos = [ 

{ id: "1234", nombre: "el secreto de Jaime Mcfill", precio: 12000, stock: 15},
{ id: "1235", nombre: "Oco, Além", precio: 12000, stock: 15},
{ id: "12354", nombre: "el abismo no perdona, y envia un ángel para asesianrme ", precio: 12000, stock: 15},
{ id: "12345", nombre: "La grieta", precio: 12000, stock: 15},



]; 


return ( 
<div>

<h2>{Mensaje}   </h2>
<div>
<ItemListe productos={productos   }  />

</div>
</div> 

)}