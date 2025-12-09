import { useEffect, useState } from "react"
import axios from "axios"
export default function Products(){
const [prodotti,setProdotti]= useState([]);
const [caricamento, setCaricamento]= useState(false);
const [pagina, setPagina]=useState(1)

useEffect(()=>{
    fetchProdotti()
},[pagina])
function fetchProdotti(){
    setCaricamento(true);
    axios
    .get("https://fakestoreapi.com/products")
    .then((resp)=>{
        setProdotti(resp.data.results);
        setCaricamento(false)
    })
}
return(
<div className="container py-5">
    <h1>tutti i nostri prodotti</h1>
   <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
    {prodotti.map((prodotto)=>(
        <div className="col" key={prodotto.id}>
            <h2>{prodotto.title}</h2>
            <p>{prodotto}</p>
        </div>
    ))}
   </div>
</div>
)
}