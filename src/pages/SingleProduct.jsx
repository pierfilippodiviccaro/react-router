import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Navigate } from "react-router-dom"
import ProductsSection from "../components/ProductsSection"
import BackButton from "../components/BackButton"
export default function SingleProduct() {
    const { id } = useParams()
    const [prodotto, setProdotto] = useState(null)
    const [caricamento, setCaricamento] = useState(false)
    const navigate = useNavigate()
    const [notFound,setNotFound] = useState(false)
    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((resp) => {
                
                setProdotto(resp.data)
                if(resp.data === ""){
                    setNotFound(true)
                }

            })
            .catch((err) => {
                console.log(err);
                alert("il prodotto selezionato non esiste")
                navigate("/products")

            })
            .finally(() => {
                setCaricamento(false)
            })
    }, [id])
    return (
        <section>
            <BackButton />
            {caricamento === true && "caricamento"}
            {prodotto !== null && <ProductsSection prodotto={prodotto} />}
            {notFound && <Navigate to="/notfound" replace />}
        </section>
    )
}