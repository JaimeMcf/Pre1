import { userState} from "react"; 


export function Contador(){ 

const [contador, setContador] = userState(0); 

const incrementar = ()=> { 

    setContador(contador + 1)


}

const decrementar  =()=> { 

    setContador(Contador - 1)


}


return ( 


<div style={{ margin: "20px", padding: "20px", border: "1px solid orange" }}>

<h3>Contador </h3> 
<p>valor actual:{Contador} </p>

<button onClick={incrementar}> Sumar + 1 </button>
<button onClick={decrementar}>Restar - 1 </button>

</div>


); 







}