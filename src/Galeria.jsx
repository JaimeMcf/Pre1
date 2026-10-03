import styles from  "./boton.module.css";
import di  from    "./img/di.png";



 function Galeria() { 

const listaImagenes = Array.from({ length:5  }, (_, index) => ({  

 id: index + 1, url: di, titulo: index + 1

}))






return ( 

    <div className={styles.contenedor}>

{listaImagenes.map((item)=> { 

<div key={item.id}> className={styles.tarjeta}

    <img src={item.url} alt={item.titulo}  className={styles.imagen} />



<h1>mi vida con ellas</h1>
</div>

})}

</div>
 
);
    }

 export default Galeria; 