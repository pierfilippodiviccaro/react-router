import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
export default function Products(){
const [prodotti,setProdotti]= useState([]);
const [caricamento, setCaricamento]= useState(false);

useEffect(()=>{
    fetchProdotti()
},[])
function fetchProdotti(){
    setCaricamento(true);
    axios
    .get("https://fakestoreapi.com/products")
    .then((resp)=>{
        setProdotti(resp.data);
        setCaricamento(false)
    })
}
return(
    <div className="container py-5 ">
    <h1 className="text-danger">tutti i nostri prodotti</h1>
   <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 d-flex flex-column">
    {prodotti.map((prodotto)=>(
        <div className="col" key={prodotto.id} >
            
            <h3>{prodotto.title}</h3>
            <Link to={`/products/${prodotto.id}`}>vedi di più</Link>
        </div>
    ))}
    
   </div>
</div>
)
}