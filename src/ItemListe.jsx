import {Item} from "../koha/Item";


export function ItemListe({productos}) { 



return (     


<div style={{display: "flex", gap: "20px"}}>

{productos.map(p => (

<Item key={p.id} {...p} />

)




)}



</div>






)






}